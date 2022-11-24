"use strict";

const numbers = [5, 8, 23, 2974, 10293];
const strings = ["💜", "💜", "💜", "💜", "💜", "💜", "💜"];
const arr = [...numbers, ...strings, true, false];

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
