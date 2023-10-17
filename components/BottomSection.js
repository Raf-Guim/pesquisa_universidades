import {View} from 'react-native';

import { styles } from '../src/css/styles.js';
import ListUniversities from './ListUniversities.js';

export const BottomSection = (props) => {

  const university_clicked = (university) => {
    props.university_clicked(university);
  }

  return (
    <View style = {styles.bottom_section}>
      <ListUniversities search_list = {props.search_list} university_clicked = {university_clicked} />
    </View>
  )
}

export default BottomSection;