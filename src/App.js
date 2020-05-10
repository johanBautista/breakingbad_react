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
  // llamar api v1 .then()
  // const consultarApi = () => {
  //   const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  //   const frase = api.then((res) => res.json());
  //   frase.then((resultado) => {
  //     // return resultado;
  //     console.log(resultado);
  //   });
  // };

  // llamar api v2 async-await
  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
      console.log(frase[0]);
    }


  return (
    <Contenedor>
      <Boton onClick={consultarApi}>Obtener Frase!</Boton>
    </Contenedor>
  );
}

export default App;
