main() {
// declara��o da cole��o sequencia
var sequencia = [1,2,3,4,5];
 
// declara��o da vari�vel indiceSequencia
int indiceSequencia = 0;
 
// estrutura while com a condi��o
// se a vari�vel indiceSequencia for menor que 5
while(indiceSequencia < 5) {
   
  // estrutura if avalia se o elemento da
  // cole��o sequencia com o indice igual
  // ao valor atual da variavel indiceSequencia
  // dividido por 2 retorna resto igual a 0
  if (sequencia[indiceSequencia] % 2 == 0) {
    // incrementa em 1 a vari�vel indiceSequencia
    indiceSequencia++;
    // comando continue avan�a
    // para a intera��o com o pr�ximo item
    // da cole��o sequencia
    continue;
  }
 
  // exibe no prompt de comando o valor
  // do item da cole��o sequencia com
  // �ndice igual ao valor atual de
  // indiceSequencia
  print(sequencia[indiceSequencia]);
  // incrementa em 1 a vari�vel indiceSequencia
  indiceSequencia++;
}
}