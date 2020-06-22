import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import background from '../../../assets/background.png';
import styles from './styles';
import FormSignUp from './FormSignUp';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Image source={background} style={styles.background} />

      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.title}>Novo Desbravador</Text>
        <FormSignUp />
        <Text style={styles.titleAguias}>ÁGUIAS DO SUL</Text>
      </ScrollView>
    </View>
  );
}
