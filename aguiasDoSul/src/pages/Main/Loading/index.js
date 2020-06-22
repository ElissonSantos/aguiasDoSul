/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { View, ActivityIndicator, ToastAndroid, Image } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';
import { getUserData, haveVerify } from '../../../services/User.service';
import { ContextUser } from '../../../store/ContextUser';
import background from '../../../assets/background.png';

export default function Loading({ navigation }) {
  const { user, setUser } = useContext(ContextUser);
  const [users, setUsers] = useState();
  const [usersVerify, setUsersVerify] = useState();

  useEffect(() => {
    firebase
      .database()
      .ref('Desbravadores/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        setUsers(data);
      });

    firebase
      .database()
      .ref('DesbravadoresVerify/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        setUsersVerify(data);
      });
  }, []);

  useEffect(() => {
    if (users && usersVerify) {
      getUserData(users, usersVerify)
        .then((userData) => {
          setUser(userData);
        })
        .catch((err) => {
          ToastAndroid.show(err, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
          firebase
            .auth()
            .signOut()
            .then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            });
        });
    }
  }, [users, usersVerify]);

  useEffect(() => {
    if (user) {
      if (user.verify === true) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('NoVerify');
      }
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <Image source={background} style={styles.background} />

      <ActivityIndicator color="white" size={60} />
    </View>
  );
}
