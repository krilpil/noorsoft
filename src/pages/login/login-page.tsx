import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Form, Title, Input, Password, Button} from '../../components/form/styled-components'
import {LoginPageWrapper} from "./styled-components";
import FormParagraph from "../../components/form/paragraph";

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email!')
        .required('Email is required!'),
    password: yup
        .string()
        .min(8, 'The password length is less than 8 characters!')
        .required('Password is required!'),
})

const LoginPage = (): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <LoginPageWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <Title level={1}>Noorsoft</Title>
                <FormParagraph
                    touchedEmail={formik.touched.email}
                    errorsEmail={formik.errors.email}
                    touchedPassword={formik.touched.password}
                    errorsPassword={formik.errors.password}
                />
                <Input
                    status={formik.errors.email && formik.touched.email ? 'error' : ''}
                    id={'email'}
                    name={'email'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email"
                    prefix={<UserOutlined/>}
                />
                <Password
                    status={formik.errors.password && formik.touched.password ? 'error' : ''}
                    id={'password'}
                    name={'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                    prefix={<LockOutlined/>}
                />
                <Button
                    block
                    id={'button'}
                    htmlType={'submit'}
                    disabled={!formik.isValid || !formik.dirty}
                >
                    Login
                </Button>
            </Form>
        </LoginPageWrapper>
    );
};

export default React.memo(LoginPage);