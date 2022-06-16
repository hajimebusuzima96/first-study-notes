//OPERADORES ARITMÉTICOS

// +	Soma

// -	Subtração
// -expr.	Inversão (Reverte os sinais de uma expressão)
// *	Multiplicação

// /	Divisão
// ~/	Divisão que retorna apenas a parte inteira do resultado

// %	Módulo (resto de divisão)


main() {
  // soma é igual a 11
  var soma = 4 + 7;
  print('o resultado de soma é ${soma}');

  // subtracao é igual a 7
  var subtracao = 11 - 4;
  print('o resultado de subtração é ${subtracao}');

  // inversao é igual a 5(positivo)
  var inversao = -(-5);
  print('o resultado de inversão é ${inversao}');

  // multiplicacao é igual a 15
  var multiplicacao = 5 * 3;
  print('o resultado de multiplicacao é ${multiplicacao}');

  // divisao é igual a 4
 var divisao = 16 / 4;
  print('o resultado de divisão é ${divisao}');

  // divisao_resultado_inteiro é igual a 2
  var divisao_resultado_inteiro = 5 ~/ 2;
 print('o resultado inteiro de divisão é $ {divisao_resultado_inteiro}');

// modulo é igual a 1
var modulo = 9 % 2;
print('o resto de divisão(modulo) é $ {modulo}');
} 

//-------------------------------------------------------------------------------------------- 

//OPERADORES DE INCREMENTO E DECREMENTO 

// ++var	aumenta o valor da variável em 1(var = var + 1) antes de retornar seu valor
// var++	retorna o valor da variável e depois aumenta seu valor em 1 (var = var + 1)
// --var	diminui o valor da variável em 1 (var = var - 1) antes de retornar seu valor
// var--	retorna o valor da variável e depois diminui seu valor em 1 (var = var - 1) 

var a,b,c,d;

// a vale 0
a = 0;
// aumenta o valor de a em 1
// b recebe o valor de a
// a = 1 e b = 1
b = ++a;

print('valor de a é ${a} e valor de b é ${b}');

// c vale 0
c = 0;
// d recebe o valor de c
// aumenta o valor de c em 1
// c = 1, d = 0
d = c++;

print('valor de c é ${c} e valor de d é ${d}');

// e vale 5, g vale 3
var e = 5, f, g = 3, h;

// diminui o valor de e em 1
// f recebe o valor de e
// e = 4, f = 4
f = --e;

print('valor de e é ${e} e valor de f é ${f}');

// h recebe o valor de g
// diminui o valor de g em 1
// g = 2, h = 3
h = g--;

print('valor de g é ${g} e valor de h é ${h}'); 


//-------------------------------------------------------------------------------------------- 

//OPERADORES RELACIONAIS 

// ==	Verifica a igualdade entre valores
// !=	Verifica a desigualdade entre valores
// >	Verifica se um valor é maior que outro
// <	Verifica se um valor é menor que outro
// >=	Verifica se um valor é maior ou igual que outro
// <=	Verifica se um valor é menor ou igual que outro


var resultado;

 // se 2 é igual a 2
 // resultado recebe true
 resultado = 2 == 2;

 print('Na expressão 2 == 2, o resultado é ${resultado}');

 // se 3 é diferente de 2
// resultado recebe true
resultado = 3 != 2;

print('Na expressão 3 != 2, o resultado é ${resultado}');

// se 5 é maior que 7
// resultado recebe true
resultado = 5 > 7;

print('Na expressão 5 > 7, o resultado é ${resultado}');

// se 6 é menor que 4
// resultado recebe true
resultado = 6 < 4;

print('Na expressão 6 < 4, o resultado é ${resultado}');

// se 9 é maior ou igual a 9
// resultado recebe true
resultado = 9 >= 9;

print('Na expressão 9 >= 9, o resultado é ${resultado}');

// se 7 é menor ou igual a 5
// resultado recebe true
resultado = 7 <= 5;

