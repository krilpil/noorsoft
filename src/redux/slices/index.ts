import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mainSlice from './main-slice';
import userAuthSlice from './user-authorization-slice';
import currentDialogSlice from './current-dialogs-slice';
import sideDialogsSlice from './side-dialogs-slice';

export const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['userAuth'],
};

export const rootReducer = persistCombineReducers(persistConfig, {
  main: mainSlice,
  userAuth: userAuthSlice,
  currentDialog: currentDialogSlice,
  sideDialogs: sideDialogsSlice,
});
