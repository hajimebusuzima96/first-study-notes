/*
Quando a tela do aplicativo possui muitos elementos visuais
é necessário o uso de uma barra de rolagem para exibir todo o conteúdo 

Para que a tela tenha barra de rolagem é necessário utilizar o componente ScrollView

Veja o código usado no aplicativo
*/ 

import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

import Capa from './assets/capa.png';
import estilos from './estilos';

export default function App() {
  return (
    <ScrollView style={ estilos.container }>
      <Image source={ Capa } style={ estilos.imagem }/>

      <Text style={ estilos.titulo }>The Beatles</Text>
      <Text style={ estilos.subtitulo }>Help</Text>

      <View>
        <Text style={ estilos.paragrafo }>
          Help, I need somebody
          Help, not just anybody
          Help, you know I need someone, help!
        </Text>

        <Text style={ estilos.paragrafo }>
          When I was younger, so much younger than today
          I never needed anybody's help in any way
          But now these days are gone, I'm not so self assured
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>

        <Text style={ estilos.paragrafo }>
          And now my life has changed in oh so many ways
          My independence seems to vanish in the haze
          But every now and then I feel so insecure
          I know that I just need you like I've never done before
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>

        <Text style={ estilos.paragrafo }>
          When I was younger, so much younger than today
          I never needed anybody's help in any way
          But now these days are gone, I'm not so self assured
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>
      </View>
    </ScrollView>
  );
}

/*
O componente ScrollView é importado da biblioteca react-native e 
sua finalidade é exibir uma barra de rolagem com o conteúdo que não cabe na tela

Veja o Código usado
*/ 

import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

import Capa from './assets/capa.png';
import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image source={ Capa } style={ estilos.imagem }/>

      <Text style={ estilos.titulo }>The Beatles</Text>
      <Text style={ estilos.subtitulo }>Help</Text>

      <ScrollView>
        <Text style={ estilos.paragrafo }>
          Help, I need somebody
          Help, not just anybody
          Help, you know I need someone, help!
        </Text>

        <Text style={ estilos.paragrafo }>
          When I was younger, so much younger than today
          I never needed anybody's help in any way
          But now these days are gone, I'm not so self assured
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>

        <Text style={ estilos.paragrafo }>
          And now my life has changed in oh so many ways
          My independence seems to vanish in the haze
          But every now and then I feel so insecure
          I know that I just need you like I've never done before
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>

        <Text style={ estilos.paragrafo }>
          When I was younger, so much younger than today
          I never needed anybody's help in any way
          But now these days are gone, I'm not so self assured
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={ estilos.paragrafo }>
          Help me if you can, I'm feeling down
          And I do appreciate you being round
          Help me, get my feet back on the ground
          Won't you please, please help me?
        </Text>
      </ScrollView>
    </View>
  );
}

/*
Para entender na prática o uso do componente ScrollView,
vamos criar um aplicativo que possui barra de scroll

O código de exibição do aplicativo pode ser visto no Código abaixo
*/ 

import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import imgCasal from './assets/casal.png';
import imgFilhos from './assets/filhos.png';
import imgVovo from './assets/vovo.png';
import imgIrmaes from './assets/irmaes.png';
import estilos from './estilos';

export default function App() {
  return (
    <ScrollView style={ estilos.container }>
      <Text style={ estilos.titulo }>Família Simpsons</Text>

      <View style={estilos.card}>
        <Image source={ imgCasal } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>O Casal</Text>
        <Text style={ estilos.cardParagrafo }>Homer Jay Simpson é o pai e patriarca da família Simpsons.</Text>
        <Text style={ estilos.cardParagrafo }>Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os Simpsons.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={ imgFilhos } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>Os Filhos</Text>
        <Text style={ estilos.cardParagrafo }>Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso</Text>
        <Text style={ estilos.cardParagrafo }>Lisa Marie é a filha do meio e a mais inteligente.</Text>
        <Text style={ estilos.cardParagrafo }>Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={ imgVovo } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>O Vovô</Text>
        <Text style={ estilos.cardParagrafo }>Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de Hommer simpson</Text>
      </View>

      <View style={estilos.card}>
        <Image source={ imgIrmaes } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>As Cunhadas</Text>
        <Text style={ estilos.cardParagrafo }>Patty e Selma são as irmãs de Margie e vivem de forma 'largada'.</Text>
      </View>
    </ScrollView>
  );
}

/*Veja o codigo do aplicativo abaixo */

import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import imgCasal from './assets/casal.png';
import imgFilhos from './assets/filhos.png';
import imgVovo from './assets/vovo.png';
import imgIrmaes from './assets/irmaes.png';
import estilos from './estilos';

