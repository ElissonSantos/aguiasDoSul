import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    height: 40,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default styles;
