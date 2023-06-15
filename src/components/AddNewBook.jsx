import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddNewBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 50%;
  height: 20vh;
  background-color: #f5f5f5;
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input {
      width: 60%;
      height: 2.5rem;
      margin: 0.5rem;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
      line-height: 1.5;
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
        <h1>Add New Book</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChangeBook} value={title} type="text" id="title" name="title" placeholder="BOOK title" required />
          <input onChange={handleChangeAuthor} value={author} type="text" id="author" name="author" placeholder="Author" required />
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
