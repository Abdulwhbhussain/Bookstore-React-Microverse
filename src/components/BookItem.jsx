// import '../styles/BookItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Book Item Container
const StyledBookItemContainer = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;`;

const BookItem = ({ itemProp, delBook }) => (
  <StyledBookItemContainer>
    <div>{itemProp.title}</div>
    <div>{itemProp.author}</div>
    <button type="button" onClick={() => delBook(itemProp.id)}>Delete</button>
  </StyledBookItemContainer>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookItem;
