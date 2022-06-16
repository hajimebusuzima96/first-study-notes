<?php 
/*Os operadores condicionais são um dos recursos mais básicos da programação, 
e são essenciais no desenvolvimento da lógica de qualquer sistema ou aplicação. 
Eles são utilizados quando é necessário que determinado código seja executado 
apenas se atender a uma condição.

Neste documento apresentaremos as estruturas de condição if/else, else if e operador ternário. 
*/

/*If/else

O if/else é um operador condicional utilizado quando desejamos executar um bloco de 
código apenas se determinada condição for atendida, por exemplo, exibir um conteúdo 
apenas se o usuário for maior de idade.

Sintaxe do if/else: 
*/

if ($condicao)
{
// código se a condição for atendida
}
else
{
// código se a condição não for atendida
} 

$a = 4;
$b = 2;

if ($a/$b == 2)
{
echo "O resultado da divisão é 2";
}
else
{
echo "O resultado da divisão não é 2";
} 


/*Else if
Além do if/else, existe também a condicional elseif ou else if. 
Essa opção é utilizada caso seja necessário verificar duas ou mais condições.

Sintaxe do if/else com elseif: 

*/


if ($condicaoUm)
{
// código se a condiçãoUm for atendida
}
elseif ($condicaoDois)
{
// código se a condiçãoDois for atendida
}
else
{
// código se nenhum das condições forem atendidas
}

$a = 8;
$b = 2;

if ($a/$b==2)
{
echo "O resultado da divisão é 2";
}
elseif ($a/$b==4)
{
echo "O resultado da divisão é 4";
}
else
{
echo "O resultado da divisão não é 2 nem 4";
}

/*Operador ternário
Outra estrutura de condição é o operador ternário, o qual também é chamado de if ternário. 
Em suma, ele é uma versão compacta do if.

Sintaxe do operador ternário: 
*/

$a = 8;
$b = 2;

echo $a/$b == 2 ? "O resultado da divisão é 2" : "O resultado da divisão não é 2";

/*O resultado da execução deste código será a impressão da mensagem “O resultado da divisão não é 2”.

Forma curta ou short form
O operador ternário também possui uma versão ainda mais compacta, chamada de "forma curta" ou short form". A sintaxe da forma curta do operador ternário é:

(condição/codigoUm) ?: codigoDois; 
*/ 

$nome = "Fulano de tal";
$nome = ($nome) ?: "Sem nome";



?>