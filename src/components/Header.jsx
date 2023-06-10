import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  width: 100vw;
  height: 5.938rem;
  margin: 0 0 2.375rem;
  padding: 1.438rem 2.188rem 1.688rem 6.25rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
        width: 15rem;
        height: 2.313rem;
        margin: 0.375rem 2.938rem 0.125rem 0;
        font-family: Montserrat;
        font-size: 1.875rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #0290ff;
    }
    nav {
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        li {
            width: 3.688rem;
            height: 1rem;
            margin: 1.125rem 2.563rem 0.688rem 0;
            font-family: Montserrat;
            font-size: 0.813rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 1.9px;
            color: #121212;
            Link {
              text-decoration: none;
            }
        }
      }
    }
  }
`;

// Header component for the Bookstore app
function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            <li><Link to="/">BOOKS</Link></li>
            <li><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </nav>
      </div>
      <div>
        <i className="fas fa-user" />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
