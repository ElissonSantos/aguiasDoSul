import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  function navigateTo(param) {
    navigation.navigate(param);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Bem vindo,</Text>
        <Text style={styles.welcomeName}>Elisson</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('newdesb')}>
            <Text style={styles.buttonText}>Novo Desbravador</Text>
          </View>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('dayclub')}>
            <Text style={styles.buttonText}>Dia De Clube</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('units')}>
            <Text style={styles.buttonText}>Unidades</Text>
          </View>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('myarea')}>
            <Text style={styles.buttonText}>Minha Area</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#ec3237',
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  welcomeName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 55,
    margin: 10,
  },
  body: {
    flex: 3,
    backgroundColor: '#fff',
  },
  card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 40,
  },
  buttonStyle: {
    width: '40%',
    height: '60%',
    backgroundColor: '#ec3237',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
