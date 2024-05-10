import { combineReducers } from '@reduxjs/toolkit';
import { subscribeFormSlice } from '~features/subscribe-form/model/slice';
import { modalSlice } from '~shared/ui/Modal';
import { cartSlice } from '~widgets/cart-pop-up/model/slice';
import { baseApi } from '~shared/api/baseApi';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [subscribeFormSlice.name]: subscribeFormSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
});

export { rootReducer };
