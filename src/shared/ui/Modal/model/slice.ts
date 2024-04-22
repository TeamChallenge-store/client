import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TModalSlice = {
  isModalOpen: boolean;
};

const initialState: TModalSlice = {
  isModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalOpen: (state, action: PayloadAction<boolean>) => {
      /* eslint-disable no-param-reassign */
      state.isModalOpen = action.payload;
    },
  },
});

export const { setIsModalOpen } = modalSlice.actions;
export const selectIsModalOpen = (state: RootState) => state.modal.isModalOpen;
export default modalSlice.reducer;
