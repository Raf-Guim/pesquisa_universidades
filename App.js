import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import MainScreen from './components/MainScreen.js';
import Favorites from './components/Favorites.js';

import { initialize_db } from './db/BancoDados.js';
import { styles } from './src/css/styles.js';

const Stack = createNativeStackNavigator();

// To customize the header bar, use the options prop:
// options={{
//   headerStyle: {
//     backgroundColor: '#f4511e',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
// }}

export default function App() {
  initialize_db().then(() => console.log("Iniciado banco de dados")).catch((err) => console.log(err));
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={MainScreen} />
        <Stack.Screen name="Favoritos" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}