/*
Seja bem-vindo (a) à programação mobile com React Native.

Para programar React Native é necessário primeiro entender o que ele é

React Native é um caminho mais curto para criar aplicativos mobile para Android e iOS

Com React Native escrevemos um único código que vai funcionar nativamente no Android e iOS.
Aprender React Native significa ser um programador mobile Android e iOS


exemplo de código React Native que utiliza a linguagem JavaScript.


*/

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style = { estilo.conteudo }>
      <Text style = { estilo.texto }>
        React Native utiliza a linguagem JavaScript.
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
  },
});

/*
No React Native escrevemos código para tudo, desde recursos gráficos até os
comportamentos que um aplicativo possui. Esses códigos você vai aprender passo a passo
aqui no Guia de React Native
*/