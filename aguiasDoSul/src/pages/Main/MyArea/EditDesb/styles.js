import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  pickerUnit: {
    width: '74%',
    marginLeft: 10,
  },
  inputArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '74%',
    height: 40,
    marginLeft: 10,
    borderColor: '#e6aaa9',
    borderWidth: 2,
    borderRadius: 5,
  },
  inputType: {
    width: '16%',
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
    width: '100%',
    paddingTop: 5,
    marginRight: 5,
    paddingBottom: 5,
    marginLeft: 5,
    backgroundColor: '#fff',
    color: '#424242',
  },
  buttonsEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  buttonsSave: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 15,
  },
  buttonEdit: {
    height: 30,
    width: 60,
    flexDirection: 'row',
    backgroundColor: '#0B2161',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 5,
  },
  button: {
    height: 30,
    width: 60,
    flexDirection: 'row',
    backgroundColor: '#fe4e4b',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancel: {
    marginTop: 20,
    marginBottom: 5,
  },
  cancelText: {
    color: '#8d8c8c',
  },
  password: {
    marginTop: 20,
    marginBottom: 5,
  },
  passwordText: {
    color: '#ec3237',
    fontWeight: 'bold',
  },
});

export default styles;
