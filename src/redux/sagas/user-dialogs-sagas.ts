import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import { actionType, FindMessagesType, GetSideDialogsType } from '../../types/sagas-type';
import {
  UserChangeStatusType,
  UserMessageType,
  UserSideMessageType,
} from '../../types/user-message-type';
import { userSetStatus } from '../../api/user-dialogs/user-set-status';
import {
  fetchFindDialogMessage,
  fetchSideDialogsStatus,
  setSideDialogs,
} from '../slices/side-dialogs-slice';
import {
  fetchCurrentMessages,
  setCurrentMessages,
  setQuestionStatus,
} from '../slices/current-dialogs-slice';
import { getSideDialogs } from '../../api/user-dialogs/user-get-side-dialogs';
import { EventChannel } from 'redux-saga';
import { getCurrentMessages } from '../../api/user-dialogs/user-get-dialogs';
import { getFindMessages } from '../../api/user-dialogs/user-find-messages';

function* workerSetQuestionStatus({ payload }: actionType<UserChangeStatusType>) {
  try {
    yield call(userSetStatus, {
      operatorId: payload.operatorId,
      questionId: payload.questionId,
      status: payload.status,
    });
    yield put(fetchSideDialogsStatus({ status: payload.status, operator: payload.operatorId }));
  } catch (e) {
    console.log(e);
  }
}

function* workerSetSideDialogsStatus({ payload }: actionType<GetSideDialogsType>) {
  const sideMessagesChannel: EventChannel<UserSideMessageType[]> = yield call(
    getSideDialogs,
    payload
  );

  try {
    while (true) {
      const sideDialogs: UserSideMessageType[] = yield take(sideMessagesChannel);
      yield put(setSideDialogs(sideDialogs));
    }
  } catch (e) {
    console.log(e);
  }
}

function* workerSetCurrentMessages({ payload }: actionType) {
  const currentMessagesChannel: EventChannel<UserMessageType[]> = yield call(
    getCurrentMessages,
    payload
  );

  try {
    while (true) {
      const currentMessages: UserMessageType[] = yield take(currentMessagesChannel);
      yield put(setCurrentMessages(currentMessages));
    }
  } catch (e) {
    console.log(e);
  }
}

function* workerFindMessages({ payload }: actionType<FindMessagesType>) {
  try {
    const findMessages: UserSideMessageType[] = yield call(getFindMessages, payload);
    yield put(setSideDialogs(findMessages));
  } catch (e) {
    console.log(e);
  }
}

export default function* userDialogsSaga() {
  yield all([
    takeLatest(fetchSideDialogsStatus.type, workerSetSideDialogsStatus),
    takeLatest(setQuestionStatus.type, workerSetQuestionStatus),
    takeLatest(fetchCurrentMessages.type, workerSetCurrentMessages),
    takeLatest(fetchFindDialogMessage.type, workerFindMessages),
  ]);
}
