import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

// Styled Div Container
const StyledDiv = styled.div`
background-color: #fafafa;
height: 100vh;
width: 100vw;
overflow: scroll;
div {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 100px;
}
`;

const Categories = () => (
  <StyledDiv>
    <Header />
    <div>Sorry for Inconvenience! We are Working on it.</div>
  </StyledDiv>
);

export default Categories;
