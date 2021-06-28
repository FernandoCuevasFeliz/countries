import { GET_COUNTRIES, GET_COUNTRY } from '../types';

const CountryReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        countrySelected: payload,
      };
    default:
      return state;
  }
};

export default CountryReducer;
