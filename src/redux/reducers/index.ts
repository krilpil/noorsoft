import { persistCombineReducers } from 'redux-persist';
import formReducer from './form-reducers';
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'root',
  storage: storage,
};

export const rootReducer = persistCombineReducers(persistConfig, {
  form: formReducer,
});
