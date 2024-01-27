import { configureStore } from '@reduxjs/toolkit';

const makeStore = () => {
  const store = configureStore({
    reducer: {},
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
