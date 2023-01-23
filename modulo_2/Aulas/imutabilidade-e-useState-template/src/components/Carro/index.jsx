import { useState } from "react";
import { CarroContainer } from "./styles";

export function Carro({ modelo, cor, ano, flex, adicionadoPor }) {
  const [model, setModel] = useState(modelo);

  const changeModel = (e) => {
    setModel(e.target.value);
  };

  return (
    <CarroContainer>
      <h2>{model}</h2>
      <ul>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
        <li>Flex: {flex ? "Sim" : "Não"}</li>
        <li>Adicionado: {adicionadoPor}</li>
      </ul>
      <input type="text" onChange={changeModel} />
    </CarroContainer>
  );
}
