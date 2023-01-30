import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  const [userInfo, setUserInfo] = useState(
    new Map([
      ["username", ""],
      ["imgUrl", ""],
    ])
  );
  const [userDisplay, setUserDisplay] = useState(new Map());

  console.log("userInfo", userInfo, "\nuserDisplay", userDisplay);

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header userDisplay={userDisplay} />
          {pageFlow === 1 ? (
            <FormularioLogin
              userInfo={userInfo}
              onSetUserDisplay={setUserDisplay}
              onSetUserInfo={setUserInfo}
              onSetPageFlow={setPageFlow}
            />
          ) : (
            <FormularioPostagem />
          )}
        </aside>
        <TelaDaPostagem />
      </Container>
    </>
  );
}

export default App;
