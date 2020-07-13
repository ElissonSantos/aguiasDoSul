import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CA0B0B',
  },
  viewTop: {
    height: hp('40%'),
    width: wp('100%'),
    backgroundColor: '#CA0B0B',
  },
  viewDown: {
    height: hp('60%'),
    width: wp('100%'),
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  viewLogo: {
    position: 'absolute',
    zIndex: 3,
    top: wp('35%'),
  },
  logo: {
    resizeMode: 'contain',
    height: hp('35%'),
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: wp('8%'),
    fontSize: wp('5%'),
    letterSpacing: 7,
  },
});

export default styles;
