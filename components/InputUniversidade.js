import React from 'react';
import {View, TextInput} from 'react-native';

import { styles } from '../src/css/styles.js';

export const InputUniversidade = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome da Universidade"/>
    </View>
  )

}

export default InputUniversidade;