import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: (state) => {
      if (state.categories.length === 0) {
        return 'Under Construction';
      }
      return 'Under Construction';
    },
  },
});

export const { statusCheck } = categoriesSlice.actions;
export default categoriesSlice.reducer;
