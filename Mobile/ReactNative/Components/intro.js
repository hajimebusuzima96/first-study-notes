/*
Componente é qualquer elemento exibido na tela, por exemplo uma imagem, um texto e um botão. 

Um componente é criado a partir de componentes menores. Por exemplo, o componente que
representa a tela do aplicativo possui componentes menores como imagens, ícones e textos

O conceito de criação do componente App será utilizado sempre que você criar um aplicativo.

O componente App é criado a partir de componentes menores

Veja no Código a criação do componente App.

*/

import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import Logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source= style={styles.img} />
      <Text style={styles.paragrafo}>
       Windows 11 foi anunciado em 24 de junho de 2021, e desenvolvido pela Microsoft. É o sucessor do Windows 10, lançado seis anos antes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6d4ed',
    padding: 8,
  },
  img: {
    width: 300,
    height: 50,
  },
  paragrafo: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


/*
Veja o aplicativo em execução
*/ 

import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import Logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.paragrafo}>
       Windows 11 foi anunciada em 24 de junho de 2021, e desenvolvida pela Microsoft. É o sucessor do Windows 10, lançado seis anos antes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6d4ed',
    padding: 8,
  },
  img: {
    width: 300,
    height: 50,
  },
  paragrafo: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

/*
Para criar um componente primeiro importamos o código React:

import React from 'react';

Em seguida utilizamos as palavras export default function seguida pelo nome do componente:

export default function App(){...}
*/