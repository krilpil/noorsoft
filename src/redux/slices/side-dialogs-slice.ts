import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusDialogType, UserSideMessageType } from '../../types/user-message-type';
import { FindMessagesType, GetSideDialogsType } from '../../types/sagas-type';

type state = {
  status: StatusDialogType;
  findRequest: string;
  dialogs: UserSideMessageType[];
};

const initialState: state = {
  status: 'pending',
  findRequest: '',
  dialogs: [],
};

export const sideDialogsSlice = createSlice({
  name: 'sideDialogs',
  initialState,
  reducers: {
    fetchSideDialogsStatus: (state, { payload }: PayloadAction<GetSideDialogsType>) => {
      state.status = payload.status;
    },
    fetchFindDialogMessage: (state, { payload }: PayloadAction<FindMessagesType>) => {
      state.findRequest = payload.request;
    },
    setSideDialogs: (state, { payload }: PayloadAction<UserSideMessageType[]>) => {
      state.dialogs = payload;
    },
  },
});

export const { fetchSideDialogsStatus, fetchFindDialogMessage, setSideDialogs } =
  sideDialogsSlice.actions;
export default sideDialogsSlice.reducer;
