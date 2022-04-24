import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import useSelector from "../../hooks/use-selector";
import {useFormik} from 'formik';
import * as yup from 'yup';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Form, Title, Input, Password, Button} from '../../components/form/styled-components'
import {LoginPageWrapper} from "./styled-components";
import FormParagraph from "../../components/form/paragraph";
import {formFetchLoginRequest} from "../../redux/actions/form-actions";
import {message} from "antd";

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
    const dispatch = useDispatch()
    const isWaitButton = useSelector(state => state.form.request)
    const authorization = useSelector(state => state.form.user.authorization)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateOnBlur: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(
                formFetchLoginRequest({
                    email: values.email,
                    password: values.password
                })
            )
        },
    })

    useEffect(() => {
        if (authorization === false) {
            formik.setFieldError('authorization', 'Invalid email or password.')
        }

        if (authorization === true) {
            message.success('Successful authorization!')
        }

    }, [authorization])

    return (
        <LoginPageWrapper>
            <Form onSubmit={formik.handleSubmit}>
                <Title level={1}>Noorsoft</Title>
                <FormParagraph
                    errors={formik.errors}
                    touchedForm={formik.touched.password && formik.touched.email}
                />
                <Input
                    status={formik.errors.email && formik.touched.email? 'error' : ''}
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
                    loading={isWaitButton}
                    id={'button'}
                    htmlType={'submit'}
                    disabled={(!formik.isValid || !formik.dirty) || isWaitButton}
                >
                    Login
                </Button>
            </Form>
        </LoginPageWrapper>
    );
};

export default React.memo(LoginPage);