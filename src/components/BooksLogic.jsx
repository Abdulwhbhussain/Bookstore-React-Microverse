import React, { useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import AddNewBook from './AddNewBook';
import BooksList from './BooksList';
import { addBook, fetchBooks, deleteBook } from '../redux/books/booksSlice';

// Styled Div Container
const StyledDiv = styled.div`
padding-left: 10%;
padding-right: 10%;
margin-top: 50px;
`;

// Styled Horizontal Rule
const StyledHr = styled.hr`
border: 1px solid #e8e8e8;
margin-top: 40px;
margin-bottom: 40px;
`;

// other imported components here
const BooksLogic = () => {
  const { bookItems, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const delBook = (id) => {
    dispatch(deleteBook(id));
  };

  const addBookItem = (title, author) => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: Math.floor(Math.random() * 10) < 5 ? 'Fiction' : 'Nonfiction',
    };
    dispatch(addBook(newBook));
  };

  useEffect(() => {
    dispatch(fetchBooks());
    // fetch(URLGETBOOKS, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     item_id: uuidv4(),
    //     title: 'After 100 Years',
    //     author: 'Abdul W. Hussain',
    //     category: 'Nonfiction',
    //   }),
    // }).then((response) => response.text()).then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.error('Error:', error);
    // });
    // storing books items
    const temp = JSON.stringify(bookItems);
    localStorage.setItem('books', temp);
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  let booksArr = [];

  if (typeof bookItems === 'object') {
    booksArr = Object.keys(bookItems).map((key) => {
      const book = bookItems[key][0];
      const realBook = {
        id: key,
        ...book,
      };
      return realBook;
    });
    console.log(booksArr);
    console.log(Object.keys(bookItems));
  }

  return (
    <StyledDiv>
      <BooksList booksProps={booksArr} delBook={delBook} />
      <StyledHr />
      <AddNewBook addBookItem={addBookItem} />
    </StyledDiv>
  );
};

export default BooksLogic;
