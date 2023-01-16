const numArray = [1, 2, 3, 4, 5, 6, 7, 8];

const tripleNum = numArray.map((value) => {
  return value * 3;
});

const halfNum = numArray.map((valor) => {
  return valor / 2;
});

console.log(tripleNum);
console.log(halfNum);
