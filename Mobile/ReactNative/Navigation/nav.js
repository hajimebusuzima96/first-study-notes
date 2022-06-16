/*
O React Native não possui nativamente uma forma de lidar com navegação,
por isso contamos com uma biblioteca chamada react-navigation que vai
permitir navegar entre as telas do aplicativo

Um framework é um conjunto de bibliotecas.
O React Native é um framework que possui por padrão as bibliotecas react e react-native
Se a biblioteca react é responsável por exibir o
componente na tela e a biblioteca 'react-native' possui apenas
os componentes nativos de dispositivos móveis, o que fazer para
conseguir criar um app com navegação?


Agora que já aprendemos que é necessário instalar uma biblioteca de navegação
para criar um aplicativo que tenha mais de uma tela, vamos instalar a 
biblioteca @react-navigation/native.

Instalando a biblioteca React Navigation
Para instalar a biblioteca React Navigation, abra o terminal na raiz
do seu projeto e execute o comando do Código .

npm install @react-navigation/native

A biblioteca @react-navigation/native precisa de outras bibliotecas
nativas para funcionar corretamente. Por isso, vamos executar 
o comando do Código e fazer as instalações necessárias.

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Erro possível

Algumas vezes quando instalamos, atualizamos ou removemos uma biblioteca do nosso
projeto, pode ocorrer um erro. Possíveis motivos:

Conflito entre duas ou mais bibliotecas.

Remoção de uma biblioteca que ainda está sendo utilizada

Caso ocorra um erro após a instalação ou remoção de uma biblioteca
execute o seguinte comando do Código 3 na raiz do seu projeto através do terminal.

npm install

Este comando verifica todas as bibliotecas que você já havia instalado
e faz a reinstalação delas.

Com a biblioteca React Navigation instalada já podemos configurar
a base para a navegação do nosso APP. Este será o assunto da próxima aula.

Seja seletivo ao escolher as bibliotecas do seu projeto.
Escolha as que possuem uma equipe por trás dela fazendo manutenções constantes,
caso contrário uma simples atualização do React Native e ela pode parar de funcionar

Depois de instalar a biblioteca @react-navigation/native podemos
configurar nosso APP para que ele consiga navegar entre as telas.
Para isso vamos importar o componente NavigationContainer e inseri-lo no
componente principal do aplicativo.

Repare que dentro do componente NavigationContainer inserimos o tipo de navegação
do nosso aplicativo. Na próxima aula vamos conhecer os tipos de navegação possíveis.

Veja no Código o uso do componente NavigationContainer


*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';

export default function App () {
  return (
    <NavigationContainer >

    </NavigationContainer>
  )
}; 


/*
Em um aplicativo só pode existir um componente NavigationContainer para gerenciar a navegação


Já sabemos que o responsável pela parte nativa da navegação do aplicativo é
o componente NavigationContainer e que dentro dele inserimos o tipo de navegação.
Vamos conhecer agora quais são esses tipos de navegação.

Tab navigation

Este tipo de navegação é caracterizado por exibir abas na parte inferior
do aplicativo. Ao tocar em uma aba a tela associada será exibida.
Além disso na parte superior a barra de título é exibida com o nome da rota ativa.
Note que as abas representam os nomes das telas (rotas),


Drawer navigation

Esse tipo de navegação exibe um menu lateral e uma barra de título.
O menu lateral pode ser aberto ao puxar a tela da esquerda para direita ou
então através do toque do botão da barra superior.

Stack Navigation
Essa navegação possui por padrão uma barra de título e um botão para voltar à tela anterior.

Esse tipo de navegação não expõe as telas da aplicação como as
anteriores fazem através do menu ou de abas,

Para cada tipo de navegação que será utilizado no aplicativo é necessário instalar
a biblioteca correspondente a esse tipo
Até agora aprendemos que para criar um aplicativo que navegue entre telas é necessário:

Instalar a biblioteca @react-navigation/native para gerenciar a navegação do aplicativo.
Instalar a biblioteca correspondente com o tipo de navegação que vamos utilizar
que pode ser: @react-navigation/drawer, @react-navigation/bottom-tabs ou @react-navigation/stack.
Com isso em mente podemos avançar e conhecer cada um desses tipos de navegação.

No React Native nós só instalamos o que vamos utilizar no nosso projeto,
por isso instalamos apenas a biblioteca correspondente a funcionalidade que desejamos


Navegação através de abas é muito comum em aplicativos e facilita o usuário
a identificar quais telas o aplicativo possui.

Apenas olhando para as abas conseguimos identificar que o aplicativo possui as seguintes telas:

Início
Perfil

Cada tela do aplicativo é representada por uma rota que exibe um componente

Nesta aula vamos aprender como criar rotas em um aplicativo utilizando Tab Navigation.

Por padrão, um ícone representando um x é exibido em cima do nome de cada
rota nas suas respectivas abas. Mais a frente no curso específico de tab navigation,
veremos como alterar este ícone


Instalando a biblioteca

Como vimos anteriormente, para utilizar este tipo de navegação é necessário
instalá-la no seu projeto. Isso é feito executando o comando do Código 1 no
terminal do VSCode ou no cmd do Windows.

npm install @react-navigation/bottom-tabs

Feito isso já é possível utilizar a navegação em abas no seu projeto.

Para que a navegação funcione corretamente é necessário instalar as bibliotecas
que vimos na aula 3
Relembrando o componente NavigationContainer

Antes de inserir a navegação em abas no aplicativo vamos relembrar através do
flow abaixo o componente NavigationContainer.

Criando a navegação em abas

O Código é um exemplo da configuração de um aplicativo que possui navegação em abas.

*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from "./Componentes/TelaInicial";
import TelaPerfil from "./Componentes/TelaPerfil";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component = { TelaInicial }/>
        <Tabs.Screen name="Perfil" component = { TelaPerfil } />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};

/*
O Código referente a configuração da navegação no aplicativo (arquivo App.js).
*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from "./Componentes/TelaHome";
import TelaDescricao from "./Componentes/TelaDescricao";
import TelaRotas from "./Componentes/TelaRotas";
import TelaBiblioteca from "./Componentes/TelaBiblioteca";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator>
        <Abas.Screen name="Home" component = { TelaHome }/>
        <Abas.Screen name="Telas" component = { TelaDescricao } />
        <Abas.Screen name="Rotas" component = { TelaRotas } />
        <Abas.Screen name="Biblioteca" component = { TelaBiblioteca } />
      </Abas.Navigator>
    </NavigationContainer>
  )
};

/*
Através da biblioteca @react-navigation/bottom-tabs
conseguimos criar um aplicativo que possui navegação por abas

Drawer navigation é o tipo de navegação que possui uma barra de título
e um menu lateral oculto. Este menu é exibido quando o usuário arrasta
o dedo do canto para o meio ou quando ele toca no botão da barra de título

Abrir o menu lateral através do toque de um botão exibido junto do
conteúdo da tela será visto nas próximas aulas onde vamos abordar o componente Button.

Identificando as rotas
Assim como no Tab Navigation, aqui o usuário consegue visualizar quais
são as rotas do aplicativo apenas olhando para o menu.

Rota: Cores Normais
Rota: Cores Invertidas

Lembrando que cada tela do aplicativo é representada por uma rota que exibe um componente

Instalando a biblioteca
Assim como vimos com a biblioteca @react-navigation/bottom-tabs,
para utilizar o Drawer navigation será necessário fazer a instalação no seu projeto.

Para instalar o Drawer navigation execute o comando do Código no terminal do
VSCode ou no cmd do Windows.

npm install @react-navigation/drawer

Depois de instalar a biblioteca @react-navigation/drawer precisamos fazer uma alteração.
Abra o arquivo babel.config.js que fica salvo na pasta principal do projeto,
a mesma pasta onde o arquivo App.js está e cole o Código.


*/

