import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  card: {
    height: wp('27%'),
    width: wp('30%'),
    marginTop: wp('6%'),
    marginBottom: wp('6%'),
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    margin: wp('1%'),
  },
  iconBorder: {
    width: wp('27%'),
    height: '100%',
    borderWidth: 3,
    borderColor: '#ec3237',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '85%',
    height: '90%',
    resizeMode: 'contain',
  },
});

export default styles;
