/*
Nessa aula vamos aplicar o conceito de props no componente ItemLista
definindo onde as propriedades recebidas serão exibidas

Abra o arquivo do componente ItemLista (componentes/ItemLista/index.js) e insira o Código

*/

import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style = { estilo.boxSigno }>
      <Text style = { estilo.nomeSigno }>
        { props.signo }
      </Text>

      <Text>
        Nascidos entre: { props.dataInicio } - { props.dataFim }
      </Text>
    </View>
  )
}

/*
Como vimos nosso componente recebe um parâmetro (do tipo objeto)
com as propriedades que serão usadas.

O nome do parâmetro precisa ser props?
Não necessariamente. Assim como em uma função esse parâmetro
pode ter qualquer nome, porém é comum entre os programadores
React Native utilizar o nome props.

Por que as propriedades foram colocadas dentro de chaves?
Sempre que precisamos exibir um código JavaScript dentro do JSX
utilizamos chaves. Neste caso estamos exibindo uma variável.

Outros exemplos:

Uma operação matemática:
<Text> { 1 + 2 } </Text>

O resultado de uma função:
<Text> { retornaTexto() } </Text>

Ao salvar essas alterações note que nosso componente agora possui apenas o texto estático

Nesta aula vamos passar propriedades para nosso componente ItemLista para serem exibidos na tela

Abra o arquivo do componente ListaDeSignos (componentes/ListaDeSignos/index.js) e insira o Código


*/

import React from 'react';
import { View } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo';

export default function ListaDeSignos() {
  return (
    <View>
      <Titulo />

      <View style={estilo.lista}>
        <ItemLista signo="Aquário" dataInicio="21/01" dataFim="19/02" />
      </View>
    </View>
  )
}


/*
Repare que no nosso exemplo temos dois componentes (View e ItemLista)
que recebem propriedades de forma diferente.
No componente View a propriedade style recebe o valor de uma variável,
por isso estilo.lista (que é a variável) está entre chaves.

No componente ItemLista estamos passando diretamente um texto, por isso utilizamos aspas.

Passar props é bem simples e de forma fácil conseguimos exibir os
valores passados no nosso componente.

As propriedades são recebidas pelo componente através de um parâmetro
do tipo objeto comumente chamado de props

Repare que a estrutura dos itens da lista são iguais,
o que muda são os textos de cada um. Isso porque vamos reutilizar o componente ItemLista.

O código final do componente ListaDeSignos é apresentado no Código
*/ 

import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo';

export default function ListaDeSignos() {
  return (
    <View>
      <Titulo />

      <ScrollView style={estilo.lista}>
        <ItemLista signo="Aquário" dataInicio="21/01" dataFim="19/02" />
        <ItemLista signo="Peixes" dataInicio="20/02" dataFim="20/03" />
        <ItemLista signo="Áries" dataInicio="21/03" dataFim="20/04"/>
        <ItemLista signo="Touro" dataInicio="21/04" dataFim="21/05" />
        <ItemLista signo="Gêmeos" dataInicio=" 22/05" dataFim="21/06" />
        <ItemLista signo="Câncer" dataInicio="21/06" dataFim="23/07" />
        <ItemLista signo="Leão" dataInicio="24/07" dataFim="23/08" />
        <ItemLista signo="Virgem" dataInicio="24/08" dataFim="23/09" />
        <ItemLista signo="Libra" dataInicio="24/09" dataFim="23/10" />
        <ItemLista signo="Escorpião" dataInicio="24/10" dataFim="22/11" />
        <ItemLista signo="Sagitário" dataInicio="23/11" dataFim="21/12" />
        <ItemLista signo="Capricórnio" dataInicio="22/12" dataFim="20/01" />
      </ScrollView>
    </View>
  )
}


/*
Qual a diferença entre View e ScrollView?
Ambos são containers. A diferença é que ScrollView permite
 exibir o que não couber na tela através de uma barra de rolagem.

A barra de rolagem de ScrollView será sempre na vertical?
Não. Este componente possui uma propriedade chamada horizontal
que quando não definimos seu valor é false. Para criar uma barra
horizontal basta setar a propriedade horizontal como true.

<ScrollView horizontal = { true }>

*/