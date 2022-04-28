import React from 'react';
import {Button, Form, Input, Password, Title, ButtonLink, Helpers} from "../../components/form/styled-components";
import FormParagraph from "../../components/form/paragraph";
import {Icon} from "../../components/icons/styled-components";
import {faLock, faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import {FormPageWrapper} from "../../components/form/form-page-wrapper/styled-components";
import {Link} from "react-router-dom";

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
                    prefix={<Icon icon={faUserAstronaut}/>}
                />
                <Password
                    id={'password'}
                    name={'password'}
                    placeholder="Password"
                    prefix={<Icon icon={faLock}/>}
                />
                <Password
                    id={'password'}
                    name={'password'}
                    placeholder="Confirmation"
                    prefix={<Icon icon={faLock}/>}
                />
                <Button
                    block
                    id={'button'}
                    htmlType={'submit'}
                >
                    Registration
                </Button>
                <Helpers>
                    <Link to='/login'><ButtonLink htmlType="button">Login</ButtonLink></Link>
                </Helpers>
            </Form>
        </FormPageWrapper>
    );
};

export default RegistrationPage;