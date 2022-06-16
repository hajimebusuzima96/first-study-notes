//MANIPULAÇÃO DE STRINGS JAVASCRIPT 

// Propriedade:
// length

// Métodos:
// toLowerCase/toUpperCase
// trim
// padStart/padEnd
// replace
// substring
// indexOf
// split

const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

let titulo = "=== chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase());
console.log("\n");

for ( const chuva of chuvas_meteoros ){

    let nome_chuva = chuva.nome;
    let pico_chuva = chuva.pico;
    let velocidade_chuva = chuva.velocidade;

    let pico_mes_dia = pico_chuva.split(" ");

    let pico_dia = pico_mes_dia[1];
    let pico_mes = pico_mes_dia[0];

    let pico_mes_nome = "";

    switch (pico_mes) {

        case "Jan":     pico_mes_nome = "Janeiro";     break;
        case "Fev":     pico_mes_nome = "Fevereiro";     break;
        case "Mar":     pico_mes_nome = "Março";     break;
        case "Abr":     pico_mes_nome = "Abril";     break;
        case "Mai":     pico_mes_nome = "Maio";     break;
        case "Jun":     pico_mes_nome = "Junho";     break;
        case "Jul":     pico_mes_nome = "Julho";     break;
        case "Ago":     pico_mes_nome = "Agosto";     break;
        case "Set":     pico_mes_nome = "Setembro";     break;
        case "Out":     pico_mes_nome = "Outubro";     break;
        case "Nov":     pico_mes_nome = "Novembro";     break;
        case "Dez":     pico_mes_nome = "Dezembro";     break;

        default:        pico_mes_nome = "Mês inválido";    break;

    }

    let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;

    let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");

    console.log("Nome: ".padEnd(30, ".") + nome_chuva);
    console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
    console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
    console.log("\n");

}

//TEMPLATE STRING 

let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}

//TAMANHO DE STRING 

let nome = "Isabela";
let frase = nome + " está aprendendo Javascript";

let tamanho_nome = nome.length;
let frase_nome = frase.length;

console.log(tamanho_nome); // 7
console.log(frase_nome); // 34

let cep = "23010-090";

if ( cep.length != 9 ){

    console.log("O CEP deve ter 9 caracteres");

}

//LETRAS MAIUSCULAS E MINUSCULAS 

let programador_1 = "Flávia";
let programador_2 = "Rogério";

console.log(programador_1.toUpperCase()); // FLÁVIA

console.log(programador_2.toLowerCase()); // rogério

let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}

//REMOVENDO ESPAÇOS EM BRANCO NO INICIO E NO FIM DE UMA STRING

let nome = "   Diego     ";

let resultado = nome.trim();

console.log(resultado); // Diego

let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}

console.log(telefone_1); // (99) 99999-9999
console.log(telefone_2); //    (99) 99999-9999

//PREENCHENDO STRINGS 

let label_aluno = "Aluno";
let valor_aluno = "Edmilson";

let label_grau = "Grau de escolaridade"
let valor_grau = "Ensino Médio Completo";

console.log(label_aluno.padStart(20, " ") + ": " + valor_aluno);

console.log(label_grau.padStart(20, " ") + ": " + valor_grau);

//                Aluno: Edmilson
// Grau de escolaridade: Ensino Médio Completo

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome + valor_nome );
console.log( label_profissao + valor_profissao );
console.log( label_endereco + valor_endereco );

// Nome:Jorge Luiz
// Profissão:Professor
// Endereço:Rua Cruzeiro do Sul

let label_nome = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let valor_profissao = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log( label_nome.padEnd(25, '.') + valor_nome );
console.log( label_profissao.padEnd(25, '.') + valor_profissao );
console.log( label_endereco.padEnd(25, '.') + valor_endereco );

// Nome:....................Jorge Luiz
// Profissão:...............Professor
// Endereço:................Rua Cruzeiro do Sul

//SUBSTITUINDO PARTES DE STRING 

let texto = "A linguagem PHP é muito poderosa";
let resultado = texto.replace("PHP", "JavaScript");

console.log(resultado); // A linguagem JavaScript é muito poderosa

let texto = "Gabriel adora JavaScript! Ele faz exercícios de JavaScript todos os dias para aprender mais.";

let resultado = texto.replace("JavaScript", "JS");

console.log(resultado); // Gabriel adora JS! Ele faz exercícios de JavaScript todos os dias para aprender mais.

let texto = "O Rio de Janeiro é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!";

let resultado = texto.replace("Rio de Janeiro", "RJ");

console.log(resultado);

// O RJ é uma das cidades mais bonitas do mundo! Essa cidade possui muitos pontos turísticos e inúmeras opções de lazer. Quem vive nessa cidade é muito privilegiado!

//RETORNANDO PARTES DE UMA STRING 

let frase = "Estou aprendendo JavaScript na DevMedia";

let resultado = frase.substr(17, 10);

console.log(resultado); // JavaScript

let frase = "Eu sou programador JavaScript";

let resultado = frase.substring(7, 18);

console.log(resultado); // programador

let frase = "Ana é especialista em JavaScript";

let substring_1 = frase.substr(6, 12);

console.log(substring_1); // especialista

let frase = "Ana é especialista em JavaScript";

let substring_1 = frase.substring(6, 12);

console.log(substring_1); // especi

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substr(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo); // Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência ...

//PROCURANDO SUBSTRING DENTRO DE UMA STRING 

let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");

console.log(posicao); // 14

let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
let posicao = frase.indexOf("esperança");

console.log(posicao); // -1

let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); // venda de passaporte falso

//SEPARANDO STRING EM PARTES 

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

let paises_array = paises_string.split(" ");

console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]

let cores_string = "vermelho,azul,branco,cinza,roxo";

let cores_array = cores_string.split(",");

console.log(cores_array); // (5) ["vermelho", "azul", "branco", "cinza", "roxo"]

let nome_completo = "Ana Mendes da Silva";

let array = nome_completo.split(" ");

let nome = array[0];

console.log("Olá " + nome + ", seja bem vindo(a)"); // Olá Ana, seja bem vindo(a)

