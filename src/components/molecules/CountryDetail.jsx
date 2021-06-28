import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import CountryContext from '../../context/Country/CountryContext';

import BordersCountry from '../atoms/BordersCountry';
import FeatureCountry from '../atoms/FeatureCountry';
import Spinner from '../atoms/Spinner';
import NotfoundPage from '../orgnanisms/NotfoundPage';

const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(2, 1fr);

    column-gap: 30px;
  }
`;
const Figure = styled.figure`
  margin: 0;
`;

const DivBody = styled.div`
  color: ${({ theme }) => theme.colorInput};
`;

const MyTitle = styled.h2`
  margin-top: 40px;
`;

const MyDiv = styled.div``;

const CountryDetail = () => {
  const { countrySelected, getCountry } = useContext(CountryContext);
  const { code } = useParams();

  useEffect(() => {
    getCountry(code);
  }, [getCountry, code]);

  return (
    <>
      {countrySelected ? (
        <>
          {countrySelected.status ? (
            <NotfoundPage title="Country" />
          ) : (
            <Div>
              <Figure>
                <img
                  src={countrySelected?.flag}
                  alt={'flag' + countrySelected?.name}
                />
              </Figure>
              <MyDiv>
                <DivBody>
                  <MyTitle>{countrySelected?.name}</MyTitle>
                  <FeatureCountry countrySelected={countrySelected} />
                </DivBody>
                <BordersCountry borders={countrySelected?.borders} />
              </MyDiv>
            </Div>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CountryDetail;
