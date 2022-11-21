/* Exercício 1  - Parte 1 */

let userName; //a) Declare uma variável para armazenar um nome, sem atribuir um valor.
let age; //b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

console.log(typeof userName, typeof age); //c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

console.log(userName, age);
/* d) Reflita: por que esse tipo foi impresso? 
Variáveis inicializadas sem um valor retornam undefined.
Em português, undefined === não definido -> Não foi definido um valor para a variável no escopo global, portanto a variável não existe no compilador. */

userName = null;
age = null;

console.log(typeof userName, typeof age);
console.log(userName, age);
//Inicializadas como objetos intencionalmente vazios.

/* e) Depois, disso, atualize o código para perguntar ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar. */
userName = prompt("Qual é seu nome?");
age = Number(prompt("Qual é sua idade?"));
console.log(name, age);
console.log(typeof name, typeof age);
/*
 * f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? */

/* Tipos string & number. Caso o construtor Number() não fosse utilizado, teríamos dois tipos de dado "string". Qualquer input recebido no prompt, caso não redefinido, é do tipo string. */

/* g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". */
alert(`Olá ${name}, você tem ${age} anos.`);

/**
 * a) Crie um programa que faça 3 perguntas para o usuário, através do prompt. Armazene a resposta de cada pergunta em uma variável.
 */

/* Inicialmente definindo strings hardcoded nos prompts. */
//const firstAnswer = prompt("Do you like cats?");
//const secondAnswer = prompt("Você fez o L?");
//const thirdAnswer = prompt ("Você tem medo de altura?");

/**
 * b) Imprima no console todas as respostas.
 * console.log(firstAnswer, secondAnswer, thirdAnswer);
 */
/**
 * c) Altere seu programa, para que o texto das perguntas sejam armazenadas em 3 variáveis diferentes.
 */
const firstQuestion = "Do you like cats?";
const secondQuestion = "Você fez o L?";
const thirdQuestion = "Você tem medo de altura?";

/**
 * d) Troque o texto do seu prompt, pelas variáveis que contém as perguntas.
 */

const firstAnswer = prompt(firstQuestion);
const secondAnswer = prompt(secondQuestion);
const thirdAnswer = prompt(thirdQuestion);

/* e) Altere o console para imprimir a pergunta e a resposta.  */
console.log(firstQuestion, firstAnswer);
console.log(secondQuestion, secondAnswer);
console.log(thirdQuestion, thirdAnswer);
