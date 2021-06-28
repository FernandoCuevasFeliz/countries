import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import CountryContext from '../../context/Country/CountryContext';

const Form = styled.form`
  display: inline-block;
  background-color: ${({ theme }) => theme.bgCards};

  width: 100%;
  border-radius: 3px;
  padding-top: 10px;
  padding-bottom: 10px;

  box-shadow: 2px 1px 11px -2px #0000001e;

  @media screen and (min-width: 768px) {
    width: 375px;
  }
`;

const I = styled.i`
  padding-left: 25px;
  padding-right: 15px;

  color: ${({ theme }) => theme.colorInput};
`;

const MyInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colorInput};
  width: calc(100% - 79px);
  padding: 0;
`;

const Input = () => {
  const { getCountriesName } = useContext(CountryContext);
  const [name, setName] = useState('');

  useEffect(() => {
    getCountriesName(name.toLowerCase());
  }, [name, getCountriesName]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <I className="fas fa-search"></I>
      <MyInput
        type="text"
        placeholder="Search for a country..."
        value={name}
        onChange={handleChange}
      />
    </Form>
  );
};

export default Input;
