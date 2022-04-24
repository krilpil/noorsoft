import {FORM_FETCH_LOGIN_FAILURE, FORM_FETCH_LOGIN_REQUEST, FORM_FETCH_LOGIN_SUCCESS} from "../constants/form"
import {UserAuthorizationData, UserData} from "../../types/user-type";

export const formFetchLoginRequest = (UserAuthorizationData: UserAuthorizationData) => ({
    type: FORM_FETCH_LOGIN_REQUEST,
    payload: UserAuthorizationData
})

export const formFetchLoginSuccess = (userData: UserData) => ({
    type: FORM_FETCH_LOGIN_SUCCESS,
    payload: userData
})

export const formFetchLoginFailure = (userData: UserData) => ({
    type: FORM_FETCH_LOGIN_FAILURE,
    payload: userData
})