export default function App() {
  return (
    <ScrollView style={ estilos.container }>
      <Text style={ estilos.titulo }>Família Simpsons</Text>

      <View style={estilos.card}>
        <Image source={ imgCasal } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>O Casal</Text>
        <Text style={ estilos.cardParagrafo }>Homer Jay Simpson é o pai e patriarca da família Simpsons.</Text>
        <Text style={ estilos.cardParagrafo }>Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os Simpsons.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={ imgFilhos } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>Os Filhos</Text>
        <Text style={ estilos.cardParagrafo }>Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso</Text>
        <Text style={ estilos.cardParagrafo }>Lisa Marie é a filha do meio e a mais inteligente.</Text>
        <Text style={ estilos.cardParagrafo }>Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={ imgVovo } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>O Vovô</Text>
        <Text style={ estilos.cardParagrafo }>Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de Hommer simpson</Text>
      </View>

      <View style={estilos.card}>
        <Image source={ imgIrmaes } style={ estilos.cardImg } />
        <Text style={ estilos.cardTitulo }>As Cunhadas</Text>
        <Text style={ estilos.cardParagrafo }>Patty e Selma são as irmães de Margie e vivem de forma 'largada'.</Text>
      </View>
    </ScrollView>
  );
}

/*
O Scrollview é um componente do tipo container e você pode usá-lo praticamente
da mesma forma que o componente View. Nenhuma estilização especial é necessária
para que o componente exiba a barra de scroll. Os mesmos estilos que você aplicou
até agora no componente View podem ser utilizados também com Scrollview

Além de pintar o fundo de um componente, também é possível exibir uma imagem
Para exibir uma imagem de fundo é necessário utilizar o componente ImageBackground

O componente ImageBackground exibe uma imagem de fundo
Veja o código de exibição do aplicativo
*/ 

import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import imgFundo from './assets/fundo.png';
import estilos from './estilos';

export default function App() {
  return (
    <ImageBackground style={ estilos.container } source={ imgFundo }>

      <View style={ estilos.box }>
        <Text style={ estilos.boxTitulo }>Planeta Terra</Text>
        <Text style={ estilos.boxParagrafo }>Nosso planeta é um dos oito que estão no Sistema Solar orbitando em torno de uma estrela central: o Sol.</Text>
        <Text style={ estilos.boxParagrafo }>Essa órbita permite o desenvolvimento da vida devido à temperatura que chega até nós, o que chamamos de radiação solar.</Text>
      </View>

    </ImageBackground>
  );
}

/*
Propriedades do componente ImageBackground
Existem algumas propriedades que podemos passar para o componente
ImageBackground que mudam a aparência da imagem que será exibida.


Veja no Código o componente ImageBackground com as
propriedades que vamos aprender escritas uma embaixo da outra.
*/ 
<ImageBackground
        style={ estilos.container }
        source={ imgFundo }
        blurRadius={10}
        resizeMode="stretch"
        >
</ImageBackground>

/*
Veja no Código exemplos de valores atribuídos à propriedade blurRadius
do componente ImageBackground.

blurRadius={10}
blurRadius={20}
blurRadius={40}

Veja no Código os valores possíveis para a propriedade resizeMode
do componente ImageBackground.

resizeMode="cover"
resizeMode="contain"
resizeMode="stretch"
resizeMode="repeat"
resizeMode="center"

ImageBackground em uma tela de scroll
É possível combinar os componentes ImageBackground e ScrollView
para que o aplicativo tenha uma barra de scroll e uma imagem de fundo.

Veja o codigo usado.
*/

import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';

import imgCeu from './assets/por-do-sol.jpg';
import estilos from './estilos';

export default function App() {
  return (
    <ScrollView>

      <ImageBackground style={ estilos.container } source={ imgCeu } >

        <View style={ estilos.box }>
          <Text style={ estilos.boxTitulo }>Luz do sol</Text>
          <Text style={ estilos.boxParagrafo }>O céu envia-nos cerca de 10% da luz do Sol durante o dia. O seu brilho deve-se à difusão da luz do Sol pelas moléculas na atmosfera.  Quando olhamos para o céu, estamos a ver apenas os raios de Sol que foram desviados pelas moléculas da atmosfera de tal modo que ficam exatamente direcionados para os nossos olhos.</Text>
        </View>

        <View style={ estilos.box }>
          <Text style={ estilos.boxTitulo }>O céu é azul</Text>
          <Text style={ estilos.boxParagrafo }>O céu não é amarelado como o Sol porque a difusão funciona como uma peneira que só reflete raios azulados. É também devido ao mesmo fenômeno que o céu fica acinzentado (lácteo) quando há luar e faz com que não se vejam tão bem as estrelas.</Text>
        </View>

        <View style={ estilos.box }>
          <Text style={ estilos.boxTitulo }>Deveria ser violeta</Text>
          <Text style={ estilos.boxParagrafo }>O céu, de fato, deveria ser mais violeta, embora, por causa da absorção da atmosfera, haja menos violeta na luz do Sol. O que se passa é que os nossos olhos não têm nenhum receptor especialmente sensível a essa cor.</Text>
        </View>

        <View style={ estilos.box }>
          <Text style={ estilos.boxTitulo }>De noite</Text>
          <Text style={ estilos.boxParagrafo }>De noite, o céu é negro porque não existe difusão de luz solar. No entanto, se o universo é infinito em tamanho e as estrelas e galáxias estão distribuídas por este universo infinito, então poderíamos esperar ver uma estrela em cada direção em que observamos o céu.</Text>
        </View>

      </ImageBackground>

    </ScrollView>
  );
}

