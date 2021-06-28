import React from 'react';
import Input from '../atoms/Input';

import styled from 'styled-components';
import Select from '../atoms/Select';

const Div = styled.div`
  margin: 3em auto;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

const Search = ({ skip, setSkip }) => {
  return (
    <Div>
      <Input />
      <Select setSkip={setSkip} />
    </Div>
  );
};

export default Search;
