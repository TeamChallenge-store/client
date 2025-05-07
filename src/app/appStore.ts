import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { baseApi } from '~shared/api/baseApi';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [baseApi.reducerPath, 'likes'], 
};

const makeStore = () => {
  const store = configureStore({
    reducer: persistReducer(
      persistConfig,
      rootReducer,
    ) as unknown as typeof rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });

  return store;
};

const appStore = makeStore();
const persistedStore = persistStore(appStore);

type RootState = ReturnType<typeof appStore.getState>;
type AppDispatch = typeof appStore.dispatch;

export { appStore, persistedStore };
export type { RootState, AppDispatch };