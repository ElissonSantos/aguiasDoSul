import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';

import Menu from './Menu';

import styles from './styles';
import background from '../../../assets/background.png';
import { ContextUser } from '../../../store/ContextUser';

export default function Home({ navigation }) {
  const { user } = useContext(ContextUser);

  function logout() {
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
    <ScrollView contentContainerStyle={styles.container}>
      <View onTouchStart={logout} style={styles.viewOut}>
        <Text style={styles.out}>Sair</Text>
      </View>

      <View style={styles.viewTop}>
        <ImageBackground source={background} style={styles.background}>
          <Text style={styles.welcomeText}>Bem vindo,</Text>
          <Text style={styles.welcomeName}>{user.name}</Text>
        </ImageBackground>
      </View>

      <View style={styles.viewDown}>
        <Menu />
      </View>
    </ScrollView>
  );
}
