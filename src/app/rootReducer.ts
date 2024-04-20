import { combineReducers } from '@reduxjs/toolkit';
import { modalSlice } from '~shared/ui/Modal';
import { baseApi } from '~shared/api/baseApi';

const rootReducer = combineReducers({
  [modalSlice.name]: modalSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export { rootReducer };
