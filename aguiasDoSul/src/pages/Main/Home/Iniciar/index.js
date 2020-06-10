import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';
import { useNavigation } from '@react-navigation/native';

export default function Iniciar(user) {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    setCurrentUser(user.user);
  }, []);

  function navigateTo(param) {
    navigation.navigate(param);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <View onTouchStart={() => firebase.auth().signOut()}>
          <Text style={styles.welcomeOut}>Sair</Text>
        </View>
        <Text style={styles.welcomeText}>Bem vindo,</Text>
        {/* <Text style={styles.welcomeName}>{currentUser.name}</Text> */}
      </View>
      <View style={styles.body}>
        <View style={styles.card}>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('NewDesb')}>
            <Text style={styles.buttonText}>Novo Desbravador</Text>
          </View>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('DayClub')}>
            <Text style={styles.buttonText}>Dia De Clube</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('Units')}>
            <Text style={styles.buttonText}>Unidades</Text>
          </View>
          <View
            style={styles.buttonStyle}
            onTouchStart={() => navigateTo('MyArea')}>
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
    flex: 1,
    alignSelf: 'stretch',
    height: 150,
    backgroundColor: '#ec3237',
  },
  welcomeOut: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 20,
    margin: 4,
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
  },
  welcomeName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
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
