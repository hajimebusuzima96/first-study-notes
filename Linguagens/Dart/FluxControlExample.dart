main() {
// declaração da coleção sequencia
var sequencia = [1,2,3,4,5];
 
// declaração da variável indiceSequencia
int indiceSequencia = 0;
 
// estrutura while com a condição
// se a variável indiceSequencia for menor que 5
while(indiceSequencia < 5) {
   
  // estrutura if avalia se o elemento da
  // coleção sequencia com o indice igual
  // ao valor atual da variavel indiceSequencia
  // dividido por 2 retorna resto igual a 0
  if (sequencia[indiceSequencia] % 2 == 0) {
    // incrementa em 1 a variável indiceSequencia
    indiceSequencia++;
    // comando continue avança
    // para a interação com o próximo item
    // da coleção sequencia
    continue;
  }
 
  // exibe no prompt de comando o valor
  // do item da coleção sequencia com
  // índice igual ao valor atual de
  // indiceSequencia
  print(sequencia[indiceSequencia]);
  // incrementa em 1 a variável indiceSequencia
  indiceSequencia++;
}
}