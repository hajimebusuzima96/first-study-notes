/*
Agora que você já sabe utilizar os componentes ScrollView,
ImageBackground e Pressable vamos vê-los na prática

Veja a seguir como as telas foram criadas e como foi inserido os componentes ScrollView,
ImageBackground e Pressable.

O código completo do aplicativo pode ser baixado e visualizado através do
botão Ver projeto e código

Componente TelaInicial
O código de exibição do componente TelaInicial
- arquivo componentes/TelaInicial/index.js, pode ser visto no Código
*/ 

import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';

import imgFundo from '../../assets/logo.png';
import imgConsole from '../../assets/console-1.png';
import imgJogo from '../../assets/jogo-1.png';
import imgXcloud from '../../assets/xcloud-1.png';
import estilos from './estilos';

export default function TelaInicial (props) {
  return (
    <View style={ estilos.container }>
      <Image source={ imgFundo } style={ estilos.img } />
      <Text style={ estilos.titulo }>Xbox</Text>
      <Text style={ estilos.descricao }>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>

      <Pressable
        onPress={ () => { props.navigation.navigate("Consoles") } }
        style={estilos.card}
      >
        <Image source={ imgConsole } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os consoles</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Jogos") } }
        style={estilos.card}
      >
        <Image source={ imgJogo } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça os jogos</Text>
      </Pressable>

      <Pressable
        onPress={ () => { props.navigation.navigate("Nuvem") } }
        style={estilos.card}
      >
        <Image source={ imgXcloud } style={ estilos.cardImg } />
        <Text style={ estilos.cardTexto}>Conheça o xCloud</Text>
      </Pressable>
    </View>
  )
}

/*
Através do componente Pressable conseguimos criar um botão com uma imagem e um texto
na Tela inicial

Componente TelaConsole

O código de exibição do componente TelaConsole
- arquivo componentes/TelaConsole/index.js, pode ser visto no Código
*/ 


import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';

import imgConsole1 from '../../assets/console-1.png';
import imgConsole2 from '../../assets/console-2.png';
import estilos from './estilos';

export default function TelaPlanetas () {
  return (
    <ScrollView style={ estilos.container}>
      <View style={ estilos.box }>
        <Image source={ imgConsole1 } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES S</Text>
        <Text style={ estilos.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilíbrio entre gráfico e performance</Text>
      </View>

      <View style={ estilos.box }>
        <Image source={ imgConsole2 } style={ estilos.img } />
        <Text style={ estilos.titulo }>XBOX SERIES X</Text>
        <Text style={ estilos.subtitulo }>O Xbox mais rápido e poderoso de todos os tempos.</Text>
        <Text style={ estilos.paragrafo }>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
      </View>
    </ScrollView>
  )
}

/*
Através do componente ScrollView foi possível utilizar uma barra de scroll
para exibir todo conteúdo que não coube na Tela Consoles

Componente TelaJogos
O código de exibição do componente TelaJogos
- arquivo componentes/TelaJogos/index.js, pode ser visto no Código


*/ 

import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';

import imgJogoCyber from '../../assets/jogo-2.png';
import imgJogoForza from '../../assets/jogo-3.png';
import imgJogoHalo from '../../assets/jogo-4.png';
import estilos from './estilos';


export default function TelaJogos () {
  return (
    <ScrollView>
      <View style={ estilos.container }>
        <Text style={ estilos.titulo }>Jogos em 4k</Text>
        <Text style={ estilos.descricao }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgJogoForza } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Forza Horizon 5</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. </Text>
        </View>

        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgJogoCyber } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Cyberpunk 2077</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>
        </View>

        <View style={ estilos.boxJogo }>
          <ImageBackground source={ imgJogoHalo } style={ estilos.card }>
            <Text style={ estilos.cardTitulo }>Halo 5</Text>
          </ImageBackground>

          <Text style={ estilos.paragrafo }>Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
        </View>
      </View>
    </ScrollView>
  )
} 

/*
Através do ScrollView e do ImageBackground conseguimos construir a Tela Jogos que
exibe todo conteúdo através de uma barra de scroll e também textos que são exibidos
na frente de imagens

Componente TelaNuvem

O código de exibição do componente TelaNuvem - arquivo componentes/TelaNuvem/index.js,
pode ser visto no Código

*/

import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';

import imgFundo from '../../assets/fundo-xcloud.png';
import img1 from '../../assets/xcloud-2.png';
import estilos from './estilos';

export default function TelaNuvem () {
  return (
    <ImageBackground source={ imgFundo } style={ estilos.container }>
      <Text style={ estilos.titulo }>Xbox Cloud Gaming</Text>
      <Text style={ estilos.subtitulo }>Serviço de streaming de jogos</Text>
      <Text style={ estilos.paragrafo }>Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.</Text>
      <Text style={ estilos.paragrafo }>Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.</Text>
      <Text style={ estilos.paragrafo }>Através de uma assinatura você terá um XBOX virtual sempre que precisar.</Text>
      <Image source={ img1 } style={ estilos.img } />
    </ImageBackground>
  )
}

/*
Exibimos uma imagem no fundo da Tela Nuvem através do componente ImageBackground

O aplicativo criado pode ser visto no codigo abaixo:
*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial";
import TelaConsoles from "./componentes/TelaConsoles";
import TelaJogos from "./componentes/TelaJogos";
import TelaNuvem from "./componentes/TelaNuvem";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component = { TelaInicial } />
        <Stack.Screen name="Consoles" component = { TelaConsoles } />
        <Stack.Screen name="Jogos" component = { TelaJogos } />
        <Stack.Screen name="Nuvem" component = { TelaNuvem } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};


/*
Você pode combinar os componentes Pressable, ScrollView
e ImageBackground para criar telas com uma aparência mais profissional
e assim será possível criar aplicativos standalone a fim de serem utilizados
para divulgação de uma empresa
*/