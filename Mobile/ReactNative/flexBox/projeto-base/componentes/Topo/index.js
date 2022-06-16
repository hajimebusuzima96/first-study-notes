import React from 'react';
import { View, Text, Image } from 'react-native';

import churrasco from '../../assets/churrasco.png';

export default function Topo() {
  return (
    <View>
      <Image source = { churrasco } />

      <View>
        <Text>Churrasco em casa</Text>
        <Text>Calculando a comida e a bebida</Text>
      </View>
    </View>
  )
}
