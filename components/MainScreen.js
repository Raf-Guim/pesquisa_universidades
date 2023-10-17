import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ListUniversities } from './ListUniversities.js';
import { AlertModal } from './AlertModal.js';
import { useState } from 'react';
import { fetch_universities, insert_university } from '../db/BancoDados.js';

import axios from 'axios';
import TopSection from './TopSection.js';
import BottomSection from './BottomSection.js';

export const MainScreen = ({ navigation }) => {
  const [university, update_university] = useState('');
  const [country, update_country] = useState('');

  const [search_list, update_search_list] = useState([]);

  const [exibirModal, setExibirModal] = useState(false);

  const [modal_text, update_modal_text] = useState('');

  const fetch_universities_api = async (url_search) => {
    response = await axios.get(url_search)
      .then(response => {
        return response.data;
      })
      .catch(error => { 
        console.log(error);
        update_modal_text("Erro ao buscar lista de universidades");
        setExibirModal(!exibirModal);
      });
      if (response.length === 0) {
        update_modal_text("Nenhuma universidade encontrada");
        setExibirModal(!exibirModal);
      }
      else {
        update_search_list(response);
      }
  };

  const button_search_clicked  = (country, university) => {
    console.log("Button search clicked");
    update_country(country);
    update_university(university);

    if (country === '' && university === '') {
      update_search_list([]);
      update_modal_text("Favor informar País ou Universidade");
      setExibirModal(!exibirModal);
    }
    else {
      update_search_list([]);
      url_search = `http://universities.hipolabs.com/search?name=${university}&country=${country}`;
      fetch_universities_api(url_search);
    }
  };

  const button_favories_clicked = async () => {
    console.log("Button favorites clicked");
    update_search_list([]);

    navigation.navigate('Favoritos');
  };

  const university_clicked = (university) => {
    insert_university(university.web_pages[0], university.name).then().catch((err) => console.log(err));
    update_modal_text(`${university.name} adicionada aos favoritos`);
    setExibirModal(!exibirModal);
  };

  return (
    <SafeAreaView style={styles.main}>
      <AlertModal exibirModal = {exibirModal} setExibirModal = {setExibirModal} modal_text = {modal_text} />

      <TopSection button_search_clicked = {button_search_clicked} button_favories_clicked = {button_favories_clicked} />

      <BottomSection search_list = {search_list} university_clicked = {university_clicked} />
    </SafeAreaView>
  )
}

export default MainScreen;