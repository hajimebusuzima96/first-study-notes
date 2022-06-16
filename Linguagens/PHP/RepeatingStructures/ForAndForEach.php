<?php 

/*For
O for é a estrutura de repetição do PHP que utilizamos quando sabemos a quantidade de 
repetições que devem ser executadas.

Sintaxe do for */

for (expressão 1; expressão 2; expressão 3) {
    // bloco de código
} 


for ($i=0; $i < 10; $i++) {
    echo $i."<br>";
} 

/*Foreach
O foreach é uma simplificação do operador FOR para se trabalhar em coleções de dados, 
ou seja, vetores e matrizes. Ele permite acessar cada elemento individualmente 
iterando sobre toda a coleção e sem a necessidade de informação de índices.

Por exemplo, supondo que fosse preciso percorrer um vetor com alguns elementos com o FOR.
Seria necessário utilizar um contador para servir também de índice para acessar cada elemento, 
*/

$vetor = array(1, 2, 3, 4, 5);
for($i = 0; $i < 5; $i++)
{
    $item = $vetor[$i];
    echo $item;
} 

foreach(vetor as variável)
{
//variável representa um elemento do vetor a cada iteração
} 

$vetor = array(1, 2, 3, 4, 5);
foreach($vetor as $item)
{
    echo $item;
}

/*Break
As estruturas de repetição possuem um comando para finalizar um loop caso seja necessário, 
o comando break. Com ele podemos interromper a execução de um loop a qualquer momento.

Exemplo de uso:
*/

$pararLoop = 9;

for($numero = 0; ; $numero++){
    if($numero == $pararLoop){
		break;
    }
    echo $numero."<br>";
} 


/*Continue
Além do break, podemos declarar a palavra reservada continue em uma estrutura de repetição. 
Quando executada, os comandos subsequentes do bloco de código serão desconsiderados 
e uma nova iteração iniciada.

Exemplo de uso:
*/

for($i = 0; $i < 10; $i++){
    if($i % 2 == 0){
        continue;
    }
    echo $i."<br>";
} 


/*Suponha que você precisa apresentar ao usuário o total da soma dos valores de uma 
coleção de números. Para programar esse código, podemos utilizar a estrutura de repetição for.

Exemplo de uso:
*/

$colecao = [1, 3, 6, 9, 13];
$soma = 0;
for($i = 0; $j = count($colecao); $i < $j; $i++){
    $soma += $colecao[$i];
}
echo $soma; 





?>