const numero = [1, 1, 2, 2, 3, 3];
const numeroSemRepetido = [];

numero.filter((elemento, index, array) => {
  if (elemento) {
  }
  console.log("elemento", elemento);
  console.log("index", index + 1);
  console.log("array", array.indexOf(index));

  if (elemento === index + 1) numeroSemRepetido.push(index);
});
console.log(numeroSemRepetido);
