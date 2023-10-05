import React from 'react';
import {Text, Pressable} from 'react-native';

import { styles } from '../src/css/styles.js';

export const CardUniversity = (props) => {

  const university_clicked_handler = () => {
    props.university_clicked(props.university);
  }

  return(
    <Pressable style = {styles.card} onPress={university_clicked_handler}>
      <Text style = {styles.university_card_text}>{props.university.name}</Text>
    </Pressable>
  )
}

export default CardUniversity;