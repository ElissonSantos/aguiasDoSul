import React, { useState, useContext } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ContextUser } from '../../../store/ContextUser';
import background from '../../../assets/background.png';
import styles from './styles';

export default function NoVerify({ navigation }) {
  const { user } = useContext(ContextUser);

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      });
  }

  return (
    <View style={styles.container}>
      <Image source={background} style={styles.background} />

      <Text style={styles.name}>Olá, {user.name}</Text>

      <Text style={styles.text}>O Seu cadastro não foi validado ainda.</Text>

      <Text style={styles.text}>
        Aguarde a aprovação da Diretoria para poder acessar ao app.
      </Text>

      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Icon name="exit-to-app" size={20} color="#fff" />
        <Text style={styles.buttonText}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}
