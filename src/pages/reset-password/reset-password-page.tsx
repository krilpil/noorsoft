import React from 'react';

import { FormPageWrapper } from '../../components/form/form-page-wrapper/styled-components';
import {
  Form,
  Title,
  Input,
  Button,
  ButtonLink,
  Helpers,
} from '../../components/form/styled-components';
import FormParagraph from '../../components/form/paragraph';
import { IconUserAstronaut } from '../../components/icons/styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email!').required('Email is required!'),
});

const ResetPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      return values;
    },
  });

  return (
    <FormPageWrapper>
      <Form>
        <Title level={1}>Password reset</Title>
        <FormParagraph errors={formik.errors} touchedForm={formik.touched.email}>
          Enter the recovery email.
        </FormParagraph>
        <Input
          status={''}
          id={'email'}
          name={'email'}
          placeholder="Email"
          prefix={<IconUserAstronaut />}
        />
        <Helpers content={'between'}>
          <Link to="/login">
            <ButtonLink htmlType="button">Login</ButtonLink>
          </Link>
          <Link to="/signup">
            <ButtonLink htmlType="button">Signup</ButtonLink>
          </Link>
        </Helpers>
        <Button block id={'button'} htmlType={'submit'} disabled={false}>
          Send a link
        </Button>
      </Form>
    </FormPageWrapper>
  );
};

export default ResetPasswordPage;