print('Na expressão 7 <= 5, o resultado é ${resultado}'); 

//-------------------------------------------------------------------------------------------- 

//OPERADORES DE TESTE DE TIPO

// as	Converte de um subtipo válido para um tipo. Ex.: converter de int para num.
// is	Verifica se o valor é de um determinado tipo
// is!	Verifica se o valor não é de um determinado tipo

var resultado, numero = 1;

 // converte a variável numero
 // para o tipo int
 numero as int;

 // verifica se a variável numero
 // é do tipo int
 resultado = (numero is int);
print('Na expressão (numero is int) o resultado é ${resultado}');

// verifica se a variável numero
// não é do tipo double
resultado = numero is! double;
print('Na expressão (numero is! double) o resultado é ${resultado}'); 


//-------------------------------------------------------------------------------------------- 

//OPERADORES DE ATRIBUIÇÃO 

// =	Atribui valor a uma variável
// ??=	Se a variável for nula atribui o valor, senão mantém o valor anterior

// declara a variável “a” e atribui o valor 1
 // declara a variável “b” e não atribui valor
 // o valor de “b” é nulo
 var a = 1, b;

 // se a variável “a” tiver valor nulo
 // atribui o valor 3
 a ??= 3;

// se a variável “b” tiver valor nulo
// atribui o valor 6
b  ??= 6;

print('o valor de a é ${a} e o valor de b é ${b}'); 

// -=	Atribui a subtração entre o valor atual e outro valor
// /=	Atribui a divisão entre o valor atual e outro valor
// %=	Atribui o módulo entre o valor atual e outro valor
// +=	Atribui a soma entre o valor atual e outro valor
// *=	Atribui a multiplicação entre o valor atual e outro valor
// ~/=	Atribui a divisão com resultado inteiro entre o valor atual e outro valor 


//-------------------------------------------------------------------------------------------- 

//OPERADORES LÓGICOS 

// !	Inverte um valor lógico. Se ele for true passa a ser false e se for false passa a ser true.
// ||	Realiza a operação lógica OU entre dois booleanos.
// &&	Realiza a operação lógica E entre dois booleanos.

// declara a variável resultado
// de tipo bool
// e atribui o valor false
bool resultado = false;

// O operador ! muda false para true
resultado = !(false);
// O operador || retorna true porque um dos valores é true
resultado = (true) || (false);
// O operdor && retorna false porque um dos valores é false
resultado = (true) && (false);


// A expressão (6 > 2) retorna true
// Mas o operador ! inverte o resultado para false
resultado = !(6 > 2); // false

// A expressão (6 > 2) retorna true
// e a expressão (3 > 4) retorna false
// O operador || retorna true se uma das
// retornar true
// senão retorna false
resultado = (6 > 2) || (3 > 4); // true

// A expressão (6 > 2) retorna true
// e a expressão (3 > 4) retorna false
// O operador && retorna true se todas
// as expressões retornam true
// senão retorna false
resultado = (6 > 2) && (3 > 4); // false

//-------------------------------------------------------------------------------------------- 

//OPERADORES CONDICIONAIS 


// condição ? expressão1 : expressão2 

// declara a variável nota
 // e atribui o valor 5.9
 var nota = 5.9;

 // declara a variável aprovacao
 // se o valor de nota for maior ou igual que 6
 // aprovacao recebe o valor 'aprovado'
 // senão recebe o valor 'reprovado'
 var aprovacao = (nota >= 6) ? 'aprovado' : 'reprovado';

 print('o aluno com a nota ${nota} está ${aprovacao}');

 // declara a variável valor_recebido
 // e não atribui valor
 // seu valor é nulo
 var valor_recebido;

// declara a variável valor_anterior
// se a variável valor_recebido não tiver valor nulo
// a variável valor_anterior recebe de valor_recebido
// senão valor_anterior recebe 0
var valor_anterior = valor_recebido ?? 0;

print('o valor anterior é ${valor_anterior}'); 

