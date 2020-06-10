import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import firebase from 'react-native-firebase';

export default function Home({ route, navigation }) {
  const functionsForDefaultApp = firebase.functions();
  const { userLogado } = route.params;
  const [currentUser, setCurrent] = useState(userLogado);

  useEffect(() => {
    teste();

    // firebase
    //   .functions()
    //   .httpsCallable(
    //     'https://us-central1-aguiasdosulfunctions.cloudfunctions.net/helloWorld'
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });
  }, []);

  async function teste() {
    const instance = await functionsForDefaultApp.httpsCallable('helloWorld');

    // try {
    //   const response = await instance();
    console.log(instance);
    console.log('instance');
    console.log('response');
    //   console.log(response);
    // } catch (e) {
    //   console.error(e);
    // }
  }

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
        <Text style={styles.welcomeName}>{userLogado.name}</Text>
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
