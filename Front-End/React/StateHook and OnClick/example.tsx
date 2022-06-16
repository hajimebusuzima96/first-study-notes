/*
Como vimos na aula anterior, nossa aplicação funciona da seguinte forma:


O usuário clica no botão Gerar número;

Um número aleatório substitui o número 0.

Para chegarmos nesse resultado precisamos entender o conceito de State Hook e o evento onClick.

State Hook

Utilizamos State Hook sempre que precisamos que uma variável seja alterada 
automaticamente na nossa tela (variável de estado).

Com o State Hook basicamente criamos uma variável e uma maneira do React 
entender que ela foi alterada (uma função atrelada a variável),
No nosso exemplo criaremos uma variável de estado e a inserimos dentro
do código JSX do nosso componente,

Dessa forma o valor exibido será o da variável numeroAleatorio e,
por ser uma variável de estado, será atualizada sempre que necessário

Evento onClick
É comum um botão executar uma ação ao ser clicado, sempre disparada pelo evento onClick.

Na nossa aplicação queremos que um número aleatório seja gerado e exibido na tela toda 
vez que clicarmos no botão

Para que isso seja possível precisamos criar essa ação, ou seja,
vamos criar uma função e associá-la ao evento onClick do botão

Sempre que o botão for clicado gerará um número aleatório e 
atualizará a variável numeroAleatorio na página.


Basicamente nosso projeto está dividido em dois componentes


1: App - o componente principal da nossa aplicação;
2: PaginaInicial - o corpo da nossa aplicação.

*/