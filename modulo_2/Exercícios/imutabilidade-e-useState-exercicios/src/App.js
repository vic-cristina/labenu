import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { babyPokemons, evolvedPokemons } from "./poke_db";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Evolutions

function App() {
  const [pokemon, setPokemons] = useState(babyPokemons);
  // const [poke1, setPoke1] = useState(babyPokemons[1]);
  // const [poke2, setPoke2] = useState(babyPokemons[2]);
  // const [poke3, setPoke3] = useState(babyPokemons[3]);

  // Estamos definindo um objeto como estado inicial

  // Para fazer seus próximos pokemons, crie novos estados!

  const evolvePokemon = (id) => {
    setPokemons((previousState) => {
      const newState = [...previousState];
      newState[id] = evolvedPokemons[id];
      return newState;
    });
  };

  return (
    <>
      <GlobalStyles />
      {/* //GlobalStyles aplica todos os estilos no App */}
      <FlexContainer>
        {babyPokemons.map((babyPokemon, index) => {
          return (
            <PokemonCard
              key={babyPokemon.id}
              pokemon={pokemon[index]}
              onEvolvePokemon={evolvePokemon}
            />
          );
        })}
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        {/* <PokemonCard
          pokemon={poke0}
          evolvedPokemon={evolvedPokemons[0]}
          onEvolvePokemon={setPoke0}
        />
        <PokemonCard
          pokemon={poke1}
          evolvedPokemon={evolvedPokemons[1]}
          onEvolvePokemon={setPoke1}
        />
        <PokemonCard
          pokemon={poke2}
          evolvedPokemon={evolvedPokemons[2]}
          onEvolvePokemon={setPoke2}
        />
        <PokemonCard
          pokemon={poke3}
          evolvedPokemon={evolvedPokemons[3]}
          onEvolvePokemon={setPoke3}
        /> */}

        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
