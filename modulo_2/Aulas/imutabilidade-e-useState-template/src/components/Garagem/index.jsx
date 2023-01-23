import { useState } from "react";
import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

export function Garagem({ nome }) {
  const [name, setName] = useState(nome);
  const [isLabenu, setIsLabenu] = useState(true);
  const [car, setCar] = useState("Corsa");

  const changeName = () => {
    setName("Victoria");
    setIsLabenu(!isLabenu);
  };

  return (
    <GaragemContainer>
      <h1>Garagem da {isLabenu ? nome : name}</h1>
      <Botao onClick={changeName}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo={car}
          cor="branco"
          ano={2020}
          adicionadoPor="Labenu"
          flex
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
