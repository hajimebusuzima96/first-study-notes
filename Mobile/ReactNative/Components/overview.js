/*
Já sabemos que a tendência do código do aplicativo é ficar
cada vez maior e para solucionar este problema dividimos o código em componentes menores.

Para criar os componentes Topo e Conteudo separados e depois juntá-los para criar 
o componente App utilizamos dois conceitos: importação e exportação.

Importar um componente significa utilizá-lo em outro componente

Exportar um componente significa deixá-lo acessível para ser
incorporado em um componente maior

Um componente é criado a partir de componentes menores


Um componente React Native é criado a partir de componentes menores.
Os componentes menores, por exemplo Topo e Conteudo, por sua vez são
exportados, ou seja, ficam expostos para que o componente maior App
possa incorporá-los em seu código

Já sabemos que precisamos criar e exportar um componente
para que ele fique acessível e possa ser incorporado por um componente maior.

Para aplicar o conceito de exportação, vamos criar os componentes Topo e Conteudo

Dentro do diretório do aplicativo, crie uma pasta chamada componentes
e nela dois arquivos: Topo.js e Conteudo.js

Veja a seguir o conteúdo que vamos inserir nesses arquivos.

Criando o componente Topo

Abra o arquivo Topo.js e insira o Código 
*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Capa from '../assets/img1.png';

export default function Topo() {
  return(
    <View style={ estilos.containerTopo }>
      <Image source={ Capa } style={ estilos.topoImg } />
      <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  containerTopo: {
    backgroundColor:'#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  }
}); 


/*
Criando o componente Conteudo

Abra o arquivo Conteudo.js e insira o Código
*/ 

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Jogos from '../assets/img2.png';

export default function Conteudo() {
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
      <Image source={ Jogos } style={ estilos.img } />
      <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
  },
  img: {
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});


/*
Apenas criar os componentes não basta, por isso na próxima aula vamos 
incorporar os componentes Topo e Conteudo na tela do aplicativo, ou seja, no componente App.

Exportamos um componente quando utilizamos as palavras export default.
Dessa forma avisamos para o React Native que queremos deixar o código do
componente acessível para que ele seja incorporado por outro componente,
no nosso caso pelo App



Agora que criamos os componentes Topo e Conteudo,
precisamos importá-los no componente App (arquivo App.js) para que eles apareçam na tela 

Abra o arquivo App.js e insira o Código

*/ 

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';

export default function App() {
  return (
    <View style={ estilos.containerTopo }>
      <Topo />
      <Conteudo />
    </View>
  );
}

const estilos = StyleSheet.create({
  containerTopo: {
    flex: 1,
  }
});



/*
Veja o aplicativo em execução
*/ 

import React from 'react';
import { View } from 'react-native';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';

export default function App() {
  return (
    <View>
      <Topo />
      <Conteudo />
    </View>
  );
}


/*
Ao utilizar o conceito de importação e exportação conseguimos
criar o componente App que representa a tela do aplicativo,
incorporando os componentes Topo e Conteudo


Nosso aplicativo já está funcionando corretamente, porém podemos
fazer um ajuste que é separar as responsabilidades exibição e
estilização em arquivos separados

ara separar o código de estilo do código de exibição,
vamos criar dois arquivos (estilosTopo.js e estilosConteudo.js)
na pasta componentes, a mesma onde salvamos os componentes Topo (Topo.js)
e Conteudo (Conteudo.js).

Separando o estilo do componente Topo
Abra o arquivo estilosTopo.js e insira o Código
*/

import { StyleSheet } from 'react-native';

const estilosTopo = StyleSheet.create({
  containerTopo: {
    backgroundColor:'#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  }
});

export default estilosTopo;

/*
O arquivo estilosTopo.js possui a responsabilidade de
criar e armazenar o estilo do componente Topo
Com o estilo do componente Topo criado no arquivo estilosTopo.js,
o próximo passo é alterar o código do componente. Abra o arquivo Topo.js e insira o Código

*/

import React from 'react';
import { View, Text, Image } from 'react-native';

import Capa from '../assets/img1.png';
import estilos from './estilosTopo';

export default function Topo() {
  return(
    <View style={ estilos.containerTopo }>
      <Image source={ Capa } style={ estilos.topoImg } />
      <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
    </View>
  )
} 

/*
Ao remover o código referente a criação de um estilo do arquivo Topo.js,
ele terá a única responsabilidade de exibir elementos na tela
Feito essas alterações o componente Topo foi refatorado e agora
possui um arquivo com o código de exibição e outro com o código de estilização

Separando o estilo do componente Conteudo
Abra o arquivo estilosConteudo.js e insira o Código

*/


import { StyleSheet } from 'react-native';

const estilosConteudo = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
  },
  img: {
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});

export default estilosConteudo;


/*
O arquivo estilosConteudo.js possui a responsabilidade de criar 
e armazenar o estilo do componente Topo
Com o estilo do componente Conteudo criado no arquivo estilosConteudo.js,
o próximo passo é alterar o código do componente. Abra o arquivo Conteudo.js e insira o Código
*/

import React from 'react';
import { View, Text, Image } from 'react-native';

import Jogos from '../assets/img2.png';
import estilos from './estilosConteudo';

export default function Conteudo() {
  return(
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
      <Image source={ Jogos } style={ estilos.img } />
      <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros.™, The Legend of Zelda™, Mario Kart™ e muitas outras.</Text>
    </View>
  )
}

/*
Ao remover o código referente a criação de um estilo do arquivo Conteudo.js,
ele terá a única responsabilidade de exibir elementos na tela
Depois de ter feito a refatoração nos arquivos Topo.js e Conteudo.js,
nosso aplicativo está com o código mais organizado e sua aparência visual não mudou

Separar um componente em dois arquivos, deixa o código mais organizado
e de fácil manutenção, já que para alterar uma propriedade de estilo basta abrir
o arquivo de estilo e para alterar algum elemento visual basta abrir o código de exibição
*/