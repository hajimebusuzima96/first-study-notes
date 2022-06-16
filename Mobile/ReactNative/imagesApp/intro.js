/*

Mais uma vez seja muito bem-vindo ao curso de React Native,
isso significa que você está dedicado a se tornar um programador Mobile. 
Parabéns pela atitude!

Você já aprendeu a criar um aplicativo que exibe um texto na tela e
com isso aprendeu a utilizar os componentes View e Text. Nesta aula
vamos aprender a utilizar mais um componente que se chama Image.

Neste curso você vai aprender a exibir uma imagem na tela do aplicativo,
com isso vai aprender os seguintes conceitos:

Como importar e utilizar o componente Image

Como importar uma imagem para exibir no aplicativo

É através do componente Image que conseguimos exibir uma imagem na tela do aplicativo

Crie um novo aplicativo como ensinado no curso anterior.
Fique à vontade para consultar a aula Criando meu primeiro aplicativo
(devmedia.com.br) para criar o aplicativo.
A consulta desta aula será muito normal neste momento em que você estiver
criando os seus primeiros aplicativos.

Neste momento é muito comum consultarmos conceitos que aprendemos anteriormente.
Quanto mais consumirmos os conteúdos, mais rápido vamos decorá-los

Para exibir a imagem no aplicativo, abra o arquivo App.js, apague todo
o seu código e insira o Código


*/

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Aprendendo a exibir uma imagem</Text>

      <Image
        source={ { uri: 'https://www.devmedia.com.br/favicon.png '} }
        style={ estilos.img }
      />

      <Text>Logo da DevMedia</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 22
  },
  img: {
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    height: 150
  }
});

/*
Ao exibir uma imagem de hospedada na internet é necessário
que o celular esteja conectado à internet
Detalhes do código

Existem alguns detalhes sobre o código que vamos analisar melhor,
como por exemplo a posição dos componentes no código e na tela como
pode ser visto no flow abaixo:

A ordem dos componentes na tela do celular é a mesma ordem que
inserimos os componentes no código

No flow abaixo vamos ver mais detalhes sobre a estilização da imagem no código criado:

O estilo img possui algumas propriedades que ainda não conhecemos.
No flow abaixo vamos entender quais as suas funções

Lembrando que a imagem exibida está hospedada na internet.
Nas próximas aulas vamos aprender a exibir uma imagem salva no próprio aplicativo.

A propriedade source do componente Image serve para associá-lo a
imagem que queremos exibir na tela do aplicativo

Na aula anterior importamos e utilizamos o componente Image para exibir
uma imagem na tela. Além disso, utilizamos também os códigos React, View,
Text, Image e StyleSheet. Esses códigos pertencem as bibliotecas react e react-native.

Veja no Código a importação dos códigos React, Image, StyleSheet, Text e View.
*/ 


import React from 'react';
import { Image, StylesSheet, Text, View } from 'react-native';

/*
Para ver na prática a sintaxe de importação de uma biblioteca,
vamos criar um aplicativo que exibe uma imagem e um texto na tela como pode ser visto na Figura

Crie um novo aplicativo como ensinado no curso anterior.
Fique à vontade para consultar a aula Criando meu primeiro aplicativo
(devmedia.com.br) para criar o aplicativo.
A consulta desta aula será muito normal neste momento em que você
estiver criando os seus primeiros aplicativos.

Neste momento é muito comum consultarmos conceitos que aprendemos anteriormente.
Quanto mais consumirmos os conteúdos, mais rápido vamos decorá-los

Com o aplicativo criado, abra o arquivo App.js, apague todo o seu conteúdo e insira o Código
*/

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image
        source={ { uri: 'https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png'} }
        style={ estilos.img }
      />

      <Text style={ estilos.paragrafo}>
        Queen é o nome da lendária banda britânica, criada em 1970 por Freddie Mercury e dois ex-músicos do Smile, Brian May e Roger Taylor. A banda começou com o hard rock, mas depois mudou seu estilo para pop-rock, o que tornou seu nome icônico.
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 400,
    height: 200
  },

  paragrafo: {
    marginTop: 20,
    textAlign: 'center',
  }
}); 


