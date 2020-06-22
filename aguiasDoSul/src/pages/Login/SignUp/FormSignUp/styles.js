import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    borderColor: '#e6aaa9',
    borderWidth: 2,
    borderRadius: 5,
  },
  icon: {
    padding: 5,
  },
  textInput: {
    flex: 1,
    width: '100%',
    height: 50,
    paddingTop: 5,
    marginRight: 5,
    paddingBottom: 5,
    marginLeft: 5,
    backgroundColor: '#fff',
    color: '#424242',
  },
  errorMessage: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    height: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fe4e4b',
    borderColor: '#a60e09',
    borderTopColor: '#fff',
    borderWidth: 1,
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
  signin: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  signinText: {
    color: '#ffd9da',
  },
  signinText1: {
    color: '#fff',
    marginLeft: 8,
    textDecorationColor: '#ffcdc3',
    textDecorationLine: 'underline',
  },
});

export default styles;
