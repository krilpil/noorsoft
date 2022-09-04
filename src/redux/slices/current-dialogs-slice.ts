import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusDialogType, UserDialogType, UserMessageType } from '../../types/user-message-type';

type state = UserDialogType & {
  messages: UserMessageType[];
};

const initialState: state = {
  userId: '',
  name: '',
  surname: '',
  avatar: '',
  status: '',
  messages: [],
};

export const currentDialogSlice = createSlice({
  name: 'currentDialog',
  initialState,
  reducers: {
    setCurrentDialogUser: (state, action: PayloadAction<UserDialogType>) => {
      state.userId = action.payload.userId;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.avatar = action.payload.avatar;
      state.status = action.payload.status;
    },
    fetchCurrentMessages: (state, action: PayloadAction<string>) => state,
    setCurrentMessages: (state, action: PayloadAction<UserMessageType[]>) => {
      state.messages = action.payload;
    },
    setQuestionStatus: (
      state,
      action: PayloadAction<{ status: StatusDialogType; userId: string }>
    ) => state,
  },
});

export const { setCurrentDialogUser, setQuestionStatus, setCurrentMessages, fetchCurrentMessages } =
  currentDialogSlice.actions;
export default currentDialogSlice.reducer;