module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: ['react-native-reanimated/plugin'],
    };
  }; 


/*
Feito isso já é possível utilizar a navegação em abas no seu projeto.

Criando a navegação com Drawer navigation

O Código representa a criação de um aplicativo que utiliza o Drawer navigation.
*/ 


import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaCorNormal from "./Componentes/TelaCorNormal/";
import TelaCorInvertida from "./Componentes/TelaCorInvertida/";

const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Cores Normais" component = { TelaCorNormal } />
        <Drawer.Screen name="Cores Invertidas" component = { TelaCorInvertida } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}; 


/*
A primeira rota definida dentro de Drawer.Navigator é exibida ao executar o aplicativo

O Código é referente a configuração da navegação no aplicativo
*/ 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from './componentes/TelaInicial';
import TelaPokemon1 from './componentes/TelaPokemon1';
import TelaPokemon2 from './componentes/TelaPokemon2';
import TelaPokemon3 from './componentes/TelaPokemon3';

const Drawer = createDrawerNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component = { TelaInicial } />
        <Drawer.Screen name="Pokémon 1" component = { TelaPokemon1 } />
        <Drawer.Screen name="Pokémon 2" component = { TelaPokemon2 } />
        <Drawer.Screen name="Pokémon 3" component = { TelaPokemon3 } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


