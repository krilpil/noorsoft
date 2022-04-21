import React from 'react';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {LoginPageWrapper, Form, Title, Paragraph, Input, Password, Button} from './components'

const LoginPage = (): JSX.Element => {
    return (
        <LoginPageWrapper>
            <Form>
                <Title level={1}>Noorsoft</Title>
                <Paragraph>Enter your email and password.</Paragraph>
                <Input placeholder="Email" prefix={<UserOutlined/>}/>
                <Password placeholder="Password" prefix={<LockOutlined/>}/>
                <Button block>Login</Button>
            </Form>
        </LoginPageWrapper>
    );
};

export default React.memo(LoginPage);