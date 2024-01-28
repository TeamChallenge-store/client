import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '~shared/api/baseApi';

const makeStore = () => {
  const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

  return store;
};

const appStore = makeStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof appStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof appStore.dispatch;

export { appStore };
export type { RootState, AppDispatch };
