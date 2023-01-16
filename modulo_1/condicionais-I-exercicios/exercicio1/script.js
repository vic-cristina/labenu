const num = 23; //seu numero aqui

const anyNumber = (num) => {
  return num;
};

const pickedNum = anyNumber(num);

if (pickedNum % 2 === 0) {
  console.log(`${pickedNum} is even`);
} else {
  console.log(`${pickedNum} is odd`);
}
