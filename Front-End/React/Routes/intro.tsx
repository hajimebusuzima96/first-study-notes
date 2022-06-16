/*

Ao clicar em uma das opções o componente referente à opção será renderizado na tela.

O que vamos aprender?

Neste curso vamos aprender os conceitos básicos sobre rotas que são:

Instalar a biblioteca react-router-dom;
Criar uma rota;
Gerenciar nossas rotas.
O que são Rotas?

Uma rota é basicamente a associação entre uma URL e um componente. 
Para criarmos rotas no React utilizamos a biblioteca react-router-dom.

A principal funcionalidade do React no front-end é criar SPAs. 
Uma SPA é uma página que basicamente não é recarregada para executar 
uma ação ou para exibir uma nova tela para o usuário.


Nossa aplicação funciona da seguinte forma:

O usuário seleciona uma das opções (Front-end ou Back-end);
A página (componente) referente à opção é renderizada na tela.

Esse resultado (sem recarregar a página) só é possível graças a biblioteca react-router-dom.
Para chegarmos nesse resultado precisamos conhecer alguns componentes dessa biblioteca

Nossa aplicação está dividida em seis componentes:

App - o componente principal;
Rotas - quem guarda e gerência nossas rotas;
PaginaInicial - a página inicial;
PaginaBackEnd - página exibida através da rota /back-end;
PaginaFrontEnd - página exibida através da rota /front-end;
BotaoVoltar - componente utilizado para voltar para a página inicial. 
Esse componente é reutilizado em PaginaBackEnd e PaginaFrontEnd.

O componente BotaoVoltar será reutilizado para as duas páginas. 
Essa é uma das vantagens de utilizar componentes.
*/