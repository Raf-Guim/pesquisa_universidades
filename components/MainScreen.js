import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ButtonsContainer } from './ButtonsContainer.js';
import { InputsContainer } from './InputsContainer.js';
import { ListUniversities } from './ListUniversities.js';
import { AlertModal } from './AlertModal.js';
import { useState } from 'react';
import { fetch_universities, insert_university } from '../db/BancoDados.js';

import axios from 'axios';

export const MainScreen = ({ navigation }) => {

  const [exibirModal, setExibirModal] = useState(false);

  const [modal_text, update_modal_text] = useState('');
  const update_modal_text_handler = (text) => {
    update_modal_text(text);
  }

  const [url_search, update_url_search] = useState('http://universities.hipolabs.com/search?name=${university}&country=${country}');
  const update_url_search_handler = (text) => {
    update_url_search(text);
  }

  const [db_list, update_db_list] = useState([]);
  const update_db_list_handler = (list) => {
    update_db_list(list);
  }

  const [search_list, update_search_list] = useState([]);
  const update_search_list_handler = (list) => {
    update_search_list(list);
  }
  const [university, update_university] = useState('');
  const update_university_handler = (text) => {
    update_university(text);
  }

  const [country, update_country] = useState('');
  const update_country_handler = (text) => {
    update_country(text);
  }

  const getUniversities = async () => {
    if (country === '') {
      update_url_search_handler(`http://universities.hipolabs.com/search?name=${university}`);
    }
    else if (university === '') {
      update_url_search_handler(`http://universities.hipolabs.com/search?country=${country}`);
    }
    else {
      update_url_search_handler(`http://universities.hipolabs.com/search?name=${university}&country=${country}`);
    }

    await axios.get(url_search)
      .then(response => {
        update_search_list_handler(response.data)
      })
      .catch(error => { 
        console.log(error);
        update_modal_text_handler("Erro ao buscar lista de universidades");
        setExibirModal(!exibirModal);
      });
  };

  const button_search_clicked  = () => {
    console.log("Button search clicked");
    if (country === '' && university === '') {
      console.log("Country and university not informed");
      update_search_list_handler([]);
      update_modal_text_handler("Favor informar País ou Universidade");
      setExibirModal(!exibirModal);
    }
    else {
      getUniversities();
    }
  };

  const button_favories_clicked = () => {
    console.log("Button favorites clicked");

    fetch_universities()
    .then((res) => {
      update_db_list_handler(res);
    })
    .catch((err) => console.log(err));

    navigation.navigate('Favoritos', db_list);
  };

  const university_clicked = (university) => {
    insert_university(university.name, university.web_pages[0]).then().catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.main}>
      <AlertModal exibirModal = {exibirModal} setExibirModal = {setExibirModal} modal_text = {modal_text} />
      <View style = {styles.top_section}>
        <InputsContainer update_country_handler = {update_country_handler} update_university_handler = {update_university_handler} />
        <ButtonsContainer button_search_clicked = {button_search_clicked} button_favories_clicked = {button_favories_clicked} />
      </View>
      <View style = {styles.bottom_section}>
        <ListUniversities search_list = {search_list} university_clicked = {university_clicked} />
      </View>
    </SafeAreaView>
  )
}

export default MainScreen;