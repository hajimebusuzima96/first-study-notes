<?php 

/*String é um dos quatro tipos de dados escalares do PHP, além de int, float e boolean. 
Para entendermos melhor, tipo escalar é aquele que armazena apenas um valor. Então, 
caso você esteja vindo da linguagem C, onde string é um array de caracteres, saiba
que no PHP não é assim. String também não é um tipo por referência, como seria em Java/Python.
*/

//Declaração de uma string com aspas simples
$nome = 'João';

//Declaração de uma string com aspas duplas
$sobrenome = "Silva"; 


/*echo
É utilizado para imprimir uma string, assim como variáveis ou constantes.
É necessário apenas declarar o comando echo seguido do conteúdo que deseja 
imprimir como vemos no Código 2 o exemplo de sua utilização.
*/

$nome = 'João';
$sobrenome = 'Silva';

//Impressão das duas variáveis
echo $nome,$sobrenome; 


/*print
O print tem a mesma funcionalidade do comando echo, sendo a sua sintaxe composta pela palavra 
reservada print e o argumento entre parênteses,*/

$nome = 'João';
$sobrenome = 'Silva';

//Erro ao executar
print ($nome,$sobrenome);

//Comandos válidos
print ($nome);
print ($sobrenome); 


/*Veremos agora as quatro formas de especificar uma string, suas características e 
regras de utilização.

Aspas simples
Aspas duplas
Heredoc
Nowdoc
*/

/*Aspas simples
São utilizadas para especificar uma string e na declaração de uma variável, 
constante ou com comandos de impressão.*/

//String sendo impressa
echo 'linguagem PHP'; 

$nome = 'PHP';

echo 'Minha linguagem favorita é $nome'; 

/*Aspas duplas
As aspas duplas terão como finalidade especificar que determinados conjuntos de caracteres 
são do tipo string. Neste tipo de especificação o valor de uma variável será impresso*/

$nome = 'PHP';

echo "Minha linguagem favorita é $nome"; 


/*Heredoc
É a forma de especificação de strings sem o uso de aspas. Sua sintaxe é composta pelo operador
<<< seguido de um identificador. Esta combinação informa ao PHP que o conteúdo a ser definido 
é uma string, e para informar ao interpretador o fim da sintaxe é utilizado o mesmo identificador.
*/

$nome = 'PHP';

//Será impressa string
echo <<<ABC
Minha linguagem favorita é $nome //o valor da variável será impresso
ABC; 

/*Sintaxe
A nomeação do identificador deve conter somente caracteres alfanuméricos e sublinhados 
e iniciar com um caractere não numérico ou sublinhado.

O identificador de fechamento precisa começar na primeira coluna da linha. 
Assim como uso das aspas duplas, o heredoc também exibirá o conteúdo de uma variável.

*/

/*Nowdoc
Especificar uma string com o nowdoc segue o mesmo formato do heredoc, 
tendo como diferença que o valor de uma variável especificada na string não será impresso.

Sua sintaxe é composta pelo operador <<< seguido de um identificador entre aspas simples. 
Para delimitar o encerramento da sintaxe não é necessário que o identificador 
esteja entre aspas simples, */

$nome = 'PHP';

//Será impressa a string definida
echo <<<'ABC'
Minha linguagem favorita é o $nome //o valor da variável não será impresso
ABC; 


/*Interpretação de variáveis
Sempre que uma string for especificada entre aspas duplas ou heredoc, 
o valor das variáveis será interpretado. Chamamos isso de interpolação de strings, 
quando combinamos o texto com variáveis. Quando o sinal de cifrão $ for identificado
numa string o interpretador do PHP tentará obter o nome de uma variável por meio 
da sequência de caracteres da string,
*/

$nome = 'PHP';

echo "$nome é a minha linguagem favorita"; 

/*Sintaxe simples
Para que o interpretador PHP não realize o processo de descobrir o nome de uma determinada 
variável, podemos envolver seu nome com {} para delimitar os identificadores. 
Com esta sintaxe informaremos ao PHP qual será o nome da variável sem que ele 
necessite percorrer a cadeia de caracteres e verificar possíveis nomes.
*/

$nome = 'PHP';
echo "${nome} é a minha linguagem favorita"; 

