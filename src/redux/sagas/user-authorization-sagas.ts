import { all, call, put, takeLatest } from 'redux-saga/effects';
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
import { actionType, resetPasswordFormType } from '../../types/sagas-type';

export function* workerLoginForm({ payload }: actionType<UserFormData>) {
  try {
    const responseLogin: UserData = yield call(UserLoginService, {
      email: payload.email,
      password: payload.password,
    });
    yield put(userLoginSuccess(responseLogin));
  } catch (err) {
    const { message } = err as Error;
    yield put(userLoginFailure(message));
  }
}

export function* workerSignupForm({ type, payload }: actionType<UserFormData>) {
  try {
    const responseSignup: string = yield call(UserSignupService, {
      email: payload.email,
      password: payload.password,
    });
    yield put(userSignupSuccess(responseSignup));
    yield workerLoginForm({ type, payload });
  } catch (err) {
    const { message } = err as Error;
    yield put(userSignupFailure(message));
  }
}

export function* workerForgotPasswordForm({ payload }: actionType) {
  try {
    const responseForgotPassword: string = yield call(UserForgotPasswordService, payload);
    yield put(userForgotPasswordSuccess(responseForgotPassword));
  } catch (err) {
    const { message } = err as Error;
    yield put(userForgotPasswordFailure(message));
  }
}

export function* workerResetPasswordForm({ payload }: actionType<resetPasswordFormType>) {
  try {
    const responseResetPassword: string = yield call(UserResetPasswordService, {
      password: payload.password,
      code: payload.code,
    });
    yield put(userResetPasswordSuccess(responseResetPassword));
  } catch (err) {
    const { message } = err as Error;
    yield put(userResetPasswordFailure(message));
  }
}

export function* workerCheckAuth({ payload }: actionType) {
  try {
    const responseCheckAuth: boolean = yield call(CheckAuthService, payload);
    yield put(userCheckAuthSuccess(responseCheckAuth));
  } catch (err) {
    const { message } = err as Error;
    console.log(message);
    yield put(userCheckAuthFailure(false));
  }
}

export function* workerUserLogout() {
  yield call(UserLogoutService);
}

export default function* userAuthorizationSaga() {
  yield all([
    takeLatest(userLogout.type, workerCheckAuth),
    takeLatest(userCheckAuth.type, workerCheckAuth),
    takeLatest(userResetPassword.type, workerResetPasswordForm),
    takeLatest(userForgotPassword.type, workerForgotPasswordForm),
    takeLatest(userSignup.type, workerSignupForm),
    takeLatest(userLogin.type, workerLoginForm),
  ]);
}
