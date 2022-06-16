<?php
/*Função Date PHP

A função date() do PHP recebe apenas um parâmetro: o formato de data. 
Por padrão, sempre será mostrada a data do momento atual da execução, 
como mostra o código a seguir:
*/

echo date("d/m/Y");
// 20/06/2015

/*Função time
A função time() do PHP retorna qualquer número de segundos desde a era UNIX, 
que é de 1º de Janeiro de 1970 00:00:00 até a hora atual de execução. 
Este número também é chamado de timestamp UNIX. Para utilizar a função basta declara-la
*/

$nextWeek = time() + (7 * 24 * 60 * 60);
echo 'Now:       '. date('d-m-Y') ."<br>";
echo 'Next Week: '. date('d-m-Y', $nextWeek) ."<br>";
echo 'Next Week: '. date('d-m-Y', strtotime('+1 week')) ."<br>";
// Now: 04-07-2015 à Data atual
// Next Week: 11-07-2015 à Uma semana após a data atual
// Next Week: 11-07-2015 à Uma semana após a data atual utilizando strtotime 

/*Utilizando time() podemos, por exemplo, apresentar em nosso sistema a data atual 
para o usuário, além da data da próxima semana a data de execução do exemplo apresentado.
*/

/*Função strtotime

A função strtotime() recebe como parâmetro uma string de formato de data em inglês e 
tenta analisar esse formato. É como tentar transformar uma frase que possui possíveis 
informações de data em uma data real, como mostra o código a seguir:
*/

echo 'Next Month: '. date('d-m-Y', strtotime('+1 month')) ."<br>";
// Next Month: 04-08-2015 

/*A função date() traz a data atual da execução. Usando a função strtotime() e acrescentando 
+1 month, a mesma interpretará que a função deve retornar a data de execução mais um mês.
*/

/*Função mktime
A função mktime() recebe como parâmetro hora, minuto, segundo, mês, dia e ano, como mostra */

$data = mktime(02,30,00,04,30,1995);
// Mostra 30-04-1995
echo date("d-m-Y", $data)."<br>";

// Mostra 30-04-1995 02:30
echo date("d-m-Y H:i", $data)."<br>";

// Mostra 1995
echo date("Y", $data)."<br>"; 

/*Função DateTime
A função DateTime no PHP permite trabalhar com data e hora como se fossem objetos que podem 
ser facilmente manipulados através de diversos métodos, facilitando a criação de regras de 
negócio com base em datas, além da conversão e a manipulação de diferentes formatos. 
A criação de um objeto da classe DateTime é a maneira mais fácil de manipular datas 
na sua aplicação. 
*/

$atual = new DateTime();
$especifica = new DateTime(' 1990-01-22');
$texto = new DateTime(' +1 month');

print_r($atual);
print_r($especifica);
print_r($texto);

/* DateTime Object ( [date] => 2015-06-20 19:03:45 [timezone_type] => 3 [timezone] => UTC ) 
DateTime Object ( [date] => 1990-01-22 00:00:00 [timezone_type] => 3 [timezone] => UTC ) 
DateTime Object ( [date] => 2015-07-20 19:03:45 [timezone_type] => 3 [timezone] => UTC )
*/ 

/*Veja que $atual é um novo objeto da classe DateTime e, como não é especificado 
nenhum parâmetro, então recebe a data e hora atual da execução. Já $especifica 
recebe o objeto também só que é especificado a data que será mostrada, enquanto 
que $texto recebe o mesmo objeto, só que um mês a frente da data atual da execução.

A partir do momento que o objeto da classe DateTime é instanciado podemos 
transformá-lo em uma string utilizando o método format(). Este método permite 
que se especifique um padrão,
*/

$data = new DateTime();
echo $data->format('d-m-Y H:i:s');
$data = new DateTime('+1 month');
echo $data->format('d-m-Y H:i:s');

// 20-06-2015 19:47:27
// 20-07-2015 19:47:27 

/*Fizemos a mesma coisa que na Listagem 4, só que agora com o “->” acessamos o método 
format e definimos que o formato de nossa data e hora será Dia, mês, ano, Hora, Min e seg.

Podemos também alterar a data do objeto criado através da classe DataTime utilizando o 
método modify(),
*/

$data = new DateTime('22-01-1990');
$data->modify('+1 month');
echo $data->format('d-m-Y H:i:s');

// 22-02-1990 00:00:00 


