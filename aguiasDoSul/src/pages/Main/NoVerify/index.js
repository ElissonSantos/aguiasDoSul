import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

export default function NoVerify() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seu cadastro não foi validado ainda</Text>
      <View onTouchStart={() => firebase.auth().signOut()}>
        <Text style={styles.welcomeOut}>Sair</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ec3237',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  welcomeOut: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 20,
    margin: 30,
  },
});
