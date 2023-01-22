import "./styles.css";
import { CardVideo } from "./components/CardVideo";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import { CARD_INFO as data } from "./Data";
import Header from "./components/Header";

const ScreenWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainWrapper = styled.main`
  min-height: 80%;
  display: flex;
`;

const SidebarWrapper = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

const FooterWrapper = styled.footer`
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`;

const GridWrapper = styled.section`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;

const ListItem = styled.li`
  list-style-type: none;
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ScreenWrapper>
        <Header />
        <MainWrapper>
          <SidebarWrapper>
            <ul>
              <ListItem>Início</ListItem>
              <ListItem>Em alta</ListItem>
              <ListItem>Inscrições</ListItem>
              <hr />
              <ListItem>Originais</ListItem>
              <ListItem>Histórico</ListItem>
            </ul>
          </SidebarWrapper>

          <GridWrapper>
            {data.map((item, key) => {
              return (
                <CardVideo
                  key={key}
                  title={item.title}
                  img={item.img}
                  user={item.user}
                  userImg={item.userImg}
                />
              );
            })}
          </GridWrapper>
        </MainWrapper>
        <FooterWrapper>
          <h4>Oi! Eu moro no footer!</h4>
        </FooterWrapper>
      </ScreenWrapper>
    </div>
  );
}

export default App;
