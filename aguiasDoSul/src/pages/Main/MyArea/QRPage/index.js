import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase';
import CameraRoll from '@react-native-community/cameraroll';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';

import styles from './styles';
import { ContextUser } from '../../../../store/ContextUser';

export default function QRPage(props) {
  const { user } = useContext(ContextUser);
  const [svg, setSVG] = useState();

  console.log(user);

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
      <TouchableOpacity style={styles.buttonExit} onPress={props.hide}>
        <Icon name="close" size={30} color="#ec3237" />
      </TouchableOpacity>

      <View style={styles.card}>
        <QRCode
          size={310}
          value={JSON.stringify(user)}
          getRef={(c) => setSVG(c)}
        />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={saveQrToDisk}>
            <Text style={styles.buttonText}>SALVAR QRCODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
