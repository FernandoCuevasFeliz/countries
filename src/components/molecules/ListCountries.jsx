import React, { memo, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import CountryContext from '../../context/Country/CountryContext';
import Country from '../atoms/Country';
import Pagination from '../atoms/Pagination';
import Spinner from '../atoms/Spinner';
import NotfoundPage from '../orgnanisms/NotfoundPage';

const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 15px;

  @media screen and (min-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const ListCountries = ({ skip, setSkip }) => {
  const { countries, getCountries } = useContext(CountryContext);
  const [items, setItems] = useState(null);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  useEffect(() => {
    setItems(countries);
  }, [countries]);

  return (
    <>
      {items ? (
        <>
          {items?.length === 0 ? (
            <NotfoundPage title="Countries" />
          ) : (
            <>
              <Div>
                {items[skip]?.map((country) => (
                  <Country key={country.alpha2Code} country={country} />
                ))}
              </Div>
              <Pagination
                countriesLenght={items}
                setSkip={setSkip}
                skip={skip}
              />
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default memo(ListCountries);
