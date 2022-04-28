import React from 'react';
import {Button, Form, Input, Password, Title, ButtonLink, Helpers} from "../../components/form/styled-components";
import FormParagraph from "../../components/form/paragraph";
import {IconGoogle, IconLock, IconUserAstronaut, IconVK} from "../../components/icons/styled-components";
import {FormPageWrapper} from "../../components/form/form-page-wrapper/styled-components";
import {Link} from "react-router-dom";
import {message} from "antd";

const notWorking = () => {
    message.info('Temporarily not working')
}

const RegistrationPage = () => {
    return (
        <FormPageWrapper>
            <Form>
                <Title level={1}>Registration</Title>
                <FormParagraph
                    errors={{}}
                    touchedForm={false}
                >
                    Enter your email and password to register.
                </FormParagraph>
                <Input
                    id={'email'}
                    name={'email'}
                    placeholder="Email"
                    prefix={<IconUserAstronaut/>}
                />
                <Password
                    id={'password'}
                    name={'password'}
                    placeholder="Password"
                    prefix={<IconLock/>}
                />
                <Password
                    id={'password'}
                    name={'password'}
                    placeholder="Confirmation"
                    prefix={<IconLock/>}
                />
                <Helpers content={'between'}>
                    <Link to='/login'><ButtonLink htmlType="button">Login</ButtonLink></Link>
                </Helpers>
                <Button
                    block
                    id={'button'}
                    htmlType={'submit'}
                >
                    Registration
                </Button>
                <p>or</p>
                <Helpers content={'center'}>
                    <IconVK onClick={notWorking} size='3x'/>
                    <IconGoogle onClick={notWorking} size='3x'/>
                </Helpers>
            </Form>
        </FormPageWrapper>
    );
};

export default RegistrationPage;