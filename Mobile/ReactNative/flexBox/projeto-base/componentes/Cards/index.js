import React from 'react';
import { Image, Text, View } from 'react-native';

import convidado from '../../assets/convidado.png';
import carne from '../../assets/carne.png';
import refrigerante from '../../assets/refrigerante.png';
import cerveja from '../../assets/cerveja.png';

export default function Cards () {
  return (
    <View>
      <View >
        <Image source = { convidado }/>

        <Text>
          Convidados
        </Text>

        <Text>
          1
        </Text>
      </View>

      <View >
        <Image source = { carne }/>
        
        <Text>
          Carne
        </Text>

        <Text>
          400 GR
        </Text>
      </View>

      <View >
        <Image source = { refrigerante }/>
        
        <Text>
          Refrigerante
        </Text>

        <Text>
          700 ML
        </Text>
      </View>

      <View >
        <Image source = { cerveja }/>
        
        <Text>
          Cerveja
        </Text>

        <Text>
          4 Latas
        </Text>
      </View>
    </View>
  );
}