import { Garagem } from "./src/components/Garagem";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome="Labenu" />
    </div>
  );
}
