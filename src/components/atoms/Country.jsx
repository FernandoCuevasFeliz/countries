import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 2px 1px 11px -2px #0000001e;

  border-radius: 8px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.bgCards};

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    width: 280px;
  }
`;

const Img = styled.img`
  height: 180px;
  object-fit: cover;
`;

const DivBody = styled.div`
  padding: 30px;
  color: ${({ theme }) => theme.color};
`;

const Country = ({ country }) => {
  return (
    <Div>
      <Link to={'/details/' + country.alpha2Code}>
        <Img src={country.flag} alt={`photo ` + country.name} />
      </Link>
      <DivBody>
        <h3>{country.name}</h3>
        <p>
          <strong>Population: </strong>
          {country.population}
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
