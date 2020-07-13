import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  viewTop: {
    width: wp('100%'),
    height: hp('15%'),
  },
  viewDown: {
    width: wp('100%'),
    height: hp('85%'),
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('7%'),
  },
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  form: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp('7%'),
  },
  button: {
    height: wp('9%'),
    backgroundColor: '#fe4e4b',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    marginBottom: wp('4%'),
    borderRadius: wp('2%'),
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
