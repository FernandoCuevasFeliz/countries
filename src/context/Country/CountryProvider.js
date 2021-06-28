import React, { useCallback, useReducer } from 'react';
import formatNumbers from '../../helpers/formatNambers';

import { GET_COUNTRIES, GET_COUNTRY } from '../types';
import CountryContext from './CountryContext';
import CountryReducer from './CountryReducer';

const URI = 'https://restcountries.eu/rest/v2/';

const initialState = {
  countries: [],
  countrySelected: null,
};

const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const getData = async (uri) => {
    try {
      const res = await fetch(uri);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getCountries = useCallback(async () => {
    const countries = await getData(URI + 'all');
    const arr = [];
    for (let i = 0; i < 20; i++) {
      countries[i].population = formatNumbers(countries[i].population);
      arr.push(countries[i]);
    }
    console.log(arr);
    dispatch({ type: GET_COUNTRIES, payload: arr });
  }, []);
  const getCountry = async (code) => {
    const country = await getData(URI + 'alpha/' + code);
    dispatch({ type: GET_COUNTRY, payload: country });
  };

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        countrySelected: state.countrySelected,
        getCountries,
        getCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
