// if/else

if (idade >= 16) {
    console.log('Pode votar');
}
else {
    console.log('Não pode votar');
} 

//switch case

switch (ddd) {
    case 11:
        console.log("São Paulo");
        break;
    case 21:
        console.log("Rio de Janeiro")
        break;
} 

// if/else + operadores lógicos 

//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é sábado ou domingo
if(dia_semana == 0 || dia_semana == 6) {
    //Imprime uma mensagem informando o horário de funcionamento
    console.log("Funcionamos apenas de Segunda à Sexta");
}
else
{
    //Do contrário, informa que a loja está aberta
    console.log("Loja aberta");
} 

// if COM IGUALDADE ESTRITA 

var x = "";
var y = 0;

if(x === y) {
    console.log("X e Y são iguais");
}
else {
    console.log("X e Y são diferentes");
}

//IF TERNÁRIO 

var status = nota > 7 ? "Aprovado" : "Reprovado";

var mensagem = (mes == 11 || mes == 12) ? "Promoção" : "Preço normal";


//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica a condição e define o resultado na variável 'status_loja'
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja); 

//CURTO-CIRCUITO 

var aprovado = true;

aprovado && console.log("Parabéns");

//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0 && true;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome);

// SWITCH CASE 

var produto = "Smartphone";

switch(produto)
{
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

var mes = "Janeiro";

switch(mes)
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mês inválido");
        break;
}

