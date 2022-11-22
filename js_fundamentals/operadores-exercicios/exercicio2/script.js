const firstNum = prompt("Primeiro número");
const secondNum = prompt("Segundo número");

firstNum > secondNum
  ? console.log("O primeiro numero é maior que segundo?", true)
  : console.log("O primeiro numero é maior que segundo?", false);

firstNum === secondNum
  ? console.log("O primeiro numero é igual ao segundo?", true)
  : console.log("O primeiro numero é igual ao segundo?", false);

firstNum % secondNum === 0
  ? console.log("O primeiro numero é divisível pelo segundo?", true)
  : console.log("O primeiro numero é divisível pelo segundo?", false);

secondNum % firstNum === 0
  ? console.log("O segundo numero é divisível pelo primeiro?", true)
  : console.log("O segundo numero é divisível pelo primeiro?", false);
