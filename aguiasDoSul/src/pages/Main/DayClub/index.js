import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function DayClub() {
  const navigation = useNavigation();

  function onSuccess(e) {
    navigation.navigate('Pontualidade', { desb: e.data });
  }

  return (
    <View style={styles.container}>
      <Text>DayClub</Text>
      <QRCodeScanner
        onRead={(e) => onSuccess(e)}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>Leia o QRCode, por favor.</Text>
        }
        // bottomContent={
        //   <TouchableOpacity style={styles.buttonTouchable}>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
    </View>
  );
}
