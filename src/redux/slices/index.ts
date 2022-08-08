import { persistCombineReducers } from 'redux-persist';
import userSlices from './user-slices';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage: storage,
};

export const rootReducer = persistCombineReducers(persistConfig, {
  root: userSlices,
});
