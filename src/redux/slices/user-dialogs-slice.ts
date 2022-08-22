import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDialogType } from '../../types/user-message-type';

type state = {
  dialogs: UserDialogType[];
  openDialogUid: string;
};

const initialState: state = {
  dialogs: [],
  openDialogUid: '',
};

export const userDialogSlice = createSlice({
  name: 'userDialogs',
  initialState,
  reducers: {
    setDialogs: (state, action: PayloadAction<UserDialogType[]>) => {
      state.dialogs = action.payload;
    },
    setOpenDialogs: (state, action: PayloadAction<string>) => {
      state.openDialogUid = action.payload;
    },
  },
});

export const { setDialogs, setOpenDialogs } = userDialogSlice.actions;
export default userDialogSlice.reducer;
