import React from 'react';
import { Image, ScrollView, Text, View, ImageBackground } from 'react-native';

import styles from './styles';

import background from '../../../assets/background.png';
import EmailAndPassword from './EmailAndPassword';
import logo from '../../../assets/logo.png';

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.viewTop}>
        {/* Imagem de Background */}
        <ImageBackground source={background} style={styles.background}>
          {/* Text de Title */}
          <Text style={styles.title}>ÁGUIAS DO SUL</Text>
        </ImageBackground>
      </View>

      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.viewDown}>
        <EmailAndPassword />
      </View>
    </ScrollView>
  );
}
