/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from './types';

interface OrderState {
  orderData: IOrder;
}

const initialState: OrderState = {
  orderData: {
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    city: '',
    address: '',
    np_department: '',
    up_department: '',
    delivery_method: 'deliveryToAdress',
    payment_method: 'payByCard',
    products: [],
  },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setFirstName(state, action) {
      state.orderData.first_name = action.payload;
    },
    setLastName(state, action) {
      state.orderData.last_name = action.payload;
    },
    setPhoneNumber(state, action) {
      state.orderData.phone_number = action.payload;
    },
    setEmail(state, action) {
      state.orderData.email = action.payload;
    },
    setCity(state, action) {
      state.orderData.city = action.payload;
    },
    setAddress(state, action) {
      state.orderData.address = action.payload;
    },
    setNPDepartment(state, action) {
      state.orderData.np_department = action.payload;
    },
    setUPDepartment(state, action) {
      state.orderData.up_department = action.payload;
    },
    setDeliveryMethod(state, action) {
      state.orderData.delivery_method = action.payload;
    },
    setPaymentMethod(state, action) {
      state.orderData.payment_method = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setPhoneNumber,
  setEmail,
  setCity,
  setAddress,
  setNPDepartment,
  setUPDepartment,
  setDeliveryMethod,
  setPaymentMethod,
} = orderSlice.actions;
export default orderSlice.reducer;
