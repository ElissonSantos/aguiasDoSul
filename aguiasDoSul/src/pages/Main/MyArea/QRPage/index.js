import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import firebase from 'react-native-firebase';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

export default function QRPage() {
  const [userData, setUserData] = useState({});
  const [currentUser, setCurrent] = useState('');
  const [svg, setSVG] = useState();

  useEffect(() => {
    const { currentUser } = firebase.auth();
    setCurrent(currentUser);

    firebase
      .database()
      .ref('Desbravadores')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        Object.keys(data).find((id) => {
          let user = data[id];
          if (user.email === currentUser.email) {
            user = {
              ...user,
              id,
            };
            setUserData(user);
          }
        });
      });
  }, []);

  function saveQrToDisk() {
    svg.toDataURL((data) => {
      RNFS.writeFile(RNFS.CachesDirectoryPath + '/qrcode.png', data, 'base64')
        .then((success) => {
          return CameraRoll.save(
            RNFS.CachesDirectoryPath + '/qrcode.png',
            'qrcode'
          );
        })
        .then(() => {
          ToastAndroid.show('QRCODE salvo na galeria!!', ToastAndroid.SHORT);
        });
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={saveQrToDisk}>
        <Text style={styles.buttonText}>Salvar na Galeria</Text>
      </TouchableOpacity>

      <QRCode
        size={300}
        value={JSON.stringify(userData)}
        getRef={(c) => setSVG(c)}
      />
    </View>
  );
}
