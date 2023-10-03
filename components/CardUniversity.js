import React from 'react';
import {Text, Pressable} from 'react-native';

import { styles } from '../src/css/styles.js';



export const CardUniversity = (props) => {

  const onPressHandler = () => {
    console.log(props.name);
  }

  return(
    <Pressable style = {styles.card} onPress={onPressHandler}>
      <Text style = {styles.university_card_text}>{props.name}</Text>
    </Pressable>
  )
}

export default CardUniversity;