/*Sintaxe complexa
É utilizado para variáveis escalares, elementos de um array ou propriedade de um objeto. 
Diferentemente da sintaxe simples, o uso das {} será utilizado em toda a expressão e não 
apenas para delimitar o nome da variável,
*/

$nome = 'PHP';
echo "{$nome} é a minha linguagem favorita"; 


/*Manipulação de strings
O PHP permite por meio de algumas funcionalidades da linguagem manipular o conteúdo de uma string. 
Podemos acessar e modificar seus caracteres conforme sua posição, onde cada caractere e 
espaços em branco são considerados como uma posição.

A posição dos elementos é organizada de forma sequencial, 
crescente da esquerda para a direita, onde o primeiro caractere tem o valor 0 como referência.
*/

$nome = 'PHP';

//Acesso ao primeiro caractere da variável nome
$primeiro_caractere = $nome[0];

//Modificação da variável nome
$nome[1] = 'P';
echo $nome; 

//O PHP também possui algumas funções específicas para a manipulação de strings 

/*Funções	    Característica
strlen()	    Retorna o tamanho de uma string
ucwords	        Converte para maiúsculo o primeiro caractere de cada palavra
ucfirst	        Converte para maiúsculo o primeiro caractere da string
trim	        Retira o espaço no início e final de uma string
substr	        Retorna uma parte de uma string
str_replace	    Substitui um texto dentro de uma string
substr_replace	Substitui um texto dentro de uma parte de uma string
strtoupper	    Converte uma string para maiúscula
strtolower	    Converte uma string para minúscula 

*/

$nome = 'Linguagem PHP';
$nome_2 = ' Linguagem Java ';

//será impressa a quantidade de caracteres da string (13)
echo strlen($nome);

//Converte o primeiro caractere de cada palavra para maiúsculo
echo ucwords($nome);

//Converte o primeiro caractere para maiúsculo
echo ucfirst($nome);

//Converte a string para minúscula
echo strtolower($nome);

//Converte a string para maiúscula
echo strtoupper($nome);

//Substitui a string Linguagem pela string Amo
echo str_replace('Linguagem', 'Amo', $nome);

//Insere na primeira posição da string os caracteres PHP
echo substr_replace($nome, 'PHP', 0, 0);

//Será retornada parte da string
echo substr($nome, 1, 5);

//Retira o espaço no início e no final de uma string
echo trim($nome_2); 

/*substr()
Seu funcionamento é um pouco diferente das demais linguagens, 
então vamos falar mais sobre ela. O primeiro parâmetro que ela recebe é a string da 
qual desejamos extrair uma substring. O segundo é START, que indicará a posição 
do caractere inicial da substring. O terceiro é o LENGTH, que define quantos 
caracteres a partir de START serão extraídos.
*/

/*str_replace()
Fica mais fácil entender o que essa função faz nomeando os seus parâmetros, que são os seguintes:
*/

str_replace(SEARCH, REPLACE, SUBJECT);
 


/*Dessa forma, str_replace() vai substituir na string SUBJECT todas as ocorrências de SEARCH 
por REPLACE.

search: Este parâmetro consiste em receber um valor, uma string, que será usado para 
comparar se existe uma correspondência na string que queremos substituir*/

//Resultado Lucas Gomes
echo str_replace('Silva', 'Gomes', 'Lucas Silva'); 

//replace: Este parâmetro receberá o valor que substituirá o valor que definimos no parâmetro SEARCH 

//Resultado Sandro Silva
echo str_replace('Lucas', 'Sandro', 'Lucas Silva'); 

//subject: Este parâmetro informaremos a string que substituiremos o valor definido em REPLACE 

$nome = “Lucas Silva;
//Resultado Sandro Gomes
echo str_replace($nome, 'Sandro Gomes', $nome); 

/*substr_replace()
Essa função nos permite substituir parte de uma string e assim criar uma nova. Ela possui quatro parâmetros, 
sendo três deles essenciais para seu funcionamento e um opcional,
*/

substr_replace(STRING, REPLACEMENT, START, LENGHT);
 

