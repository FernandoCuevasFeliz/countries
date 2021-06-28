import React, { useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.bgCards};
  color: ${({ theme }) => theme.colorInput};

  width: 60%;
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 10px;

  box-shadow: 2px 1px 11px -2px #0000001e;

  margin-top: 2em;
  border-radius: 3px;

  @media screen and (min-width: 768px) {
    margin-top: 0;

    width: 225px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const P = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 25px;
`;

const I = styled.i`
  color: ${({ theme }) => theme.colorInput};
  padding-right: 25px;
`;

const Ul = styled.ul`
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 0;

  list-style: none;
  padding: 0;

  width: 100%;
  background-color: ${({ theme }) => theme.bgCards};
  box-shadow: 2px 1px 11px -2px #0000001e;
  border-radius: 3px;
  overflow: hidden;
`;

const Li = styled.li`
  padding: 0.5em 25px;

  &:first-child {
    padding-top: 1em;
  }
  &:last-child {
    padding-bottom: 1em;
  }

  @media screen and (min-width: 768px) {
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.bgColor};
    }
  }
`;

const Select = () => {
  const [option, setOption] = useState(null);
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => setShowItems(!showItems);
  const handleOptionClick = (region) => setOption(region);
  return (
    <Div onClick={handleClick}>
      <P>
        {!option
          ? 'Filter by Region'
          : option === 'americas'
          ? 'America'
          : option.charAt(0).toUpperCase() + option.slice(1)}
      </P>
      <I
        className={!showItems ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}
      ></I>
      {showItems && (
        <Ul>
          <Li onClick={() => handleOptionClick('africa')}>Africa</Li>
          <Li onClick={() => handleOptionClick('americas')}>America</Li>
          <Li onClick={() => handleOptionClick('asia')}>Asia</Li>
          <Li onClick={() => handleOptionClick('europe')}>Europe</Li>
          <Li onClick={() => handleOptionClick('oceania')}>Oceania</Li>
          <Li onClick={() => handleOptionClick('all')}>All</Li>
        </Ul>
      )}
    </Div>
  );
};

export default Select;
