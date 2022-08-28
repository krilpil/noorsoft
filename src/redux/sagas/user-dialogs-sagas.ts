import { all, call, put, takeLatest } from 'redux-saga/effects';
import { changeDialogsStatus, setSideMessagesStatus } from '../slices/user-dialogs-slice';
import { actionType } from '../../types/sagas-type';
import { UserChangeStatusType } from '../../types/user-message-type';
import { userChangeStatus } from '../../api/user-dialogs/user-change-status';

function* workerChangeDialogsStatus({ payload }: actionType<UserChangeStatusType>) {
  try {
    yield call(userChangeStatus, {
      currentUid: payload.currentUid,
      questionerUid: payload.questionerUid,
      status: payload.status,
    });
    yield put(setSideMessagesStatus(payload.status));
  } catch (e) {
    console.log(e);
  }
}

export default function* userDialogsSaga() {
  yield all([takeLatest(changeDialogsStatus.type, workerChangeDialogsStatus)]);
}
