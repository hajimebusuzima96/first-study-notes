<?php 

/*Chamamos de fluxo de controle a ordem na qual cada declaração em um programa é 
interpretada e executada. Em estruturas como for, foreach, while, do-while ou switch, 
o fluxo de controle retorna à primeira declaração após a última ser executada, até que
uma condição seja avaliada como falsa. Os comandos break e continue oferecem maior 
controle sobre tais estruturas, alterando o fluxo de controle para a próxima iteração 
ou encerrando todo ciclo de repetições. 
*/

/*Break

Break encerra uma estrutura de repetição imediatamente. Geralmente usamos 
if/else para determinar o momento em que essa condição de encerramento será executada.

A sintaxe do comando do break é esta: 
*/

$i = 0;
while ($i++ < 5) {
    if ($i == 3) break;
    echo $i . "\n";
} 

/*Continue
Continue pula a iteração atual, ignorando todo o código declarado abaixo dele, 
dentro da estrutura de repetição. Geralmente utilizamos if/else para determinar 
o momento em que esse comando deverá ser executado.

A sintaxe do comando continue é esta: 
*/

$i = 0;
while ($i++ < 5) {
    if ($i == 3) continue;
    echo $i . "\n";
} 

/*Interrompendo vários laços
O Break aceita como argumento o número de estruturas aninhadas a serem interrompidas, 
sendo 1 seu valor padrão.

No código abaixo encerramos a execução de três while imediatamente após imprimir o valor “1”. 
Como resultado serão impressos apenas os valores “3 2 1”.  
*/

$i = 0;
while ($i++ < 3) {
    echo "3\n";
    while (1) {
        echo "2\n";
        while (1) {
            echo "1\n";
            break 3;
        }
        echo "Essa linha nunca vai ser exibida\n";
    }
    echo "Nem essa linha\n";
} 


/*Continue também aceita um argumento numérico opcional que diz quantos níveis de laços aninhados 
devem seguir para a próxima iteração. O valor padrão é 1, afetando apenas o laço em cujo escopo o 
comando está declarado.

No código abaixo saltamos para o início do primeiro while após imprimir o valor “1”. 
Como resultado serão impressos apenas os valores “3 2 1 3 2 1 3 2 1 ”. 
*/

$i = 0;
while ($i++ < 3) {
    echo "3\n";
    while (1) {
        echo "2\n";
        while (1) {
            echo "1\n";
            continue 3;
        }
        echo "Essa linha nunca vai ser exibida\n";
    }
    echo "Nem essa linha\n";
} 

/*Comportamento do Switch
Diferentemente de outras linguagens, no PHP switch é considerada uma estrutura de repetição. 
Portanto, se switch está dentro de um for, ou qualquer outra estrutura de repetição, continue 
2 também afetará o fluxo de execução em mais de um nível.

Como exemplo, no código abaixo os comandos continue 2 e break 2 impedirão que o valor “X” 
seja impresso em todas as iterações de while. Como resultado serão impressos apenas os 
valores “1a X 2c 3e X 4g”. 
*/

$i = 0;
while ($i++ < 4) {
    switch ($i) {
         case 1:
               echo $i . "a\n";
               continue;
               echo $i . "b\n";
         case 2:
               echo $i . "c\n";
               continue 2;
               echo $i . "d\n";
         case 3:
               echo $i . "e\n";
               break;
               echo $i . "f\n";
         case 4:
               echo $i . "g\n";
               break 2;
               echo $i . "h\n";
   }
   echo "X\n";
}

/*No código a seguir apresentamos como buscar um funcionário pelo seu id, encerrando 
o foreach após esse valor ser encontrado. Dessa forma impedimos que todo o array seja 
processado desnecessariamente, poupando recursos. 
*/

$funcionarios = array(
    array('id' => 1, 'nome' => 'João', 'salario' => 5000),
    array('id' => 22, 'nome' => 'Mauro', 'salario' => 560),
    array('id' => 8, 'nome' => 'Alice', 'salario' => 4300),
    );
  
  foreach ($funcionarios as $i => $funcionario) {
    if ($funcionario['id'] == 22) {
          $busca = $funcionario;
          break;
    }
  }
  
  if (isset($busca)) {
    echo "Funcionário encontrado: {$busca['nome']} - {$busca['id']}";
  } else {
    echo "Funcionário não encontrado";
  } 

/*A seguir vemos como aplicar uma bonificação de 10% a funcionários com salário menor que 
R$5000,00, durante a iteração de todos os dados em um array. Logo após, são impressos os 
dados com o resultado de cada soma e o nome do funcionário. */

$funcionarios = array(
    array('id' => 1, 'nome' => 'João', 'salario' => 5000),
    array('id' => 22, 'nome' => 'Mauro', 'salario' => 560),
    array('id' => 8, 'nome' => 'Alice', 'salario' => 4300),
    );
  
  foreach ($funcionarios as $i => $funcionario) {
    if ($funcionario['salario'] >= 5000) {
          continue;
    }
  
    $funcionarios[$i]['salario'] = $funcionario['salario'] + ($funcionario['salario'] * 0.1);
  }
  
  foreach ($funcionarios as $funcionario) {
    echo $funcionario["nome"]." $".$funcionario["salario"]."\n";
  } 

  


?>