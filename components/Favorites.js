import {SafeAreaView, View} from 'react-native';

import { styles } from '../src/css/styles.js';

import { ListUniversities } from './ListUniversities.js';
import { useEffect, useState, } from 'react';

import { remove_university, fetch_universities } from '../db/BancoDados.js';

export const Favorites = () => {  

  const university_clicked = async (university) => {
    await remove_university(university.id);
    const updatedList = db_list_here.filter((item) => item.id !== university.id);
    update_db_list(updatedList);
  };

  const [db_list_here, update_db_list] = useState([]);

  const fetch_universities_db = async () => {
    response = await fetch_universities()
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));

    update_db_list(response);
  };

  useEffect(() => {
    fetch_universities_db();
  }, []);
  

  return (
    <SafeAreaView style={styles.favorites}>
      <View style = {styles.favorites}>
        <ListUniversities search_list = {db_list_here} university_clicked = {university_clicked} />
      </View>
    </SafeAreaView>
  )
}

export default Favorites;