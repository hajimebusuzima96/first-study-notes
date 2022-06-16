/*
O que vamos aprender

No tópico anterior você instalou as ferramentas necessárias para criar suas aplicações no React.

Neste curso você vai aprender:

O que são componentes e como utilizá-los.
O que são componentes
Componentes são, basicamente, elementos visuais exibidos na tela para o usuário.

Por exemplo, em uma página Web podemos dizer que um botão é um componente, 
um item de menu é um componente, um campo de edição de dados é um componente e assim por diante.

Além disso, a própria página Web, em si, também é um componente 
(que contém componentes filhos).

Uma página construída em React é um conjunto de componentes.
Por que isso é útil?
Todo elemento visual no React é um componente.

Utilizar componentes facilita na manutenção da aplicação já que dividimos 
um código inteiro em partes menores. Além de conseguirmos reaproveitar nosso código.

Para chegarmos nesse resultado vamos aprender os seguintes tópicos:

Criar um componente;
Exportar um componente;
Importar um componente;
Estilizar utilizando CSS.
React cria a interface do usuário utilizando componentes.



Já vimos que uma aplicação React é composta por componentes. Eles podem ser um botão,
 um formulário ou até uma página inteira.

Criar nossa primeira aplicação em React significa, basicamente,
criar nossos primeiros componentes ‘filho’ e depois ‘importá-los’ para dentro do 
componente principal ‘pai’ - o componente inicial que representa toda a página
(lembrando que neste exemplo temos apenas uma página).

Precisamos saber como criar, importar e exportar componentes para trabalhar com React.
Ou seja, a mecânica fundamental de programação React funciona assim:

Primeiro você vai codificar o seu componente (por exemplo, um botão na tela);
Com o componente codificado, o segundo passo é exportar esse componente - 
o que significa deixá-lo exposto para que possa ser usado na sua página;
Por último você vai ‘importar’ o componente previamente exposto e dessa 
forma apresentá-lo na tela.
Em termos mais técnicos:

Criar o componente filho;

Exportar o componente filho;

Importar o componente filho dentro do componente pai (neste exemplo na própria página).

Mais para frente no curso veremos, na prática, como realizar estes três passos. 
Neste momento o mais importante é você entender a mecânica da programação, 
pois esses passos serão repetidos muitas e muitas vezes sempre que você criar um app React.

O React consiste na composição de componentes, 
ou seja, um componente pode ser composto de componentes menores.

A melhor forma de aprendermos a utilizar componentes é colocando em prática,
para isso vamos criar uma página simples com alguns componentes

Identificando os componentes da página
Nessa página temos um componente principal chamado App que é a própria página.

Esse é um comportamento padrão do React - uma aplicação React é baseada em 
componentes e por isso sempre terá um componente pai principal, que conterá todos os outros.

O componente App é o principal da aplicação, devendo conter 
todos os outros componentes dentro dele.

Um componente pode ser criado a partir de outros componentes.

É um exemplo simples, contendo apenas uma página Web com alguns componentes estáticos.

Não há entrada de dados do usuário, apenas a exibição de componentes visuais,
tais como topo, rodapé, card.

A arquitetura deste exemplo consiste na mecânica de importação de componentes
filho dentro de um componente pai principal, chamado App

Já entendemos os conceitos fundamentais para construir nossa primeira aplicação React.
Relembrando:

Devemos criar nossos componentes e exportá-los (deixando-os expostos para uso);
Devemos importar os componentes filhos para dentro do componente pai.
Vamos colocar a mão na massa, criando nossa primeira aplicação

Bom, o primeiro passo é criar nosso projeto.

Criando o projeto

Abra o seu terminal na pasta que deseja criar a aplicação e digite o seguinte comando:

npx create-react-app primeiro-app

Ainda no terminal navegue até a pasta do projeto criado:

cd primeiro-app

Vamos executar o comando yarn start e a aplicação vai abrir no navegador.

Antes de começarmos a criar nossos componentes filhos como o Header, o Footer, 
o Card e até mesmo a página HomePage, precisamos lembrar que eles farão parte 
de um componente maior

Esse componente é chamado App e já foi criado junto com o projeto na aula anterior.

O que precisamos fazer é remover o conteúdo que foi automaticamente criado dentro dele e inserir o nosso código.

Alterando o componente pai App

Ao abrir o arquivo App.js (lembrando que ele fica dentro da pasta src) você vai ver o Código
*/
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='' className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; 

/*
Vamos apagar todo esse código pré gerado e inserir o nosso código
*/


import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App; 


/*
O código acima é o código estrutural do componente App. 
Por padrão esse é o primeiro componente a ser exibido na aplicação e será nosso componente pai.

Agora, com nosso componente pai pronto, podemos prosseguir 
e criar o primeiro componente filho, Header
*/