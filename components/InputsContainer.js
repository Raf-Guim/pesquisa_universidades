import React from 'react';
import { View, TextInput } from 'react-native';
import { useState } from 'react';

import { styles } from '../src/css/styles.js';

export const InputsContainer = (props) => {

  const [country, update_country] = useState('');
  const update_country_handler = (text) => {
    update_country(text);
  }
  
  const [university, update_university] = useState('');
  const update_university_handler = (text) => {
    update_university(text);
  }

  if (props.get_country_university_bool) {
    props.get_country_university_input(country, university);
    props.change_get_country_university_bool(false);
  }


  return(
    <View style = {styles.inputs_container}>
      <TextInput style={styles.input} placeholder="Nome do País" onChangeText={update_country_handler}/>
      <TextInput style={styles.input} placeholder="Nome da Universidade" onChangeText={update_university_handler}/>
    </View>
  )
}

export default InputsContainer;