import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f3f6f4',
    padding: 20,
  },

  top_section: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    margin: 10,
  },

  inputs_container: {
    rowGap: 20,
  },

  input: {
    height: 50,
    padding: 10,
    borderWidth: 1,
  },

  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  button: {
    flex: 1,
    // chaging color not working, on hold for now
    // backgroundColor: '#6fa8dc',
    // color: '#000',
  },
  
  bottom_section: {
    flex: 3,
    margin: 20,
  },

  lista_container: {
    flex: 1,
  },

  lista: {
    display: 'flex',
    flexDirection: 'column',
  },

  card: {
    flex: 1,
    display: 'flex',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },

  texto_card_universidade: {
    fontSize: 15,
  }
});

export { styles }