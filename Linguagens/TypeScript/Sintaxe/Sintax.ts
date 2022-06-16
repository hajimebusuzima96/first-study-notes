/*
Uma variável é um meio de armazenar dados em memória. 
Em outras palavras, ela funciona como um container para valores em um programa.

Sintaxe
O TypeScript possui algumas regras sobre o que se deve ou não fazer ao 
declarar uma variável. Veja a lista abaixo:

O nome deve começar com uma letra ou sublinhado (_), nunca com número;
Para o restante do nome apenas letras, números e sublinhado (_) podem ser utilizados. 
Qualquer outro caractere, símbolo ou mesmo espaço é proibido;
Uma variável deve ser declarada antes de ser utilizada;
Use a palavra-chave let para declarar uma variável.
Agora que sabemos as regras, vamos ver no Código alguns exemplos de uso corretos 
e incorretos de nomes de variáveis.
*/ 

//Isso está correto
let funcionario: string = "Eduardo";

//Isso está correto
let funcionario2: string = "Eduardo";

//Isso está correto
let funcionario_2: string = "Eduardo";

//Isso está correto
let _funcionario: string = "Eduardo";

//Isso está incorreto: nome iniciado com número
let 2funcionario: string = "Eduardo";

//Isso está incorreto: nome contém espaço
let funcionario 2: string = "Eduardo";

//Isso está incorreto: nome contém um traço (-)
let funcionario-2: string = "Eduardo";

//Isso está incorreto: nome contém um símbolo (@)
let funcionario@: string = "Eduardo";  

/*
Além das regras que vimos, por ser uma linguagem fortemente tipada, 
o TypeScript requer que as variáveis possuam um tipo na sua declaração,
seja de forma explícita ou por inferência, como vemos nos Códigos
*/

//Variável do tipo string declarada por inferência de tipo
let usuario = "Phil"; 

//Variável do tipo string declarada explicitamente
let usuario: string = "Phil"; 

/*
No Código 2 temos a variável declarada por inferência de tipo. 
Nela vemos o let, que é a palavra-chave utilizada na declaração, 
e usuario, que é o nome da variável. O sinal de igual é utilizado 
para atribuir o valor da variável e em seguida vemos o texto "Phil" 
que é o valor atribuído a ela. Chamamos essa forma de declaração de 
implícita, porque ela não contém o tipo da variável.

O fato de não declararmos o tipo da variável explicitamente não 
significa que ela não possui um tipo, mas este será dado pelo 
compilador de acordo com o valor que ela possui.

A declaração do Código 3 é bem semelhante a primeira, contudo, 
possui apenas uma diferença: a inclusão do separador : entre o 
nome da variável usuario e o seu tipo string. A isso chamamos declaração explícita de tipo.
*/

/*
Inferência de tipo
Como já falamos anteriormente, o TypeScript é uma linguagem fortemente tipada
e isso significa que ao declaramos nossas variáveis precisaremos definir um tipo.
No exemplo que vimos acima notamos que a primeira declaração não possuía o tipo 
string informado explicitamente, mas assumiu esse tipo devido ao seu valor. 
Veja no Código 4 alguns tipos de variáveis sendo definidos por inferência.
*/

//Tipo number será inferido pelo valor 1
let id = 1;

//Tipo string será inferido pelo valor "Eduardo"
let nome = "Eduardo"

//Tipo string será inferido pelo valor "10"
let quantidade = "10"; 


/*
Perceba que no exemplo acima a variável id recebe o tipo number, 
enquanto quantidade recebe string, por causa das aspas.
*/

/*
Momento da declaração
A variável no TypeScript deve ser declarada antes de ser utilizada, como vemos nos Códigos 5 e 6.
*/ 


//Variável declarada
let x;

//Valor atribuído
x = 10; 

//Declaração e atribuição de valor ao mesmo tempo
let x = 10; 

/*
Tentar acessar uma variável que ainda não foi declarada também causará um
erro de compilação, como vemos no Código 7.
*/

//Variável declarada e atribuída
let x = 10;

//Variável utilizada
//y não foi declarado e sim x
console.log(y); 

/*
Note que no primeiro código a declaração da variável ocorreu antes dela ser chamada no console.log,
por isso o código funciona normalmente.

Já no segundo código, a declaração da variável ocorreu após a chamada dela no console.log,
o que ocasionará um erro de compilação.
*/

/*
Utilizando constantes
Existe um outro tipo de declaração de dados semelhante a variável, o qual chamamos de constante.

Assim como a variável, a constante armazena um dado na memória. A diferença é que o valor
da constante não pode ser alterado, com vemos na Figura 1.
*/

//Uma vez definido, o valor será o mesmo durante toda a execução da aplicação e tentar alterar seu valor causará um erro, 

const nome: string = "Marcos";
const aceleracaoGravidade: number = 9.81;

//Aqui ocorrerá um erro de compilação, pois não é possível mudar o valor de uma constante.
aceleracaoGravidade = 9.8; 


/*
Outro ponto importante é que, diferente da variável, 
o valor da constante só pode ser definido no momento da declaração dela, como vemos
*/

//Isso está correto
const aceleracaoGravidade = 9.81; 


//Isso está incorreto, o valor deve ser definido no momento da declaração
const aceleracaoGravidade;
aceleracaoGravidade = 9.81; 

/*O TypeScript recomenda que a palavra-chave const seja utilizada sempre que possível, a menos que o valor da
variável precise mudar. Nesse caso usamos let, como mostra o Código*/ 

//Esse valor nunca será alterado pela aplicação
const aceleracaoGravitacional: number = 9.81;

//Esse valor poderá ser alterado pela aplicação
let velocidadeAtual: number = 0;

valocidadeAtual = 100; 

/*
No Código 11 declaramos a variável aceleracaoGravitacional utilizando const, 
pois o seu valor não será alterado em nenhum momento na aplicação. 
Já a variável velocidadeAtual será alterada, por isso, para ela utilizamos o let
*/

/*
Conclusão
O uso das variáveis é essencial para qualquer linguagem de programação e 
no TypeScript não é diferente, pois é com elas que armazenamos os dados 
que nossa aplicação vai utilizar. Por isso, aprender como usar variáveis 
corretamente é essencial para todos que desejam ser programadores TypeScript.
*/
