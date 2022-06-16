// INPUTS NO JAVASCRIPT 

// Neste projeto abordaremos o uso de inputs para permitir a entrada de dados via CLI 
// no JavaScript através do Node. Faremos isso utilizando a biblioteca readline-sync,
// que tem como objetivo permitir que sejam informados dados ao sistema utilizando-se 
// da linha de comando. Como o uso de inputs não é um recurso nativo do JavaScript, 
// precisaremos instalar essa biblioteca readline-sync através do NPM, gerenciador 
// de pacotes do Node, através do comando npm install readline-sync. O uso de inputs no 
// JavaScript é uma ótima ferramenta para implementação rápida de sistemas sem a 
// necessidade de utilizar recursos externos.

import entradaDados from 'readline-sync';

console.log("Área do triângulo: \n");

let base = entradaDados.question("Informe a base: ");
let altura = entradaDados.question("Informe a altura: ");

let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area); 


// UTILIZANDO readline-sync 

import entradaDados from 'readline-sync';
const nome = entradaDados.question('Digite seu nome: ');

console.log('Olá, '+nome);

import entradaDados from 'readline-sync';

let idade = entradaDados .question('Digite sua idade: ');
console.log("Você tem "+idade+" anos de idade");

import entradaDados from 'readline-sync';

console.log("Calculadora de soma entre x e y: \n")

let x = entradaDados.question("Informe o valor de x: ")
let y = entradaDados.question("Informe o valor de y: ")

let soma = Number(x) + Number(y);

console.log(x+" + "+y+" = "+soma);

