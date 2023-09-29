import React from 'react';
import {View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { InputPais } from './InputPais.js';
import { InputUniversidade } from './InputUniversidade.js';

export const InputsContainer = () => {
  return(
    <View style = {styles.inputs_container}>
      <InputPais />
      <InputUniversidade />
    </View>
  )
}

export default InputsContainer;