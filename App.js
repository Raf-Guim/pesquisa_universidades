import MainScreen from './components/MainScreen.js';

import { initialize_db } from './db/BancoDados.js';

export default function App() {
  initialize_db().then(() => console.log("Iniciado banco de dados")).catch((err) => console.log(err));
  return (
    <MainScreen />
  );
}