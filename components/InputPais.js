import React from 'react';
import {View, TextInput} from 'react-native';

import { styles } from '../src/css/styles.js';

export const InputPais = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome do País"/>
    </View>
  )

}

export default InputPais;