<?php

/*$_GET
Formulários enviados pelo método GET passam o valor de seus campos 
através de parâmetros inseridos na URL. Os valores desses parâmetros, 
por sua vez, podem ser acessados através da variável $_GET. $_GET é um 
array nativo, já disponível no ambiente de desenvolvimento PHP, cujas 
chaves são associadas aos nomes dos parâmetros presentes na URL.*/

 $nome = isset($_GET["nome"]) ? $_GET["nome"] : "";
 $email = isset($_GET["email"]) ? $_GET["email"] : "";

 echo "Nome: ".$nome."<br>";
 echo "Email: ".$email."<br><br>";


?>

<form method="get">
  Nome: <input type="text" name="nome      value="<?=$nome?>"><br><br>
  Email: <input type="text" name="email      value="<?=$email?>"><br><br>
  <input type="submit" name="submit" value="Enviar">
</form> 
--------------------------------------------------------------------------------------------------

<?php

/*$_POST
Formulários enviados pelo método POST, passam o valor de seus campos por parâmetros 
no corpo da requisição. Quando um formulário é enviado, algumas informações trafegam
 do cliente para o servidor. Parte dessas informações são metadados sobre a própria 
 requisição, como seu método de envio, se GET ou POST, URL de destino, etc. No caso POST, 
 também estão presentes entre esses dados os valores dos campos do formulário, que podem 
 ser acessados no servidor através da variável $_POST, nativa do PHP, que é um array 
 associativo, no qual cada chave representa o nome de um campo no formulário, e valor 
 associado a essa chave é o valor do campo no formulário. Observe a Figura 2.*/

$nome = isset($_POST["nome"]) ? $_POST["nome"] : "";
$email = isset($_POST["email"]) ? $_POST["email"] : "";
echo "Nome: ".$nome."<br>";
echo "Email: ".$email."<br><br>";
?>

<form method="post">
  Nome: <input type="text" name="nome"
     value="<?=$nome?>"><br><br>
  Email: <input type="text" name="email"
     value="<?=$email?>"><br><br>
  <input type="submit" name="submit" value="Enviar">
</form> 

Exemplo prático
No código a seguir apresentamos a representação de um sistema de busca. 
Nela o usuário poderá informar um termo, que será exibido na tela após ser 
enviado o formulário. Os dados enviados serão obtidos através do array $_GET, 
de acordo com o método definido no atributo method no formulário.

<form method="get">
  Busca: <input type="text" name="texto"><br><br>
  <input type="submit" name="submit" value="Enviar">
</form>
<?php
if (isset($_GET["texto"])) {
  echo "Você buscou por: ".$_GET["texto"];
}
?>


<form method="post">
  Digite o email: <input type="text" name="email"><br><br>
  <input type="submit" name="submit" value="Enviar">
</form>
<?php
if (isset($_POST["email"])) {
  echo "Instruções de recuperação de senha enviadas para: ".$_POST["email"];
}
?> 





