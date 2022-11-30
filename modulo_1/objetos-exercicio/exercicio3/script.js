const movesProps = {
  moveName: "Tackle",
  damage: 40,
  type: "Normal",
  accuracy: 95,
};

const pokemon1 = {
  pokeName: "Bulbasaur",
  type: "Grass",
  level: 5,
};

const pokemon2 = {
  ...pokemon1,
  ...movesProps,
  pokeName: "Squirtle",
  type: "Water",
};

console.log(pokemon2);

//b
pokemon1.moves = [];

//c

pokemon1.moves.push(movesProps);
pokemon2.moves = [...pokemon1.moves];

console.log(pokemon2);

//d/e

const razorLeaf = {
  moveName: "Razor Leaf",
  damage: 45,
  type: "Grass",
  accuracy: 100,
};

const waterGun = {
  moveName: "Water Gun",
  damage: 55,
  type: "Water",
  accuracy: 95,
};

pokemon1.moves.push(razorLeaf);
pokemon2.moves.push(waterGun);

//f
console.log(pokemon1);
console.log(pokemon2);
