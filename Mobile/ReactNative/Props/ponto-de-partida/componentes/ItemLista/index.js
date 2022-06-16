import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function ItemLista() {
  return (
    <View style={estilo.boxSigno}>
      <Text style={estilo.nomeSigno}>
        Aquário
      </Text>
      
      <Text>
        Nascidos entre: 21/01 - 19/02
      </Text>
    </View>
  )
}

