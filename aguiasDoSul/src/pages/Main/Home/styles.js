import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    alignSelf: 'stretch',
    height: 150,
    backgroundColor: '#ec3237',
  },
  welcomeOut: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 20,
    margin: 4,
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  welcomeName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    margin: 10,
  },
  body: {
    flex: 3,
    backgroundColor: '#fff',
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 40,
  },
  buttonStyle: {
    width: '40%',
    height: '60%',
    backgroundColor: '#ec3237',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
