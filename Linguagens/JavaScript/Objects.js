//OBJETO LITERAL 

var produto = {
    id: 9,
    nome: "Cafeteira Elétrica",
    valor: 99.00
}; 

console.log(produto.id); // 9
console.log(produto.nome); // Cafeteira Elétrica
console.log(produto.valor); // 99.00

var cliente = {
    id: 40,
    nome: "Jorge Mendes",
    telefone: "(21) 9999-9999"
};

console.log(cliente.id); // 40
console.log(cliente.nome); // Jorge Mendes 

var aula = {
    id: 10,
    titulo: 'Objetos literais',
    tecnologia: 'JavaScript'
};

var usuario_logado = true;


console.log(aula.id); // 10
console.log(aula.titulo); // Objetos literais
console.log(aula.tecnologia); // JavaScript

console.log(usuario_logado); // true 

var usuario = {
    id: 2,
    nome: "Rafael Nogueira Lemos",
    idade: 17
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if ( atendeAClassificacaoEtaria === true ) {

    console.log("O usuário ainda pode assistir o conteúdo");

} else {

    console.log("O usuário ainda não pode assistir o conteúdo");

}

var aluno_academia = {
    id: 10,
    nome: "Gerson Silva Campos",
    altura: 1.75,
    peso: 69
};

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

var imc_aluno = peso_aluno / (altura_aluno * altura_aluno);

console.log("O IMC do aluno é de: " + imc_aluno);

if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso");
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com o peso normal");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso");
}

// O IMC do aluno é de: 22.53061224489796
// O aluno Gerson Silva Campos está com o peso normal 

var alunos = [
    "Andréia Gomes",
    "Letícia Castro",
    "Lucas Silva",
    "Rogério Mendonça",
    "Tomás Mendes"
];

console.log(alunos[1]); // Letícia Castro

console.log(alunos[2]); // Lucas Silva

var notas_bimestre = [
    10,
    8,
    7,
    8
];

console.log(notas_bimestre[0]); // 10

console.log(notas_bimestre[3]); // 8 

var colecao_disciplinas = [
    { id: 1, nome: "Português",     carga_horaria: 240 }, // índice 0
    { id: 2, nome: "Matemática",    carga_horaria: 220 }, // índice 1
    { id: 3, nome: "História",      carga_horaria: 160 }, // índice 2
    { id: 4, nome: "Geografia",     carga_horaria: 140 }, // índice 3
    { id: 5, nome: "Química",       carga_horaria: 160 }, // índice 4
    { id: 6, nome: "Física",        carga_horaria: 150 }, // índice 5
    { id: 7, nome: "Inglês",        carga_horaria: 120 }  // índice 6
];

console.log( colecao_disciplinas[0].id ); // 1

console.log( colecao_disciplinas[4].nome ); // Química

console.log( colecao_disciplinas[6].carga_horaria ); // 120 

var colecao_series_programacao = [
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse ",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."},
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."}
];

var data_atual = new Date();

var dia_semana = data_atual.getDay();

var serie_do_dia = colecao_series_programacao[dia_semana];

var nome_serie = serie_do_dia.nome;
var horario_serie = serie_do_dia.horario;
var sinopse_serie = serie_do_dia.sinopse;

console.log("Hoje é dia de " + nome_serie + " às " + horario_serie);
console.log("A seguir uma visão geral da série: " + sinopse_serie); 



