import React, { useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Password,
  Title,
  ButtonLink,
  Helpers,
} from '../../components/form/styled-components';
import FormParagraph from '../../components/form/paragraph';
import {
  IconGoogle,
  IconLock,
  IconUserAstronaut,
  IconVK,
} from '../../components/icons/styled-components';
import { FormPageWrapper } from '../../components/form/form-page-wrapper/styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { formFetchSignupRequest } from '../../redux/actions/form-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

const notWorking = () => {
  message.info('Temporarily not working');
};

const validationSchema = yup.object().shape({
  confirmationPassword: yup
    .string()
    .oneOf([yup.ref('password')], `Passwords don't match!`)
    .required('Confirm your password!'),
  password: yup
    .string()
    .min(8, 'The password length is less than 8 characters!')
    .matches(/[A-Z]/, 'The password must contain uppercase letters!')
    .matches(/[a-z]/, 'The password must contain lowercase letters!')
    .matches(/[0-9]/, 'The password must contain numbers!')
    .required('Password is required!'),
  email: yup
    .string()
    .required('Email is required!')
    .email('Enter a valid email!')
    .matches(/\.[-0-9A-Za-z]{2,}/, 'Enter a valid email!'),
});

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isRequest = useAppSelector((state) => state.root.isLoading);
  const authorization = useAppSelector((state) => state.root.user.isAuth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmationPassword: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        formFetchSignupRequest({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  useEffect(() => {
    if (!authorization && !isRequest) {
      formik.setFieldError('signup"', 'This email address is already registered!');
      console.log(formik.errors);
    }

    if (authorization) {
      navigate('/home');
    }
  }, [isRequest]);

  return (
    <FormPageWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Title level={1}>Signup</Title>
        <FormParagraph
          errors={formik.errors}
          touchedForm={
            formik.touched.email && (formik.touched.password || formik.touched.confirmationPassword)
          }
        >
          Enter your email and password to register.
        </FormParagraph>
        <Input
          status={formik.errors.email && formik.touched.email ? 'error' : ''}
          id={'email'}
          name={'email'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          prefix={<IconUserAstronaut />}
        />
        <Password
          status={formik.errors.password && formik.touched.password ? 'error' : ''}
          id={'password'}
          name={'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
          prefix={<IconLock />}
        />
        <Password
          status={
            formik.errors.confirmationPassword && formik.touched.confirmationPassword ? 'error' : ''
          }
          id={'confirmationPassword'}
          name={'confirmationPassword'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmationPassword}
          placeholder="Confirmation password"
          prefix={<IconLock />}
        />
        <Helpers content={'between'}>
          <Link to="/login">
            <ButtonLink htmlType="button">Login</ButtonLink>
          </Link>
          <Link to="/forgot-password">
            <ButtonLink htmlType="button">Forgot your password?</ButtonLink>
          </Link>
        </Helpers>
        <Button
          block
          loading={isRequest}
          id={'button'}
          htmlType={'submit'}
          disabled={!formik.isValid || !formik.dirty || isRequest}
        >
          Sign up
        </Button>
        <p>or</p>
        <Helpers content={'center'}>
          <IconVK onClick={notWorking} size="3x" />
          <IconGoogle onClick={notWorking} size="3x" />
        </Helpers>
      </Form>
    </FormPageWrapper>
  );
};

export default SignupPage;
