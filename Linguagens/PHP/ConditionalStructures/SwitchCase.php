<?php 

switch (expressão) {
    case valor1:
        //código a ser executado se a expressão for igual ao valor1
        break;
    case valor2:
        //código a ser executado se a expressão for igual ao valor2
        break;
    case valorN:
        //código a ser executado se a expressão for igual ao valorN
        break;
} 

/*Cases agrupados
Caso um mesmo trecho de código deva ser executado para diferentes condições é 
possível agrupar os cases, da seguinte forma:
*/ 

switch (expressão) {
	case valor1:
	case valor2:
	case valor3:
	   //primeiro código
	   break;
	case valor3:
	   //segundo código
	   break;
} 

/*Default
Dentro do switch também é possível especificar um trecho de código que deve ser executado 
no caso de nenhuma das condições ser atendida. Para esse caso temos o comando default, 
que deve ser adicionado após todos os case, da seguinte forma: */

switch (expressão) {
    case valor1:
          //código referente ao valor1
          break;
    case valor2:
          //código referente ao valor2
          break;
    case valorN:
          //código referente ao valorN
          break;
    default:
          //código caso nenhuma condição seja atendida
          break;
} 

/*Exemplo prático
No código abaixo podemos ver um exemplo prático de uso da estrutura switch/case. 
Nele temos um sistema simples de sorteio simulando um jogo de tabuleiro em que cada 
número representa uma ação:
*/

$sorteio = rand(0,5);

switch($sorteio){
   case 0:
         echo "Você perdeu a vez";
         break;
   case 1:
         echo "Avance 1 casa";
         break;
   case 2:
         echo "Você ganhou um bônus! Avance 3 casas";
         break;
   default:
         echo "Jogue novamente";
         break;
} 






?>