import React, { useContext } from 'react';
import styled from 'styled-components';

import ThemesContext from '../../context/Themes/ThemesContext';

const MyHeader = styled.header`
  height: 70px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgCards};

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 1px 11px -2px #0000001e;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 95%;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

const H1 = styled.h1`
  font-size: 18px;
`;

const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color};

  @media screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = () => {
  console.log('header');
  const { changeTheme, currentTheme } = useContext(ThemesContext);
  return (
    <MyHeader>
      <Nav>
        <H1>Where in the word?</H1>
        <Button onClick={changeTheme}>
          <i className={!currentTheme ? 'far fa-moon' : 'far fa-sun'}></i>
          {!currentTheme ? ' Dark' : ' Light'} Mode
        </Button>
      </Nav>
    </MyHeader>
  );
};

export default Header;
