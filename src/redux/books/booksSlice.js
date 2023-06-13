import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      state.bookItems.push(item);
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { addItem, removeItem } = booksSlice.actions;
export default booksSlice.reducer;
