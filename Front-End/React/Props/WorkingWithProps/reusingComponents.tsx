/*
Repare que a estrutura dos itens da lista são iguais, 
o que muda são os textos e a imagem de cada um. Isso porque vamos reutilizar o 
componente ItemLista.

O código final do componente ListaDeSignos segue no Código
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

        <ItemLista
          signo="Peixes" dataInicio="20/02"
          dataFim="20/03" imagem="assets/peixes.jpg" />

        <ItemLista
          signo="Áries" dataInicio="21/03"
          dataFim="20/04" imagem="assets/aries.jpg" />

        <ItemLista
          signo="Touro" dataInicio="21/04"
          dataFim="21/05" imagem="assets/touro.jpg" />

        <ItemLista
          signo="Gêmeos" dataInicio=" 22/05"
          dataFim="21/06" imagem="assets/gemeos.jpg" />

        <ItemLista
          signo="Câncer" dataInicio="21/06"
          dataFim="23/07" imagem="assets/cancer.jpg" />

        <ItemLista
          signo="Leão" dataInicio="24/07"
          dataFim="23/08" imagem="assets/leao.jpg" />

        <ItemLista
          signo="Virgem" dataInicio="24/08"
          dataFim="23/09" imagem="assets/virgem.jpg" />

        <ItemLista
          signo="Libra" dataInicio="24/09"
          dataFim="23/10" imagem="assets/libra.jpg" />

        <ItemLista
          signo="Escorpião" dataInicio="24/10"
          dataFim="22/11" imagem="assets/escorpiao.jpg" />

        <ItemLista
          signo="Sagitário" dataInicio="23/11"
          dataFim="21/12" imagem="assets/sagitario.jpg" />

        <ItemLista
          signo="Capricórnio" dataInicio="22/12"
          dataFim="20/01" imagem="assets/capricornio.jpg" />

      </div>
    </div>
  )
}

/*
Entendendo o código
Para reutilizar o componente apenas o exibimos quantas vezes forem necessárias
passando os valores desejados

Para importarmos utilizando o diretório usado (assets/aquario.jpg) a 
imagem precisa ser salva dentro do diretório public.

Outra forma de se importar uma imagem é utilizando a estrutura do import:

import aquarioImg from '../../imagens/aquario.jpg';
Para exibir essa imagem basta chamar a variável aquarioImg.

<ItemLista
   signo="Aquário" dataInicio="21/01"
   dataFim="19/02" imagem={ aquarioImg }/>
   
Porém dessa forma a imagem precisa estar dentro do diretório src.


*/