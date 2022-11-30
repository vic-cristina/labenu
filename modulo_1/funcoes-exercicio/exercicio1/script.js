const hello = (nome) => {
  return `Olá, ${nome} 😼`;
};
const helloVictoria = hello("Victoria");
console.log(helloVictoria);

const tabuada = (numero) => {
  for (let i = 1; i <= 10; i++) {
    let multiNumero = numero * i;
    console.log(`${numero} * ${i} === ${multiNumero}`);
  }
};
tabuada(5);

console.log(
  "Time too precious and my patience thin\nMy mind and my soul is the weapon\nAnd every failure was a lesson"
);
