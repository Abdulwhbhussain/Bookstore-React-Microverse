import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddNewBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  width: 100%;
  height: 20vh;
  background-color: #f5f5f5;
  h1 {
    margin: 0.5rem;
    width: 10.875rem;
    height: 1.5rem;
    font-family: Montserrat;
    font-size: 1.35rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.18px;
    color: #888;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    input {
      height: 2.5rem;
      margin: 0.5rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
      line-height: 1.5;
    }
    .bookTitle {
      width: 50%;
    }
    .bookAuthor {
      width: 35%;
    }
    button {
      width: 15%;
      border-radius: 5px;
      background-color: #0290ff;
      color: #fff;
      outline: none;
      border: none;
      padding: 10px 20px;
      &:hover {
        cursor: pointer;
        background-color: #0272c4;
        color: #fff;
      }
  }
`;

// Styled Components to add New Book
function AddNewBook({ addBookItem }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeBook = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addBookItem(title, author);
      setTitle('');
      setAuthor('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <AddNewBookContainer>
        <h1>ADD NEW BOOK</h1>
        <form onSubmit={handleSubmit}>
          <input className="bookTitle" onChange={handleChangeBook} value={title} type="text" id="title" name="title" placeholder="Book title" required />
          <input className="bookAuthor" onChange={handleChangeAuthor} value={author} type="text" id="author" name="author" placeholder="Author" required />
          <button type="submit" value="Add Book">ADD BOOK</button>
        </form>
      </AddNewBookContainer>
      <div className="submit-warning">{message}</div>
    </>
  );
}

AddNewBook.propTypes = {
  addBookItem: PropTypes.func.isRequired,
};

export default AddNewBook;
