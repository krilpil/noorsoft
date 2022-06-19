import { takeLatest, all, call, put } from 'redux-saga/effects';
import { FORM_FETCH_LOGIN_REQUEST, FORM_FETCH_SIGNUP_REQUEST } from '../constants/form-constants';

import { userLogin } from '../../api/user-login';
import { userSignup } from '../../api/user-signup';

import { UserFormData, UserData } from '../../types/user-type';
import {
  formFetchLoginSuccess,
  formFetchLoginFailure,
  formFetchSignupSuccess,
  formFetchSignupFailure,
} from '../actions/form-actions';

export function* workerLoginFormRequest(action: { type: string; payload: UserFormData }): unknown {
  const responseLogin: UserData = yield call(userLogin, {
    email: action.payload.email,
    password: action.payload.password,
  });

  responseLogin.authorization
    ? yield put(formFetchLoginSuccess(responseLogin))
    : yield put(formFetchLoginFailure(responseLogin));
}

export function* workerSignupFormRequest(action: { type: string; payload: UserFormData }): unknown {
  const responseSignup: UserData = yield call(userSignup, {
    email: action.payload.email,
    password: action.payload.password,
  });

  responseSignup.authorization
    ? yield put(formFetchSignupSuccess(responseSignup))
    : yield put(formFetchSignupFailure(responseSignup));
}

export function* watchLoginFormRequest() {
  yield takeLatest(FORM_FETCH_LOGIN_REQUEST, workerLoginFormRequest);
}

export function* watchSignupFormRequest() {
  yield takeLatest(FORM_FETCH_SIGNUP_REQUEST, workerSignupFormRequest);
}

/**
 *
 */
export default function* rootSaga() {
  yield all([watchLoginFormRequest(), watchSignupFormRequest()]);
}
