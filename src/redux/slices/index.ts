import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mainSlice from './main-slice';
import userAuthSlice from './user-authorization-slice';
import userDialogsSlice from './user-dialogs-slice';

export const persistConfig = {
  key: 'root',
  storage: storage,
};

export const rootReducer = persistCombineReducers(persistConfig, {
  main: mainSlice,
  userAuth: userAuthSlice,
  userDialogs: userDialogsSlice,
});
