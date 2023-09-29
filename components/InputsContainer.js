import React from 'react';
import {View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { InputCountry } from './InputCountry.js';
import { InputUniversity } from './InputUniversity.js';

export const InputsContainer = () => {
  return(
    <View style = {styles.inputs_container}>
      <InputCountry />
      <InputUniversity />
    </View>
  )
}

export default InputsContainer;