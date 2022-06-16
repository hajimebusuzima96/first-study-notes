<?php 

/*While
O while é a estrutura de repetição mais simples do PHP. 
Com ele informamos que um bloco de código deve ser repetido enquanto a 
condição declarada for verdadeira.

Sintaxe do while:
*/

while (condição) {
    // bloco de código
} 

$i = 1;
while ($i <= 10) {
    echo $i;
    $i++;
} 


/*Em PHP também podemos declarar o while utilizando a sintaxe alternativa, 
com “dois pontos” e endwhile.

Exemplo de uso:
*/

$i = 1;
while ($i <= 10):
    echo $i;
    $i++;
endwhile; 


/*Do-While
O loop do-while tem comportamento parecido com o while, 
diferenciando-se somente na validação do loop, que é feita no final de cada iteração.

Sintaxe do do-while:
*/

do {
    //bloco de código
} while (condição); 


$i = 1;
do {
    echo $i;
    $i++;
} while ($i < 11); 

/*Break
Podemos utilizar nas estruturas de repetição um comando para finalizar um loop caso seja necessário,
o comando break. Com ele é possível interromper a execução do loop a qualquer momento.
*/

$i = 0;
while (true) {
    if ($i == 5) {
        break;
    }
    echo $i;
    $i++;
} 


/*Ao executar este código o loop declarado dentro do while será processado até que a condição 
criada para chamar o break seja verdadeira; neste caso, i ser igual a 5. O resultado será a 
impressão dos valores de 0 a 4.*/

/*Continue
Além do break, também podemos utilizar nas estruturas de repetição um comando que permite
avançar para a próxima iteração do loop, o continue. Com ele conseguimos interromper a 
execução de uma iteração sem finalizar o loop inteiro.

Exemplo de uso:
*/ 

$i = 0;
while($i < 10){
    $i++;
    if($i % 2 == 0){
        continue;
    }
    echo $i;
} 


/*Suponha que você precisa apresentar ao usuário os valores inteiros entre dois números. 
Para programar esse código, podemos utilizar a estrutura de repetição while.

Exemplo de uso:
*/

$minimo = 10;
$maximo = 30;
$numero = $minimo + 1;

while ( $numero < $maximo) {
    echo $numero;
    $numero++;
} 






?>