import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ListUniversities } from './ListUniversities.js';
import { AlertModal } from './AlertModal.js';
import { useState } from 'react';

import { remove_university, fetch_universities } from '../db/BancoDados.js';

export const Favorites = (route) => {

  const [exibirModal, setExibirModal] = useState(false);

  const [modal_text, update_modal_text] = useState('');
  const update_modal_text_handler = (text) => {
    update_modal_text(text);
  }

  const university_clicked = (university) => {
    console.log(university);
    remove_university(university.id).then((res) => console.log(`Universidade ${university.name} removida do db!`)).catch((err) => console.log(err));
    
  };

  return (
    <SafeAreaView style={styles.favorites}>
      <AlertModal exibirModal = {exibirModal} setExibirModal = {setExibirModal} modal_text = {modal_text} />
      <View style = {styles.favorites}>
        <ListUniversities search_list = {route.route.params} university_clicked = {university_clicked} />
      </View>
    </SafeAreaView>
  )
}

export default Favorites;