/*
Já vimos como imprimir o valor do atributo numero e agora veremos como modificá-lo.

Para atualizar o valor exibido para o usuário, basta modificar o valor do atributo numero.
O Angular se encarregará de atualizar a interface:

MODIFICAR

numero = 0

PARA

numero = 1

Voltando no navegador, veremos que o valor foi atualizado.

Para finalizar nosso contador criaremos um botão que, ao ser clicado, 
incrementará o atributo numero.

De volta ao arquivo contador.component.ts do nosso contador, criaremos 
um método incrementar.

Mais a frente, criaremos um botão no template do componente que executará o 
método incrementar todas as vezes que for clicado.

*/

public incrementar (){ }

// A lógica do método incrementar é simples: acessamos o atributo numero e somamos 
// 1 ao seu valor. Podemos fazer isso de duas formas:

this.numero = this.numero + 1;

this.numero++;


// Utilizamos o this para acessar o atributo numero da classe de dentro da própria classe.

// Em seguida, podemos criar o botão no template do componente que o executará.

// Com o método incrementar pronto, podemos criar o botão que executará esse método e 
// para isso, utilizaremos o elemento button do HTML e digitaremos dentro do botão a palavra 
// "incrementar":

<button>Incrementar</button>

/*
Esse botão ainda não possui nenhuma funcionalidade. Para executar o método incrementar 
que criamos anteriormente, utilizaremos o atributo click envolvido em parênteses e 
informaremos o método que queremos executar a cada clique:
*/

(click)=”incrementar()”


/*
Essa técnica também se chama Data Binding. Dessa vez, estamos vinculando o evento de 
clique a um método da classe do componente. Veremos mais sobre eventos nas próximas aulas.

Ao voltar ao navegador veremos que o botão já foi adicionado a interface. Se clicarmos 
nele, o valor do contador será incrementado.

Nesse curso aprendemos que o template do nosso componente é capaz de acessar os 
atributos da classe do componente para exibi-los ao usuário e executar métodos da mesma classe.

Dessa forma, podemos construir interfaces sem misturar a lógica do componente com 
seu template HTML.

No Angular não manipulamos o HTML da página diretamente. Isso é feito alterando 
propriedades do componente.
*/