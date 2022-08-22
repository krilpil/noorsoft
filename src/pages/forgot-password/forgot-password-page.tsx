import React, { useEffect, useState } from 'react';
import { FormPageWrapper } from '../../components/form/form-page-wrapper/styled-components';
import {
  Form,
  Title,
  Input,
  Button,
  ButtonLink,
  Helpers,
} from '../../components/form/styled-components';
import FormParagraph from '../../components/form/paragraph/pharagraph';
import { IconUserAstronaut } from '../../components/icons/styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { message } from 'antd';
import { userForgotPassword } from '../../redux/slices/user-authorization-slice';
import { RouterLinks } from '../../router/router';

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email!').required('Email is required!'),
});

const ForgotPasswordPage = () => {
  const [timeReturnSend, setTimeReturnSend] = useState(60);
  const [isCountingTime, setIsCountingTime] = useState(false);

  const dispatch = useAppDispatch();
  const isRequest = useAppSelector((state) => state.main.isLoading);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(userForgotPassword(values.email));
      message.info('The recovery code has been sent to the mail');
      setIsCountingTime(true);
    },
  });

  // TODO: Move to a separate helper
  useEffect(() => {
    const intervalReturnSend = setInterval(() => {
      isCountingTime &&
        setTimeReturnSend((timeReturnSend) => (timeReturnSend >= 1 ? timeReturnSend - 1 : 0));
    }, 1000);
    if (timeReturnSend === 0) {
      setIsCountingTime(false);
    }
    return () => {
      clearInterval(intervalReturnSend);
    };
  }, [isCountingTime, timeReturnSend]);

  return (
    <FormPageWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <Title level={1}>Password reset</Title>
        <FormParagraph errors={formik.errors} touchedForm={formik.touched.email}>
          Enter the recovery email.
        </FormParagraph>
        <Input
          status={''}
          id={'email'}
          name={'email'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email"
          prefix={<IconUserAstronaut />}
        />
        <Helpers content={'between'}>
          <Link to={RouterLinks.LOGIN}>
            <ButtonLink htmlType="button">Login</ButtonLink>
          </Link>
          <Link to={RouterLinks.SIGNUP}>
            <ButtonLink htmlType="button">Signup</ButtonLink>
          </Link>
        </Helpers>
        <Button
          loading={isRequest}
          block
          id={'button'}
          htmlType={'submit'}
          disabled={!formik.isValid || !formik.dirty || isRequest || isCountingTime}
        >
          {isCountingTime ? `${timeReturnSend} seconds` : 'Send a link'}
        </Button>
      </Form>
    </FormPageWrapper>
  );
};

export default React.memo(ForgotPasswordPage);
