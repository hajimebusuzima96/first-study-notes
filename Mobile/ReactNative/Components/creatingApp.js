/*
Já aprendemos a utilizar import e export para criar componentes
menores e separar o código deles em dois arquivos (index.js e estilos.js). 

Agora que sabemos que o aplicativo possui três componentes menores
(BarraTitulo, Card e Conteudo) incorporados no componente App


As imagens utilizadas no aplicativo podem ser baixadas no botão Baixar código no final desta aula.

Veja a seguir os códigos dos componentes do aplicativo e a explicação sobre eles.
Vamos apresentar os componentes menores e por último o componente App que os incorpora.

Componente BarraTitulo

Veja no Código o código do componente BarraTitulo - arquivo index.js
dentro da pasta componentes/BarraTitulo.


*/

import React from 'react';
import { View, Text } from 'react-native';

import estilos from './estilos';

export default function BarraTitulo() {
  return (
    <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Ator famoso</Text>
    </View>
  )
}


/*
Na importação, ./ indica que o arquivo que está sendo importado
está salvo na mesma pasta do arquivo que está fazendo a sua importação
O Código apresenta o código de estilo do componente BarraTitulo
- arquivo estilos.js salvo na pasta BarraTitulo.
*/ 

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: 90,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: "bold",
    color: '#fff'
  }
});

export default estilos;

/*
No código de estilo do componente BarraTitulo utilizamos 
as palavras export default para que ele fique acessível ao arquivo principal
do componente (index.js).


Componente Card
Veja no Código o código do componente Card - arquivo index.js
salvo na pasta componentes/Card/.
*/

import React from 'react';
import { View, Image, Text } from 'react-native';

import Foto from '../../assets/Foto.png';
import estilos from './estilos';

export default function Card() {
  return (
    <View style={ estilos.container }>
      <View style={ estilos.box }>
        <Image source={ Foto } style={ estilos.fotoCapa } />
        <Text style={ estilos.nome }>Samuel Jackson</Text>
        <Text style={ estilos.paragrafo }>Ator e produtor norte-americano</Text>
      </View>
    </View>
  );
}


/*
Na importação, ../ indica que queremos que o React Native volte um diretório
para achar o arquivo que estamos importando

O Código apresenta o código de estilo do componente Card - arquivo estilos.js
salvo na pasta Card.


*/

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#0a1c35',
    paddingVertical: 20,
  },
  box: {
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 300,

  },
  fotoCapa: {
    width: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  nome: {
    marginTop: 10,
    fontSize: 22,
  },
  paragrafo: {
    margin: 10,
  }
});

export default estilos;


/*
Mais uma vez, utilizamos as palavras export default na criação do estilo
para que ele fique acessível ao arquivo principal do componente (index.js).

Componente Conteudo
O código do componente Conteudo - arquivo index.js salvo na pasta componentes/Conteudo/,
pode ser visto no Código

*/ 

import React from 'react';
import { View, Text, Image } from 'react-native';

import Filme from '../../assets/Filme.png';
import estilos from './estilos';

export default function Conteudo() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Sobre o Ator</Text>

      <Text style={ estilos.subtitulo }>Sua vida</Text>
      <Text style={ estilos.paragrafo }>Nascido em Washington, DC, 21 de dezembro de 1948</Text>
      <Text style={ estilos.paragrafo }>Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do Morehouse College.</Text>

      <Text style={ estilos.subtitulo }>Início da carreira</Text>
      <Text style={ estilos.paragrafo }>Seu primeiro filme se chama Together for Days que estreou em 1972.</Text>
      <Image source={ Filme } style={ estilos.imagem }/>
    </View>
  )
}


/*
O Código apresenta o código de estilo do componente Conteudo
- arquivo estilos.js salvo na pasta Conteudo.

*/ 

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  paragrafo: {
    marginTop: 6,
  },
  imagem: {
    width: 250,
    height: 100,
    marginTop: 10,
  }
});

export default estilos; 


/*
Componente App

Por último, veja no Código o código do componente App (arquivo App.js)
que incorpora os componentes BarraTitulo, Card e Conteudo.
*/

import React from 'react';
import { View } from 'react-native';

import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';
import BarraTitulo from './componentes/BarraTitulo';

import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}

/*
Para exibir um componente importado, como por exemplo BarraTitulo, Card e Conteudo,
utilizamos o conceito de tags
Veja no Código o código de estilo do componente App (arquivo estilos.js).
*/

import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c4491',
  },
});

export default estilos; 


/*O aplicativo criado pode ser visto no codigo abaixo:*/ 

import React from 'react';
import { View } from 'react-native';

import Card from './componentes/Card';
import Conteudo from './componentes/Conteudo';
import BarraTitulo from './componentes/BarraTitulo';

import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
    </View>
  );
}


/*
Depois que importamos um componente, para que ele seja inserido no código de exibição,
utilizamos o conceito de tags. Isso é feio da seguinte forma:

<NomeDoComponente />


Na aula anterior criamos um aplicativo e entendemos como utilizar o conceito de importação
e exportação para criar componentes menores e incorporar no componente App

Já conhecemos o código criado, porém precisamos entender os passos dados para criar um aplicativo com mais de um componente. Veja a seguir como isso foi feito:

Passo a passo

O componente App sempre será o primeiro a ser criado por se tratar da Tela do aplicativo


Parabéns, você deu mais um passo na sua carreira de programador React Native!!!
Você já é capaz de criar aplicativos que possuem mais de um componente e de organizar
o seu código separando em dois arquivos: um chamado de index.js com o código de exibição
e outro chamado estilos.js com o código de estilo
*/

