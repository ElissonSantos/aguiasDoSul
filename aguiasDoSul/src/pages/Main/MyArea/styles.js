import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDown: {
    flex: 8,
    backgroundColor: '#fff',
  },
  background: {
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 20,
  },
  form: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 40,
    backgroundColor: '#fe4e4b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
