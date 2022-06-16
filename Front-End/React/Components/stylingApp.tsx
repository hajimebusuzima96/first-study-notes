/*
Agora que temos a estrutura da nossa aplicação pronta, vamos melhorar a aparência dela
O primeiro passo é estilizar o componente pai App. Para isso vamos editar o arquivo
App.css, que encontramos na estrutura


Abra-o e apague todo o seu conteúdo. Feito isso vamos começar a estilizar nossos componentes.

Estilizando o componente App
O código do nosso arquivo App.css vai ficar como o apresentado na Código 1.

.App{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

Entendendo o código:

Bom, aqui temos um código de estilização CSS bastante comum.

De toda forma, em resumo, o que temos aqui é o uso de display flex 
para organizar os elementos da página. Dizemos que flex-direction é column,
pois queremos um elemento abaixo do outro (Header acima de HomePage e HomePage acima de Footer).

O mais importante, para o entendimento do nosso código React é o seguinte: 
na primeira linha estamos identificando para o CSS que todo elemento que tiver 
a classe App será estilizado com as propriedades definidas dentro das chaves:

.App{

O estilo CSS será aplicado ao componente App pois ele, por padrão, 
já possui o atributo className codificado com o nome da classe CSS App

Não precisamos fazer alterações no nosso componente App. Veja o Código

*/ 

import React from 'react';
import './App.css';

import Header from './componentes/Header/';
import Footer from './componentes/Footer/';
import HomePage from './componentes/HomePage/';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

/*
A partir daqui vamos criar um arquivo de estilo para cada componente que estilizaremos.

Estilizando Header
Para estilizar o componente Header vamos precisar criar um novo arquivo
.css, pois ao contrário de App, este componente não possui um arquivo CSS previamente associado.

Crie um arquivo chamado style.css na mesma pasta do componente Header

Este arquivo terá o mesmo código apresentado.

header {
 background-color: #d34040;
 color: #fff;
 height: 60px;
 display: flex;
 justify-content: center;
 align-items: center;
}

Repare que não colocamos um ponto (.) na frente de header, ou seja, 
não estamos estilizando uma classe CSS, mas sim todos os elementos do tipo header.

Como só temos um header no componente, sabemos qual elemento será estilizado.

O próximo passo é importar o arquivo CSS dentro do nosso componente.

Abra o arquivo index.js do diretório Header e insira o Código para 
importar o estilo que criamos.

*/ 

import React from 'react';
import './style.css';

function Header() {
  return (
    <header>Trabalhando com componentes</header>
  );
}

export default Header;


