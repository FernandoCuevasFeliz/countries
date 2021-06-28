import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import CountryContext from '../../context/Country/CountryContext';
import Country from '../atoms/Country';

const Div = styled.div`
  width: 100%;
  display: flex;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ListCountries = () => {
  const { countries, getCountries } = useContext(CountryContext);
  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <Div>
      {countries.map((country) => (
        <Country key={country.alpha2Code} country={country} />
      ))}
    </Div>
  );
};

export default ListCountries;
