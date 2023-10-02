import React from 'react';
import {View, TextInput} from 'react-native';

import { styles } from '../src/css/styles.js';

export const InputCountry = (props) => {

  const update_country_handler = (text) => {
    props.update_country_handler(text);
  }

  return (
    <View>
      <TextInput style={styles.input} placeholder="Nome do País" onChangeText={update_country_handler}/>
    </View>
  )

}

export default InputCountry;