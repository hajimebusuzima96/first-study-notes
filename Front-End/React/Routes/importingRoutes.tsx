/*
Nossas rotas estão criadas e agora precisamos colocá-las em nossa aplicação. 
Para isso abra o arquivo App.js e insira o Código
*/

import React from 'react';
import './App.css';
import Rotas from './componentes/Rotas';

const App = () => (
  <div className="App">
    <Rotas/>
  </div>
);

export default App; 


/*
Esse é um comportamento de uma página comum (não SPA), porém não é o que queremos.

Na próxima aula vamos fazer alguns ajustes para que nossa 
navegação seja executada em uma única página (sem recarregar) e finalizarmos nossa SPA.

Para navegar entre as páginas da nossa aplicação, precisamos criar e utilizar nossas rotas.
*/