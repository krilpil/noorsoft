import React from 'react';
import {Button, Form, Input, Password, Title, ButtonLink, Helpers} from "../../components/form/styled-components";
import FormParagraph from "../../components/form/paragraph";
import {IconGoogle, IconLock, IconUserAstronaut, IconVK} from "../../components/icons/styled-components";
import {FormPageWrapper} from "../../components/form/form-page-wrapper/styled-components";
import {Link} from "react-router-dom";
import {message} from "antd";
import * as yup from "yup";
import {useFormik} from "formik";

const notWorking = () => {
    message.info('Temporarily not working')
}

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required!')
        .email('Enter a valid email!'),
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
})

const RegistrationPage = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmationPassword: ''
        },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    })

    return (
        <FormPageWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <Title level={1}>Registration</Title>
                <FormParagraph
                    errors={formik.errors}
                    touchedForm={
                        formik.touched.email && (formik.touched.password || formik.touched.confirmationPassword)
                    }
                >
                    Enter your email and password to register.
                </FormParagraph>
                <Input
                    status={formik.errors.email && formik.touched.email ? 'error' : ''}
                    id={'email'}
                    name={'email'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email"
                    prefix={<IconUserAstronaut/>}
                />
                <Password
                    status={formik.errors.password && formik.touched.password ? 'error' : ''}
                    id={'password'}
                    name={'password'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                    prefix={<IconLock/>}
                />
                <Password
                    status={formik.errors.confirmationPassword && formik.touched.confirmationPassword ? 'error' : ''}
                    id={'confirmationPassword'}
                    name={'confirmationPassword'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmationPassword}
                    placeholder="Confirmation password"
                    prefix={<IconLock/>}
                />
                <Helpers content={'between'}>
                    <Link to='/login'><ButtonLink htmlType="button">Login</ButtonLink></Link>
                </Helpers>
                <Button
                    block
                    id={'button'}
                    htmlType={'submit'}
                    disabled={!formik.isValid || !formik.dirty}
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