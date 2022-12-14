const sum = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const mul = (num1, num2) => {
  return num1 * num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};

const num1 = Number(prompt("Primeiro número"));
const num2 = Number(prompt("Segundo número"));

const sumResult = sum(num1, num2);
const subResult = sub(num1, num2);
const mulResult = mul(num1, num2);
const divResult = div(num1, num2);
console.log("Resultado da soma", sumResult);
console.log("Resultado da subtração", subResult);
console.log("Resultado da multiplicação", mulResult);
console.log("Resultado da divisão", divResult);