/*Criamos na $data um objeto da classe DateTime e passamos uma data. 
Com o “->” dizemos para o método modify acrescentar um mês e quando demos 
echo é apresentado a data com um mês acrescido a data que já tínhamos definido.
*/

/*Ajustando a data
Com o objeto da classe DateTime criado podemos alterar apenas a data do objeto,
utilizando para isso o método setDate(), que recebe três parâmetros: o ano, 
o mês e o dia para qual desejamos ajustar,
*/

$data = new DateTime('22-01-1990');
$data->setDate(1995, 3, 9);
echo $data->format('d-m-Y H:i:s');

// 09-03-1995 00:00:00 


/*A $data tem um objeto da classe DateTime recebendo uma data. Através do 
-> acessamos o método setDate() e alteramos a data para 1995, 3, 9.

Caso tenha uma data vinda de um formulário no formato DD/MM/YYYY, 
não é necessário converter o formato da mesma para trabalhar com ela. 
Basta, através do método createFromFormat, especificar o formato que esteja trabalhando.
*/

$data = '09-03-1995';
$data1 = DateTime::createFromFormat("d-m-Y", $data);
echo $data1->format("d-m-Y");
// 09-03-1995 

/*Ajustando o horário
Também podemos alterar apenas o horário do nosso objeto da classe 
DateTime utilizando o método setTime(). O mesmo recebe três parâmetros: 
a hora, os minutos e os segundos, sendo que os segundos é um parâmetro opcional,
*/

$data = new DateTime('22-01-1990');
$data->setTime(9, 15, 44);
echo $data->format('d-m-Y H:i:s');
// 22-01-1990 09:15:44 

/*Ajustando o fuso
Para ajustarmos o fuso horário de um objeto data precisamos criar um novo objeto 
da classe DateTimeZone. Um objeto desta classe representa um fuso horário válido e 
pode ser utilizado junto ao método da classe DateTime,*/

$fuso = new DateTimeZone('America/New_York');
$data = new DateTime('22-01-1990');
$data->setTimezone($fuso);
echo $data->format('d-m-Y H:i:s');
// 21-01-1990 19:00:00 


/*$fuso é um objeto da classe DateTimeZone e recebe como parâmetro o fuso horário. 
$data é um objeto da classe DateTime e nele definimos uma data que, através do método 
setTimezone executamos o $fuso e com o método format() definimos um padrão de formato 
para nossa data e hora.*/

/*Intervalos
Em alguns momentos será necessária a criação e análise de intervalos entre datas. 
Objetos da classe DateInterval representam um intervalo entre datas que pode armazenar 
um tempo (em anos, meses, dias ou horas) ou uma string relativa ao tempo que pode ser 
interpretada pelo construtor da classe DateTime.

Podemos criar intervalos utilizando um padrão que será passado ao método construtor 
da classe DateInterval. O padrão começa com a letra P, de período. A duração de cada
 período é representada por um número inteiro, seguido de um outro identificador de 
 período. Se a duração do período contém horas, usamos o identificador T. 
 Veja a seguir alguns identificadores existentes no PHP:

Y: Anos
M: Meses
D: Dias
W: Semanas
H: Horas
M: Minutos
S: Segundos
Alguns exemplos para entenderem melhor:

P2D: Período de dois dias
P3M: Período de três meses
PT5S: Período de cinco segundos
P3YT8M: Período de três anos e oito minutos
Veja a criação do objeto de intervalo em ação
*/

$intervalo = new DateInterval('P3YT8M');
print_r($intervalo);

/*
 DateInterval Object
  (
    [y] => 3
    [m] => 0
    [d] => 0
    [h] => 0
    [i] => 8
    [s] => 0
    [invert] => 0
    [days] =>
  )
*/ 

/*No exemplo criamos um novo objeto da classe DateInterval e passamos 
omo parâmetro um período de três anos e oito minutos. Utilizando o print_r 
podemos ver perfeitamente o retorno, onde [y] =>3 representa os três anos 
e [i] =>8 representa os oito minutos.

Além de montar um intervalo, podemos formatá-lo utilizando outro padrão, como o a seguir:

%Y: Ano, com dois dígitos;
%y: Ano, com um ou dois dígitos
%M: Mês, com dois dígitos
%m: Mês, com um ou dois dígitos
%D: Dia, com dois dígitos
%d: Dia, com um ou dois dígitos
%a: Total de dias
%H: Hora, com dois dígitos
%h: Hora, com um ou dois dígitos
%I: Minuto, com dois dígitos
%i: Minuto, com um ou dois dígitos
%S: Segundo, com dois dígitos
%s: Segundo, com um ou dois dígitos
%R: Sinal de mais quando for um período positivo, menos quando negativo
%r: Sinal de menos quando for um período negativo, vazio quando positivo
Através do método format() aplicamos o padrão apresentado anteriormente em nosso objeto:
*/

