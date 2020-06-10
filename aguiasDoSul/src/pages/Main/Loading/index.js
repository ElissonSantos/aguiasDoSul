import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default function Loading({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      userVerify(user);
    });
  });

  async function userVerify(user) {
    await firebase
      .database()
      .ref('Desbravadores/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        Object.keys(data).forEach((id) => {
          let userLogado = data[id];
          if (userLogado.email === user.email) {
            if (userLogado.verify === true) {
              navigation.navigate('Home', { userLogado });
            } else {
              navigation.navigate('NoVerify');
            }
          }
        });
      });
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size={50} />
    </View>
  );
}
