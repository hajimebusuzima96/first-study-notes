<?php
/*Variáveis no PHP

A declaração de variáveis em PHP é bastante simples. Como a linguagem é fracamente tipada, 
não é necessário informar o tipo de dado na declaração. Sintaxe de declaração de variável: */

$variavel; 

// variável do tipo String
$nome = 'Meu nome 123';

// variável do tipo inteiro
$ano = 2017;

// variável do tipo float
$pi = 3.14159265;

// variável do tipo booleano
$sim = true; 

/*Nomeação de variáveis

É necessário ser feita respeitando algumas regras e convenções:

Não iniciar o nome com números;
Não utilizar espaços em branco;
Não utilizar caracteres especiais, somente underline.
Criar nomes relevantes para facilitar o entendimento do código;
Devem ser declaradas em minúsculo. Caso sejam nomes compostos, a primeira letra de todas as 
palavras, menos da primeira, deve ser maiúscula (ex: dataAniversario) ou separe-as pelo 
caractere underline (ex.: data_Aniversario); */

/*Variáveis dinâmicas (Variáveis variáveis)

Com o PHP podemos criar novas variáveis definindo como o nome dessas o conteúdo de outra. 
Para isso devemos utilizar o símbolo $$ seguido do nome da variável que contém o nome para atribuição.

Exemplo de criação de variável dinâmica: */

//Variavel $nome recebe o valor “variavel”
$nome = 'variavel';

//Declaração da nova variável. O identificador será o conteúdo de $nome
$$nome = 'DevMedia';

//Exibe o conteúdo de $variavel
echo $variavel;


/*Variáveis de classe

Ao declarar uma variável dentro de uma classe, antes do nome atribuído é comum 
especificar o modificador de acesso.

Sintaxe de declaração de variável em uma classe: */

modificador_de_acesso $variavel

/*Como PHP é uma linguagem Orientada a Objetos, lembre-se que é com os modificadores de 
acesso que encapsulamos os atributos e métodos de uma classe.

Exemplos de declaração de variáveis/atributos em uma classe:
 */

class Exemplo {
    private $variavelPrivada = 'Private';
    public $variavelPublica = 'Public';
    protected $variavelProtegida = 'Protected';
} 

//Exemplo prático de variáveis 

// Declaração das variáveis
$nome_usuario = 'Meu nome';  // A variável recebe o valor Meu nome, do tipo String
$lote = 87; // A variável recebe o valor 87, do tipo int
$sim = true; // A variável recebe o valor true, do tipo boolean
$valor = 1.14; // A variável recebe o valor 1.14, do tipo float

// Declaração variáveis variáveis
$nome = 'variavel';  // A variável recebe o valor variavel, do tipo String
$$nome = 'meu valor'; //$$nome terá como nome o valor de $nome, sendo $variável 


//-------------------------------------------------------------------------------------------------- 


//CONSTANTES 

/*define()
A função define() é a opção mais conhecida do PHP para criar constantes. Utilizamos essa 
função quando precisamos declarar uma constante com escopo global, isto é, fora do escopo 
de uma classe. Exemplo de uso na Listagem 1. */

define('TEXTO', 'meu texto');
//Fora do escopo de uma classe 

/*Também é possível criar constantes dentro de funções. Contudo, essa função pode ser executada 
apenas uma vez, caso contrário um erro será gerado. A constante definida dessa forma ficará 
disponível apenas após a execução da função, sendo criada em tempo de execução.*/

function definir_max(){
    define("MAX", 10); //Criar constante dentro de uma função
}
  
definir_max();

function definir_max() {
    define("MAX", 10);
  }
  
  //Cria a constante declarada na função
  definir_max();
  
  //Exibe o conteúdo da constante
  echo(MAX); 

/*const
Outra opção para declarar constantes é utilizar a palavra reservada const. Com ela podemos 
criar constantes dentro e fora de uma classe. Até a versão anterior ao PHP 5.6, no entanto,
const só podia ser aplicada dentro de classes. */

const NOME = 'Alex';  //Fora do escopo de classe

class Empresa {
      const NOME_EMPRESA = 'DevMedia'; //Dentro do escopo de classe
} 

/*Assim, declaramos duas constantes: NOME e NOME_EMPRESA.

O acesso aos valores dessas constantes também é bastante simples. */ 

const NOME = 'Alex';  //Fora do escopo de classe

class Empresa {
      const NOME_EMPRESA = 'DevMedia'; //Dentro do escopo de classe
}

//Acessa constante definida em escopo global
echo NOME;

//Acessa constante definida em escopo de classe
echo Empresa::NOME_EMPRESA; 

/*define() ou const?
Com essas opções, é importante saber quando utilizar cada uma.

define()
Quando é preciso criar a constante fora do escopo de uma classe (Programação Estruturada);
Quando o ideal é definir a constante em tempo de execução;
Também pode ser declarada dentro de estruturas de condição e repetição
const
Quando é preciso criar a constante dentro do escopo de uma classe (Programação Orientada a Objetos);
Quando o ideal é definir a constante em tempo de compilação.
Nomeação de constantes
Ao nomear uma constante é importante respeitar algumas regras e convenções:

Não iniciar o nome com números;
Não utilizar espaços em branco;
Não utilizar caracteres especiais. Somente underline é permitido;
Definir nomes relevantes, para facilitar o entendimento do código;
Utilizar letras maiúsculas, facilitando a distinção em relação às variáveis.
Constantes mágicas
O PHP oferece algumas constantes especiais que visam facilitar algumas tarefas do dia a dia 
do programador, por exemplo. Chamadas de constantes mágicas, elas têm o valor definido conforme 
o contexto de uso. Geralmente exibem informações sobre o arquivo, diretório, classe, função em
que foram declaradas. 

Constante mágica	Definição
__LINE__	        Conterá o número da linha do script na qual ela foi declarada.
__FILE__	        Conterá o caminho completo para o arquivo PHP no qual ela foi declarada.
__DIR__	            Conterá o diretório do arquivo no qual ela foi declarada.
__FUNCTION__	    Conterá o nome da função na qual ela foi declarada.
__CLASS__	        Conterá o nome da classe na qual ela foi declarada.
__METHOD__	        Conterá o nome da classe e do método no qual ela foi declarada.
__NAMESPACE__	    Conterá o nome namespace no qual ela foi declarada.
__TRAIT__	        Conterá o nome do trait no qual ela foi declarada.
NomeDaClasse::class	Conterá o nome completo da classe no qual ela foi declarada.

*/ 



/*Para demonstrar mais alguns exemplos de como declarar e utilizar constantes em PHP, 
observe as possibilidades a seguir. */

//Declaração das constantes
define( 'NOME', 'Alex Sander' ); //Declarada a constante NOME com o valor Alex Sander, do tipo String
define ('ALTURA', 1.76); //Declarada a constante ALTURA com o valor 1.76, do tipo float
define('ATIVO', true); //Declarada a constante ATIVO com o valor true, do tipo boolean

const ATIVO = true; //Declarada a constante ATIVO com o valor true, do tipo boolean

//Declaração da classe Empresa
class Empresa {
  const NOME_EMPRESA = 'DevMedia'; //Declarada a constante NOME_EMPRESA com o valor DevMedia, do tipo String
  const ANO = 2017; //Declarada a constante ANO com o valor 2007, do tipo int
}

echo __FILE__; //Impresso a constante mágica __FILE__ que exibirá o caminho completo do arquivo PHP utilizado

echo ATIVO; /* É impresso o valor 1, como ATIVO é do tipo boolean o PHP o
             converte o true para 1 e caso fosse false o valor seria 0 */ 

             






?>