$intervalo = new DateInterval('P2Y4D');
echo $intervalo->format('%y anos e %d dias');
// 2 anos e 4 dias 

/*Diferença entre datas
Quando temos dois objetos da classe DateTime podemos compará-los com o método diff(),
que retorna um objeto da classe DateInterval que também pode ser formato para mostrar
na tela, como mostra o exemplo
*/

$data1 = new DateTime('2011-09-11');
$data2 = new DateTime('2011-10-13');
$intervalo = $data1->diff($data2);
echo $intervalo->format('%R%a dias');
// +32 dias 


/*Criamos $data1 e $data2, da classe DateTime, e passamos uma data. 
Nosso $intervalo utilizando o método diff() faz a diferença de datas 
entre as variáveis data1 e data2. Utilizando o método format é 
retornado para nós a diferença de datas entre nossas variáveis.
*/

/*Comparando datas
Uma das grandes vantagens de se trabalhar com objetos da classe DateTime 
é que podemos compará-los utilizando operadores comuns, como podemos ver nos exemplos
*/

$data1 = new DateTime('2011-09-11');
$data2 = new DateTime('2011-10-13');
var_dump($data1 == $data2);
var_dump($data1 > $data2);
var_dump($data1 < $data2);
// boolean false
// boolean false
// boolean true 

/*Foram criados objetos da classe DateTime e passado a eles datas. 
Com o var_dump fazemos comparações, por exemplo, em var_dump($data 1 > $data2)
perguntamos se $data1 é maior que $data2 e como não é, então foi retornado um boolean false.
*/

/*Somando intervalo a data e horário
A classe DateTime nós traz um método chamado add(), que nos permite acrescentar 
um período de tempo ao objeto DateTime criado*/


$data = new DateTime('2011-09-11');
print_r($data);

$data->add(new DateInterval('P2M5D'));
print_r($data);

/*
 DateTime Object
 (
   [date] => 2011-09-11 00:00:00
   [timezone_type] => 3
   [timezone] => UTC
 )
 DateTime Object
 (
  [date] => 2011-11-16 00:00:00
   timezone_type] => 3
  [timezone] => UTC
 )
*/ 

/*Em $data criamos um novo objeto da classe DateTime e passamos uma data.
Através do print_r apresentamos o resultado e depois com o método add() 
adicionamos a nossa a data um período de dois meses e cinco dias. Note que 
o primeiro resultado é a nossa data que definimos e no outro resultado já 
vem acrescido os meses e os dias que pedimos.*/

/*Subtraindo intervalo a data e horário
Da mesma forma que conseguimos adicionar hora, também podemos subtrair 
um determinado período sobre um objeto da classe DateTime
*/

$data = new DateTime('2011-12-31');
print_r($data);

$data->sub(new DateInterval('P7D'));
print_r($data);
/*
DateTime Object
  (
    [date] => 2011-12-31 00:00:00
    [timezone_type] => 3
    [timezone] => UTC
  )
DateTime Object
  (
    [date] => 2011-12-24 00:00:00
    [timezone_type] => 3
    [timezone] => UTC
  )
*/ 

/*Configuração do Fuso Horário no PHP
Por padrão, o PHP utiliza sempre como fuso horário o valor já configurado 
na máquina onde ele está instalado. Isso pode ser um problema quando você
tem várias aplicações rodando em um mesmo servidor que podem possuir um 
fuso horário diferente. Um exemplo disso é quando queremos atingir um 
público estrangeiro e outro brasileiro. Para especificar a timezone para
cada aplicação utilizamos a função date_default_timezone_set(). 
Esta recebe apenas um parâmetro, que é o identificador de fuso-horário.
Veja a seguir um exemplo.*/

date_default_timezone_set('America/Sao_Paulo');

