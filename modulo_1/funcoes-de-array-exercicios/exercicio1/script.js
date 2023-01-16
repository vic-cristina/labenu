const userData = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

console.log(Object.entries(userData));

const userEntries = Object.entries(userData);
const convertUppercase = (userData) => {
  let userString = "";
  for (const [key, value] of Object.entries(userData)) {
    userString += `${key}: ${value.toUpperCase()}\n`;
  }
  return userString;
};
const userUppercase = convertUppercase({ ...userData });
console.log(userUppercase);

// const convertUppercase = (userData) => {
//   userData.map((__, _, array) => {
//     const userArray = [...array];
//     const userString = userArray.toString();
//     userString.toUpperCase();
//   });
// };

// // function convertUppercase(userData) {
// //   for (const [key, value] of Object.entries(userData)) {
// //     return `${key}: ${value.toUpperCase()}`;
// //   }
// // }
// const userDataUppercase = convertUppercase(userEntries);
// console.log(userDataUppercase);

// Object.keys(userData).forEach((key) => {
//   console.log(userData[key].toUpperCase());
// });

// function dataCallback(obj,)

// const userDataCopy = { ...userData };
// console.log(Object.values(userDataCopy));

// const userDataUppercase = [];

// for (let i = 0; i < )

// const userDataUppercase = Object.keys(userData);
// console.log(userDataUppercase);

// userDataUppercase.forEach((key) => {
//   userDataUppercase[key] = userDataUppercase[key].toUpperCase();
// });
// console.log(userDataUppercase);

// const userDataUppercase = (userData) => {
//   const userDataValues = Object.values(userData);
//   for (const value of userDataValues) {
//     console.log(value.toUpperCase());
//   }
// };

// userDataUppercase(userData);
// console.log(userData);
