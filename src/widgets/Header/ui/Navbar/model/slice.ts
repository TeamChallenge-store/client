import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TCategoriesSlice = {
  selectedCategory: string;
  selectedSubcategory: string;
};

const initialState: TCategoriesSlice = {
  selectedCategory: '',
  selectedSubcategory: '',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedCategory = action.payload;
    },
    setSelectedSubcategory: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectedSubcategory = action.payload;
    },
  },
});

// eslint-disable-next-line operator-linebreak
export const { setSelectedCategory, setSelectedSubcategory } =
  categoriesSlice.actions;
export const selectSelectedCategory = (state: RootState) =>
  state.categories.selectedCategory;
export const selectSelectedSubcategory = (state: RootState) =>
  state.categories.selectedSubcategory;
export default categoriesSlice.reducer;