/*
Para criar um aplicativo que tenha menu lateral é necessário importar 
o NavigationContainer que vai gerenciar a navegação do aplicativo e o
createDrawerNavigator para criar as rotas do aplicativo as inserindo no próprio menu lateral

Já aprendemos que para navegar entre uma rota e outra tanto no Tab navigation
quanto no Drawer navigation basta tocar nos nomes

Uma outra forma de navegar entre rotas é através do clique de um botão

Além disso, através do toque de um botão é possível abrir o menu lateral do Drawer navigation

Antes de aprender como isso é feito, vamos conhecer nesta aula o componente nativo Button

Veja no Código a codificação completa utilizando o componente button.
*/

import React from 'react';
import { Button, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Button
        title = "Toque aqui"
        onPress = { () => { console.log("O botão foi tocado") } }
      />
    </View>
  );
}


/*
Já aprendemos a utilizar o componente Button e na próxima aula vamos avançar no
estudo sobre navegação e utilizar este componente para navegar entre rotas e
para abrir o menu lateral do Drawer navigation.

Para exibir um botão nativo no aplicativo utilizamos o componente Button que
é importado da biblioteca react-native

Além do botão da barra superior, alguns aplicativos possuem um botão
como alternativa para abrir o menu

Este comportamento - abrir o menu lateral através de um botão,
é inserido na propriedade onPress do botão

O botão que será exibido na tela faz parte do código do componente
que está vinculado à rota. Neste caso o componente TelaHome

Veja no Código um componente que possui um botão que abre o menu lateral ao ser pressionado.
*/
import React from 'react';
import { Button, View } from 'react-native';

export default function TelaHome (props) {
  return (
    <View>
        <Button
            title = "Abrir menu"
            onPress = { ( ) => { props.navigation.openDrawer( ) } }
        />
    </View>
  );
}

/*
props.navigation.openDrawer só existe em aplicativos que possuem a navegação Drawer navigation


Além de navegar tocando nos nomes das rotas nas abas ou no menu lateral,
também é possível navegar entre rotas ao pressionar um botão

Este comportamento - navegar entre uma rota e outra através de um botão,
também é inserido na propriedade onPress do botão

*/

import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';

export default function TelaContato (props) {
  return (
    <View style = { estilo.container }>
      <Text style = { estilo.texto }>
        Tela de contato
      </Text>

      <View style = { estilo.buttonBox }>
        <Button
          title = "Tela inicial"
          onPress = {
            ( ) => { props.navigation.navigate('Tela inicial') }
          }
        />
      </View>
    </View>
  );
}


/*
props.navigation.navigate funciona para todos os tipos de navegação: Tabs, Drawer e Stack

Veja no Código o arquivo App.js responsável por definir que
o aplicativo utiliza navegação em abas.
*/ 

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from "./Componentes/TelaHome/";
import TelaContato from "./Componentes/TelaContato/";
import TelaSobre from "./Componentes/TelaSobre/";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator>
        <Abas.Screen name="Tela inicial" component = { TelaHome } />
        <Abas.Screen name="Contato" component = { TelaContato } />
        <Abas.Screen name="Sobre" component = { TelaSobre } />
      </Abas.Navigator>
    </NavigationContainer>
  )
};


/*
Tela inicial possui dois botões que ao serem clicados navegam entre as rotas.
Veja no Código o componente TelaHome (Componentes/TelaHome.js) associado à rota Tela inicial.
*/

import React from 'react';
import { Button, Text, View } from 'react-native';
import estilo from './styles';

