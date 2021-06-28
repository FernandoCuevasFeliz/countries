import React, { memo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CountryContext from '../../context/Country/CountryContext';
import formatNumbers from '../../helpers/formatNambers';

const Div = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 1px 11px -2px #0000001e;

  border-radius: 8px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.bgCards};
`;

const Img = styled.img`
  height: 180px;
  object-fit: cover;
`;

const Figure = styled.figure`
  margin: 0;
  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;

const DivBody = styled.div`
  padding: 30px;
  color: ${({ theme }) => theme.color};
`;

const Country = ({ country }) => {
  const { resetCountries } = useContext(CountryContext);
  const history = useHistory();
  const handleClick = (code) => {
    resetCountries();
    history.push('/details/' + code);
  };
  return (
    <Div>
      <Figure onClick={() => handleClick(country.alpha2Code)}>
        <Img src={country.flag} alt={`flag ` + country.name} />
      </Figure>

      <DivBody>
        <h3>{country.name}</h3>
        <p>
          <strong>Population: </strong>
          {formatNumbers(country.population)}
        </p>
        <p>
          <strong>Region: </strong>
          {country.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {country.capital}
        </p>
      </DivBody>
    </Div>
  );
};

export default memo(Country);
