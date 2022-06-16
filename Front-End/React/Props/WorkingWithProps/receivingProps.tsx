/*
Nessa aula vamos aplicar o conceito de props no componente ItemLista 
definindo onde as propriedades recebidas serão exibidas

Abra o arquivo do componente ItemLista (componentes/ItemLista/index.js) e insira o Código
*/ 


import React from 'react';
import './estilo.css';

export default function ItemLista(props) {
  return (
    <div className = "boxSigno">
      <div className = "nomeSigno">
        { props.signo }
      </div>

      <img className = "imagemSigno" src = { props.imagem } alt = { props.signo } />

      <div className="periodoNascimento">
        { props.dataInicio } - { props.dataFim }
      </div>
    </div>
  )
}


/*
omo vimos nosso componente recebe um parâmetro (do tipo objeto) com as propriedades
que serão usadas.

O nome do parâmetro precisa ser props?

Não necessariamente. Assim como em uma função esse parâmetro pode ter qualquer nome,
porém é comum entre os programadores React utilizar o nome props.

Por que as propriedades foram colocadas dentro de chaves?
Sempre que precisamos exibir um código JavaScript dentro do JSX utilizamos chaves. 
Neste caso estamos exibindo uma variável.

Outros exemplos:


Uma operação matemática:
<p> { 1 + 2 } </p>

O retorno de uma função:
<p> { retornaTexto() } </p>

O que precisamos agora é passar as props: signo, imagem, dataInicio e dataFim para
que ele exiba na tela.

Agora precisamos passar as props dos demais componentes para serem exibidas na tela

Nesta aula vamos passar propriedades para nosso componente ItemLista para serem exibidas na tela

Abra o arquivo do componente ListaDeSignos (componentes/ListaDeSignos/index.js) e insira o Código
*/

import React from 'react';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';

import './estilo.css';

export default function ListaDeSignos() {
  return (
    <div>
      <Titulo />

      <div className="lista">
        <ItemLista
            signo="Aquário" dataInicio="21/01"
            dataFim="19/02" imagem="assets/aquario.jpg"/>
      </div>
    </div>
  )
}

/*
Passar props é bem simples e de forma fácil conseguimos exibir os 
valores passados no nosso componente.

As propriedades são recebidas pelo componente através de um 
parâmetro do tipo objeto comumente chamado de props
*/