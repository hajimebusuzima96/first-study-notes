/*
Em um projeto criado em React é comum a criação e a reutilização de um componente. 
Através de props conseguimos inserir tags e componentes dentro de outro componente.

Além de funções e valores como string, boolean e number conseguimos enviar para um 
componente, tags e outros componentes através de props . Dessa forma, um componente 
pode receber diferentes conteúdos.

É através de props que um componente recebe textos, números, booleanos, funções, 
tags e componentes


*/

const MeuComponente = (props) => {
    return (
      <div>
        { props.children }
      </div>
    );
  } 

  import React from 'react';
import './estilo.css';

const BoxMensagem = (props) => {
  return (
    <div className="box-mensagem">
      <h2>Mensagem</h2>

      <div className="conteudo-mensagem">
        { props.children }
      </div>
    </div>
  );
}

export default BoxMensagem;


/*
Em resumo é através de props que recebemos um parâmetro em um componente 
e através da propriedade children que exibimos as tags e componentes recebidos
*/

<NomeDoComponente>

    <h1>Este é um título</h1>
    <OutroComponente />

</NomeDoComponente> 


/*
o codigo acima representa as tags de abertura e fechamento de um componente 
e também o conteúdo que será passado para ele


Um componente pode receber através de props funções e valores (string, boolean, number)
que são inseridas dentro da tag de abertura e um conteúdo (tags e componentes) entre as
tags de abertura e fechamento.

O Código  apresenta um código completo que exibe dois componentes BoxMensagem 
e passa um conteúdo diferente para cada um.

*/ 


import React from 'react';
import BoxMensagem from './BoxMensagem';
import './estilo.css';

const Home = ( ) => {
  return (
    <div className="conteudo">
      <h1>Minhas mensagens</h1>

      <div className="mensagens-box">
        <BoxMensagem>

          <p>Lembra aquele produto que você estava procurando?</p>
          <p>Ele abaixou o preço!! Corre que dá tempo pra comprar</p>

          <a href="https://www.americanas.com.br/produto/1818873801">
              Ver produto
          </a>

        </BoxMensagem>

        <BoxMensagem>
          <p>Separamos esta foto pra você.</p>
          <img src="assets/img09.jpg" />
        </BoxMensagem>
      </div>
    </div>
  );
}

export default Home;


/*
Todo conteúdo (tags e componentes) inserido entre as tags de abertura e fechamento 
é passado para um componente através de props
*/

