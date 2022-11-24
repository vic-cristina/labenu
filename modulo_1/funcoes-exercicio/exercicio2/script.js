function addNum(firstNum, secondNum) {
  return firstNum + secondNum;
}
const addValue = addNum(5, 10);
console.log(addValue);

function greaterThan(firstNum, secondNum) {
  return `${firstNum} > ${secondNum} : ${firstNum > secondNum}`;
}
const greaterThanValue = greaterThan(5, 7);
console.log(greaterThanValue);

const isEven = function (num) {
  return `It is ${num % 2 === 0} that ${num} is even`;
};
const isEvenValue = isEven(5);
console.log(isEvenValue);

function taxInss(salary) {
  return salary - salary * 0.1;
}
const descontoInss = taxInss(3500);
console.log(descontoInss);
