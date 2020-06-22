/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { View, ActivityIndicator, ToastAndroid } from 'react-native';
import firebase from 'react-native-firebase';

import { ContextUnits } from '../../../store/ContextUnits';
import { getUnits } from '../../../services/Units.service';

import styles from './styles';

export default function Loading({ navigation }) {
  const [unitsDb, setUnitsDb] = useState();
  const { units, setUnits } = useContext(ContextUnits);

  useEffect(() => {
    firebase
      .database()
      .ref('Units/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        setUnitsDb(data);
      });
  }, []);

  useEffect(() => {
    if (unitsDb) {
      getUnits(unitsDb)
        .then((unitsData) => {
          setUnits(unitsData);
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
        })
        .catch((err) => {
          ToastAndroid.show(err, ToastAndroid.LONG, ToastAndroid.TOP, 25, 50);
        });
    }
  }, [unitsDb]);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size={50} />
    </View>
  );
}
