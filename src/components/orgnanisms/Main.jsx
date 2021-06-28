import React, { useState } from 'react';
import ListCountries from '../molecules/ListCountries';
import Search from '../molecules/Search';

const Main = () => {
  const [skip, setSkip] = useState(0);
  return (
    <>
      <Search setSkip={setSkip} />
      <ListCountries skip={skip} setSkip={setSkip} />
    </>
  );
};

export default Main;
