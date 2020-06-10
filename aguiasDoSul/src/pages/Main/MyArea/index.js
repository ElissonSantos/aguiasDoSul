import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import QRCode from './QRcode';

export default function MyArea() {
  return (
    <View style={styles.container}>
      <Text>Minha Area</Text>
      <QRCode />
    </View>
  );
}