export default function TelaHome (props) {
  return (
    <View style = { estilo.container } >
      <Text style = { estilo.titulo } >
        Tela inicial
      </Text>

      <Text style = { estilo.texto } >
        Toque nos botões abaixo para navegar pelas rotas do aplicativo
      </Text>

      <View style = { estilo.buttonBox } >
        <Button
          title = "Tela Contato"
          onPress = { () => { props.navigation.navigate('Contato') } }
        />
      </View>

      <View style = { estilo.buttonBox } >
        <Button
          title = "Tela Sobre"
          onPress = { () => { props.navigation.navigate('Sobre') } }
        />
      </View>
    </View>
  );
}

/*
O componente TelaSobre possui um botão que ao ser pressionado navega para a rota Tela inicial 

O código do componente TelaSobre


*/

import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';

export default function TelaSobre (props) {
  return (
    <View style = { estilo.container } >
      <Text style = { estilo.titulo } >
        Toque no botão abaixo para abrir o menu lateral.
      </Text>

      <View style = { estilo.buttonBox } >
        <Button
          title = "Tela inicial"
          onPress = { () => { props.navigation.navigate('Tela inicial') } }
        />
      </View>
    </View>
  );
}

/*
No componente TelaSobre foi inserido um botão que navega para a rota Tela inicial

O componente TelaContato também possui um botão que ao ser pressionado
navega para a rota Tela inicial

O código do componente TelaContato pode ser visto no Código

*/

import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from './styles';

export default function TelaContato (props) {
  return (
    <View style = { estilo.container }>
      <Text style = { estilo.titulo }>
        Tela de contato
      </Text>

      <View style = { estilo.buttonBox }>
        <Button
          title = "Tela inicial"
          onPress = { () => { props.navigation.navigate('Tela inicial') } }
        />
      </View>
    </View>
  );
}


/*
Navegar para outra rota através de um botão é mais comum que você pode
imaginar principalmente com apps que utilizam Stack navigation que será
visto na próxima aula

Diferente de Tabs e Drawer, Stack Navigation não expõe as rotas da aplicação.

Repare que o nome da rota que está sendo exibida, aparece na barra superior do aplicativo.
Nesse tipo de navegação só é possível navegar para outra rota através de um botão.

Outro ponto interessante é que ao navegar para uma outra rota do aplicativo
diferente da rota inicial, uma seta é exibida na barra superior

Essa barra com o nome da rota e a seta é padrão do Stack navigation, ou seja
ela já vem criada automaticamente.

Existe uma configuração feita nos aplicativos que utilizam Stack navigation
para ocultar a barra superior. Esse conteúdo será abordado em um outro momento

Instalando a biblioteca

Já sabemos que para utilizar Stack Navigation será necessário fazer a instalação no seu projeto.

Para instalar o Stack navigation execute o comando do Código no terminal
do VSCode ou no cmd do Windows.

npm install @react-navigation/stack

Feito isso já é possível utilizar a navegação do tipo Stack navigation no seu projeto.

Criando a navegação com Stack navigation

O Código seguir representa a criação de um aplicativo que utiliza o Stack navigation
*/ 


import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from "./Componentes/TelaHome/";
import TelaDescricao from "./Componentes/TelaDescricao/";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component = { TelaHome } />
        <Stack.Screen name="Descrição" component = { TelaDescricao } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


/*
Como vimos anteriormente,
a rota Home possui um botão que através dele é possível navegar para a rota Descrição

Lembrando que na rota Descrição a barra superior com a seta que volta para a rota Home,
foi inserida automaticamente pelo Stack navigation.

O código do arquivo App.js referente a configuração da navegação no aplicativo
utilizando Stack navigation pode ser visto no Código abaixo
*/ 

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaReact from "./componentes/TelaReact";
import TelaNode from "./componentes/TelaNode";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="JavaScript" component = { TelaJavaScript } />
        <Stack.Screen name="React" component = { TelaReact } />
        <Stack.Screen name="NodeJS" component = { TelaNode } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


/*
A navegação do aplicativo é feita através do botão inserido no componente
TelaJavaScript que está associado à rota JavaScript. Seu conteúdo pode ser
visualizado no Código abaixo
*/


import React from 'react';
import { Text, View, Button, Image } from 'react-native';

import javascriptImg from '../assets/javascript.png'
import estilo from './estilo';

