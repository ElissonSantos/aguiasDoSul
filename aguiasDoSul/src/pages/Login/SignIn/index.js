import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import EmailAndPassword from './EmailAndPassword';
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.png';

export default function Login() {
  const [min, setMin] = useState(false);

  useEffect(() => {
    console.log(min);
  }, [min]);

  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        {/* Imagem de Background */}
        <Image source={background} style={styles.background} />
        {/* Imagem de Titlw */}
        <Text style={styles.title}>ÁGUIAS DO SUL</Text>
      </View>

      {
        /* Logo */
        min ? (
          <View style={styles.viewLogoMin}>
            <Image source={logo} style={styles.logoMin} />
          </View>
        ) : (
          <View style={styles.viewLogo}>
            <Image source={logo} style={styles.logo} />
          </View>
        )
      }

      <View style={styles.viewDown}>
        <EmailAndPassword
          onChangeMin={() => setMin(true)}
          onChangeMax={() => setMin(false)}
        />
      </View>
    </View>
  );
}
