import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  name: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fe4e4b',
    borderColor: '#a60e09',
    borderTopColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default styles;