/*
Exemplo prático

Para entender na prática o uso do componente ImageBackground, vamos criar o aplicativo

O código de exibição do aplicativo pode ser visto no Código abaixo
*/

import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import imgRaposa from './assets/raposa.png';
import imgAterrissagem from './assets/aterrissagem.png';
import imgToxico from './assets/design-toxico.png';
import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container } >
          <Text style={ estilos.titulo }>Top Fotografias</Text>
          <Text style={ estilos.subtitulo }>Candidatas a prêmio de fotografia da vida selvagem em 2021</Text>

        <ImageBackground style={ estilos.card } source={ imgRaposa }>
          <Text style={ estilos.cardTitulo }>Raposa da tempestade</Text>
          <Text style={ estilos.cardParagrafo }>Jonny Armstrong</Text>
        </ImageBackground>

        <ImageBackground style={ estilos.card } source={ imgAterrissagem }>
          <Text style={ estilos.cardTitulo }>Aterrissagem de Apolo</Text>
          <Text style={ estilos.cardParagrafo }>Ermelin Dupiex</Text>
        </ImageBackground>

        <ImageBackground style={ estilos.card } source={ imgToxico }>
          <Text style={ estilos.cardTitulo }>Design tóxico</Text>
          <Text style={ estilos.cardParagrafo }>Gheorghe Popa</Text>
        </ImageBackground>
    </View>
  )
}



/*
O código de estilização do aplicativo pode ser visto no Código abaixo 
*/

import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitulo:{
    fontSize: 16,
    textAlign: "center",
  },

  card: {
    width: 300,
    height: 150,
    marginTop: 30,
  },
  cardTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10
  },
  cardParagrafo: {
    color: '#fff',
    textAlign: "center",
  }
});

export default estilos;


/*Veja o aplicativo sendo executado no codigo abaixo:*/ 

import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import imgRaposa from './assets/raposa.png';
import imgAterrissagem from './assets/aterrissagem.png';
import imgToxico from './assets/design-toxico.png';
import estilos from './estilos';

export default function App() {
  return (
    <View style={ estilos.container } >
      <Text style={ estilos.titulo }>Top Fotografias</Text>
      <Text style={ estilos.subtitulo }>Candidatas a prêmio de fotografia da vida selvagem em 2021</Text>
      
      <ImageBackground style={ estilos.card } source={ imgRaposa }>
        <Text style={ estilos.cardTitulo }>Raposa da tempestade</Text>
        <Text style={ estilos.cardParagrafo }>Jonny Armstrong</Text>
      </ImageBackground>
      
      <ImageBackground style={ estilos.card } source={ imgAterrissagem }>
        <Text style={ estilos.cardTitulo }>Aterrissagem de Apolo</Text>
        <Text style={ estilos.cardParagrafo }>Ermelin Dupiex</Text>
      </ImageBackground>
      
      <ImageBackground style={ estilos.card } source={ imgToxico }>
        <Text style={ estilos.cardTitulo }>Design tóxico</Text>
        <Text style={ estilos.cardParagrafo }>Gheorghe Popa</Text>
      </ImageBackground>
    </View>
  )
}

/*
As propriedades blurRadius e resizeMode podem ser utilizadas no componente Image.
Essas propriedades terão o mesmo efeito de quando aplicadas ao componente ImageBackground:

<Image
source={ imgAterrissagem }
style={ estilos.img }
resizeMode="stretch"
blurRadius={5}
/>

Através do componente Pressable conseguimos criar botões redondos,
fazer com que um ícone seja um botão, até mesmo uma caixa de texto poderá ser tocável,
dentre outras possibilidades.


Veja no Código o código usado para criar o botão arredondado. 

*/

import React from 'react';
import { View, Text, Pressable } from 'react-native';

import estilos from './estilos';

export default function TelaHome (props) {
  return (
    <View style={ estilos.container }>

      <Pressable
        style={ estilos.botao }
        onPress={ ()=>{ props.navigation.navigate('Sobre') } }
      >

        <Text style={ estilos.botaoTitle }>Sobre</Text>

      </Pressable>
    </View>
  )
}

