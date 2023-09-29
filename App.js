import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';

import { styles } from './src/css/styles.js';

import { ButtonsContainer } from './components/ButtonsContainer';
import { InputsContainer } from './components/InputsContainer.js';
import { ListUniversities } from './components/ListUniversities.js';

export default function App() {

  const button_search_clicked = () => {
    console.log("Button search clicked");
  }

  const button_favories_clicked = () => {
    console.log("Button favorites clicked");
  }

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar style="auto" />
      <View style = {styles.top_section}>
        <InputsContainer />
        <ButtonsContainer button_search_clicked = {button_search_clicked} button_favories_clicked = {button_favories_clicked} />
      </View>
      <View style = {styles.bottom_section}>
        <ListUniversities />
      </View>
    </SafeAreaView>
  );
}