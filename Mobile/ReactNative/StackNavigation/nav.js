/*
empre que utilizar navegação no aplicativo,
é necessário criar um container que ficará responsável pelo 
código nativo da navegação. Este componente é o NavigationContainer.

Só é possível usar este componente após instalar algumas bibliotecas

Repare que dentro do componente NavigationContainer inserimos o tipo
de navegação do nosso aplicativo. Na próxima aula conheceremos os tipos de navegação possíveis.

Em um aplicativo só pode existir um componente NavigationContainer para gerenciar a navegação

Já sabemos que quem é responsável pela parte nativa da navegação do aplicativo é o componente
NavigationContainer e que dentro dele inserimos o tipo de navegação.
Vamos conhecer os tipos de navegação.

Tab navigation

Exibe abas que permitem trocar de uma tela para outra.
Note que ao tocar nas abas na parte inferior da tela, o
aplicativo navega para a tela correspondente à aba,


Drawer navigation

Ao puxar a tela da esquerda para direita um menu com os nomes das telas aparece,

createStackNavigator (Stack Navigator)
Essa navegação possui uma barra de título e por padrão um botão para voltar
à tela anterior. Esse tipo de navegação não expõe as telas da aplicação como
as anteriores que expõem através do menu ou de abas

Para cada tipo de navegação que será utilizado no aplicativo é necessário
instalar a biblioteca correspondente a esse tipo.

Note que os tipos Tab navigation e Drawer navigation possuem os nomes
das telas ou na parte inferior do aplicativo ou no menu que navega entre as telas.
Ao tocar no nome da tela, ela será aberta. Essa não é a única forma para abrir
uma tela quando usamos Tab navigation ou Drawer navigation.
Além dessa forma também é possível navegar entre telas da mesma forma
que veremos no createStackNavigator.

No nosso projeto utilizaremos createStackNavigator e por isso apenas ele será instalado

No React Native só instalamos o que vamos utilizar no nosso projeto,
por isso instalamos apenas a biblioteca correspondente a funcionalidade que desejamos

Como vimos na aula anterior, no nosso projeto vamos utilizar o createStackNavigator


O React Native não possui nativamente uma forma de lidar com navegação,
por isso contamos com uma biblioteca chamada react-navigation.
É ela que possui o componente NavigationContainer que aprendemos nas aulas anteriores.

Por se tratar de uma biblioteca a parte precisamos instalá-la.
Além dela vamos instalar a biblioteca @react-navigation/stack que nos fornece a
função createStackNavigator.

Abra o terminal na raiz do seu projeto e execute o seguinte comando:

npm install @react-navigation/native @react-navigation/stack
@react-navigation/native e @react-navigation/stack precisam de outras bibliotecas
nativas para que funcionem corretamente.
Por isso vamos executar o seguinte comando e fazer as instalações necessárias:

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

O comando dado acima é para uso de aplicativos criados através do expo (nosso caso).
Para aplicativos criados utilizando o comando react-native init recomendamos que siga
o passo a passo do próprio site da biblioteca.
Após a instalação execute o aplicativo.

Erro possível

Algumas vezes quando instalamos, atualizamos ou removemos uma biblioteca do nosso
projeto, pode ocorrer um erro. Possíveis motivos:

Conflito entre duas ou mais bibliotecas;
Remoção de uma biblioteca que ainda está sendo utilizada.
Caso ocorra um erro após a instalação ou remoção de uma biblioteca execute
o seguinte comando no terminal:

npm install

Este comando verifica todas as bibliotecas que você já havia instalado
e faz a reinstalação delas.

Seja seletivo ao escolher as bibliotecas para o seu projeto.
Escolha as que possuem uma equipe por trás dela fazendo manutenções constantes,
caso contrário, uma simples atualização do React Native e ela pode parar de funcionar

Com as bibliotecas devidamente instaladas chegou a hora de criar as rotas do nosso aplicativo.

Abra o arquivo App.js e insira o Código
*/ 

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './telas/TelaInicio';
import TelaTabuada from "./telas/TelaTabuada";
import TelaRespostaCorreta from "./telas/TelaRespostaCorreta";
import TelaRespostaErrada from "./telas/TelaRespostaErrada";

const Navegacao = createStackNavigator();

const App = () => (
  <NavigationContainer >
    <Navegacao.Navigator screenOptions={{ headerShown: false }}>
      <Navegacao.Screen name="Inicio" component = { TelaInicio } />
      <Navegacao.Screen name="Tabuada" component = { TelaTabuada } />
      <Navegacao.Screen name="RespostaCorreta"
        component = { TelaRespostaCorreta } />
      <Navegacao.Screen name="RespostaErrada"
         component = { TelaRespostaErrada } />
    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;


/*
A navegação do nosso aplicativo já está configurada. A primeira rota que
será exibida é a primeira declarada, ou seja, Inicio, que está associada
ao componente TelaInicio

Com a navegação pronta só precisamos chamar a função que vai navegar de
uma tela para outra. Esse será o assunto da próxima aula.

A primeira rota definida é a que será exibida quando o aplicativo
carregar no nosso caso a rota TelaInicio

Com as rotas criadas já é possível navegar entre as telas 

Para que o aplicativo entenda que você quer navegar da rota Inicio para as demais,
é necessário chamar o método navigate. Vamos inserir este método no componente TelaInicio.

O código do componente TelaInicio (telas/TelaInicio/index.js) segue no Código
*/ 

import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground }
 from "react-native";

import { validarResposta, gerarNumero } from "./funcoes";

import estilo from './estilo';
import fundo from '../../assets/fundo.png';