/*Veja no Código o estilo que deixa o botão (Pressable) com as bordas arredondadas*/

import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
    borderRadius: 20,
  },
  botaoTitle: {
    color: '#fff'
  },
});

export default estilos;

/*
Veja no Código 3 exemplos de componentes inseridos dentro de botões.

*/

import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import estilos from './estilos';
import icon from '../../assets/info.png';
import iconBR from '../../assets/info-branco.png';

export default function TelaHome (props) {
  return (
    <View style={estilos.container}>

      <Pressable
        style={ estilos.botao }
        onPress={ ()=>{ props.navigation.navigate('Sobre') }}
      >
        <Text style={ estilos.botaoTitle }>Sobre</Text>
      </Pressable>

      <Pressable
        style={ estilos.botao2 }
        onPress={ ()=>{ props.navigation.navigate('Sobre') }}
      >
        <Image style={ estilos.botao2Icon } source=''/>
        <Text style={ estilos.botao2Title }>Sobre</Text>
      </Pressable>

      <Pressable
        style={ estilos.botao3 }
        onPress={ ()=>{ props.navigation.navigate('Sobre') }}
      >
        <Image style={ estilos.botao3Icon } source=''/>
      </Pressable>

      <Pressable
        style={ estilos.botao4 }
        onPress={ ()=>{ props.navigation.navigate('Sobre') }}
      >
        <Text style={ estilos.botao4Titulo }>Navegar para tela sobre</Text>
        <Text>Clique nesta caixa de texto para navegar para a tela Sobre</Text>
      </Pressable>
    </View>
  )
}


/*
Veja no Código o código dos botões da Tela inicial - arquivo componentes/TelaInicial/index.js.

Só foi possível criar botões arredondados porque no lugar de Button usamos Pressable
Veja no Código  o código da Tela Planetas que cria botões com uma imagem e um texto
- arquivo componentes/TelaPlanetas/index.js.


Veja o código da Tela Planetas que cria botões com uma imagem e um texto
 - arquivo componentes/TelaPlanetas/index.js
*/

import React from 'react';
import { ScrollView, View, Text, Pressable, Image } from 'react-native';
import estilos from './estilos';

import imgHome from '../../assets/icon-home.png';
import imgGalaxy from '../../assets/icon-galaxy.png';
import imgPlanetas from '../../assets/planetas.png';
import imgPlanetas1 from '../../assets/planetas1.png';
import imgPlanetas3 from '../../assets/planeta-terra.png';

export default function TelaPlanetas (props) {
  return (
    <ScrollView>
      <View style={ estilos.container }>

        <Text style={ estilos.titulo }>Planetas</Text>

        <Text style={ estilos.descricao }>Os planetas do Sistema Solar são corpos celestes que orbitam o Sol com massa suficiente para que a sua própria gravidade possibilita que assumam uma forma arredondada, ou seja, a forma de equilíbrio estático.</Text>
        <Image source='' style={ estilos.cardImg } />

        <Text style={ estilos.descricao }>Os planetas do nosso Sistema Solar formam um conjunto de oito planetas que giram em torno do sol. Eles são: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno.</Text>
        <Image source='' style={ estilos.cardImg } />

        <Text style={ estilos.descricao }>A Terra é o terceiro planeta a contar do Sol e o quinto maior do Sistema Solar. Até onde se sabe o planeta em que vivemos é o único do nosso sistema solar em condições de abrigar vida da forma como a conhecemos.</Text>
        <Image source='' style={ estilos.cardImg } />

        <Pressable
          onPress={ () => { props.navigation.navigate("Galáxias") } }
          style={ estilos.btn }
        >
          <Image source='' style={ estilos.btnIcon } />
          <Text style={ estilos.btnLabel }>Galáxias</Text>
        </Pressable>

        <Pressable
          onPress={ () => { props.navigation.navigate("Tela inicial") } }
          style={ estilos.btn }
        >
          <Image source='' style={ estilos.btnIcon } />
          <Text style={ estilos.btnLabel }>Início</Text>
        </Pressable>

      </View>
    </ScrollView>
  )
}

/*Veja o aplicativo em execução no codigo abaixo:*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial";
import TelaPlanetas from "./componentes/TelaPlanetas";
import TelaGalaxias from "./componentes/TelaGalaxias";
import TelaBuracoNegro from "./componentes/TelaBuracoNegro";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component = { TelaInicial } />
        <Stack.Screen name="Planetas" component = { TelaPlanetas } />
        <Stack.Screen name="Galáxias" component = { TelaGalaxias } />
        <Stack.Screen name="Buraco Negro" component = { TelaBuracoNegro } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};