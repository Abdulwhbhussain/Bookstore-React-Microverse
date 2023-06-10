import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BooksLogic from '../components/BooksLogic';

// Styled Div Container
const StyledDiv = styled.div`
background-color: #fafafa;
height: 100vh;
width: 100vw;
overflow: scroll;
`;

const Books = () => (
  <StyledDiv>
    <Header />
    <BooksLogic />
  </StyledDiv>
);

export default Books;
