import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#CA0B0B',
  },
  viewTop: {
    height: hp('30%'),
    width: wp('100%'),
    backgroundColor: '#CA0B0B',
  },
  viewDown: {
    height: hp('70%'),
    width: wp('100%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  viewOut: {
    width: '100%',
    paddingTop: wp('2%'),
    paddingRight: wp('4%'),
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 1,
  },
  out: {
    color: '#fff',
    textAlign: 'right',
    fontSize: wp('5%'),
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('7%'),
  },
  welcomeName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('9%'),
    marginTop: wp('3%'),
    marginBottom: wp('10%'),
  },
});

export default styles;
