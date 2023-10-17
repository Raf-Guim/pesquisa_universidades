import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import MainScreen from './components/MainScreen.js';
import Favorites from './components/Favorites.js';

import { initialize_db, fetch_universities } from './db/BancoDados.js';
import { styles } from './src/css/styles.js';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    initialize_db()
      .then(() => console.log("Iniciando banco de dados"))
      .catch((err) => console.log(err));
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
      <Stack.Screen name="Principal" component={MainScreen}/>
      <Stack.Screen name="Favoritos" component={Favorites}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}