const TelaInicio = (props) => {
  const [ primeiroNumero, setPrimeiroNumero ] = useState(1);
  const [ segundoNumero, setSegundoNumero ] = useState(1);
  const [ respostaUsuario, setRespostaUsuario ] = useState(0);

  const criarQuestao = () => {
    setPrimeiroNumero(gerarNumero());
    setSegundoNumero(gerarNumero());
    setRespostaUsuario("");
  }

  const responder = () => {
    if ( validarResposta(primeiroNumero, segundoNumero, respostaUsuario) ) {
      props.navigation.navigate('RespostaCorreta');
    } else {
      props.navigation.navigate('RespostaErrada');
    }

    criarQuestao();
  }

  const abrirTelaTabuada = () => {
    props.navigation.navigate('Tabuada');
  }

  return (
    <ImageBackground source = { fundo } style = { estilo.imagemFundo }>
      <View style = { estilo.tela }>
        <View style = { estilo.boxPergunta }>
          <Text style = { estilo.titulo }>
            Duvido você acertar!
          </Text>

          <View style = { estilo.boxQuestao }>
            <Text style = { estilo.texto }>
              { primeiroNumero }
            </Text>

            <Text style = { estilo.texto }>
              X
            </Text>

            <Text style = { estilo.texto }>
              { segundoNumero }
            </Text>

            <Text style = { estilo.texto }>
              =
            </Text>

            <TextInput
              textAlign = "center"
              onChangeText = { setRespostaUsuario }
              keyboardType = "numeric"
              value = { respostaUsuario.toString() }
              autoFocus = { true }
              maxLength = { 3 }
              style = { estilo.input }/>
          </View>

          <View style = { estilo.opcoes }>
            <View style = { estilo.boxBotao }>
              <Button title = "Pular" onPress = { criarQuestao } color = "#e53b62"/>
            </View>

            <View style = { estilo.boxBotao }>
              <Button title = "Responder" onPress = { responder } color = "#a0df52"/>
            </View>
          </View>

        </View>

        <View style = { estilo.boxBotaoTabuada }>
          <Button title = "Ver tabuada"
           onPress = { abrirTelaTabuada } color = "#1f4f66"/>
        </View>
      </View>
    </ImageBackground>
  );
}

export default TelaInicio;


/*
Ao salvar as alterações feitas, nosso aplicativo já consegue navegar 
da primeira tela (TelaIninio) para as demais.

Na próxima aula vamos aprender a voltar para a TelaInicio
e com isso conseguiremos navegar no nosso aplicativo 

Existem alguns casos onde não queremos acessar uma nova rota e sim voltar para a rota anterior

Este é o caso do componente TelaRespostaCorreta e por isso vamos utilizar o método goBack.

Abra o arquivo telas/TelaRespostaCorreta/index.js e insira o Código
*/

import React from 'react';
import { Text, ImageBackground, View, Button } from 'react-native';

import trofeu from '../../assets/trofeu.jpg';
import estilo from './estilo';

const TelaRespostaCorreta = (props) => {
  const voltar = () => {
    props.navigation.goBack();
  }

  return (
    <ImageBackground source = { trofeu } style = { estilo.fundo } resizeMode = "contain">
      <Text style = { estilo.texto }>Parabéns, você acertou!</Text>

      <View style = { estilo.boxBotaoTabuada }>
        <Button title = "Responder outro" onPress = { voltar } color = "#a0df52"/>
      </View>
    </ImageBackground>
  )
}

export default TelaRespostaCorreta;


/*
O objeto navigation pertence a biblioteca react-navigation
e por isso não é utilizado apenas no tipo de navegação Stack Navigation
(createStackNavigator) utilizado neste curso. O objeto navigation e seus
métodos (navigate e goBack) também são utilizados quando usamos os tipos
de navegação Drawer Navigation e Tabs Navigation.

Nesta aula vamos codificar a navegação dos componentes TelaRespostaErrada e TelaTabuada.

Alterando o componente TelaRespostaErrada
O componente TelaRespostaErrada navega para as rotas TelaInicio e TelaTabuada.
O seu código é o Código

*/ 

import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';

import errou from '../../assets/errou.jpg';
import estilo from './estilo';

const TelaRespostaErrada = (props) => {
  const abrirTelaTabuada = () => {
    props.navigation.navigate('Tabuada');
  }

  const voltar = () => {
    props.navigation.goBack();
  }

  return (
    <ImageBackground source = { errou } style = { estilo.fundo } resizeMode = "cover">
      <View style = { estilo.boxConteudo }>
        <Text style = { estilo.texto }>
          Ops! Resposta errada que tal ver a tabuada?
        </Text>

        <View style = { estilo.boxBotoes }>
          <View style = { estilo.boxBotao }>
            <Button title = "Ver tabuada" onPress = { abrirTelaTabuada } color = "#1f4f66"/>
          </View>

          <View style = { estilo.boxBotao }>
            <Button title = "Tentar outro" onPress = { voltar } color = "#a0df52"/>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

export default TelaRespostaErrada;


/*
Alterando o componente TelaTabuada
Para finalizarmos nosso aplicativo vamos alterar o componente TelaTabuada
que navega para a rota Inicio (componente TelaInicio).

No Código temos ocódigo do componente TelaTabuada.
*/ 

import { ImageBackground, View, Button } from 'react-native';

import estilo from './estilo';
import tabuada from '../../assets/tabuada.jpeg';

const TelaTabuada = (props) => {
  const voltar = () => {
    props.navigation.navigate("Inicio");
  }

  return (
    <ImageBackground source = { tabuada } style = { estilo.fundo } resizeMode = "contain">
      <View style = { estilo.boxBotaoTabuada}>
        <Button title = "Responder" onPress = { voltar } color = "#a0df52"/>
      </View>
    </ImageBackground>
  )
}

export default TelaTabuada;


