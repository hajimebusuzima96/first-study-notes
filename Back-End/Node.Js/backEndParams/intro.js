/*
Conhecer o processo de recebimento de parâmetros na API é essencial
na construção de aplicações que necessitam de interação entre back-end
e front-end e através de requisições e respostas podemos construir
aplicações mais complexas e inteligentes

A troca de informações entre front-end e back-end é parte essencial
na construção de uma aplicação inteligente e saber como tratar uma 
requisição é parte importante desse processo:

*/

app.get('/', (req, res) => {
    console.log(req.query);
    res.json({mensagem: 'parâmetro recebido pelo servidor'});
    });


/*
Como vimos, é possível receber parâmetros na API através de requisições. 
Agora, veremos como tratar os parâmetros que recebemos para podermos 
utilizá-los na construção de aplicações


Refatorando o código

Legal, conseguimos chegar ao objetivo que era enviar dados do front-end para API.
Agora, vamos refatorar o nosso código, deixando-o mais organizado, da forma que
seria em um sistema real,

*/ 

function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}

exports.efetuarCalculoIMC = efetuarCalculoIMC; 


const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);

    res.json({imc: imc});
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
}); 


/*
Saber como tratar corretamente os parâmetros é essencial para 
construção de aplicações que requerem interação entre o front-end
e a API back-end. Também é importante estar sempre de olho em como
o código pode ser melhorado, e sendo necessário, efetuar uma refatoração:

app.get('/', (req, res) => {
let peso = req.query.peso;
let altura = req.query.altura;

let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);

res.json({imc: imc});
});


Na aula anterior vimos como tratar os parâmetros enviados pelo 
front-end na nossa API e também como deixar nosso código mais organizado
através da refatoração. Agora, vamos aprender a enviar de volta para o
front-end um JSON com mais de uma chave

Conferindo na prática
Agora que entendemos como criamos um JSON com mais de uma chave,
vamos ver o uso disso na prática


*/ 


const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
    let status = calculadoraIMC.retornaStatusIMC(imc);

    let json = {imc: imc, status: status};

    res.json(json);
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});


function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura);

    return imc;
}

function retornaStatusIMC(imc)
{
    let status;

    if(imc < 18.5)
    {
        status = 'Abaixo do peso';
    }
    else if(imc >= 18.5 && imc < 24.9)
    {
        status = 'Peso Normal';
    }
    else if(imc >= 24.9 && imc < 30)
    {
        status = 'Acima do peso';
    }
    else
    {
        status = 'Obeso';
    }

    return status;
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornaStatusIMC = retornaStatusIMC;

/*
Na maioria dos sistemas que você vai desenvolver na sua carreira como
programador você vai trabalhar com JSONs que possuem mais de uma chave.
Por isso, saber trabalhar com JSON de múltiplas chaves é de grande
importância no aprendizado do programador Node:

{nome: ‘Jack Joyce’, telefone: ‘(21) 99999-9999’}
*/