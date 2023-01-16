const num = +prompt("Insert any integer number");

//GUARD CLAUSE

if (num % 2 === 0 || num % 3 === 0) {
  console.log(
    `${num} is divisible by 2: ${num % 2 === 0}
     ${num} is divisible by 3: ${num % 3 === 0}`
  );
}

// NESTED CONDITIONALS

if (num % 2 === 0) {
  console.log(`${num} is divisible by 2: ${num % 2 === 0}`);
  if (num % 3 === 0) {
    console.log(`${num} is divisible by 3: ${num % 3 === 0}`);
  }
}
