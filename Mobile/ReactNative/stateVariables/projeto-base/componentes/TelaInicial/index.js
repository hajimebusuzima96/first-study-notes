import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  return (
    <View style={estilo.tela}>
      <Text style={estilo.titulo}>Toque no botão e veja quem é o vencedor de 1 à 100</Text>

      <View style={estilo.boxNumero}>
        <Text style={estilo.numero}>0</Text>
      </View>
    </View>
  );
}

export default TelaInicial;