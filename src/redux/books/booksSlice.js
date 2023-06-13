import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