/*eja que setamos o fuso horário da máquina como sendo de São Paulo.

Os identificadores disponíveis mais comuns são:

America/Rio_Branco;
America/Maceio;
America/Belem;
America/Manaus;
America/Bahia;
America/Fortaleza;
America/Sao_Paulo;
America/Recife;
America/Cuiaba;
America/Campo_Grande;
America/Noronha;
America/Porto_Velho;
America/Boa_Vista;
America_Araguaina;
Brazil/Acre;
Brazil/deNoronha;
Brazil/East;
Brazil/West.
*/ 

/*Datas em outras línguas
Haverá momentos em que nós vamos precisar utilizar as funções de data em nossa aplicação 
e receber os nomes de meses e dias em português ou em outra língua. Nessa situação não 
podemos utilizar a função date() e sim a função strftime(), que permite a criação de 
strings a partir de uma timezone com outras línguas.

O comportamento da strftime() é muito similar à date, tendo apenas um padrão diferente, 
como vemos a seguir:

%e: Dia em número
%a: Dia abreviado
%A: Dia por extenso
%m: Mês em número
%b: Mês abreviado
%B: Mês por extenso
%y: Ano com dois dígitos
%Y: Ano com quadro dígitos
Veja um exemplo simples do comportamento da strftime():
*/

echo strftime("%A");
// Wednesday 

/*Veja que mostramos o dia atual, que no caso é Wednesday. 
Os resultados obtidos vêm de acordo com a data atual de seu computador.

Uma ótima função para se trabalhar com date() é a getlastmod(), 
pois essa função apresenta para o tempo da última modificação na página,
*/

header('Content-type: text/html; charset=UTF-8');
echo "Última Modificação: " .date("F d Y H:i:s", getlastmod());
// Última Modificação: June 24 2015 22:41:53 

/*Utilizamos a função date juntamente com getlastmod para mostrar na página a 
última modificação que ela teve.

Veremos na Listagem 16 uma função que checa se a data está correta. 
Por exemplo, sabemos que o mês de fevereiro é, quase sempre, de 28 dias, 
então, caso o usuário passe um valor que não esteja de acordo com o mês, 
está função barra tal ação.
*/

var_dump(checkdate(12, 31, 2000));
var_dump(checkdate(2, 29, 2001));

// boolean true
// boolean false 

/*Nosso exemplo está no formato (Mês, dia e ano). A função checkdate retorna 
um boolean false ou true. Em nosso primeiro var_dump é passado uma data correta, 
então foi retornado um boolean true. Já no segundo var_dump ocorre o erro, 
pois foi passado como dia 29 para o mês de fevereiro, como no ano de 2000 
fevereiro teve apenas 28 dias, sendo assim, foi retornado um boolean false.

Na Listagem 17 teremos a função getdate, que retorna para um array com dados. 
Por exemplo, qual dia do ano estamos, hora, minuto, e por ai vai.
*/

$today = getdate();
print_r($today);

/*
  Array
(
[seconds] => 42
[minutes] => 18
[hours] => 1
[mday] => 25
[wday] => 4
[mon] => 6
[year] => 2015
[yday] => 175
[weekday] => Thursday
[month] => June
[0] => 1435195122
 )
*/ 

/*Veja que foi retornado um array com os dados atuais da data do computador em 
que foi executado o programa. Além das informações básicas, temos o [yday], 
que é 175, exatamente em qual dia dos 365 dias de 2015 que estamos.

Por último temos a função explode(), que pode ser usada quando queremos dividir uma data.
*/

$data = date("d/m/Y");

$data = explode("/", $data);

list($dia, $mes, $ano) = $data;

$data = "$ano/$mes/$dia";
 echo $data; 

/*Criamos $data que guarda a data atual no formato (Dia, Mês, Ano) 
e ao utilizar a função explode, separamos os dados. Depois criamos 
$dia, $mes, $ano que é armazenado em $data. Com os dados 
guardados apenas passamos as variáveis de acordo com o formato que queremos, que é YYYY/MM/DD.
*/

/*Função idate
A função idate, em conjunto com a strtotime, 
recebe como parâmetro uma string de data em inglês e é interpretada pelo PHP.
*/

$timestamp = strtotime('9st March 1995');
echo idate('m', $timestamp);
// 3 

/*Criamos $timestamp que recebe a função strtotime com as palavras em inglês. 
Utilizando a função idate() passamos o termo m, que significa que queremos que 
o PHP interprete o mês (march) e devolva para nós em número.

Espero que tenham gostado e até a próxima!*/

?>