import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: '85%',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: wp('2%'),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    paddingTop: wp('4%'),
    paddingBottom: wp('4%'),
  },
  title: {
    textAlign: 'center',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginTop: wp('2%'),
    marginBottom: wp('4%'),
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('2%'),
    marginBottom: wp('2%'),
  },
  inputArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '90%',
    height: wp('10%'),
    borderColor: '#e6aaa9',
    borderWidth: 2,
    borderRadius: 5,
  },
  inputType: {
    width: '100%',
    textAlign: 'left',
    marginBottom: wp('1%'),
    marginLeft: wp('9%'),
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: wp('4%'),
  },
  buttonCancel: {
    height: wp('8%'),
    paddingRight: wp('3%'),
    paddingLeft: wp('3%'),
    flexDirection: 'row',
    backgroundColor: '#0B2161',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('4%'),
    marginLeft: wp('3%'),
    borderRadius: 5,
  },
  buttonSave: {
    height: wp('8%'),
    paddingRight: wp('3%'),
    paddingLeft: wp('3%'),
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
  errorMessage: {
    textAlign: 'center',
    color: '#ec3237',
    fontWeight: 'bold',
    marginBottom: wp('2%'),
  },
});

export default styles;
