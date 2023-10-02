import React from 'react';
import {View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { InputCountry } from './InputCountry.js';
import { InputUniversity } from './InputUniversity.js';

export const InputsContainer = (props) => {

  // props.get_university_country('university_got', 'country_got');

  const update_country_handler = (text) => {
    props.update_country_handler(text);
  }

  const update_university_handler = (text) => {
    props.update_university_handler(text);
  }

  return(
    <View style = {styles.inputs_container}>
      <InputCountry update_country_handler = {update_country_handler} />
      <InputUniversity update_university_handler = {update_university_handler} />
    </View>
  )
}

export default InputsContainer;