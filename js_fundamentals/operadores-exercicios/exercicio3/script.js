// Parte 1 -> Toda operação relacional, que compara um elemento a outro, retorna verdadeiro ou falso.

console.log("5 é maior que 20 e também é menor que 2", 5 > 20 && 5 < 2);

console.log("5 é igual a 5 ou é igual a “5”", 5 === 5 || 5 === "5");

console.log("negação de (vinte é maior que cinquenta)", !(20 > 50));

console.log(
  "negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)",
  !(20 > 50 || 50 > 60)
);

// Parte 2

const salario = 2000;
const filhos = 2;
const comissao = 0.1;
const auxilioCreche = 45.5;
const taxInss = 0.05;
const listaSalario = [];
const vendas = new Map([
  ["Janeiro", 5784.5],
  ["Fevereiro", 3418.41],
  ["Março", 4124.1],
  ["Abril", 1874.0],
  ["Maio", 7000.0],
  ["Junho", 9450.0],
]);

console.log("\n----- BRUTO -----");
vendas.forEach((vendasDoMes, mes) => {
  let bruto = vendasDoMes * comissao + salario + auxilioCreche * filhos;
  console.log(`${mes}: ${bruto.toFixed(2)}`);
});

console.log("\n----- LIQUIDO -----");
vendas.forEach((vendasDoMes, mes) => {
  let bruto = vendasDoMes * comissao + salario;
  let liquido = bruto - bruto * taxInss + auxilioCreche * filhos;
  console.log(`${mes}: ${liquido.toFixed(2)}`);
});

console.log("\n----- MÉDIA SALARIAL -----");
vendas.forEach((vendasDoMes) => {
  let bruto = vendasDoMes * comissao + salario;
  let liquido = bruto - bruto * taxInss + auxilioCreche * filhos;
  listaSalario.push(liquido);
});

let somaSalario = 0;
for (const salario of listaSalario) {
  somaSalario += salario;
}
console.log((somaSalario / listaSalario.length).toFixed(2));
