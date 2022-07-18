import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
  FORM_FETCH_LOGIN_REQUEST,
  FORM_FETCH_FORGOT_REQUEST,
  FORM_FETCH_SIGNUP_REQUEST,
  FORM_FETCH_RESET_REQUEST,
} from '../constants/form-constants';

import { userLogin } from '../../api/user-login';
import { userSignup } from '../../api/user-signup';
import { UserForgotPassword } from '../../api/forgot-password';

import {
  UserFormData,
  UserData,
  UserForgotPasswordData,
  UserResetPasswordData,
} from '../../types/user-type';
import {
  formFetchLoginSuccess,
  formFetchLoginFailure,
  formFetchSignupSuccess,
  formFetchSignupFailure,
  formFetchForgotSuccess,
  formFetchForgotFailure,
  formFetchResetSuccess,
  formFetchResetFailure,
} from '../actions/form-actions';
import { UserResetPassword } from '../../api/reset-password';

export function* workerLoginFormRequest(action: { type: string; payload: UserFormData }): unknown {
  const responseLogin: UserData = yield call(userLogin, {
    email: action.payload.email,
    password: action.payload.password,
  });

  responseLogin.isAuth
    ? yield put(formFetchLoginSuccess(responseLogin))
    : yield put(formFetchLoginFailure(responseLogin));
}

export function* workerSignupFormRequest(action: { type: string; payload: UserFormData }): unknown {
  const responseSignup: UserData = yield call(userSignup, {
    email: action.payload.email,
    password: action.payload.password,
  });

  responseSignup.isAuth
    ? yield put(formFetchSignupSuccess(responseSignup))
    : yield put(formFetchSignupFailure(responseSignup));
}

export function* workerForgotPasswordFormRequest(action: {
  type: string;
  payload: UserForgotPasswordData;
}): unknown {
  const responseForgotPassword: UserData = yield call(UserForgotPassword, {
    email: action.payload.email,
  });

  console.log(responseForgotPassword);

  responseForgotPassword === null
    ? yield put(formFetchForgotSuccess(responseForgotPassword))
    : yield put(formFetchForgotFailure(responseForgotPassword));
}

export function* workerResetPasswordFormRequest(action: {
  type: string;
  payload: UserResetPasswordData;
}): unknown {
  const responseResetPassword: UserData = yield call(UserResetPassword, {
    password: action.payload.password,
    code: action.payload.code,
  });

  console.log(responseResetPassword);

  responseResetPassword === null
    ? yield put(formFetchResetSuccess(responseResetPassword))
    : yield put(formFetchResetFailure(responseResetPassword));
}

export function* watchLoginFormRequest() {
  yield takeLatest(FORM_FETCH_LOGIN_REQUEST, workerLoginFormRequest);
}

export function* watchSignupFormRequest() {
  yield takeLatest(FORM_FETCH_SIGNUP_REQUEST, workerSignupFormRequest);
}

export function* watchForgotPasswordFormRequest() {
  yield takeLatest(FORM_FETCH_FORGOT_REQUEST, workerForgotPasswordFormRequest);
}

export function* watchResetPasswordFormRequest() {
  yield takeLatest(FORM_FETCH_RESET_REQUEST, workerResetPasswordFormRequest);
}

export default function* rootSaga() {
  yield all([
    watchLoginFormRequest(),
    watchSignupFormRequest(),
    watchForgotPasswordFormRequest(),
    watchResetPasswordFormRequest(),
  ]);
}
