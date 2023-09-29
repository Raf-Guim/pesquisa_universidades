import React from 'react';
import {View, Text} from 'react-native';

import { styles } from '../src/css/styles.js';



export const CardUniversity = (props) => {
  return(
    <View style = {styles.card}>
      <Text style = {styles.texto_card_universidade}>{props.nome}</Text>
    </View>
  )
}

export default CardUniversity;