import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';

import { styles } from './src/css/styles.js';

import { ButtonsContainer } from './components/ButtonsContainer';
import { InputsContainer } from './components/InputsContainer.js';
import { ListUniversities } from './components/ListUniversities.js';
import { useState } from 'react';

import axios from 'axios';

export default function App() {


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

    const response = await axios.get(url_search);
    update_search_list_handler(response.data)
  };

  const [url_search, update_url_search] = useState('');
  const update_url_search_handler = (text) => {
    update_url_search(text);
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

  const button_search_clicked  = () => {
    console.log("Button search clicked");
    if (country === '' && university === '') {
      console.log("Country and university not informed");
      update_search_list_handler([{id: 0, nome: 'FAVOR INFORMAR'}, {id: 1, nome: 'PAIS'}, {id: 2, nome: 'OU'}, {id: 3, nome: 'UNIVERSIDADE'}]);
    }
    else {
    getUniversities();
    }
  };

  const button_favories_clicked = () => {
    console.log("Button favorites clicked");
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View style = {styles.top_section}>
        <InputsContainer update_country_handler = {update_country_handler} update_university_handler = {update_university_handler} />
        <ButtonsContainer button_search_clicked = {button_search_clicked} button_favories_clicked = {button_favories_clicked} />
      </View>
      <View style = {styles.bottom_section}>
        <ListUniversities search_list = {search_list} />
      </View>
    </SafeAreaView>
  );
}