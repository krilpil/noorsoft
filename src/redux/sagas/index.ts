import { all, fork } from 'redux-saga/effects';
import userAuthorizationSaga from './user-authorization-sagas';
import userDialogsSaga from './user-dialogs-sagas';

export default function* rootSaga() {
  yield all([fork(userAuthorizationSaga), fork(userDialogsSaga)]);
}
