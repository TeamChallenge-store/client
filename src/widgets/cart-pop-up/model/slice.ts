import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TCartModalSlice = {
  isCartOpen: boolean;
};

const initialState: TCartModalSlice = {
  isCartOpen: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setIsCartOpen: (state, action: PayloadAction<boolean>) => {
      /* eslint-disable no-param-reassign */
      state.isCartOpen = action.payload;
    },
  },
});

export const { setIsCartOpen } = cartSlice.actions;
export const selectIsCartOpen = (state: RootState) => state.cart.isCartOpen;
export default cartSlice.reducer;
