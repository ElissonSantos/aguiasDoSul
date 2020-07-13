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
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginTop: wp('8%'),
    marginBottom: wp('8%'),
    fontSize: wp('5%'),
    letterSpacing: 4,
    fontWeight: 'bold',
  },
  titleAguias: {
    color: '#fff',
    textAlign: 'center',
    marginTop: wp('4%'),
    marginBottom: wp('4%'),
    fontSize: wp('5%'),
    letterSpacing: 7,
  },
  form: {
    // width: '100%',
    // height: '100%',
    // justifyContent: 'space-between',
  },
});

export default styles;
