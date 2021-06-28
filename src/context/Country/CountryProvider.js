import React, { useCallback, useReducer } from 'react';

import {
  CLEAN_COUNTRIES,
  CLEAN_COUNTRY,
  GET_COUNTRIES,
  GET_COUNTRY,
} from '../types';
import CountryContext from './CountryContext';
import CountryReducer from './CountryReducer';

const URI = 'https://restcountries.eu/rest/v2/';

const initialState = {
  countries: null,
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
    for (let i = 0; i < countries.length; i += 12) {
      arr.push(countries.slice(i, i + 12));
    }

    dispatch({ type: GET_COUNTRIES, payload: arr });
  }, []);
  const getCountry = useCallback(async (code) => {
    const country = await getData(URI + 'alpha/' + code);
    dispatch({ type: GET_COUNTRY, payload: country });
  }, []);

  const resetCountrySelected = () => {
    dispatch({ type: CLEAN_COUNTRY, payload: null });
  };

  const resetCountries = () => {
    dispatch({ type: CLEAN_COUNTRIES, payload: null });
  };

  const getCountriesRegion = useCallback(
    async (region) => {
      if (region === 'all') return await getCountries();
      const _region = await getData(URI + 'region/' + region);
      const arr = [];
      for (let i = 0; i < _region.length; i += 12) {
        arr.push(_region.slice(i, i + 12));
      }
      dispatch({ type: GET_COUNTRIES, payload: arr });
    },
    [getCountries]
  );

  const getCountriesName = useCallback(
    async (name) => {
      if (name.trim()) {
        const countries = await getData(URI + 'name/' + name);

        if (countries.status) {
          dispatch({ type: GET_COUNTRIES, payload: [] });
          return;
        }

        let arr = [];

        for (let i = 0; i < countries?.length; i += 12) {
          arr.push(countries.slice(i, i + 12));
        }

        dispatch({ type: GET_COUNTRIES, payload: arr });
        return;
      }
      await getCountries();
    },
    [getCountries]
  );

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        countrySelected: state.countrySelected,
        getCountries,
        getCountry,
        getCountriesRegion,
        getCountriesName,
        resetCountrySelected,
        resetCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
