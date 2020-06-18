import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCode: {
    alignSelf: 'stretch',
  },
  button: {
    height: 40,
    backgroundColor: 'black',
    borderRadius: 5,
    margin: 14,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default styles;
