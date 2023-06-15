// import '../styles/BookItem.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './BookItemResponsive.css';

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
  padding: 20px 20px;
  
  .title-container {
    width: 40%;
    padding: 0 0 0 20px;
    .category {
      width: 3.063rem;
      height: 1.125rem;
      margin: 0 2.438rem 0 0;
      opacity: 0.5;
      font-family: Montserrat;
      font-size: 0.875rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #121212;
      text-transform: capitalize;
    }
    .title {
      width: 12.313rem;
      height: fit-content;
      margin: 0.188rem 20.188rem 0 0;
      font-family: RobotoSlab;
      font-size: 1.375rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.2px;
      color: #121212;
    }
    .author {
      width: 6.688rem;
      height: fit-content;
      margin: 0.25rem 0 0;
      font-family: RobotoSlab;
      font-size: 0.875rem;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #4386bf;
    }
    .actions {
      color: #0290ff;
      font-size: 0.875rem;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      margin: 20px 0 0;
      button {
        background-color: transparent;
        border: none;
        outline: none;
        color: #0290ff;
        font-size: 0.875rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
  .completed {
    width: 20%;
    display: flex;
    flex-direction: row;
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .vertical-seperator {
    width: 20%;
    height: 100%;
  }
  .del-button {
    width: 20%;
    button {
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
  }
  `;

const BookItem = ({ itemProp, delBook }) => (
  <StyledBookItemContainer>
    <div className="title-container">
      <div className="category">{itemProp.category}</div>
      <div className="title">{itemProp.title}</div>
      <div className="author">{itemProp.author}</div>
      <div className="actions">
        <span>Comments</span>
        <span>  |  </span>
        <button type="button" onClick={() => delBook(itemProp.id)}>
          <span>Remove</span>
        </button>
        <span>  |  </span>
        <span>Edit</span>
      </div>
    </div>
    <div className="completed">
      <div className="complete-loader" />
      <div style={{ marginLeft: '10px' }}>
        <span>0%</span>
        <br />
        Completed
      </div>
    </div>
    <div className="vertical-seperator">
      <hr style={{ width: '1px', height: '70%', color: '#e8e8e8' }} />
    </div>
    <div className="del-button">
      <button type="button" onClick={() => delBook(itemProp.id)}>UPDATE PROGRESS</button>
    </div>
  </StyledBookItemContainer>
);

BookItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  delBook: PropTypes.func.isRequired,
};

export default BookItem;