/*string: É o parâmetro que informa qual será a string a sofrer algum tipo de substituição.

replacement: É o novo valor a ser acrescentado em string.

start: Este parâmetro receberá o valor inicial onde a substituição ocorrerá. Esse valor pode ser positivo, negativo ou zero.

Se o valor for positivo, a contagem dos caracteres iniciará da esquerda para direita.*/ 

echo substr_replace("CARRO", "CASA", 1);
 

/*A substituição ocorrerá após a primeira letra(C) e o resultado será CCASA

Se o valor for negativo, a contagem dos caracteres iniciará da direita para esquerda. Diferentemente de quando o valor é positivo, a posição inicial não será 0, mas sim -1,*/ 


echo substr_replace("CARRO", "CASA", -1);
 

/*Se utilizarmos o mesmo exemplo feito no Código 19, tendo -1 como valor do parâmetro, o primeiro caractere da direita para esquerda será alterado, resultando em CARRCASA.

lenght: É um parâmetro opcional que especifica o tamanho da string a ser substituída. Caso seja utilizado há três regras importantes que, mediante o valor recebido, mudam seu comportamento: se for positivo, negativo ou zero.

Se o valor for positivo, ele representará o tamanho da string a ser substituída, */ 

echo substr_replace("CARRO", "CASA", 1, 1);
 

/*Como o LENGHT e START foram definidos em 1, o segundo caractere da string será substituído pelo valor definido no parâmetro replacement, que resultará na string CCASARRO. Se o valor for negativo, 
o tamanho da string a ser substituída será contado da direita para esquerda,*/

echo substr_replace("CARRO", "CASA", 1, -1);
 

/*Como o valor informado foi negativo, ele representará o número de caracteres do final para 
o início da String que não serão substituídos. Conforme no Código 22 LENGTH é igual a 
-1 que corresponde ao último caractere da string, O, logo serão substituídos os caracteres 
entre o caractere C e O, valor do parâmetro START (1) e valor do REPLAMECENT(-1) respectivamente, 
tendo como resultado CCASAO.

Se o valor for zero, o valor definido no parâmetro replacement será inserido na string na 
posição informada no parâmetro start,
*/

echo substr_replace("CARRO", "CASA", 1, 0);
 


/*A string CASA será inserida após o caractere C, pois no parâmetro start foi definido que a substituição 
será iniciada no caractere de posição 1, que retornará CCASAARRO.

Além da manipulação de strings que o PHP permite, também poderemos converter outros tipos 
de dados para o tipo string.*/

/*Conversão para strings
A conversão em string é feita de forma automática no escopo de uma expressão onde uma string 
é necessária. O uso das funções echo ou print realizam esse tipo de conversão, 
mesmo quando o valor de uma variável é comparado com uma string.

Um valor pode ser convertido em uma string utilizando o modificador (string) ou a função strval().*/

/*Modificador (string)
Este modificador é utilizado para converter tipos de dados para string. Tem como sintaxe a palavra 
reservado string entre ().*/

$var = 15;

//O valor de $var é convertido para string
$var_2 = (string)$var; 


/*Função strval()
Esta função tem como objetivo converter para string o valor de uma variável. 
Sua sintaxe é composta do uso da palavra reservada strval recebendo como 
parâmetro a variável que terá seu valor convertido entre ()*/

$var = 15;

//O valor de $var é convertido para string
$var_2 = strval($var); 


//Veremos agora como é feita a conversão dos tipos booleano, inteiro e ponto flutuante para string. 


/*booleano para string
TRUE: é convertido para a string "1".
FALSE: é convertido para "" (uma string vazia).*/ 

$var = true;
$var_2 = false;

//O valor de $var é convertido para string
$var_3 = strval($var);

//O valor de $var_2 é convertido para string
$var_3 = strval($var_2); 


/*Inteiro para string
O tipo de dado inteiro pode ser convertido para o tipo de dado string onde, após a conversão de um determinado número, 
ele passará a ser representado de forma textual.*/

$var = 15;

//O valor de $var é convertido para string
$var_2 = (string)$var; 


/*Ponto flutuante para string
O tipo de dados ponto flutuante pode ser convertido para uma string, 
onde a conversão passará a ser representado de forma textual,*/

$var = 1.5;

//O valor de $var é convertido para string
$var_2 = (string)$var; 





?> 