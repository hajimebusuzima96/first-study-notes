/*
Para estilizar nosso aplicativo vamos começar pelo componente Topo

Criando o estilo do componente Topo
Crie um arquivo chamado estilo.js na mesma pasta do arquivo do
componente Topo(componentes/Topo/) e insira o Código


*/ 

import { StyleSheet } from 'react-native';

  const estilo = StyleSheet.create({
    box: {
      backgroundColor: '#00a79d',

      paddingVertical: 20,
      paddingHorizontal: 10,

      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,

      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },


    boxIcone: {
      width: 60,
      height: 60,

      borderRadius: 30,
      borderColor: '#fff',
      borderWidth: 1,

      marginRight: 15
    },

    boxTitulo: {
      color: '#fff',
      fontWeight: "700",
      fontSize: 18,
      textTransform: "uppercase",
    },
    boxSubtitulo: {
      color: '#fff',
    },
  });

  export default estilo;


/*
Importando o estilo no componente Topo
Com o estilo criado abra o arquivo do componente Topo
(componentes/Topo/index.js) e insira o Código
*/

import React from 'react';
  import { View, Text, Image } from 'react-native';

  import churrasco from '../../assets/churrasco.png';
  import estilo from './estilo';

  export default function Topo() {
    return (
      <View style = { estilo.box }>
        <Image style = { estilo.boxIcone}  source = { churrasco } />

        <View>
          <Text style = { estilo.boxTitulo }>
            Churrasco em casa
          </Text>

          <Text style = { estilo.boxSubtitulo }>
            Calculando a comida e a bebida
          </Text>
        </View>
      </View>
    );
  }


// Destacamos o componente Topo dos demais definindo a sua cor de fundo 

/*
Depois do componente Topo o próximo a ser estilizado é o Texto
Criando o estilo do componente Texto
Assim como fizemos no componente Topo, crie um arquivo chamado estilo.js na mesma
pasta do arquivo do componente Texto (componentes/Texto/) e insira o Código

*/

import { StyleSheet } from "react-native";

  const estilo = StyleSheet.create({
    boxTexto: {
      padding: 20
    },

    boxTextoTitulo: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: '700',
      color: '#313131',
      marginBottom: 20
    },

    boxTextoSubtitulo: {
      textAlign: "center",
      color: '#313131',
      lineHeight: 20
    },
  });

export default estilo;

/*
Importando o estilo no componente Texto
Com o estilo criado abra o arquivo do componente Texto
(componentes/Texto/index.js) e insira o Código
*/

import React from 'react';
import { View, Text } from 'react-native';

import estilo from './estilo';

export default function Texto () {
  return (
    <View style = { estilo.boxTexto }>
      <Text style = { estilo.boxTextoTitulo }>
        Vai fazer um churrasco mas não sabe o que comprar?
      </Text>

      <Text style = { estilo.boxTextoSubtitulo }>
        Final de semana chegando e vem aquela vontade de fazer um
        churrasco. Nessa hora bate uma dúvida da quantidade de
        carne e de bebidas que cada convidado vai consumir.
        Veja abaixo uma média do consumo por pessoa.
      </Text>
    </View>
  );
};

/*
Definimos o primeiro texto com uma fonte maior que a do segundo,
dessa forma fica claro para o usuário que se trata de um título

O último passo para finalizarmos a estilização do nosso aplicativo é alterar o componente Cards

Criando o estilo do componente Cards
Crie um arquivo chamado estilo.js na
mesma pasta do arquivo do componente Cards (componentes/Cards/) e insira o Código
*/ 

import { StyleSheet } from "react-native";

  const estilo = StyleSheet.create({
    boxDados: {
      padding: 30,

      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "space-between"
    },

    boxCard: {
      backgroundColor: '#ddf2ed',
      minWidth: 150,

      alignItems: "center",

      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,

      borderWidth: 1,
      borderColor: '#e6e6e6',
      borderRadius: 5,
    },

    boxCardIcone: {
      width: 30,
      height: 30
    },

    boxCardTexto: {
      color: '#00a79d'
    },

    boxCardValor: {
      color: '#00a79d',
      fontSize: 20,
      fontWeight: "700"
    },
  });

  export default estilo;


/*
Importando o estilo no componente Cards
Abra o arquivo do componente Cards (componentes/Cards/index.js) e insira o Código
*/

import React from 'react';
import { Image, Text, View } from 'react-native';

import convidado from '../../assets/convidado.png';
import carne from '../../assets/carne.png';
import refrigerante from '../../assets/refrigerante.png';
import cerveja from '../../assets/cerveja.png';

import estilo from './estilo';

export default function Cards () {
  return (
    <View style = { estilo.boxDados }>
      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { convidado }/>

        <Text style = { estilo.boxCardTexto }>
          Convidados
        </Text>

        <Text style = { estilo.boxCardValor }>
          1
        </Text>
      </View>

      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { carne }/>

        <Text style = { estilo.boxCardTexto }>
          Carne
        </Text>

        <Text style = { estilo.boxCardValor }>
          400 GR
        </Text>
      </View>

      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { refrigerante }/>

        <Text style = { estilo.boxCardTexto }>
          Refrigerante
        </Text>

        <Text style = { estilo.boxCardValor }>
          700 ML
        </Text>
      </View>

      <View style = { estilo.boxCard } >
        <Image style = { estilo.boxCardIcone } source = { cerveja }/>

        <Text style = { estilo.boxCardTexto }>
          Cerveja
        </Text>

        <Text style = { estilo.boxCardValor }>
          4 Latas
        </Text>
      </View>
    </View>
  );
}

/*
Baseado no já vimos você já é capaz de entender
os conceitos de importação e definição de estilo do código acima.
*/