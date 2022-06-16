/*
Quando executamos o comando generate para criar o componente contador, 
o Angular criou quatro arquivos:

contador.component.css, onde fica o estilo CSS do componente;
contador.component.spec.ts, onde ficam os testes unitários;
contador.component.html, onde fica o template HTML do componente. 
No curso de olá mundo nós manipulamos esse arquivo para que nossa mensagem fosse exibida.
contador.component.ts, que contém a classe de controle do nosso contador,
onde colocaremos os dados e a lógica do componente.
O único dado da classe será o valor do contador. Podemos criar um atributo 
chamado numero e inicializá-lo com o número zero.
*/

public numero = 0;


/*
Abrindo o arquivo contador.component.html podemos apagar o 
seu conteúdo e adicionar uma tag H1. Dentro dela podemos vincular 
o atributo numero criado anteriormente na classe do componente.
*/

<h1>{{ numero }}</h1>

/*
Dessa forma, sempre que o conteúdo do atributo numero mudar, o Angular 
atualizará a interface automaticamente. Essa técnica também é conhecida 
como Data Binding, pois estamos ligando os dados da classe com a interface.

Uma dúvida muito comum quando chegamos nessa etapa é como que o Angular sabe 
qual template pertence a qual componente. Assim, é necessário abrir o contador.component.ts.

Essa informação está contida no decorator da classe do componente, no atributo 
templateUrl, que indica o caminho até o arquivo de template, e é assim que o 
Angular sabe a que classe pertence um template. Durante o desenvolvimento de 
aplicações, raramente precisaremos modificar essa informação.

Para exibir um atributo no template use {{ atributo }}.
*/

