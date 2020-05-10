import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  border: 2px solid teal;
  border-radius: 10px;
  box-shadow: 3px 12px 15px 3px #000;
  &:hover {
    /* background-color: black; */
    cursor: pointer;
  }
`;

function App() {
  return (
    <Contenedor>
      <Boton>Obtener Frase!</Boton>
    </Contenedor>
  );
}

export default App;
