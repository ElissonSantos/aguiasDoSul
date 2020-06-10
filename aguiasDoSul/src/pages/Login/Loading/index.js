import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default function Loading({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Main' : 'SignIn');
    });
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size={50} />
    </View>
  );
}
