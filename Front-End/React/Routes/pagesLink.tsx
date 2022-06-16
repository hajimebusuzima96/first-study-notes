/*
Falta pouco para finalizarmos nossa SPA. O que faremos nessa aula é permitir que 
nossa aplicação navegue entre páginas sem que o browser seja recarregado.


Segue no Código  o componente PaginaInicial, localizado em 
src/componentes/PaginaInicial/index.js
*/


import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const PaginaInicial = () => (
 <div>
  <h1>Escolha seu caminho em JavaScript</h1>

   <div className="conteudo-opcoes">
    <Link className="opcao-front-end" to='/front-end'>Front-end</Link>
    <Link className="opcao-back-end" to='/back-end'>Back-end</Link>
   </div>

 </div>
);

export default PaginaInicial;


/*
A tag <a> e o componente <Link> são links que permitem navegar entre páginas
 porém existe uma pequena diferença entre eles:

<a> - Navega para uma página externa (fora da aplicação) ou interna 
recarregando o navegador;

<Link> - Navega para uma página interna, ou seja da própria aplicação, 
sem recarregar o navegador.


Agora precisamos que ao acessar as páginas front-end e back-end seja possível 
voltar para a página inicial sem recarregar o navegador. Esse será o assunto da próxima aula.

Na arquitetura deste projeto de exemplo, observe a reutilização do componente BotaoVoltar.

Até aqui criamos a navegação da página inicial (componente PaginaInicial) até as demais páginas

Para concluirmos nossa SPA e finalizarmos a navegação da nossa SPA, 
precisamos permitir voltar para PaginaInicial sem recarregar o navegador. 
Para isso vamos alterar o componente BotaoVoltar.

O componente BotaoVoltar foi codificado apenas uma vez e reutilizado nos 
componentes PaginaFrontEnd e PaginaBackEnd. Note que vamos alterar em apenas
um lugar e esta alteração vai refletir em duas páginas distintas que utilizam o mesmo componente.

Segue no Código do componente BotaoVoltar, localizado em src/componentes/BotaoVoltar/index.js.
*/ 

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const BotaoVoltar = () => (
  <div className="area-botao">
    <Link className="botao-voltar" to='/'>Voltar</Link>
  </div>
);

export default BotaoVoltar;


/*
Repare que escrevemos <Link> com L maiúsculo, isso porque ele é um componente. 
Não podemos confundir com <link> (l minúsculo) tag HTML utilizada para incluir
à página um arquivo CSS por exemplo.

Parabéns você criou uma SPA React onde o usuário consegue navegar entre telas 
sem recarregar a página.
*/
