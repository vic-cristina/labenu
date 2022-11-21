"use strict";

const nomeCompleto = prompt("Insira seu nome completo");

const dataNascimento = prompt("Insira sua data de nascimento");

const endereco = prompt("Insira seu endereço");

const CPF = Number(prompt("Insira seu CPF"));

const escolaridade = prompt("Insira seu nível de escolaridade");

const CNH = prompt("Possui CNH? (sim ou não)");

const qtdFilhos = Number(prompt("Possui quantos filhos?"));

const cargoAtual = prompt("Insira seu cargo atual");

const salarioAtual = Number(prompt("Insira seu salário atual"));

const comissao = Number(
  prompt(
    "Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero"
  )
);

const anoAdmissao = Number(prompt("Informe ano de admissão"));

console.log(
  typeof nomeCompleto,
  typeof dataNascimento,
  typeof endereco,
  typeof CPF,
  typeof escolaridade,
  typeof CNH,
  typeof qtdFilhos,
  typeof cargoAtual,
  typeof salarioAtual,
  typeof comissao,
  typeof anoAdmissao
);

console.log(
  `Nome completo: ${nomeCompleto} \n Data de Nascimento: ${dataNascimento} \n Endereço: ${endereco} \n CPF: ${CPF} \n Escolaridade: ${escolaridade} \n CNH: ${CNH} \n Filhos: ${qtdFilhos} \n Cargo atual: ${cargoAtual} \n Salário atual: ${salarioAtual} \n Comissão: ${comissao} \n Ano de admissão: ${anoAdmissao}`
);
