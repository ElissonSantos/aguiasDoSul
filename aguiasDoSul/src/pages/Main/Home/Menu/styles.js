import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    padding: wp('5%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
