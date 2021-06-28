import React from 'react';
import styled from 'styled-components';

import Main from '../orgnanisms/Main';

const Div = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;
const Home = () => {
  return (
    <Div>
      <Main />
    </Div>
  );
};

export default Home;
