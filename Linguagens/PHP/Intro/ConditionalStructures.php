<?php
/*A condicional if em português seria o "se", que pode realizar verificações 
como "Se o valor do $_POST estiver vazio faça algo". E a condicional else,
 é a continuação do fluxo do if, em português seria o "senão", deixando a 
 verificação como “Se o valor do $_POST estiver vazio, faça algo, senão, faça algo”. */


if($_POST) {
   echo $_POST['distancia'];
   echo "<br>";
   echo $_POST['autonomia'];
} else {
  echo "Erro ao receber informações do formulário!";
} 




?>