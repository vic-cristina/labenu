function sumPurchase(array) {
  for (let i = 0; i < array.length; i++) {
    const sumPurchase = array[i].compras.reduce(
      (soma, valor) => soma + valor,
      0
    );
    array[i].saldoTotal -= sumPurchase;
    array[i].compras = [];
  }
  return array;
}

const clientes = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] },
];

const sumClients = sumPurchase(clientes);
console.log(sumClients);

// function anonimizer(pessoa) {
//   return {
//     ...pessoa,
//     nome: "ANÔNIMO",
//   };
// }

// const user = {
//   nome: "Astrodev",
//   idade: 25,
//   email: "astrodev@labenu.com.br",
//   endereco: "Rua do Futuro, 4",
// };

// const anon = anonimizer(user);
// console.log(anon);

// saída
// {
// 	nome: "ANÔNIMO",
// 	idade: 25,
// 	email: "astrodev@labenu.com.br",
// 	endereco: "Rua do Futuro, 4"
// }
