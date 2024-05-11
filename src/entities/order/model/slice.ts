/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IOrder } from './types';

interface OrderState {
  orderData: IOrder;
  personalInfoIsValid: boolean;
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
    delivery_method: 'Nova Poshta',
    payment_method: 'Google Pay',
  },
  personalInfoIsValid: false,
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
    setPersonalInfoIsValid(state, action) {
      state.personalInfoIsValid = action.payload;
    },
  },
});

export const selectOrderData = (state: RootState) => state.order.orderData;
export const selectPersonalInfoIsValid = (state: RootState) =>
  state.order.personalInfoIsValid;

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
  setPersonalInfoIsValid,
} = orderSlice.actions;
export default orderSlice.reducer;
