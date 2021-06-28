import React from 'react';
import styled from 'styled-components';

import MainDetail from '../orgnanisms/MainDetail';

const Div = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const Details = () => {
  return (
    <Div>
      <MainDetail />
    </Div>
  );
};

export default Details;
