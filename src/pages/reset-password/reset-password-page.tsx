import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { FormPageWrapper } from '../../components/form/form-page-wrapper/styled-components';
import * as yup from 'yup';
import { Button, Form, Input, Title } from '../../components/form/styled-components';
import FormParagraph from '../../components/form/paragraph';
import { IconUserAstronaut } from '../../components/icons/styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formFetchResetRequest } from '../../redux/actions/form-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { message } from 'antd';

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
});

const ResetPasswordPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isRequest = useAppSelector((state) => state.form.request);
  const error = useAppSelector((state) => state.form.error);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmationPassword: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(
        formFetchResetRequest({
          password: values.confirmationPassword,
          code: searchParams.get('oobCode'),
        })
      );
    },
  });

  useEffect(() => {
    if (!error && !isRequest && formik.dirty) {
      message.success('Successful password change');
      navigate('/login');
    }
  }, [isRequest]);

  return (
    <FormPageWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Title level={1}>New password</Title>
        <FormParagraph errors={formik.errors} touchedForm={formik.touched.password}>
          Enter a new password for your account.
        </FormParagraph>
        <Input
          status={''}
          id={'password'}
          name={'password'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password"
          prefix={<IconUserAstronaut />}
        />
        <Input
          status={''}
          id={'confirmationPassword'}
          name={'confirmationPassword'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmationPassword}
          placeholder="Confirmation password"
          prefix={<IconUserAstronaut />}
        />
        <Button
          block
          id={'button'}
          htmlType={'submit'}
          disabled={!formik.isValid || !formik.dirty || isRequest}
        >
          Update password
        </Button>
      </Form>
    </FormPageWrapper>
  );
};

export default ResetPasswordPage;
