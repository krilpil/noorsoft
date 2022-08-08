import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { rootReducer, persistConfig } from './slices';
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const setupStore = () => {
  return configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: [sagaMiddleware],
    devTools: true,
  });
};

export const store = setupStore();

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
