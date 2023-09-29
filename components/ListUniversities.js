import React from 'react';
import {View, FlatList} from 'react-native';

import { styles } from '../src/css/styles.js';

import { CardUniversity } from './CardUniversity.js';

DATA = [{id: 0, nome: 'USP'}, {id: 1, nome: 'UNICAMP'}, {id: 2, nome: 'UNESP'}];



export const ListUniversities = () => {
  return(
    <View style = {styles.list_container}>
      <FlatList style = {styles.list}
        data={DATA}
        renderItem={({item}) => <CardUniversity nome = {item.nome} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default ListUniversities;