//Veja abaixo o aplicativo sendo executado 

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image
        source={ { uri: 'https://www.devmedia.com.br/arquivos/cursos/rn_exibindo_imagem/aula_3.png'} }
        style={ estilos.img }
      />

      <Text style={ estilos.paragrafo}>
        Queen é o nome da lendária banda britânica, criada em 1970 por Freddie Mercury e dois ex-músicos do Smile, Brian May e Roger Taylor. A banda começou com o hard rock, mas depois mudou seu estilo para pop-rock, o que tornou seu nome icônico.
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 400,
    height: 200
  },

  paragrafo: {
    marginTop: 20,
    textAlign: 'center',
  }
}); 


/*
Todo aplicativo React Native importa códigos das bibliotecas react e react-native.
Elas são essenciais para criar um componente como, por exemplo, a tela do aplicativo

Já sabemos que para exibir uma imagem precisamos utilizar o componente Image e que
ele é importado da biblioteca react-native

Ao invés de exibir a imagem hospedada na internet,
podemos salvá-la na pasta do nosso projeto e importá-la no nosso código

Mais uma vez criaremos um novo aplicativo. Lembrando que você pode consultar
a aula Criando meu primeiro aplicativo (devmedia.com.br) para criá-lo.

insira o Código


*/ 

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './capa.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Guerra do Amanhã</Text>
      <Text style={ estilos.descricao }>Gêneros: Ação e ficção</Text>

      <Image
        source={ Capa }
        style={ estilos.img }
      />

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
  },
  descricao: {
    marginBottom: 20
  },

  img: {
    width: 300,
    height: 300,
  },

});


//---------------------------------------------------------------------------


import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './capa.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Guerra do Amanhã</Text>
      <Text style={ estilos.descricao }>Gêneros: Ação e ficção</Text>
      
      <Image 
        source={ Capa } 
        style={ estilos.img }
      />

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
  },
  descricao: {
    marginBottom: 20
  },
  
  img: {
    width: 300,
    height: 300,
  },
  
});


/*
Utilizar uma imagem local garante que ela sempre apareça na tela do aplicativo,
porque ela fica salva dentro dele, ou seja, não precisa acessar a internet nem
um servidor para poder pegar a imagem

Na aula anterior aprendemos a exibir uma imagem local. Para isso importamos
uma imagem que foi salva na mesma pasta do arquivo App.js (componente que
representa a tela do aplicativo)


Para resolver o erro gerado, precisamos avisar para o React Native o novo local da imagem.
Abra o arquivo App.js, apague o seu código e insira o Código
*/ 


import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/capa.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Guerra do Amanhã</Text>
      <Text style={ estilos.descricao }>Gêneros: Ação e ficção</Text>

      <Image
        source={ Capa }
        style={ estilos.img }
      />

    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
  },
  descricao: {
    marginBottom: 20
  },

  img: {
    width: 300,
    height: 300,
  },

}); 

/* */

// Imagem no mesmo diretório do arquivo que está importando.
import Capa from './capa.png';

// Imagem dentro de uma pasta,
// que está dentro do mesmo diretório do arquivo que está importando.
import Capa from './assets/capa.png';

// Imagem dentro de uma pasta,
// que está dentro de outra pasta,
// que está no mesmo diretório do arquivo que está importando.
import Capa from './assets/imagens/capa.png'; 


/*
O uso de ./ sempre será necessário pra avisar ao React Native que
o arquivo ou pasta está no mesmo diretório que o arquivo que está importando


As imagens utilizadas no aplicativo podem ser baixadas no botão Baixar
código no final desta aula.

Veja no Código

*/


import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Congo from './assets/floresta-congo.png';
import Taiga from './assets/floresta-taiga.png';
import Amazonica from './assets/floresta-amazonica.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Florestas pelo mundo</Text>

      <Image source={ Congo } style={ estilos.img } />
      <Text style={ estilos.margem }>Floresta do congo (África)</Text>

      <Image source={ Taiga } style={ estilos.img } />
      <Text style={ estilos.margem }>Floresta (Hemisfério Norte)</Text>

      <Image source={ Amazonica } style={ estilos.img } />
      <Text>Floresta Amazônica (América do Sul)</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
    marginBottom: 30,
  },

  img: {
    width: 300,
    height: 100,
  },

  margem: {
    marginBottom: 20,
  },
});




/*
Ao criar um estilo podemos utilizá-lo em mais de um componente, 
como fizemos no aplicativo desta aula. 
Reaproveitar um estilo permite criar um padrão para, por exemplo, imagens e textos
*/