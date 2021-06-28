import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-top: 50px;
  text-align: center;
  color: ${({ theme }) => theme.color};

  @media screen and (min-width: 768px) {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const NotfoundPage = ({ title }) => {
  return (
    <Div>
      <img src="/assets/img/notfound.svg" alt="country no found" />
      <h2>404 - {title || 'Page'} not Found 😥</h2>
    </Div>
  );
};

export default NotfoundPage;
