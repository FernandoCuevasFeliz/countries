import {
  CLEAN_COUNTRIES,
  CLEAN_COUNTRY,
  GET_COUNTRIES,
  GET_COUNTRY,
} from '../types';

const CountryReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES || CLEAN_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case GET_COUNTRY || CLEAN_COUNTRY:
      return {
        ...state,
        countrySelected: payload,
      };

    default:
      return state;
  }
};

export default CountryReducer;
