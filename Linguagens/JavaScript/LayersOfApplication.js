//REFATORAÇÃO 

// CÓDIGO UTILIZADO NA AULA 

function converteCelsiusParaFahrenheit(celsius)
{
    let fahrenheit;

    fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

function retornaStatusTemperaturaFahrenheit(fahrenheit)
{
    let status;

    if(fahrenheit >= 99)
    {
        status = 'Temperatura alta';
    }
    else
    {
        status = 'Temperatura normal';
    }

    return status;
}

let celsius = 25;

let resultado = converteCelsiusParaFahrenheit(celsius);
let statusResultado = retornaStatusTemperaturaFahrenheit(resultado);

console.log(resultado+'ºF');
console.log(statusResultado);


//CÓDIGO DO ARQUIVO index.js 

import converteCelsiusParaFahrenheit from './converteTemperatura.js';
import retornaStatusTemperaturaFahrenheit from './statusTemperatura.js';

let celsius = 25;

let resultado = converteCelsiusParaFahrenheit(celsius);
let statusResultado = retornaStatusTemperaturaFahrenheit(resultado);

console.log(resultado+'ºF');
console.log(statusResultado);

//CÓDIGO DO ARQUIVO converteTemperatura.js 

function converteCelsiusParaFahrenheit(celsius)
{
    let fahrenheit;

    fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

export default converteCelsiusParaFahrenheit;

// CÓDIGO DO ARQUIVO statusTemperatura.js 

function retornaStatusTemperaturaFahrenheit(fahrenheit)
{
    let status;

    if(fahrenheit >= 99)
    {
        status = 'Temperatura alta';
    }
    else
    {
        status = 'Temperatura normal';
    }

    return status;
}

export default retornaStatusTemperaturaFahrenheit;

//DIVIDINDO UMA APLICAÇÃO EM CAMADAS 

//CÓDIGO DO ARQUIVO index.js 

import {validaPeso, validaAltura} from './pesoAlturaValidacao.js';
import {calculaIMC, retornaStatusIMC} from './calculadoraIMC.js';

let peso = 78;
let altura = 1.72;

let verificaPesoValido = validaPeso(peso);
let verificaAlturaValida = validaAltura(altura);

if(verificaPesoValido && verificaAlturaValida)
{
    let resultado = calculaIMC(peso, altura);
    let statusIMC = retornaStatusIMC(resultado);

    console.log("Seu IMC é "+resultado+" e você está "+statusIMC);
}
else
{
    console.log("Peso e altura devem ser maiores que zero");
} 

//CÓDIGO DO ARQUIVO calculadoraIMC.js 

function calculaIMC(peso, altura)
{

    let imc = peso / (altura * altura);
    return imc;
}

function retornaStatusIMC(imc)
{
    let status;

    if(imc < 18.5)
    {
        status = 'abaixo do peso';
    }
    else if(imc > 18.5 && imc < 24.9)
    {
        status = 'peso normal';
    }
    else if(imc > 24.9 && imc < 30)
    {
        status = 'acima do peso';
    }
    else
    {
        status = 'obeso';
    }

    return status;
}

export { calculaIMC, retornaStatusIMC }

//CÓDIGO DO ARQUIVO pesoAlturaValidacao.js 

function validaPeso(peso)
{
    let pesoValido = false;

    if(peso > 0)
    {
        pesoValido = true;
    }

    return pesoValido;
}

function validaAltura(altura)
{
    let alturaValida = false;

    if(altura > 0)
    {
        alturaValida = true;
    }

    return alturaValida;
}

export { validaPeso , validaAltura }

//CÓDIGO DO ARQUIVO index.js 

import {converteParaReal, converteParaEuro} from './converteMoedas.js';
import {formataReal, formataEuro, formataDolar} from './formataMoedasConvertidas.js';

let conversor = 'real';

let dolar = '5.00';
let valor_convertido;

if(conversor == 'real')
{
    valor_convertido = converteParaReal(dolar);
    valor_convertido = formataReal(valor_convertido);
}
else if(conversor == 'euro')
{
    valor_convertido = converteParaEuro(dolar);
    valor_convertido = formataEuro(valor_convertido);
}

console.log("Valor em Dólar: "+formataDolar(dolar));
console.log("Valor convertido: "+valor_convertido);

//CÓDIGO DO ARQUIVO converteMoedas.js 

import {converteParaReal, converteParaEuro} from './converteMoedas.js';
import {formataReal, formataEuro, formataDolar} from './formataMoedasConvertidas.js';

let conversor = 'real';

let dolar = '5.00';
let valor_convertido;

if(conversor == 'real')
{
    valor_convertido = converteParaReal(dolar);
    valor_convertido = formataReal(valor_convertido);
}
else if(conversor == 'euro')
{
    valor_convertido = converteParaEuro(dolar);
    valor_convertido = formataEuro(valor_convertido);
}

console.log("Valor em Dólar: "+formataDolar(dolar));
console.log("Valor convertido: "+valor_convertido); 

//CÓDIGO DO ARQUIVO formataMoedasConvertidas.js 

function formataDolar(dolar)
{
    let valor_formatado = '$ '+dolar;

    return valor_formatado;
}

function formataReal(real)
{
    let valor_formatado = 'R$ '+real;

    return valor_formatado;
}

function formataEuro(euro)
{
    let valor_formatado = ' € '+euro;

    return valor_formatado;
}

export {formataDolar, formataReal, formataEuro}; 


//CÓDIGO DO ARQUIVO index.js 

import retornaSerieDia from './retornoSerie.js';

let data = new Date();
let diaSemana = data.getDay();

let serieDoDia = retornaSerieDia(diaSemana);

console.log("Serie do dia: "+serieDoDia);

//CÓDIGO DO ARQUIVO retornoSerie.js 

let serie = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaSerieDia(indexSerie)
{
    return serie[indexSerie];
}

export default retornaSerieDia;

//REFATORANDO CÓDIGO - SÉRIE DO DIA 

//CÓDIGO DO ARQUIVO index.js 

import retornaSerieDia from './retornoSerie.js';

let serieDoDia = retornaSerieDia();

console.log("Serie do dia: "+serieDoDia);

//CÓDIGO DO ARQUIVO retornoSerie.js 

import retornaDiaSemana from './diaSemana.js';

let listaSeries = ['Smallville', 'WandaVision', 'Loki', 'Gothan', 'Arrow', 'Flash', 'DC Legends'];

function retornaNomeSerie(dia)
{
    return listaSeries[dia];
}

function retornaSerieDia()
{
    let diaSemana = retornaDiaSemana();
    let serie = retornaNomeSerie(diaSemana);

    return serie;
}

export default retornaSerieDia; 

//CÓDIGO DO ARQUIVO diaSemana.js 

function retornaDiaSemana()
{
    let data = new Date();
    let dia = data.getDay();

    return dia;
}

export default retornaDiaSemana; 


