// Declara��o da classe HelloWorld
class HelloWorld{
  // Atributo mensagem
  String mensagem;
  // M�todo Saudacao
  Saudacao() {
    print(mensagem);
  }
}
// m�todo main � o ponto
// de partida do programa
main(){
  // criando uma inst�ncia
  // da classe HelloWorld
  var hello = HelloWorld();
  // atribuindo valor
  // ao atributo mensagem
  hello.mensagem = "Hello World!";
  // chamada ao m�todo Saudacao
  hello.Saudacao();
}