/*
Nosso aplicativo

Neste curso vamos dar mais um passo na carreira de programador React 
e vamos aprender a reaproveitar componente.

O que vamos aprender
Neste curso você vai aprender:

Reaproveitar componentes
Utilizar props.

O conceito de props é usado diversas vezes na criação de componentes
Utilizar props nos permite reaproveitar componentes.

Já aprendemos que quando reaproveitamos um componente podemos alterar 
uma parte do seu conteúdo através de props. Entenda como é a mecânica do uso de props

Em termos mais técnicos:

Criamos e exportamos o componente.
Importamos o componente e passamos as propriedades que ele vai exibir.

Reaproveitar um componente ajuda na hora de fazer a manutenção do código
além de escrever menos

Nosso projeto é uma tela que exibe uma carta para cada signo

Todos os componentes com exceção de App, são estilizados através do arquivo estilo.css 
nas suas respectivas pastas. O componente ItemLista é exibido mais de uma vez.

O arquivo index.js (na raiz do projeto) é o primeiro arquivo JavaScript executado 
no nosso projeto, e é responsável por renderizar na tela o nosso componente principal App

Resumindo essa estrutura temos:

src/App.js o componente pai da nossa aplicação.
src/componentes/ListaDeSignos/index.js a tela que tem uma barra de título e a lista de cartas.
src/componentes/Titulo/index.js a barra de título.
src/componentes/ItemLista/index.js o componente (reutilizado) representando cada carta.
estilo.css. Cada componente possui em suas respectivas pastas este arquivo responsável 
por estilizar o componente.
public/assets temos as imagens que vamos utilizar no nosso projeto.

Repare que aqui temos apenas um componente sendo exibido. A partir da próxima aula
vamos aplicar o conceito de props para reutilizar o componente ItemLista



*/