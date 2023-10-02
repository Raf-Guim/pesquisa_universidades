import React from 'react';
import {View, TextInput} from 'react-native';

import { styles } from '../src/css/styles.js';

export const InputUniversity = (props) => {

  const update_university_handler = (text) => {
    props.update_university_handler(text);
  }

  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome da Universidade" onChangeText={update_university_handler}/>
    </View>
  )

}

export default InputUniversity;