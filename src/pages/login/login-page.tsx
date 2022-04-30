import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {message} from "antd";
import useSelector from "../../hooks/use-selector";
import {formFetchLoginRequest} from "../../redux/actions/form-actions";
import FormParagraph from "../../components/form/paragraph";
import {FormPageWrapper} from "../../components/form/form-page-wrapper/styled-components";
import {Form, Title, Input, Password, Button, ButtonLink, Helpers} from '../../components/form/styled-components'
import {IconLock, IconUserAstronaut, IconVK, IconGoogle} from "../../components/icons/styled-components";
import {Link} from "react-router-dom";


const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Enter a valid email!')
        .required('Email is required!'),
    password: yup
        .string()
        .required('Password is required!')
})

const LoginPage = (): JSX.Element => {
    const dispatch = useDispatch()
    const isRequest = useSelector(state => state.form.request)
    const authorization = useSelector(state => state.form.user.authorization)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            dispatch(
                formFetchLoginRequest({
                    email: values.email,
                    password: values.password
                })
            )
        },
    })

    const notWorking = () => {
        message.info('Temporarily not working')
    }

    useEffect(() => {
        if (!authorization && !isRequest) {
            formik.setFieldError('authorization', 'Invalid email or password.')
            console.log(formik.errors)
        }

        if (authorization) {
            message.success('Successful authorization!')
        }
    }, [isRequest])

    return (
        <FormPageWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <Title level={1}>Login</Title>
                <FormParagraph
                    errors={formik.errors}
                    touchedForm={formik.touched.password && formik.touched.email}
                >
                    Enter your email and password to log in.
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
                <Helpers content={'between'}>
                    <Link to='/registration'><ButtonLink htmlType="button">Signup</ButtonLink></Link>
                    <ButtonLink onClick={notWorking} htmlType="button">Forgot your password?</ButtonLink>
                </Helpers>
                <Button
                    block
                    loading={isRequest}
                    id={'button'}
                    htmlType={'submit'}
                    disabled={(!formik.isValid || !formik.dirty) || isRequest}
                >
                    Log in
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

export default React.memo(LoginPage);