export default function TelaJavaScript (props) {
  return (
    <View style={ estilo.fundoJS }>
      <View style={ estilo.container }>
        <Image source={ javascriptImg } style={ estilo.logo }/>

        <Text style={ estilo.titulo }>
          JavaScript
        </Text>

        <Text style={ estilo.texto }>
          Veja 2 tecnologias para se tornar um programador fullstack web JavaScript.
        </Text>

        <View style = { estilo.boxBotoes }>
          <Button title="Front-end" onPress = { () => { props.navigation.navigate('React') } } />
          <Button title="Back-end" onPress = { () => { props.navigation.navigate('NodeJS') } } />
        </View>
      </View>
    </View>
  );
} 


/*
O conteúdo do componente TelaReact pode ser visualizado no Código abaixo 
*/

import React from 'react';
import { Text, View, Image } from 'react-native';

import reactImg from '../assets/react.png';
import estilo from './estilo';

export default function TelaReact () {
  return (
    <View style = { estilo.fundoReact }>
      <View style = { estilo.container }>
        <Text style = { estilo.titulo }>
          React
        </Text>

        <Image source = { reactImg } style = { estilo.logo }/>

        <Text style = { estilo.texto }>
          React é uma biblioteca JavaScript utilizada no front-end para criar a camada visual de uma aplicação web utilizando JavaScript.
        </Text>
      </View>
    </View>
  );
}

/*
Da mesma forma, o componente TelaNode que representa a rota NodeJS exibe
a barra com o botão de voltar sem precisar ser configurada como pode ser visto no Código abaixo
*/ 


import React from 'react';
import { Image, Text, View } from 'react-native';

import nodeImg from '../assets/node.png';
import estilo from './estilo';

export default function TelaNode () {
  return (
    <View style = { estilo.fundoNode } >
      <View style = { estilo.container } >
        <Text style = { estilo.titulo }>
          Node.js
        </Text>

        <Image source = { nodeImg } style = { estilo.logo }/>

        <Text style = { estilo.texto }>
          Node.js é uma ferramenta que permite rodar JavaScript no servidor. Com isso você poderá criar o seu Back-end utilizando a linguagem JavaScript.
        </Text>
      </View>
    </View>
  );
}


/*
Stack navigation é muito comum na autenticação de um usuário no aplicativo.
Através dele o usuário só poderá acessar as rotas principais do aplicativo
por exemplo depois que ele digitar usuário e senha válido

Analisando o código do aplicativo

Aqui vamos analisar a parte do código referente ao conteúdo que aprendemos
neste curso, ou seja, a navegação.

Veja no Código o arquivo App.js e a definição das rotas do aplicativo.
*/

import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './componentes/TelaInicial/';
import TelaTrilogia1 from './componentes/TelaTrilogia1/';
import TelaTrilogia2 from './componentes/TelaTrilogia2/';
import TelaTrilogia3 from './componentes/TelaTrilogia3/';

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component = { TelaInicial } />
        <Stack.Screen name="Trilogia 1" component = { TelaTrilogia1 } />
        <Stack.Screen name="Trilogia 2" component = { TelaTrilogia2 } />
        <Stack.Screen name="Trilogia 3" component = { TelaTrilogia3 } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


/*
A navegação do aplicativo é feita através do componente TelaInicial como
pode ser visto no Código abaixo
*/

import React from 'react';
import { View, Button, Image, Text } from 'react-native';
import logo from '../../assets/logo.jpg';
import styles from '../styles';

export default function TelaInicial (props) {
  return (
    <View style = { styles.container }>
      <Text>Star Wars ordem cronológica</Text>
      <Image source = { logo } style = { styles.imagem }/>

      <Text style = { styles.titulo }>
        Você sabe qual é a ordem cronológica da franquia Star Wars?
      </Text>

      <Text style = { styles.textos }>
        Os principais filmes da franquia estão divididos em e trilogias. Clique no botão a seguir para conferir.
      </Text>

      <Button title="Ver 1ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 1") } color="#372d00" />
      <Button title="Ver 2ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 2") } color="#372d00" />
      <Button title="Ver 3ª Trilogia" onPress = { () => props.navigation.navigate("Trilogia 3") } color="#372d00" />
    </View>
  )
}

/*
Identificar as etapas de um projeto antes de iniciar a codificá-lo permite 
um desempenho e foco melhor em cada uma dessas etapas
*/