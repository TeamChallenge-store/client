import { combineReducers } from '@reduxjs/toolkit';
import { subscribeFormSlice } from '~features/subscribe-form/model/slice';
import { modalSlice } from '~shared/ui/Modal';
import { cartSlice } from '~widgets/cart-pop-up/model/slice';
import { baseApi } from '~shared/api/baseApi';
import { orderSlice } from '~entities/order/model/slice';
import { likesSlice } from '~widgets/likes-pop-up/model/slice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [subscribeFormSlice.name]: subscribeFormSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [orderSlice.name]: orderSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [likesSlice.name]: likesSlice.reducer,
});

export { rootReducer };