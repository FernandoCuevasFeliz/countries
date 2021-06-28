import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const URI = 'https://restcountries.eu/rest/v2/alpha/';

const MyDiv = styled.div`
  margin-top: 40px;
  color: ${({ theme }) => theme.colorInput};
`;

const Span = styled.span`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;

  color: ${({ theme }) => theme.colorInput};
  background-color: ${({ theme }) => theme.bgCards};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivSpans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 150px));
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 15px;
`;

const BordersCountry = ({ borders }) => {
  const [namesCountries, setNamesCountries] = useState([]);

  useEffect(() => {
    const getData = async (uri) => {
      borders?.map(async (item) => {
        const res = await fetch(uri + item);
        const data = await res.json();
        setNamesCountries((prev) => [...prev, data.name]);
      });
    };
    getData(URI);
  }, [borders]);

  return (
    <MyDiv>
      <p>
        <strong>Border Countries: </strong>
      </p>
      <DivSpans>
        {namesCountries.map((name, index) => (
          <Span key={index}>{name} </Span>
        ))}
      </DivSpans>
    </MyDiv>
  );
};

export default BordersCountry;
