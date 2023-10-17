import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ListUniversities } from './ListUniversities.js';
import { AlertModal } from './AlertModal.js';
import { useEffect, useState, } from 'react';

import { remove_university, fetch_universities } from '../db/BancoDados.js';

export const Favorites = (route, props) => {

  const [exibirModal, setExibirModal] = useState(false);

  const [modal_text, update_modal_text] = useState('');
  const update_modal_text_handler = (text) => {
    update_modal_text(text);
  }

  // const [db_list_here, update_db_list] = useState(route.route.params.db_list);
  // const update_db_list_handler = (list) => {
  //   update_db_list(list);
  // }
  
  const university_clicked = async (university) => {
    
    await remove_university(university.id);
    const updatedList = db_list_here.filter((item) => item.id !== university.id);
    update_db_list(updatedList);
  };

  const [db_list_here, update_db_list] = useState([]);

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

  useEffect(() => {
    console.log('route => ' + JSON.stringify(route));
    fetch_universities_db();
  }, []);
  

  return (
    <SafeAreaView style={styles.favorites}>
      <AlertModal exibirModal = {exibirModal} setExibirModal = {setExibirModal} modal_text = {modal_text} />
      <View style = {styles.favorites}>
        <ListUniversities search_list = {db_list_here} university_clicked = {university_clicked} />
      </View>
    </SafeAreaView>
  )
}

export default Favorites;