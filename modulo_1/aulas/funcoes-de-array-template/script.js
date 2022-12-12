/*
   Com o array de pokémons do template, faça o seguinte:
Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback, que deve retornar apenas os pokemons do tipo fogo. */
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 40 },
  { nome: "Bellsprout", tipo: "grama", vida: 20 },
  { nome: "Charmander", tipo: "fogo", vida: 35 },
  { nome: "Vulpix", tipo: "fogo", vida: 25 },
  { nome: "Squirtle", tipo: "água", vida: 45 },
  { nome: "Psyduck", tipo: "água", vida: 25 },
];

const restorePokemons = (...{ ...pokemons }) => {
  pokemons.vida = 100;
  return pokemons.vida;
};

// const

// const restorePokemons = pokemons.map(())

const pokemonsVidaCheia = restorePokemons(pokemons);
console.log(pokemonsVidaCheia);
