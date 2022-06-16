/*
O primeiro passo é instalar a biblioteca react-router-dom no nosso projeto.

Instalando react-router-dom

Abra a pasta do seu projeto no terminal conforme a Figura 1 e digite o comando do Código 1.

npm install react-router-dom


Feito isso a biblioteca react-router-dom já pode ser usada no seu projeto.

Criando o componente Rotas

Dentro do diretório componentes crie uma pasta chamada Rotas e nela o arquivo index.js

O código do componente Rotas é apresentado abaixo

*/ 

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../PaginaInicial';
import PaginaFrontEnd from '../PaginaFrontEnd';
import PaginaBackEnd from '../PaginaBackEnd';

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <PaginaInicial/> } />
            <Route path='/front-end' element={ <PaginaFrontEnd/> } />
            <Route path='/back-end' element={ <PaginaBackEnd/> } />
        </Routes>
    </BrowserRouter>
);

export default Rotas; 


/*Arrow function (conceito do JavaScript) não é assunto desta aula porém vamos relembrar.

Arrow function é uma forma mais curta de se escrever uma função. Veja um exemplo com React 
nos Códigos
*/

function BotaoVoltar () {
    return (
          <div className="area-botao">
               <a className="botao-voltar" href='/'>Voltar</a>
          </div>
   );
}

const BotaoVoltar = () => (
    <div className="area-botao">
      <a className="botao-voltar" href='/'>Voltar</a>
    </div>
  );
  