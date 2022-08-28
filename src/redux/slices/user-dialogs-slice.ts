import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  UserChangeStatusType,
  StatusDialogType,
  UserDialogType,
} from '../../types/user-message-type';

type state = {
  dialogs: UserDialogType[];
  currentDialog: UserDialogType;
  findMessages: UserDialogType[] | null;
};

const initialState: state = {
  dialogs: [],
  currentDialog: {
    name: '',
    surname: '',
    avatar: '',
    uid: '',
    status: 'active',
    messages: [],
  },
  findMessages: null,
};

export const userDialogSlice = createSlice({
  name: 'userDialogs',
  initialState,
  reducers: {
    setDialogs: (state, action: PayloadAction<UserDialogType[]>) => {
      state.dialogs = action.payload;
    },
    setSideMessagesStatus: (state, action: PayloadAction<StatusDialogType>) => {
      state.currentDialog.status = action.payload;
    },
    setCurrentDialog: (state, action: PayloadAction<UserDialogType>) => {
      state.currentDialog = action.payload;
    },
    setFindMessage: (state, action: PayloadAction<UserDialogType[] | null>) => {
      state.findMessages = action.payload;
    },
    changeDialogsStatus: (state, action: PayloadAction<UserChangeStatusType>) => state,
  },
});

export const {
  setDialogs,
  setCurrentDialog,
  setSideMessagesStatus,
  setFindMessage,
  changeDialogsStatus,
} = userDialogSlice.actions;
export default userDialogSlice.reducer;
