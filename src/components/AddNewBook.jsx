import React from 'react';
import styled from 'styled-components';

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
function AddNewBook() {
  return (
    <AddNewBookContainer>
      <h1>Add New Book</h1>
      <form>
        <input type="text" id="title" name="title" placeholder="BOOK title" />
        <input type="text" id="author" name="author" placeholder="Author" />
        <button type="submit" value="Add Book">ADD BOOK</button>
      </form>
    </AddNewBookContainer>
  );
}

export default AddNewBook;
