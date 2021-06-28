import React from 'react';

import styled from 'styled-components';

const Div = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  outline: none;
  border: none;
  box-shadow: 2px 1px 11px -2px #0000001e;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.bgCards};
  color: ${({ theme }) => theme.color};
  padding: 12px 16px;
  display: inline-block;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    cursor: pointer;
  }
`;

const Pagination = ({ countriesLenght, setSkip, skip }) => {
  const handleClickLeft = () => {
    if (skip > 0) {
      setSkip(skip - 1);
      return;
    }

    setSkip(0);
  };

  const handleClickRight = () => {
    if (skip < countriesLenght?.length - 1) {
      setSkip(skip + 1);
      return;
    }

    setSkip(countriesLenght?.length - 1);
  };

  return (
    <Div>
      <Button onClick={handleClickLeft}>
        <i className="fas fa-chevron-left"></i>
      </Button>

      <Button onClick={handleClickRight}>
        <i className="fas fa-chevron-right"></i>
      </Button>
    </Div>
  );
};

export default Pagination;
