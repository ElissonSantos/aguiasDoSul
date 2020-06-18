import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 45,
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '74%',
    height: 40,
    marginBottom: 15,
    borderColor: '#e6aaa9',
    borderWidth: 2,
    borderRadius: 5,
  },
  icon: {
    padding: 7,
  },
  textInput: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fe4e4b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signup: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  signupText: {
    color: '#8d8c8c',
  },
  signupText1: {
    color: '#fb7e7a',
    marginLeft: 8,
    textDecorationColor: '#fb7e7a',
    textDecorationLine: 'underline',
  },
});

export default styles;
