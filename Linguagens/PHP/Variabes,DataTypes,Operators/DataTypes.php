<?php

/*O PHP utiliza checagem de tipos dinâmica. Em outras palavras, uma variável pode conter 
valores de diferentes tipos em diferentes momentos da execução do script.

Os tipos de dados suportados por esta linguagem são divididos em dois grupos:

Escalares
Inteiro
Ponto flutuante
String
Booleanos
Compostos
Array
Objeto
Iterable
NULL
resource
callable
 */

/*BOOLEAN*/

$noite = TRUE;
$chuva = FALSE;

if($noite == TRUE)
   echo "Está de noite.";
else
   echo "Está de dia.";

if($chuva == TRUE)
   echo "Está chovendo.";
else
   echo "Não está chovendo."; 

/*------------------------------------------

Devido a instrução IF validar um valor booleano, o trecho acima poderia ser reduzido 
retirando-se os sinais de igualdade e a palavra TRUE, ficando, por exemplo, if($noite).
*/

$noite = TRUE;
$chuva = FALSE;

if($noite)
   echo "Está de noite.";
else
   echo "Está de dia.";

if($chuva)
   echo "Está chovendo.";
else
   echo "Não está chovendo.";


/*No PHP podemos utilizar valores não booleanos em um IF. Para que isso aconteça o PHP vai 
converter o valor em um booleano. Os seguintes valores serão convertidos para FALSE: 
"0", 0, 0.0, "" (string vazia), [] (array sem elementos), NULL, variáveis não definidas. 
Todos os demais valores serão convertidos para TRUE.

Na Listagem 3 vemos os valores que serão convertidos para false. Nela nenhum dos códigos 
dentro dos ifs serão executados.*/


// Variável não definida
if($variavel){
    echo "$variavel é FALSE nesse contexto";
  }
  
  if(0){
    echo "0 é FALSE nesse contexto";
  }
  
  if("0"){
    echo "String '0' é FALSE nesse contexto";
  }
  
  if(null){
    echo "Null é FALSE nesse contexto";
  }
  
  // Array vazio
  if([]){
    echo "Array vazio é FALSE nesse contexto";
  }

/*Inteiros (integer ou long)
Vamos começar a entender o tipo de dado INTEIRO, que no caso do PHP pode ser INTEGER ou LONG. 
A seguir temos alguns exemplos:

1234 – Inteiro positivo da base decimal.
-2345 – Inteiro negativo na base decimal.
0234 – Inteiro na base octal-simbolizado pelo 0# equivale a 156 decimal.
0x34 – Inteiro na base hexadecimal (simbolizado # pelo 0x) – equivale a 52 decimal.
Veja os exemplos mostrados acima. */

$tipo = 1234;
$tipo = -2345;
$tipo = 0234;
$tipo = 0x34; 

/*Números em ponto flutuante (double ou float)
Os tipos de dados de ponto flutuante são os números reais, ou seja, inteiros ou 
fracionários. */

$tipo = 1.543;
$tipo = 23e4;//  (equivale a 230.000) 

/*String
O tipo de dados STRING é uma cadeia de caracteres alfanuméricos 
(letras, números e caracteres especiais). O tipo STRING pode ser utilizado de duas maneiras:

Utilizando aspas simples o valor da variável será exatamente o texto contido entra as aspas, 
com exceção de: \\ e \’.
Utilizando aspas duplas qualquer variável ou caractere de escape será expandido antes de ser
 atribuído. */

$testando = "Olá Mundo Novo";
$testando1 = '--- $testando ---';
echo $testando1;

$testando = "Olá Mundo Novo";
$testando1 = "--- $testando ---";
echo $testando1;

/*O valor de uma string pode ser convertido para um tipo numérico (int ou float) em uma operação 
matemática se ele for um número válido. */

$numero = 15; //tipo inteiro
$string = "15"; //tipo string

echo $numero + $string; //Resultado igual a 30 

/*Nesse caso, a variável $string recebeu o valor "15", que foi convertido para 15 na adição, 
fazendo que o valor 30 seja impresso.

Caso o valor da variável seja um texto com os caracteres '.', 'e', ou 'E', o mesmo será 
convertido para os tipos float ou double, dependendo do quão grande for o número - double possui
 o dobro das casas decimais de float.  */

$var = 15; //tipo inteiro
$var2 = "15.5"; //tipo String

echo $var + $var2; //Resultado igual a 30.5

/*Arrays
Tipo de dados arrays ou vetores, são uma lista de valores que podem armazenar dados de diversos tipos. 
No PHP podem ser observados como mapeamentos ou como vetores indexados.

Em vetores simples, cada elemento é identificado apenas pelo seu índice na lista, 
enquanto em arrays indexados, são dados identificadores específicos aos elementos. */

$vetor [1] = "Alemanha ";
$vetor [2] = "Italia ";
$vetor [3] = "França";
$vetor ["testando"] = 1;

$vetor = array(1 => "Alemanha", 2 => "Italia", 3 => "França", "testando" => 1);

$vetorPaises = array("Alemanha", "Italia", "França", "Noruega");
echo $vetorPaises[1]; 

/*Objetos
É um tipo de dado que pode ser inicializado utilizando o comando o NEW para instanciar uma 
classe para uma variável, veja o exemplo na Listagem 10. Como não é o foco desse artigo, não 
entraremos em detalhes com relação à Programação Orientada a Objetos no PHP, onde esse 
tipo de dados tem mais sentido prático. */

class CD
{
   var $titulo;
   var $banda;
   var $ano_lancamento;
}

$disco = new CD();
   $disco ->titulo = "The Number of the Beast";
   $disco ->banda = "Iron Maiden";
   $disco ->ano_lancamento = 1982; 



?>