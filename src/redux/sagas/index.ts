import { all } from 'redux-saga/effects';
import {
  watchLoginForm,
  watchSignupForm,
  watchForgotPasswordForm,
  watchResetPasswordForm,
  watchCheckAuth,
  watchUserLogout,
} from './user-sagas';

export default function* rootSaga() {
  yield all([
    watchLoginForm(),
    watchSignupForm(),
    watchForgotPasswordForm(),
    watchResetPasswordForm(),
    watchCheckAuth(),
    watchUserLogout(),
  ]);
}
