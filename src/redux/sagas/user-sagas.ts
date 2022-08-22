// LOGIN FORM REQUEST
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  userCheckAuth,
  userCheckAuthFailure,
  userCheckAuthSuccess,
  userForgotPassword,
  userForgotPasswordFailure,
  userForgotPasswordSuccess,
  userLogin,
  userLoginFailure,
  userLoginSuccess,
  userLogout,
  userResetPassword,
  userResetPasswordFailure,
  userResetPasswordSuccess,
  userSignup,
  userSignupFailure,
  userSignupSuccess,
} from '../slices/user-authorization-slice';
import { UserData, UserFormData } from '../../types/user-type';
import { UserLoginService } from '../../api/user-authorization/user-login';
import { UserSignupService } from '../../api/user-authorization/user-signup';
import { UserForgotPasswordService } from '../../api/user-authorization/user-forgot-password';
import { UserResetPasswordService } from '../../api/user-authorization/user-reset-password';
import { CheckAuthService } from '../../api/user-authorization/check-auth';
import { UserLogoutService } from '../../api/user-authorization/user-logout';

// LOGIN FORM
export function* watchLoginForm() {
  yield takeLatest(userLogin.type, workerLoginForm);
}

export function* workerLoginForm(action: { type: string; payload: UserFormData }): unknown {
  const responseLogin: UserData = yield call(UserLoginService, {
    email: action.payload.email,
    password: action.payload.password,
  });

  responseLogin.isAuth
    ? yield put(userLoginSuccess(responseLogin))
    : yield put(userLoginFailure(responseLogin));
}

// SIGN UP FORM
export function* watchSignupForm() {
  yield takeLatest(userSignup.type, workerSignupForm);
}

export function* workerSignupForm(action: { type: string; payload: UserFormData }): unknown {
  const responseSignup: string = yield call(UserSignupService, {
    email: action.payload.email,
    password: action.payload.password,
  });

  if (responseSignup.length === 0) {
    yield put(userSignupSuccess(responseSignup));
    yield workerLoginForm({
      type: userLogin.type,
      payload: action.payload,
    });
  } else {
    yield put(userSignupFailure(responseSignup));
  }
}

// FORGOT PASSWORD
export function* watchForgotPasswordForm() {
  yield takeLatest(userForgotPassword.type, workerForgotPasswordForm);
}

export function* workerForgotPasswordForm(action: { type: string; payload: string }): unknown {
  const responseForgotPassword: string = yield call(UserForgotPasswordService, action.payload);

  responseForgotPassword === null
    ? yield put(userForgotPasswordSuccess(responseForgotPassword))
    : yield put(userForgotPasswordFailure(responseForgotPassword));
}

// RESET PASSWORD FORM REQUEST
export function* watchResetPasswordForm() {
  yield takeLatest(userResetPassword.type, workerResetPasswordForm);
}

export function* workerResetPasswordForm(action: {
  type: string;
  payload: {
    password: string;
    code: string;
  };
}): unknown {
  const responseResetPassword: string = yield call(
    UserResetPasswordService,
    action.payload.password,
    action.payload.code
  );

  responseResetPassword === null
    ? yield put(userResetPasswordSuccess(responseResetPassword))
    : yield put(userResetPasswordFailure(responseResetPassword));
}

// CHECK AUTH
export function* watchCheckAuth() {
  yield takeLatest(userCheckAuth.type, workerCheckAuth);
}

export function* workerCheckAuth(action: { type: string; payload: string }): unknown {
  const responseCheckAuth: boolean = yield call(CheckAuthService, {
    currentToken: action.payload,
  });

  responseCheckAuth
    ? yield put(userCheckAuthSuccess(responseCheckAuth))
    : yield put(userCheckAuthFailure(responseCheckAuth));
}

// USER LOGOUT
export function* watchUserLogout() {
  yield takeLatest(userLogout.type, workerCheckAuth);
}

export function* workerUserLogout(): unknown {
  yield call(UserLogoutService);
}
