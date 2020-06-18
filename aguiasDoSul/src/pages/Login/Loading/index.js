/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default function Loading({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user
        ? navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          })
        : navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
          });
    });
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size={50} />
    </View>
  );
}
