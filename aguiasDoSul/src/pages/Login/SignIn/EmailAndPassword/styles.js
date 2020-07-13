import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: wp('32%'),
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: wp('75%'),
    height: hp('6%'),
    marginBottom: hp('2%'),
    borderColor: '#e6aaa9',
    borderWidth: 3,
    borderRadius: 5,
  },
  icon: {
    padding: hp('1%'),
  },
  textInput: {
    flex: 1,
    paddingTop: hp('1%'),
    paddingRight: hp('1%'),
    paddingBottom: hp('1%'),
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  button: {
    height: hp('6%'),
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fe4e4b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signup: {
    flexDirection: 'row',
    marginBottom: hp('1%'),
  },
  signupText: {
    color: '#8d8c8c',
  },
  signupText1: {
    color: '#fb7e7a',
    marginLeft: hp('1%'),
    textDecorationColor: '#fb7e7a',
    textDecorationLine: 'underline',
  },
});

export default styles;
