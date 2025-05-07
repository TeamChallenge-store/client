import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TLikesModalSlice = {
  isLikesOpen: boolean;
  isLikesUpdated: boolean;
};

const initialState: TLikesModalSlice = {
  isLikesOpen: false,
  isLikesUpdated: false,
};

export const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setIsLikesOpen: (state, action: PayloadAction<boolean>) => {
      /* eslint-disable no-param-reassign */
      state.isLikesOpen = action.payload;
    },
    setIsLikesUpdated: (state, action: PayloadAction<boolean>) => {
      /* eslint-disable no-param-reassign */
      state.isLikesUpdated = action.payload;
    },
  },
});

export const { setIsLikesOpen, setIsLikesUpdated } = likesSlice.actions;
export const selectIsLikesOpen = (state: RootState) => state.likes.isLikesOpen;
export const selectIsLikesUpdated = (state: RootState) => state.likes.isLikesUpdated;
export default likesSlice.reducer;