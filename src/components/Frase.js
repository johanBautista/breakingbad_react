import React from 'react';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';

const ContenedorFrase = styled.div`
  background-color: #fff;
  text-align: center;
  padding: 2rem;
  max-width: 80%;
  color: #215e2c;
  border-radius: 10px;
  box-shadow: 3px 12px 15px 3px #000;
  h2 {
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 7rem;
      color: #215e2c;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {
  const { quote, author } = frase;

  return (
    <ContenedorFrase>
      <h2>{quote}</h2>
      <p>-{author}</p>
    </ContenedorFrase>
  );
};

Frase.protoTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Frase;
