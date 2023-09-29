import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, View } from 'react-native';

import { styles } from './src/css/styles.js';

import { InputUniversidade } from './components/InputUniversidade';
import { InputPais } from './components/InputPais';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.top_section}>
      <InputPais />
      <InputUniversidade />
      </View>
      <View style = {styles.bottom_section}>
        <Text>Resultado</Text>
      </View>
    </SafeAreaView>
  );
}