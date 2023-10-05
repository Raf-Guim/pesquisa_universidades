import React from 'react';
import {View, FlatList} from 'react-native';

import { styles } from '../src/css/styles.js';

import { CardUniversity } from './CardUniversity.js';


export const ListUniversities = (props) => {

  const university_clicked = (university) => {
    props.university_clicked(university)
  };

  return(
    <View style = {styles.list_container}>
      <FlatList style = {styles.list}
        data={props.search_list}
        renderItem={({item, index}) => <CardUniversity university = {item} university_clicked = {university_clicked} />}
        // keyExtractor={index => index}
      />
    </View>
  )
}

export default ListUniversities;