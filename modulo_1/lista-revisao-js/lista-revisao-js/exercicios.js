// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const arrayInvertido = array.map(array.pop, [...array]);
  return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((number) => number % 2 === 0);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const pares = array.filter((number) => number % 2 === 0);
  return pares.map((number) => number ** 2);
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = Math.max(num1, num2);
  const menorNumero = Math.min(num1, num2);
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: Math.abs(maiorNumero - menorNumero),
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const arrayPares = [];
  for (let i = 0; i <= n * 2; i += 2) {
    arrayPares.push(i);
  }
  arrayPares.pop();
  return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    return "Escaleno";
  }
  if (ladoA === ladoB && ladoB === ladoC && ladoA === ladoC) {
    return "Equilátero";
  }
  if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const resultado = [];
  array.sort((a, b) => a - b);
  resultado.push(array.at(-2));
  resultado.push(array[1]);
  return resultado;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let atores = JSON.stringify(filme.atores);
  return `Venha assistir ao filme ${filme.nome}, de ${
    filme.ano
  }, dirigido por ${filme.diretor} e estrelado por ${atores
    .replaceAll(",", ", ")
    .replaceAll('"', "")
    .replace("]", "")
    .replace("[", "")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return {
    ...pessoa,
    nome: "ANÔNIMO",
  };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for (let i = 0; i < contas.length; i++) {
    const sumPurchase = contas[i].compras.reduce((sum, a) => sum + a, 0);
    contas[i].saldoTotal -= sumPurchase;
    contas[i].compras = [];
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
