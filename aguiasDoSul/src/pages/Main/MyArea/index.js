import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';
import QRPage from './QRPage';

export default function MyArea() {
  return (
    <View style={styles.container}>
      <QRPage />
    </View>
  );
}
