import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pontualidade({ route }) {
  const { desb } = route.params;
  const [desbString, setDesbString] = useState(desb);
  const [desbravador, setDesbravador] = useState({});

  useEffect(() => {
    const desbJson = JSON.parse(desbString);
    setDesbravador(desbJson);
  }, []);

  return (
    <View>
      <Text style={styles.text}>Infos do DESBRAVADOR</Text>
      <Text style={styles.text}>ID: {desbravador.id}</Text>
      <Text style={styles.text}>Nome: {desbravador.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    margin: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
