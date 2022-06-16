/* na primeira linha usaremos o “action=ope.php” para que o formulário repasse
as informações para a página ope.php */
<form method="post" action="ope.php" id="formlogin" name="formlogin" >
<fieldset id="fie">
<legend>LOGIN</legend><br />
<label>NOME : </label>
// o campo “name” dentro do input e importante,
// pois será ele que armazenará os dados digitados .
<input type="text" name="login" id="login"  /><br />
<label>SENHA :</label>
<input type="password" name="senha" id="senha" /><br />
<input type="submit" value="LOGAR  "  />
</fieldset>
</form>


<?php
// session_start inicia a sessão
session_start();
// as variáveis login e senha recebem os dados digitados na página anterior
$login = $_POST['login'];
$senha = $_POST['senha'];
// as próximas 3 linhas são responsáveis em se conectar com o bando de dados.
$con = mysql_connect("127.0.0.1", "root", "digite a senha do banco aqui") or die
 ("Sem conexão com o servidor");
$select = mysql_select_db("server") or die("Sem acesso ao DB, Entre em
contato com o Administrador, gilson_sales@bytecode.com.br");

// A variavel $result pega as varias $login e $senha, faz uma
//pesquisa na tabela de usuarios
$result = mysql_query("SELECT * FROM `USUARIO`
WHERE `NOME` = '$login' AND `SENHA`= '$senha'");
/* Logo abaixo temos um bloco com if e else, verificando se a variável $result foi
bem sucedida, ou seja se ela estiver encontrado algum registro idêntico o seu valor
será igual a 1, se não, se não tiver registros seu valor será 0. Dependendo do
resultado ele redirecionará para a página site.php ou retornara  para a página
do formulário inicial para que se possa tentar novamente realizar o login */
if(mysql_num_rows ($result) > 0 )
{
$_SESSION['login'] = $login;
$_SESSION['senha'] = $senha;
header('location:site.php');
}
else{
  unset ($_SESSION['login']);
  unset ($_SESSION['senha']);
  header('location:index.php');

  }
?>