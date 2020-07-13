import React from 'react';
import { Text, View, Image, ScrollView, ImageBackground } from 'react-native';

import background from '../../../assets/background.png';
import styles from './styles';
import FormSignUp from './FormSignUp';

export default function SignUp() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.title}>Novo Desbravador</Text>
        <FormSignUp />
        <Text style={styles.titleAguias}>ÁGUIAS DO SUL</Text>
      </ImageBackground>
    </ScrollView>
  );
}
