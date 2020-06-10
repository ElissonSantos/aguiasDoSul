import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  textInput: {
    height: 40,
    color: '#fff',
    alignSelf: 'stretch',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 10,
  },
  errorMessage: {
    color: '#fff',
  },
  google: {
    alignSelf: 'stretch',
    marginTop: 8,
  },
  button: {
    height: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ec3237',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  googleText: {
    color: '#2E2EFE',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  signup: {
    flexDirection: 'row',
    marginTop: 100,
  },
  signupText: {
    color: '#fff',
  },
  signupText1: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default styles;
