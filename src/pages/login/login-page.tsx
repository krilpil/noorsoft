import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import FormParagraph from '../../components/form/paragraph/pharagraph';
import { FormPageWrapper } from '../../components/form/form-page-wrapper/styled-components';
import { Link } from 'react-router-dom';
import {
  Form,
  Title,
  Input,
  Password,
  Button,
  ButtonLink,
  Helpers,
} from '../../components/form/styled-components';
import {
  IconLock,
  IconUserAstronaut,
  IconVK,
  IconGoogle,
} from '../../components/icons/styled-components';
import { userLogin } from '../../redux/slices/user-authorization-slice';
import { RouterLinks } from '../../router/router';

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email!').required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.main.isLoading);
  const isAuth = useAppSelector((state) => state.userAuth.isAuth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(
        userLogin({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  const notWorking = () => {
    message.info('Temporarily not working');
  };

  useEffect(() => {
    if (!isAuth && !isLoading) {
      formik.setFieldError('authorization', 'Invalid email or password.');
    }
  }, [isLoading, isAuth]);

  return (
    <FormPageWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Title level={1}>Login</Title>
        <FormParagraph
          errors={formik.errors}
          touchedForm={formik.touched.password && formik.touched.email}
        >
          Enter your email and password to log in.
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
        <Helpers content={'between'}>
          <Link to={RouterLinks.SIGNUP}>
            <ButtonLink htmlType="button">Signup</ButtonLink>
          </Link>
          <Link to={RouterLinks.FORGOT_PASSWORD}>
            <ButtonLink htmlType="button">Forgot your password?</ButtonLink>
          </Link>
        </Helpers>
        <Button
          block
          loading={isLoading}
          id={'button'}
          htmlType={'submit'}
          disabled={!formik.isValid || !formik.dirty || isLoading}
        >
          Log in
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

export default React.memo(LoginPage);
