/*
Já sabemos quais são os programas que precisamos instalar, agora vamos começar.

Instalando o VS Code

O primeiro programa que vamos instalar é o editor de texto VS Code.
Ele pode ser baixado no seu site oficial,

Ele é instalado da mesma forma que um programa normal do Windows,
por isso não entraremos em detalhes.

Instalando o Node.js

Para baixar o Node basta acessar o seu site oficial.

Em alguns computadores ao executar comandos no terminal do VS Code a seguinte mensagem aparece

expo : O arquivo C:\Users\usuario\AppData\Roaming\npm\expo.ps1
não pode ser carregado porque a execução de scripts foi desabilitada
neste sistema.
Para resolver esse problema basta executar o comando abaixo sempre 
que for utilizar o terminal do VS Code

cmd

Instalando o Expo

A instalação do Expo no computador é feita pelo Node através do comando no Código .

npm install -g expo-cli

O Expo é instalado no celular da mesma forma que um aplicativo comum, ou seja,
através das lojas Google Play ou App Store

O React Native é um framework, ou seja, um conjunto de códigos JavaScript que
são utilizados a partir dos programas Node, VS Code e Expo


Agora que já revisamos o que já sabemos vamos aprender os comandos para utilizar
o Expo. Você vai aprender a utilizar os comandos do Expo para:

Logar e deslogar na conta do Expo.

Criar um aplicativo React Native.

Executar o aplicativo e testar no seu celular.

Criando uma conta no Expo

Antes de começar a utilizar o Expo para criar aplicativos, precisamos criar 
uma conta Expo gratuita

Acesse o site oficial do Expo para criar uma conta gratuita.

A conta do Expo é gratuita e pode ser criada tanto pelo site quanto pelo aplicativo

Agora que você já possui uma conta Expo basta se logar tanto no computador quanto no celular.

O comando usado para fazer login com o Expo no seu computador pode ser visualizado no Código

expo login 

O próximo passo é criar um aplicativo utilizando Expo.

Criando um aplicativo React Native utilizando Expo

Antes de criar um aplicativo precisamos entender como acessar pastas no terminal.

O comando usado para abrir uma pasta pode ser visto no Código.

cd nome-da-pasta


Agora que já sabemos abrir pastas no terminal, podemos prosseguir e criar um aplicativo
utilizando o Expo.

Para isso basta abrir o terminal do computador e digitar o comando do Código.

expo init MeuProjeto


O comando para iniciar o aplicativo pode ser visualizado no Código .

expo start

Caso não esteja logado na conta do Expo no computador e no celular o
nome do projeto não vai aparecer

Algumas vezes ao executar o aplicativo um erro relacionado com a conexão pode ser gerado.

O Node é essencial para que o Expo funcione corretamente.
Caso ele seja desinstalado do seu computador o Expo para de funcionar


Como vimos na aula anterior ao executar o comando expo init o Expo cria pra gente
um aplicativo vazio

Ele foi criado na pasta com o nome que definimos para o aplicativo

Para editar o código criado, vamos abrir o nosso projeto no VS Code.

Perceba que mesmo com pouco conhecimento já conseguimos identificar no
código onde fica o texto que é exibido na tela e alterá-lo


Como já havíamos aprendido, no React Native tudo é feito através
de códigos e nesta aula conseguimos definir a cor de fundo do
aplicativo utilizando um texto, ou seja, um código.

Até o momento já aprendemos a identificar duas partes do código

Na próxima aula vamos abordar mais sobre essas partes do código.

Parabéns você já consegue inserir textos na tela do aplicativo!
Essa é uma evolução da sua carreira como programador(a) React Native

Já sabemos que neste momento não precisamos nos preocupar em entender 100%
da sintaxe React Native Neste primeiro momento nosso foco é em decorar códigos,
ou seja, decorar a sintaxe React Native como por exemplo o código usado
para exibir um texto na tela

Na programação React Native vamos nos deparar com algumas estruturas de
sintaxe que estarão presentes em praticamente todos os arquivos de códigos.

Veja o aplicativo Hello World  

*/ 


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>Criado por my application</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// A próxima estrutura que vamos ver é a de criação de um componente. 

