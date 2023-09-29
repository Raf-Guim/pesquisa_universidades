import React from 'react';
import {View, Button} from 'react-native';

import { styles } from '../src/css/styles.js';

export const ButtonSearch = (props) => {

  const button_search_clicked = () => {
    props.button_search_clicked();
  }

  return(
    <View style = {styles.button}>
      <Button title="PESQUISAR" onPress={button_search_clicked}/>
    </View>
  )
}

export default ButtonSearch;
