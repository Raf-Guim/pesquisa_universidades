import React from 'react';
import {View, FlatList} from 'react-native';

import { styles } from '../src/css/styles.js';

import { CardUniversidade } from './CardUniversidade.js';

DATA = [{id: 0, nome: 'USP'}, {id: 1, nome: 'UNICAMP'}, {id: 2, nome: 'UNESP'}];



export const ListaUniversidades = () => {
  return(
    <View style = {styles.lista_container}>
      <FlatList style = {styles.lista}
        data={DATA}
        renderItem={({item}) => <CardUniversidade nome = {item.nome} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ListaUniversidades;