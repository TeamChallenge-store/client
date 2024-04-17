import { combineReducers } from '@reduxjs/toolkit';

import { baseApi } from '~shared/api/baseApi';
import { subscribeFormSlice } from '~widgets/subscribe-block/model/slice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [subscribeFormSlice.name]: subscribeFormSlice.reducer,
});

export { rootReducer };