/*
Anteriormente vimos que existe a estrutura de sintaxe chamada tags,
que é utilizada para exibir algo para o usuário.
Existe um detalhe importante que precisamos nos atentar na escrita dos códigos React Native.

A linguagem JavaScript, utilizada pelo React Native, é case sensitive, ou seja,
ela diferencia letras maiúsculas de minúsculas
Já aprendemos a estrutura de sintaxe usada para importar
e exibir um componente na tela. Na próxima aula aprenderemos a estrutura de sintaxe
usada para estilizar o aplicativo.

Tudo que aparece na tela é chamado de componente na programação React Native.
Esses componentes são exibidos utilizando tags 


A próxima estrutura de sintaxe está relacionada com a aparência do aplicativo

Veja o aplicativo Hello World 

*/ 

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>Criado por DevMedia</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 


/*
Para que o React Native entenda o que deve ter a aparência que criamos, 
precisamos utilizar uma estrutura de sintaxe para isso.
Para reforçar a mecânica de estilização de um componente vamos revisar a
sua estrutura de sintaxe

Quanto mais você praticar mais a sintaxe do React Native vai lhe parecer familiar.

No React Native criamos uma variável para guardar os estilos do aplicativo.
É através dessa variável que o React Native consegue saber onde criamos o estilo


Nas aulas anteriores aprendemos a criar um aplicativo, inserir dois textos e
mudar a cor de fundo da tela.

Nesta aula vamos revisar o que aprendemos e para isso criaremos um novo aplicativo.

Você já sabe como criar um aplicativo

Para facilitar o processo de aprendizado, vamos utilizar um código mais
simples do que o que vimos na aula anterior.

primeiramente vamos entender os passos utilizados para criá-lo.

Criando o código do zero

Já conhecemos o código de um aplicativo React Native e conseguimos
identificar as partes referentes a importação, exibição e estilização.
No flow abaixo veremos passo a passo como um código React Native é criado:

Agora que você já conhece os passos que usamos para construir o aplicativo,
vamos entender a construção das suas etapas.

Para acompanhar as etapas de construção do aplicativo, vamos abrir o arquivo
App.js e apagar todo o código, ou seja, apagar o código que o Expo criou.
Feito isso, vamos inserir o Código 1 no arquivo App.js

*/ 

import React from 'react';
import { Text } from 'react-native';

export default function App() {
  return (
      <Text>Hello World</Text>
  );
}

/*
Só é possível exibir um texto na tela utilizando o componente Text

Agora que já finalizamos a etapa de exibir o conteúdo na tela, 
podemos estilizá-lo. O Código abaixo possui o novo código do arquivo App.js
referente a esta etapa.
*/ 

import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
      <Text style={ estilos.texto }>Hello World</Text>
  );
}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize: 36,
  }
});

// Veja abaixo o aplicativo criado:

import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
      <Text style={ estilos.texto }>Hello World</Text>
  );
}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize: 36,
  }
}); 


/*
Para estilizar o componente Text importamos StyleSheet,
criamos um estilo e em seguida associamos o estilo ao componente

Já criamos um aplicativo que exibe um texto. Agora vamos pintar o fundo de azul,
inserir mais um texto e centralizá-los

A primeira alteração que faremos é adicionar o segundo texto no aplicativo.
Para isso substitua o código do arquivo App.js pelo Código

*/

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={ estilos.texto }>Hello World</Text>
      <Text>Criado por DevMedia</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  texto: {
    marginTop: 20,
    fontSize: 36,
  }
});

/*
Já inserimos mais um texto e aprendemos a utilizar
o componente View. Vamos agora centralizar os textos como pode ser visto

Mais uma vez, vamos abrir o arquivo App.js e substituir o seu código pelo Código
*/ 

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Hello World</Text>
      <Text>Criado por DevMedia</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  texto: {
    marginTop: 20,
    fontSize: 36,
  }
});

/*
Parabéns!!! Você deu o primeiro passo na programação React 
    Native e aprendeu a sintaxe utilizada para criar um aplicativo
*/