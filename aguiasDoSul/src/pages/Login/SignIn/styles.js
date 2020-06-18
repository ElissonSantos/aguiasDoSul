import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLogo: {
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    marginBottom: '25%',
  },
  logo: {
    height: 205,
    width: 200,
  },
  viewLogoMin: {
    alignItems: 'center',
    position: 'relative',
    zIndex: 3,
    marginBottom: '55%',
  },
  logoMin: {
    height: 145,
    width: 140,
  },
  viewTop: {
    height: '100%',
    width: '100%',
    backgroundColor: '#dc1e10',
    position: 'absolute',
    zIndex: 0,
  },
  viewDown: {
    flex: 1,
    height: '53%',
    width: '100%',
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'absolute',
    zIndex: 0,
  },
  background: {
    width: '100%',
    height: '47%',
    position: 'absolute',
    zIndex: 0,
  },
  tittle: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 18,
    letterSpacing: 7,
    position: 'relative',
    zIndex: 1,
  },
});

export default styles;
