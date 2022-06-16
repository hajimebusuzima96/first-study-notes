/*
Com nosso último componente criado só precisamos importá-lo no componente principal

O código final do nosso arquivo App.js ficará como o apresentado no Código


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
Note os seguintes pontos:

1:

import HomePage from './componentes/HomePage/';

Importamos o componente HomePage.

2:

<HomePage />

Inserimos o componente HomePage na estrutura do nosso componente App. 
Posicionamos ele entre o Header e o Footer para que fique entre os dois.

Para isso na próxima aula vamos estilizar nossa página.

Parabéns! A estrutura da nossa aplicação já está pronta.
*/