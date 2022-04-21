import React from 'react';
import {useFormik} from 'formik';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {LoginPageWrapper, Form, Title, Paragraph, Input, Password, Button} from './components'

const LoginPage = (): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <LoginPageWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <Title level={1}>Noorsoft</Title>
                <Paragraph>Enter your email and password.</Paragraph>
                <Input
                    id={'email'}
                    name={'email'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Email"
                    prefix={<UserOutlined/>}
                />
                <Password
                    id={'password'}
                    name={'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password"
                    prefix={<LockOutlined/>}
                />
                <Button htmlType={'submit'} block>Login</Button>
            </Form>
        </LoginPageWrapper>
    );
};

export default React.memo(LoginPage);