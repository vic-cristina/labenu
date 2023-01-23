import { GlobalStyles } from "./GlobalStyles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainPage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
