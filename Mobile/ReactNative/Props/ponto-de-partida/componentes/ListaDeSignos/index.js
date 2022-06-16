import React from 'react';
import { View } from 'react-native';
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';
import estilo from './estilo';

export default function ListaDeSignos() {
  return (
    <View>
      <Titulo />

      <View style={estilo.lista}>
        <ItemLista />
      </View>
    </View>
  )
}