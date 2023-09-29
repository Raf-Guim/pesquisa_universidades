import React from 'react';
import {View, Button} from 'react-native';

import { styles } from '../src/css/styles.js';

export const ButtonFavorites = (props) => {

  const button_favories_clicked = () => {
    props.button_favories_clicked()
  }

  return (
    <View style = {styles.button}>
      <Button title="FAVORITOS" onPress={button_favories_clicked} />
    </View>
  )
}

export default ButtonFavorites;