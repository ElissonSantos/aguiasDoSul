import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Option(params) {
  const navigation = useNavigation();
  const { title, image, navigateTo } = params;

  function navigate() {
    navigation.navigate(navigateTo);
  }

  return (
    <View style={styles.card} onTouchEnd={navigate}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconBorder}>
        <Image style={styles.img} source={image} />
      </View>
    </View>
  );
}
