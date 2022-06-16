<?php 

function soma($num_1, $num_2){

    $total = $num_1 + $num_2;
  
    return $total;
  
} 


/*Um função é declarada pela palavra reservada function seguida do nome da função, 
como vemos na linha 1 do Código 2. Para nomear uma função usamos qualquer sequência
 de caracteres que comece com uma letra ou sublinhado.

O PHP não diferencia letras maiúsculas de minúsculas para o nome de funções, 
ou seja, você pode chamar a função soma() como: soma(), SOMA(), SomA() e todos 
serão reconhecidos como a mesma função. 

O PHP suporta três formas de passagem de argumentos, são elas: por valor (o padrão), 
referência e valores padrões de argumentos.
*/


/*Parâmetros da função por valor
Consiste na passagem de valores para os parâmetros definidos na função. 
Podemos analisar no Código 3 como realizar a passagem por valor. */ 

/*Declaração da função soma
e os parâmetros $num_1 e $num_2*/
function soma($num_1,$num_2){

    $total = $num_1 + $num_2;
  
    return $total;
  
  }
  
  //definido os valores para as variáveis
  echo soma(5,3); 


/*Parâmetros da função por referência
A passagem de argumentos por referência é quando um parâmetro da função 
recebe uma referência para uma variável externa a função. Para que o parâmetro 
definido receba a referência é necessário inserir o & (E comercial) antes dele. 
*/

//Criada a referência em $num_1
function referencia(&$num_1){

    $num_1 *= 5;
  
    //retorno o valor de $num_1 * 5
    return $num_1;
  
  }
  
  $num_2 = 3;
  
  //Execução da função
  referencia($num_2);
  echo $num_2; 


/*Parâmetros da função por valor padrão
Essa forma de passagem de argumentos consiste em definir no momento da declaração da 
função quais serão os valores dos seus parâmetros.  
*/

/*Declaração da função passagem_padrao
e do parâmetro $num_1 já com seu valor definido*/
function passagem_padrao($num_1 = 15){

    return $num_1;
  
  }
  
  //Será impresso o retorno da função - 15
  echo passagem_padrao(); 

/*Retorno da função
Ao escrever uma função é necessário especificar se ela retornará um valor ou não.

Veremos no Código 6 uma função chamada dividir que realiza a divisão entre duas 
variáveis e imprime o resultado dessa operação. 
*/

function dividir($num_1, $num_2){

    $operacao = $num_1 / $num_2;
  
    echo $operacao;
  
  } 

/*Para que seja possível que a função dividir() retorne algum valor é necessário alterá-la 
inserindo a instrução return */

function dividir($num_1, $num_2){

    $operacao = $num_1 / $num_2;
  
    return $operacao;
  
} 

/*Chamada da função
A chamada da função consiste em utilizar a sintaxe nome_função(); para que o PHP interprete qual 
função queremos executar. */

function dividir($num_1, $num_2){

    $opercacao = $num_1 / $num_2;
  
    return $operacao;
  
  }
  
  //Chamada da função
  echo dividir(8,4); 

/*Escopo de variáveis
Numa função podemos utilizar variáveis para realizar operações ou mesmo armazenar 
determinado valor para ser exibido ou retornado por ela. Para tornar uma variável 
externa acessível numa função podemos utilizar a palavra reservada global seguido 
do nome da variável externa. */

$num_1 = 15;

function exemplo($num_2){

  global $num_1;

  $operacao = $num_1 + $num_2;

  return $operacao;

} 

$num_1 = 15;

function exemplo($num_2){

  $operacao= $num_1 / $num_2;

  return $operacao;

}

//Retorna erro
echo exemplo(5); 


/*O PHP também reconhece como erro se tentarmos utilizar uma variável declarada dentro 
do escopo da função numa operação externa a função */

function exemplo($num_1, $num_2){

    $operacao = $num_1 + $num_2;
  
    return $operacao;
  
  }
  
  exemplo(4,6);
  $num_3 = 10;
  
  $operacao_2 = $num_1 + $num_3;
  
  echo $operacao_2; 







?>