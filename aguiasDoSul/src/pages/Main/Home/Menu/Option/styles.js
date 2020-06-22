import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    height: 110,
    width: 130,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    margin: 5,
  },
  iconBorder: {
    width: 110,
    height: '100%',
    borderWidth: 3,
    borderColor: '#ec3237',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '85%',
    height: '90%',
  },
});

export default styles;
