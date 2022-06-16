// Declaração da classe HelloWorld
class HelloWorld{
  // Atributo mensagem
  String mensagem;
  // Método Saudacao
  Saudacao() {
    print(mensagem);
  }
}
// método main é o ponto
// de partida do programa
main(){
  // criando uma instância
  // da classe HelloWorld
  var hello = HelloWorld();
  // atribuindo valor
  // ao atributo mensagem
  hello.mensagem = "Hello World!";
  // chamada ao método Saudacao
  hello.Saudacao();
}