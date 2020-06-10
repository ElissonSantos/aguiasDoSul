import React from 'react';
import { Image } from 'react-native';

import logo from '../../../../assets/logo.png';
import styles from './styles';

export default function Logo() {
  return <Image source={logo} style={styles.img} />;
}
