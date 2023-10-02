import React from 'react';
import {View, FlatList} from 'react-native';

import { styles } from '../src/css/styles.js';

import { CardUniversity } from './CardUniversity.js';


export const ListUniversities = (props) => {
  return(
    <View style = {styles.list_container}>
      <FlatList style = {styles.list}
        data={props.search_list}
        renderItem={({item, index}) => <CardUniversity name = {item.name} />}
        // keyExtractor={idx => idx}
      />
    </View>
  )
}

export default ListUniversities;