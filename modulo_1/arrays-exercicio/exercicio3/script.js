"use strict";

const numbers = [5, 8, 23, 2974, 10293];
const strings = ["💜", "💜", "💜", "💜", "💜", "💜", "💜"];
const arr = [...numbers, ...strings, true, false];

const numbersCopy = [...numbers];
const stringsCopy = [...strings];
const arrCopy = [...arr];

numbersCopy.unshift(0);
stringsCopy.pop(stringsCopy.lastIndexOf(stringsCopy));

console.log(numbersCopy);
console.log(stringsCopy);
console.log("NO SPLICE", arrCopy);
arrCopy.splice(1, 1);
console.log("WITH SPLICE", arrCopy);

//console.log(arr);
console.log("---- Length of Arrays ----");
console.log("numbers", numbers.length);
console.log("strings", strings.length);
console.log("arr", arr.length);
console.log("--------------------------");
console.log(numbers[0], strings[1], arr[2]);
console.log("numbers arr includes 5?", numbers.includes(5));
console.log(
  "arr includes MAX_SAFE_INTEGER?",
  arr.includes(Number.MAX_SAFE_INTEGER + 1)
);
