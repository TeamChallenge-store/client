import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TCartModalSlice = {
  isCartOpen: boolean;
  isCartUpdated: boolean;
};

const initialState: TCartModalSlice = {
  isCartOpen: false,
  isCartUpdated: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsCartOpen: (state, action: PayloadAction<boolean>) => {
      /* eslint-disable no-param-reassign */
      state.isCartOpen = action.payload;
    },
    setIsCartUpdated: (state, action: PayloadAction<boolean>) => {
      /* eslint-disable no-param-reassign */
      state.isCartUpdated = action.payload;
    },
  },
});

export const { setIsCartOpen, setIsCartUpdated } = cartSlice.actions;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
export const selectIsCartUpdated = (state: RootState) =>
  state.cart.isCartUpdated;
export default cartSlice.reducer;
