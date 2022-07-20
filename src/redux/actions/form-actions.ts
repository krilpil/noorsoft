import {
  FORM_FETCH_LOGIN_FAILURE,
  FORM_FETCH_LOGIN_REQUEST,
  FORM_FETCH_LOGIN_SUCCESS,
  FORM_FETCH_FORGOT_FAILURE,
  FORM_FETCH_FORGOT_REQUEST,
  FORM_FETCH_FORGOT_SUCCESS,
  FORM_FETCH_SIGNUP_FAILURE,
  FORM_FETCH_SIGNUP_REQUEST,
  FORM_FETCH_SIGNUP_SUCCESS,
  FORM_FETCH_RESET_REQUEST,
  FORM_FETCH_RESET_SUCCESS,
  FORM_FETCH_RESET_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE,
} from '../constants/form-constants';
import { UserFormData, UserData, UserForgotPasswordData } from '../../types/user-type';

// User login
export const formFetchLoginRequest = (UserLoginData: UserFormData) => ({
  type: FORM_FETCH_LOGIN_REQUEST,
  payload: UserLoginData,
});

export const formFetchLoginSuccess = (userData: UserData) => ({
  type: FORM_FETCH_LOGIN_SUCCESS,
  payload: userData,
});

export const formFetchLoginFailure = (userData: UserData) => ({
  type: FORM_FETCH_LOGIN_FAILURE,
  payload: userData,
});

// User signup
export const formFetchSignupRequest = (UserSignupData: UserFormData) => ({
  type: FORM_FETCH_SIGNUP_REQUEST,
  payload: UserSignupData,
});

export const formFetchSignupSuccess = (userData: UserData) => ({
  type: FORM_FETCH_SIGNUP_SUCCESS,
  payload: userData,
});

export const formFetchSignupFailure = (userData: UserData) => ({
  type: FORM_FETCH_SIGNUP_FAILURE,
  payload: userData,
});

// User forgot password
export const formFetchForgotRequest = (UserForgotPasswordData: UserForgotPasswordData) => ({
  type: FORM_FETCH_FORGOT_REQUEST,
  payload: UserForgotPasswordData,
});

export const formFetchForgotSuccess = (userData: UserData) => ({
  type: FORM_FETCH_FORGOT_SUCCESS,
  payload: userData,
});

export const formFetchForgotFailure = (userData: UserData) => ({
  type: FORM_FETCH_FORGOT_FAILURE,
  payload: userData,
});

// User reset password
export const formFetchResetRequest = (UserResetPasswordData: {
  password: string;
  code: string | null;
}) => ({
  type: FORM_FETCH_RESET_REQUEST,
  payload: UserResetPasswordData,
});

export const formFetchResetSuccess = (userData: UserData) => ({
  type: FORM_FETCH_RESET_SUCCESS,
  payload: userData,
});

export const formFetchResetFailure = (userData: UserData) => ({
  type: FORM_FETCH_RESET_FAILURE,
  payload: userData,
});

// Check auth
export const checkAuthRequest = (currentToken: string) => ({
  type: CHECK_AUTH_REQUEST,
  payload: currentToken
});

export const checkAuthSuccess = (isAuth: boolean) => ({
  type: CHECK_AUTH_SUCCESS,
  payload: isAuth,
});

export const checkAuthFailure = (isAuth: boolean) => ({
  type: CHECK_AUTH_FAILURE,
  payload: isAuth,
});
