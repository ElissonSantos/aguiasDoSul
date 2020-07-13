import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'flex-end',
  },
  card: {
    width: '96%',
    marginRight: '2%',
    backgroundColor: '#f0f0f0',
    marginTop: wp('4%'),
    alignItems: 'center',
    borderRadius: wp('3%'),
    elevation: wp('2%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingTop: wp('10%'),
    paddingBottom: wp('2%'),
    position: 'relative',
    zIndex: 1,
  },
  buttonExit: {
    height: wp('9%'),
    width: wp('9%'),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 11,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: '#fff',
    marginRight: wp('10%'),
    position: 'absolute',
    zIndex: 2,
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: wp('6%'),
  },
  button: {
    height: wp('9%'),
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('5%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('3%'),
    marginBottom: wp('4%'),
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
