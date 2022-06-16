<?php 
/*Os operadores nos permitem modificar ou obter novos valores a partir 
de uma ou mais variáveis. São agrupados segundo o número de valores que aceitam, 
um único valor, dois valores e três valores, conhecidos como Unários, Binários 
e Ternários respectivamente. Veremos neste artigo os principais grupos de 
operadores da linguagem PHP.

Operadores de String
São utilizados para concatenar argumentos, tendo 2 tipos:

Ponto(.) - realiza a concatenação dos argumentos presentes nos lados direito e esquerdo.
Ponto e igual(.=) - realiza a concatenação utilizando uma variável declarada 
anteriormente com o argumento desejado, variável ou não. */

$variavel = "Dev";
$variavel = $variavel . "media! ";

$variavel2 = "Plataforma";
$variavel2 .= " para programadores!";

echo $variavel . $variavel2;

/*Operadores Aritméticos
São aqueles que estudamos na escola, aquelas funções básicas de somar, subtrair,
multiplicar, dividir, etc. Neste caso se os operandos são números(INTEGER e FLOAT) 
podem ser usados normalmente, se forem de outro tipo, seus valores serão convertidos 
antes da realização da operação. Com estes operadores podemos fazer qualquer operação
matemática com tipo de dados numéricos, veja abaixo os operadores aritméticos no PHP:

Adição: (+)
Subtração: (-)
Multiplicação: (*)
Divisão: (/)
Módulo - resto da divisão: (%) 
*/

$num1 = 2;
$num2 = 4;
$num3 = 6;

//Resultado igual a 2
$resposta1 = $num2 - $num1;

//Resultado igual a 8
$resposta2 = $num3 + $num1;

//Resultado igual a 12
$resposta3 = $num1 * $num3;

//Resultado igual a 2
$resposta4 = $num2 / $num1;

//Resultado igual a 2, já que o resto da divisão de 8 por 6 é igual a 2
$resposta5 = $resposta2 % $num3; 


/*Operadores de decremento e incremento
-operando: troca o sinal do operando.
++operando: conhecido como pré-incremento, primeiro incrementa depois realiza a operação.
--operando: conhecido como pré-decremento, primeiro decrementa depois realiza a operação.
operando++: conhecido como pós-incremento, primeiro faz a operação depois incrementa.
operando--: conhecido como pós-decremento, primeiro faz a operação depois decrementa.
*/

$num1 = 2;
$num2 = 4;
$num3 = 6;
$num4 = 8;

//Resultado igual a 3
$resposta1 = ++$num2 - $num1;

//Resultado igual a 8
$resposta2 = $num3-- + $num1;

//Resultado igual a 9
$resposta3 = --$num1 + $num4; 

/*Operadores de atribuição
No caso de operadores de atribuição, o PHP fornece um operador básico e diversos derivados, 
estes sempre retornam um valor atribuído. Nos operadores derivados de atribuição, 
a operação é feita entre os dois operandos, sendo atribuído o resultado ao primeiro. 
Veja a seguir os operadores de atribuição:

Atribuição simples(=)
Atribuição com adição (+=)
Atribuição com subtração (-=)
Atribuição com multiplicação (*=)
Atribuição com divisão (/=)
Atribuição com módulos (%=)
Atribuição com concatenação (.=) 
*/

$num = 10;
$num += 5;

//Declaração das variáveis e atribuições simples
$SOMAR = 0;
$numero1 = 2;
$numero2 = 3;
$numero3 = 4;

//Atribuição com adição
$SOMAR += $numero1;
$SOMAR += $numero2;

//Atribuição com multiplicação
$SOMAR *= $numero3;

//Atribuição com módulos
$SOMAR %= 3;

echo $SOMAR; 

/*Operadores lógicos
Os operadores lógicos trabalham com valores booleanos, com o objetivo de avaliar expressões 
cujo valor pode ser verdadeiro ou falso, ou seja, implementando a lógica booleana.

and(e) – O resultado verdadeiro só será obtido quando ambos dos dados comparados forem verdadeiros.
or(ou) – O resultado verdadeiro só será obtido quando pelo menos um dos dados comparados for verdadeiro.
xor – O resultado verdadeiro só será obtido quando pelo menos um dos dados comparados for verdadeiro, mas não ambos.
!(não) – O resultado verdadeiro só será obtido se o valor dado não for verdadeiro.
&&(e) – Igual ao operador AND.
||(ou) – Igual ao operador OR.
Muito cuidado com a ordem de precedência (ordem de execução), ou você pode ter problemas com resultados, uma informação importante:

&& e || = precedência alta;
and e or = precedência baixa. 
*/

$booleano1 = true;
$booleano2 = false;
$booleano3 = true;

if ($booleano1 and $booleano2) {

  echo "Verdadeiro";

} else {

  //Resultado é falso pois os valores das variáveis são diferentes
  echo "Falso";

}

