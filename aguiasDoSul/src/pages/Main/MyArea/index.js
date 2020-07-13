import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

import background from '../../../assets/background.png';

import styles from './styles';
import QRPage from './QRPage';
import EditDesb from './EditDesb';
import ChangePassword from './ChangePassword';

export default function MyArea() {
  const [changeP, setChangeP] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.viewTop}>
        <ImageBackground source={background} style={styles.background}>
          <Text style={styles.title}>MINHA ÁREA</Text>
        </ImageBackground>
      </View>

      <View style={styles.viewDown}>
        {changeP && (
          <View style={styles.card}>
            <ChangePassword hide={() => setChangeP(false)} />
          </View>
        )}

        {show && (
          <View style={styles.card}>
            <QRPage hide={() => setShow(false)} />
          </View>
        )}

        <EditDesb setChangeP={() => setChangeP(true)} />

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
            <Text style={styles.buttonText}>VER QRCODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
