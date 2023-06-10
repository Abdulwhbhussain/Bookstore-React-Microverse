import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import BooksList from './BooksList';

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
    <div>
      <BooksList booksProps={books} delBook={delBook} />
      <AddNewBook addBookItem={addBookItem} />
    </div>
  );
};

export default BooksLogic;
