import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";

const PokemonCard = ({ pokemon, onEvolvePokemon }) => {
  return (
    <Card color={pokemon.color}>
      <img src={pokemon.image} alt={pokemon.name} />
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonType>{pokemon.type}</PokemonType>
      <p>{pokemon.weight}kg</p>

      <EvolveButton
        onClick={() => {
          onEvolvePokemon(pokemon.id);
        }}
      >
        Evoluir!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard;
