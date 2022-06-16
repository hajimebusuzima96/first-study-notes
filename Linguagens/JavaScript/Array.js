// ARRAY JAVASCRIPT 


var programadores = [
    "Leandro",
    "Marcelo",
    "Jéssica",
    "Roberta"
]; 

var produtos = [
    "Notebook Samsung X40",
    "Smartphone Xiaomi Redmi 9",
    "Smart TV LED 50 LG",
    "Home Theater Philco PHT690"
];


var notas_aluno = [ 9, 8, 7, 9 ]; 

var funcionario = [
    'Caio César Martins',   // Nome
     23,                   // Idade
    'caio@email.com'      // email
]; 

// COLEÇÃO 

var tecnologias = [
    "JavaScript",
    "Dart",
    "React",
    "Angular"
];

var numeros_premiados = [
    10,
    15,
    21,
    22,
    39,
    47
];  

//ACESSANDO ELEMENTOS DO ARRAY 

var cursos = [
    "Introdução ao Dart",
    "Variáveis em PHP",
    "Tipos de dados em Java",
    "Estruturas condicionais em Python",
    "Funções em JavaScript"
];

console.log(cursos[0]); // Introdução ao Dart
console.log(cursos[1]); // Variáveis em PHP
console.log(cursos[2]); // Tipos de dados em Java
console.log(cursos[3]); // Estruturas condicionais em Python
console.log(cursos[4]); // Funções em JavaScript

var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = 4;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5

// ALTERANDO ELEMENTOS DO ARRAY 

var disciplinas = [
    "Português",    // índice 0
    "Matemática",   // índice 1
    "História",     // índice 2
    "Geografia",    // índice 3
    "Química",      // índice 4
    "Física",       // índice 5
    "Inglês"        // índice 6
];

disciplinas[6] = "Francês";

console.log(disciplinas);

// ['Português', 'Matemática', 'História', 'Geografia', 'Química', 'Física', 'Francês']

var funcionarios = [
    "Bárbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogério"
];

console.log(funcionarios);

// [ 'Bárbara', 'Carlos', 'Helena', 'Maria', 'Rogério' ]

var novos_funcionarios = [
    "Guilherme",
    "Jéssica"
];

funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios);

// [ 'Jéssica', 'Carlos', 'Helena', 'Maria', 'Guilherme' ]

//OBTENDO O TAMANHO DO ARRAY 

var signos = [
    "Áries",
    "Touro",
    "Gêmeos",
    "Câncer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
    "Capricórnio",
    "Aquário",
    "Peixes"
];

console.log(signos.length); // 12

var times_rj = [
    "Botafogo",
    "Flamengo",
    "Fluminense",
    "Vasco",
    "Volta Redonda"
];

var total_times_rj = times_rj.length;

console.log("Total de Times: " + total_times_rj);

// Total de Times: 5


var times_sp = [
    "Bragantino",
    "Corinthians",
    "Palmeiras",
    "Ponte Preta",
    "São Paulo",
    "Santos"
];

var total_times_sp = times_sp.length;

console.log("Total de Times: " + total_times_sp);

// Total de Times: 6

var notas_bimestre = [
    7, 6, 8, 5
];

var total_notas = notas_bimestre.length;

var soma_notas = notas_bimestre[0] + notas_bimestre[1] + notas_bimestre[2] + notas_bimestre[3];

var media_aluno = soma_notas / total_notas;

console.log("Média do aluno: " + media_aluno); // Média do aluno: 6.5




