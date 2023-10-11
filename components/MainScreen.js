import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ButtonsContainer } from './ButtonsContainer.js';
import { InputsContainer } from './InputsContainer.js';
import { ListUniversities } from './ListUniversities.js';
import { AlertModal } from './AlertModal.js';
import { useState } from 'react';
import { fetch_universities, insert_university } from '../db/BancoDados.js';

import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry.js';
import TopSection from './TopSection.js';

export const MainScreen = ({ navigation }) => {
  const [university, update_university] = useState('');
  const [country, update_country] = useState('');

  const [search_list, update_search_list] = useState([]);
  const [db_list, update_db_list] = useState([]);
  const update_db_list_handler = (list) => {
    update_db_list(list);
  }

  const [exibirModal, setExibirModal] = useState(false);

  const [modal_text, update_modal_text] = useState('');
  const update_modal_text_handler = (text) => {
    update_modal_text(text);
  }

  const fetch_universities_api = async (url_search) => {
    response = await axios.get(url_search)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(error => { 
        console.log(error);
        update_modal_text_handler("Erro ao buscar lista de universidades");
        setExibirModal(!exibirModal);
      });
      if (response.length === 0) {
        update_modal_text_handler("Nenhuma universidade encontrada");
        setExibirModal(!exibirModal);
      }
      else {
        update_search_list(response);
      }
  };


  const button_search_clicked  = (country, university) => {
    update_country(country);
    update_university(university);
    console.log("Button search clicked");
    if (country === '' && university === '') {
      update_search_list([]);
      update_modal_text_handler("Favor informar País ou Universidade");
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
    await fetch_universities()
    .then((res) => {
      update_db_list(res);
    })
    .catch((err) => console.log(err));

    navigation.navigate('Favoritos', db_list);
  };

  const university_clicked = (university) => {
    insert_university(university.name, university.web_pages[0]).then().catch((err) => console.log(err));
    console.log(fetch_universities());
  };

  return (
    // Consertar para ao iniciar a aplicação, consultar o banco de dados e atualizar a lista de favoritos
    // Usar lista de favoritos como variavel e nao ficar consultando o banco de dados toda vez que clicar no botao de favoritos
    // Criar controle da lista dentro do proprio BottomSection para nao transitar o tempo inteiro
    <SafeAreaView style={styles.main}>
      <AlertModal exibirModal = {exibirModal} setExibirModal = {setExibirModal} modal_text = {modal_text} />
      <TopSection button_search_clicked = {button_search_clicked} button_favories_clicked = {button_favories_clicked} />
      <View style = {styles.bottom_section}>
        <ListUniversities search_list = {search_list} university_clicked = {university_clicked} />
      </View>
    </SafeAreaView>
  )
}

export default MainScreen;