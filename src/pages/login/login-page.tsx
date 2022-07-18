import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { message } from 'antd';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { formFetchLoginRequest } from '../../redux/actions/form-actions';
import FormParagraph from '../../components/form/paragraph';
import { FormPageWrapper } from '../../components/form/form-page-wrapper/styled-components';
import { Navigate, Link } from 'react-router-dom';
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
import { useAuth } from '../../hooks/use-auth';

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email!').required('Email is required!'),
  password: yup.string().required('Password is required!'),
});

const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isRequest = useAppSelector((state) => state.root.isLoading);
  const isAuth = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(
        formFetchLoginRequest({
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
    if (!isAuth && !isRequest) {
      formik.setFieldError('authorization', 'Invalid email or password.');
    }
  }, [isRequest]);

  return !isAuth ? (
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
          <Link to="/signup">
            <ButtonLink htmlType="button">Signup</ButtonLink>
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
          Log in
        </Button>
        <p>or</p>
        <Helpers content={'center'}>
          <IconVK onClick={notWorking} size="3x" />
          <IconGoogle onClick={notWorking} size="3x" />
        </Helpers>
      </Form>
    </FormPageWrapper>
  ) : (
    <Navigate to={'/'} />
  );
};

export default React.memo(LoginPage);
