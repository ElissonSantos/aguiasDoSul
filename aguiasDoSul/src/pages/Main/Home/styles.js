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
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    height: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  viewOut: {
    width: '100%',
    padding: 10,
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 1,
  },
  out: {
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
});

export default styles;
