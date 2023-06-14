import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URLGETBOOKS = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wn1qJHo9MjP5T7pAjyNj/books';

// Getting List of Books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(URLGETBOOKS);
    const data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});

// Adding a Book
export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post(URLGETBOOKS, book);
    const data = await response.data;
    alert(data);
    return data;
  } catch (error) {
    return error;
  }
});

// Deleting a Book
export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const response = await axios.delete(`${URLGETBOOKS}/${id}`);
    const data = await response.data;
    alert(data);
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  bookItems: [
    // {
    //   item_id: 'item1',
    //   title: 'The Great Gatsby',
    //   author: 'John Smith',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item2',
    //   title: 'Anna Karenina',
    //   author: 'Leo Tolstoy',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item3',
    //   title: 'The Selfish Gene',
    //   author: 'Richard Dawkins',
    //   category: 'Nonfiction',
    // },
  ],
  isLoading: false,
  error: undefined,
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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookItems = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(addBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.isLoading = false;
      const item = action.payload;
      const id = item.item_id;
      state.bookItems[id] = [{
        title: item.title,
        author: item.author,
        category: item.category,
      }];
    });
    builder.addCase(addBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteBook.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      delete state.bookItems[action.payload];
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addItem, removeItem } = booksSlice.actions;
export default booksSlice.reducer;
