import React from 'react';
import {View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ButtonSearch } from './ButtonSearch.js';
import { ButtonFavorites } from './ButtonFavorites.js';


export const ButtonsContainer = (props) => {

  const button_search_clicked = () => {
    props.button_search_clicked()
  }

  const button_favories_clicked = () => {
    props.button_favories_clicked()
  }

  return(
    <View style = {styles.buttons_container}>
      <ButtonSearch button_search_clicked={button_search_clicked} />
      <ButtonFavorites button_favories_clicked = {button_favories_clicked} />
    </View>
  )
}

export default ButtonsContainer;