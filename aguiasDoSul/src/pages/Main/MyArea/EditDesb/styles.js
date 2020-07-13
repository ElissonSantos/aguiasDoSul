import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('4%'),
  },
  pickerUnit: {
    width: '74%',
    marginLeft: wp('2%'),
  },
  inputArea: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '74%',
    height: wp('10%'),
    marginLeft: wp('3%'),
    borderColor: '#e6aaa9',
    borderWidth: 2,
    borderRadius: 5,
  },
  inputType: {
    width: '16%',
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
    width: '100%',
    paddingTop: wp('2%'),
    marginRight: wp('2%'),
    paddingBottom: wp('2%'),
    marginLeft: wp('2%'),
    backgroundColor: '#fff',
    color: '#424242',
  },
  buttonsEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
  },
  buttonsSave: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: wp('4%'),
  },
  buttonEdit: {
    height: wp('9%'),
    width: wp('15%'),
    flexDirection: 'row',
    backgroundColor: '#0B2161',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('5%'),
    marginLeft: wp('4%'),
    borderRadius: 5,
  },
  button: {
    height: wp('9%'),
    width: wp('15%'),
    flexDirection: 'row',
    backgroundColor: '#fe4e4b',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('4%'),
    marginLeft: wp('3%'),
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancel: {
    marginTop: wp('4%'),
    marginBottom: wp('2%'),
  },
  cancelText: {
    color: '#8d8c8c',
  },
  password: {
    marginTop: wp('4%'),
    marginBottom: wp('2%'),
  },
  passwordText: {
    color: '#ec3237',
    fontWeight: 'bold',
  },
});

export default styles;
