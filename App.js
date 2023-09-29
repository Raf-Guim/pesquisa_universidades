import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';

import { styles } from './src/css/styles.js';

import { ButtonsContainer } from './components/ButtonsContainer';
import { InputsContainer } from './components/InputsContainer.js';
import { ListaUniversidades } from './components/ListaUniversidades.js';

export default function App() {

  const button_search_clicked = () => {
    console.log("Button search clicked");
  }

  const button_favories_clicked = () => {
    console.log("Button favorites clicked");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.top_section}>
        <InputsContainer />
        <ButtonsContainer button_search_clicked = {button_search_clicked} button_favories_clicked = {button_favories_clicked} />
      </View>
      <View style = {styles.bottom_section}>
        <ListaUniversidades />
      </View>
    </SafeAreaView>
  );
}