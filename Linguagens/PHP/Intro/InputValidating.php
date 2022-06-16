<?php 
/*Função is_numeric

Para verificar se um determinado valor é numérico, no PHP podemos utilizar a função chamada 
is_numeric. Essa função recebe um determinado valor e verifica se o mesmo é um valor numérico, 
retornando verdadeiro ou falso. Dessa forma, podemos utilizar essa função para validar 
a distância e a autonomia.

Como é necessário que tanto a distância quanto a autonomia sejam valores numéricos, 
será necessário que a condicional atenda a essas duas particularidades. Para isso 
utilizaremos o operador condicional && ("e"), deixando a instrução como “Se o valor da 
distância for numérico e o valor da autonomia for numérico, faça algo”. */


$distancia     = $_POST['distancia'];
$autonomia = $_POST['autonomia'];

if (is_numeric($autonomia) && is_numeric($distancia)) {
  //dados numéricos recebidos
} else {
  echo "Erro na entrada de dados! Valores não numéricos";
}


/*Agora que os dados que chegam do formulário já são valores validados como numéricos, 
precisamos garantir que tanto o valor da distância quanto da autonomia do carro sejam 
maiores que zero. Para isso utilizaremos uma segunda verificação condicional. */

if (is_numeric($autonomia) && is_numeric($distancia)){
  if (($distancia > 0) && ($autonomia > 0)) {
    echo "Dados válidos!";
  } else {
    echo "Valores com preenchimento numérico incorreto!
       (menor ou igual a zero)";
  }
} else {
 echo "Valores com preenchimento incorreto! (não numéricos)";
}

/*Atualmente a aplicação desenvolvida já atende ao requisito de realizar o cálculo 
do gasto com o consumo de cada combustível e de retornar essa informação para o usuário, 
porém, esse valor ainda não está formado na melhor forma possível.

Para deixar esse resultado com um limite de casas decimais, e com o separador decimal 
e de milhar na forma correta, utilizada no Brasil, utilizamos a função chamada number_format. */

$consumoGasolina = ($distancia / $autonomia ) * $valorGasolina;
$consumoGasolina = number_format($consumoGasolina,2,',','.');

/*Atualmente a aplicação desenvolvida utilizada o comando echo para toda saída de código na tela.

Observe que para exibir o valor do cálculo, estamos utilizando uma saída de código para cada 
combustível.

Para evitar a repetição dessa rotina na aplicação e facilitar a utilização de tags HTML 
na estilização da mensagem, iremos atribuir as informações em variáveis. */

$mensagem = "O valor total gasto será de:";
$mensagem.= "<ul>";
$mensagem.= "<li><b>Gasolina: R$ </b>".$consumoGasolina."</li>";
$mensagem.= "<li><b>Álcool: R$ </b>".$consumoAlcool."</li>";
$mensagem.= "<li><b>Díesel: R$ </b>".$consumoDiesel."</li>";
$mensagem.= "</ul>"; 



?>