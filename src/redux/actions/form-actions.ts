import {
    FORM_FETCH_LOGIN_FAILURE,
    FORM_FETCH_LOGIN_REQUEST,
    FORM_FETCH_LOGIN_SUCCESS,
    FORM_FETCH_SIGNUP_FAILURE,
    FORM_FETCH_SIGNUP_REQUEST,
    FORM_FETCH_SIGNUP_SUCCESS
} from "../constants/form-constants"
import {UserFormData, UserData} from "../../types/user-type";

export const formFetchLoginRequest = (UserLoginData: UserFormData) => ({
    type: FORM_FETCH_LOGIN_REQUEST,
    payload: UserLoginData
})

export const formFetchLoginSuccess = (userData: UserData) => ({
    type: FORM_FETCH_LOGIN_SUCCESS,
    payload: userData
})

export const formFetchLoginFailure = (userData: UserData) => ({
    type: FORM_FETCH_LOGIN_FAILURE,
    payload: userData
})

export const formFetchSignupRequest = (UserSignupData: UserFormData) => ({
    type: FORM_FETCH_SIGNUP_REQUEST,
    payload: UserSignupData
})

export const formFetchSignupSuccess = (userData: UserData) => ({
    type: FORM_FETCH_SIGNUP_SUCCESS,
    payload: userData
})

export const formFetchSignupFailure = (userData: UserData) => ({
    type: FORM_FETCH_SIGNUP_FAILURE,
    payload: userData
})