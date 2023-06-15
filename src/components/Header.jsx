import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './responsiveHeader.css';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 5.938rem;
  margin: 0;
  padding: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.08);
    h1 {
        width: 20%;
        height: 2.313rem;
        margin: 0.375rem 0.938rem 0.125rem 0;
        font-family: Montserrat;
        font-size: 1.875rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #0290ff;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    nav {
      width: 60%;
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        li {
            height: 1rem;
            margin: 1.125rem 2.563rem 0.688rem 0;
            font-family: Montserrat;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 1.9px;
            color: #121212;
            .styling {
              text-decoration: none !important;
              color: #121212;
              font-weight: bold;
              font-size: 1.125rem;
              &:hover {
                text-decoration: underline !important;
                cursor: pointer;
              }
            }
        }
      }
    }
    div {
      width: 20%;
      font-size: 1.5rem;
      color: #0290ff;
    }
`;

// Header component for the Bookstore app
function Header() {
  return (
    <HeaderWrapper>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li><Link className="styling" to="/">BOOKS</Link></li>
          <li><Link className="styling" to="/categories">CATEGORIES</Link></li>
        </ul>
      </nav>
      <div>
        <FontAwesomeIcon className="icon" icon={faUser} />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
