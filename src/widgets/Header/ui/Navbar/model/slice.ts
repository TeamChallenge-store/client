import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TCategoriesSlice = {
  selectedCategory: string;
};

const initialState: TCategoriesSlice = {
  selectedCategory: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export const selectSelectedCategory = (state: RootState) =>
  state.categories.selectedCategory;
export default categoriesSlice.reducer;
