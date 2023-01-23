import React from "react";
import styled from "styled-components";
import { Garagem } from "./Componentes/Garagem/Garagem";
import GlobalStyle from "./GlobalStyle";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 18px;
  line-height: 1.5;
  list-style-type: none;
`;

export default function App() {
  const nome = "Labenu";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </AppContainer>
  );
}
