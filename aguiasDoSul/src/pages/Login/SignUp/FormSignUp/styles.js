import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    paddingLeft: hp('7%'),
    paddingRight: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: wp('5%'),
    borderColor: '#e6aaa9',
    borderWidth: 2,
    borderRadius: 5,
  },
  icon: {
    padding: wp('2%'),
  },
  textInput: {
    flex: 1,
    width: '100%',
    height: wp('10%'),
    paddingTop: wp('2%'),
    marginRight: wp('2%'),
    paddingBottom: wp('2%'),
    marginLeft: wp('2%'),
    backgroundColor: '#fff',
    color: '#424242',
  },
  errorMessage: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: wp('2%'),
  },
  button: {
    height: wp('10%'),
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fe4e4b',
    borderColor: '#a60e09',
    borderTopColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp('4%'),
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signin: {
    flexDirection: 'row',
    marginBottom: wp('2%'),
  },
  signinText: {
    color: '#ffd9da',
  },
  signinText1: {
    color: '#fff',
    marginLeft: wp('3%'),
    textDecorationColor: '#ffcdc3',
    textDecorationLine: 'underline',
  },
});

export default styles;
