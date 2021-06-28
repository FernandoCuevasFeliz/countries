import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CountryContext from '../../context/Country/CountryContext';

const Header = styled.header`
  margin-top: 40px;
  margin-bottom: 40px;
`;
const Button = styled.button`
  outline: none;
  border: none;

  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgCards};
  padding: 10px 30px;

  box-shadow: 2px 1px 11px -2px #0000001e;

  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;
const I = styled.i`
  margin-right: 5px;
`;

const HeaderDetails = () => {
  const { resetCountrySelected } = useContext(CountryContext);

  const history = useHistory();

  const handleClick = () => {
    resetCountrySelected();
    history.push('/');
  };
  return (
    <Header>
      <Button onClick={handleClick}>
        <I className="fas fa-arrow-left"></I> Back
      </Button>
    </Header>
  );
};

export default HeaderDetails;