if ($booleano1 or $booleano2) {

  //Resultado é verdadeiro pois uma das variáveis é verdadeira
  echo "Verdadeiro";

} else {

  echo "Falso";

}

if ($booleano1 xor $booleano3) {

  echo "Verdadeiro";

} else {

  //Resultado é falso pois os valores de ambas as variáveis são verdadeiras
  echo "Falso";

}

if (!$booleano2) {

  //Resultado é verdadeiro pois o valor da variável é falso
  echo "Verdadeiro";

} else {

  echo "Falso";

}

if ($booleano1 && $booleano3) {

  //Resultado é verdadeiro pois ambos os valores das variáveis são verdadeiros
  echo "Verdadeiro";

} else {

  echo "Falso";

}

if (!$booleano1 || !$booleano3) {

  echo "Verdadeiro";

} else {

  //Resultado é falso, pois o valor de ambas as variáveis foram invertidas para falso
  echo "Falso";

} 


/*Operadores de comparação
Operadores de comparação ou condicionais, são aqueles capazes de fazer comparações entre variáveis, 
com eles podemos saber se uma variável é maior que a outra, diferente, etc. Veja abaixo os 
operadores de comparação:

(==) Igual a
(===) Idêntico, e do mesmo tipo de dados
(!=),(<>) Diferente de
(!==) Não idêntico
(<) Menor que
(>) Maior que
(<=) Menor ou igual a
(>=) Maior ou igual a
(<=>) Define um inteiro(-1,0,1) caso o resultado da comparação for menor que, igual ou maior que, 
respectivamente 
*/ 

$numero1 = 15;
$numero2 = 5;
$numero3 = 5;

//Verifica se $numero1 é igual a $numero2
if ($numero1 == $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero1 é diferente de $numero2
if ($numero1 != $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero1 é menor que $numero2
if ($numero1 < $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero3 é maior que $numero1
if ($numero3 > $numero1) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero1 é menor ou igual a $numero2
if ($numero1 <= $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero1 é maior ou igual a $numero2
if ($numero1 >= $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero1 é idêntico a $numero2
if ($numero3 === $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

//Verifica se $numero1 não é idêntico a $numero2
if ($numero1 !== $numero2) {
  echo "Sim";
} else {
  echo "Não";
}

/*Define o inteiro 1 como resultado da comparação,
pois $numero é maior que $numero2*/
if ($numero1 <=> $numero2) {
  echo "Sim";
} else {
  echo "Não";
} 

/*Precedência de operadores
Numa expressão onde é utilizado mais um operador o PHP verifica a precedência de cada um deles, 
onde determinados operadores possuirão menor, igual ou maior prioridade do que os demais. 
Por exemplo, os 20 + 4 * 2, a resposta é 28 e não 48, porque o operador de multiplicação "*" 
tem prioridade maior do que o operador de adição "+".

Os parênteses podem ser utilizados para forçar a precedência, se necessário. 
Assim, (8 - 5) * 3 é avaliado como 9. A tabela seguinte mostrará a precedência 
dos operadores, classificados de cima para baixo, do maior para menor. 
Operadores com a mesma precedência estão na mesma linha, nesses casos a associatividade 
deles decidirá qual ordem eles serão avaliados: 

Associação	    Operadores
não associativo	clone new
esquerda	    [
direita	        **
direita	        ++ -- ~ (int) (float) (string) (array) (object) (bool) @
não associativo	instanceof
direita	        !
esquerda	    * / %
esquerda	    + - .
esquerda	    << >>
não associativo	< <= > >=
não associativo	== != === !== <> <=>
esquerda	    &
esquerda	    ^
esquerda	    |
esquerda	    &&
esquerda	    ||
direita	        ??
esquerda	    ? :
direita	        = += -= *= **= /= .= %= &= |= ^= <<= >>=
esquerda	    and
esquerda	    xor
esquerda	    or

Na tabela que determinados operadores possuem a associatividade a esquerda, 
a direita ou não possuem. Esta associatividade consiste na ordem em que o PHP 
irá interpretará os operadores. Veja nos exemplos a seguir na prática como é o funcionamento:

*/


$a = 2;
$b = 4;
$c = 5;

//Resultado igual 22
$calculo = $a + $b * $c;

//Resultado igual 10
$caclulo_2 = $b / $a * $c;

$d = true;
$e = false;
$f = true;

//Utilização de 2 operadores lógicos
if ($d || $e && $f){

  //Condição

} 

/*Quando operadores tem precedência igual a associatividade será 
efetuda conforme mostrado na tabela de precedência, se irá ser a esquerda ou direita. 
E operadores de igual precedência sem associatividade não podem ser utilizados uns 
próximos aos outros. Veja o exemplo abaixo: */

$a = 2;
$b = 4;
$c = 5;

//Comparação ilegal por serem operadores não associativos
if ($a > $b < $c) {

  //condição

}

//Comparação ilegal por serem operadores não associativos
if ($d == $e !== $f){

  //Condição

} 





?>