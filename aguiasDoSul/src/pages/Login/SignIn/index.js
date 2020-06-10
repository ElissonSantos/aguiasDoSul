import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import EmailAndPassword from './EmailAndPassword';
import Logo from './Logo';

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo />
      <EmailAndPassword />
    </View>
  );
}
