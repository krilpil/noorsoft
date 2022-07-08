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
import FormParagraph from '../../components/form/paragraph';
import { IconUserAstronaut } from '../../components/icons/styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { formFetchForgotRequest } from '../../redux/actions/form-actions';
import useSelector from '../../hooks/use-selector';
import { message } from 'antd';

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email!').required('Email is required!'),
});

const ForgotPasswordPage = () => {
  const [timeReturnSend, setTimeReturnSend] = useState(60);
  const [isCountingTime, setIsCountingTime] = useState(false);

  const dispatch = useDispatch();
  const isRequest = useSelector((state) => state.form.request);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(
        formFetchForgotRequest({
          email: values.email,
        })
      );
      message.info('The recovery code has been sent to the mail');
      setIsCountingTime(true);
    },
  });

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
          <Link to="/login">
            <ButtonLink htmlType="button">Login</ButtonLink>
          </Link>
          <Link to="/signup">
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

export default ForgotPasswordPage;
