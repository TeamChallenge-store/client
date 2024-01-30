import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '~shared/api/baseApi';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});

export { rootReducer };
