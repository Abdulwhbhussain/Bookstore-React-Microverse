import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import BooksList from './BooksList';

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

function getInitialBooks() {
  // getting stored items
  const temp = localStorage.getItem('books');
  const savedBooks = JSON.parse(temp);
  return savedBooks || [];
}

// other imported components here
const BooksLogic = () => {
  const [books, setBooks] = useState(getInitialBooks());

  const delBook = (id) => setBooks([...books.filter((book) => book.id !== id)]);

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  useEffect(() => {
    // storing books items
    const temp = JSON.stringify(books);
    localStorage.setItem('books', temp);
  }, [books]);

  return (
    <StyledDiv>
      <BooksList booksProps={books} delBook={delBook} />
      <StyledHr />
      <AddNewBook addBookItem={addBookItem} />
    </StyledDiv>
  );
};

export default BooksLogic;
