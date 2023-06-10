// import '../styles/BookItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ itemProp, delBook }) => (
  <li>
    <div>{itemProp.title}</div>
    <div>{itemProp.author}</div>
    <button type="button" onClick={() => delBook(itemProp.id)}>Delete</button>
  </li>
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
