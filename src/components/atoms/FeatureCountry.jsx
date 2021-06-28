import React from 'react';
import styled from 'styled-components';

import formatNumbers from '../../helpers/formatNambers';
import { countryCurrencies, countryLanguages } from '../../helpers/listWords';

const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const MyDiv = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    &:first-child {
      margin-right: 100px;
    }
  }
`;

const FeatureCountry = ({ countrySelected }) => {
  return (
    <Div>
      <MyDiv>
        <p>
          <strong>Native Name: </strong>
          {countrySelected?.nativeName}
        </p>
        <p>
          <strong>Population: </strong>
          {formatNumbers(countrySelected?.population || 0)}
        </p>
        <p>
          <strong>Region: </strong>
          {countrySelected?.region}
        </p>
        <p>
          <strong>Sub Region: </strong>
          {countrySelected?.subregion}
        </p>
        <p>
          <strong>Capital: </strong>
          {countrySelected?.capital}
        </p>
      </MyDiv>
      <MyDiv>
        <p>
          <strong>Top Level Domain: </strong>
          {countryCurrencies(countrySelected?.topLevelDomain)}
        </p>
        <p>
          <strong>Currencies: </strong>
          {countryLanguages(countrySelected?.currencies)}
        </p>
        <p>
          <strong>Languages: </strong>
          {countryLanguages(countrySelected?.languages)}
        </p>
      </MyDiv>
    </Div>
  );
};

export default FeatureCountry;
