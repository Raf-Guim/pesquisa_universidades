import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ListUniversities } from './ListUniversities.js';
import { AlertModal } from './AlertModal.js';
import { useState } from 'react';
import { fetch_universities, insert_university } from '../db/BancoDados.js';

import axios from 'axios';
import TopSection from './TopSection.js';

export const MainScreen = ({ navigation }, props, route) => {
  const [university, update_university] = useState('');
  const [country, update_country] = useState('');

  const [search_list, update_search_list] = useState([]);
  const [db_list, update_db_list] = useState([]);

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

  const fetch_universities_db = async () => {
    response = await fetch_universities()
        .then((res) => {
          console.log('res => ' + JSON.stringify(res));
          return res;
        })
        .catch((err) => console.log(err));
        console.log('response => ' + JSON.stringify(response));
        update_db_list(response);
      };

  const button_search_clicked  = (country, university) => {
    update_country(country);
    update_university(university);
    console.log("Button search clicked");
    console.log('route => ' + JSON.stringify(route));
    console.log('props => ' + JSON.stringify(props));
    console.log('navigation => ' + JSON.stringify(navigation));
    console.log(db_list);
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
    await fetch_universities_db();
    console.log('db_list =>' + JSON.stringify(db_list));
    navigation.navigate('Favoritos', {db_list: db_list});
    console.log('Pos navegar para Favoritos!');
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