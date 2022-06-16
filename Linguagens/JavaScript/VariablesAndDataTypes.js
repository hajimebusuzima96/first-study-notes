//VARIÁVEL COM var 

var programador = "Eduardo";
var pontuacao = 10; 

console.log(programador);
// Imprime Eduardo
console.log(pontuacao);
// Imprime 10


//------------------------------------------------------------------ 


//VARIÁVEL COM let 

let tecnologia = "JavaScript";
let anoAtual = 2021; 

//------------------------------------------------------------------ 

//TIPOS DE DADOS: string, number e boolean 

// DESCOBRINDO O TIPO DA VARIAVEL: typeof 

var valor = 4;
console.log(typeof valor);
// Vai imprimir 'number'

var sobrenome = "Silva";
console.log(typeof sobrenome);
// Vai imprimir 'string'

var ligado = true;
console.log(typeof ligado);
// Vai imprimir 'boolean' 

//------------------------------------------------------------------ 

//TIPOS DE DADOS: Array 

var estados = ["Rio de Janeiro", "São Paulo", "Bahia"]; 

//ACESSANDO VALOR 

var estados = ["Rio de Janeiro", "São Paulo", "Bahia"];
console.log(estados);
// (3) ["Rio de Janeiro", "São Paulo", "Bahia"] 

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];

console.log(linguagens[0]); //resultado impresso: JavaScript
console.log(linguagens[3]); //resultado impresso: C# 


//ALTERANDO VALOR NO ARRAY 

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];
var linguagem = "C";
linguagens[2] = linguagem; 

//ARMAZENANDO TIPOS DIFERENTES 

var titulo = "Programador";
var quantidadeDeVagas = 5;
var vagaAtiva = true; 

//CONTANDO A QUANTIDADE DE ELEMENTOS 

var linguagens = ["JavaScript", "PHP", "JAVA", "C#"];

console.log(linguagens.length);
// Vai imprimir 4 

//------------------------------------------------------------------ 

//TIPOS DE DADOS: undefined 

var nome;
console.log(nome); //vai imprimir undefined 

//------------------------------------------------------------------ 

//TIPOS DE DADOS: null 

var nome  = null;
console.log(nome);
// vai imprimir null 

//MANIPULANDO UMA VARIAVEL NULL 

var nome = null;
console.log(nome.length);

//TypeError: Cannot read property 'length' of null 

//------------------------------------------------------------------ 

//DECLARANDO UMA CONSTANTE 

const url = "https://www.alphamaiora.com/"; 

const nome; // constantes devem ser inicializadas com valor 

const aula = "JavaScript";
aula = "JS"; //TypeError: Assignment to constant variable. 


// VARIAVEL CONST É IMUTAVEL, UMA VEZ DECLARADA SEU VALOR NAO PODE SER ALTERADO 

