import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

import styles from './styles';

export default function ListDesb({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const { paramsUnit } = route.params;
  const [unit, setUnit] = useState(paramsUnit);
  const [desbs, setDesbs] = useState();

  useEffect(() => {
    loadDesbs();
  }, []);

  async function loadDesbs() {
    setLoading(true);
    await firebase
      .database()
      .ref('Desbravadores/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        let desbsUnit = [];
        Object.keys(data).forEach((id) => {
          let desb = data[id];
          if (desb.unit === unit.id) {
            desb = {
              ...desb,
              id,
            };
            desbsUnit.push(desb);
          }
        });
        setDesbs(desbsUnit);
      });
    setLoading(false);
  }

  async function deleteDesb(id) {
    setLoading(true);
    await firebase.database().ref(`Desbravadores/${id}`).remove();
    setLoading(false);
    loadDesbs();
  }

  function editDesb(desb) {
    navigation.push('NewDesb', {
      paramsDesb: desb,
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('NewDesb')}>
        <Text style={styles.buttonText}>Nova Desbravador</Text>
      </TouchableOpacity>
      <Text style={styles.title}>DESBRAVADORES</Text>
      <Text style={styles.title}>{unit.name}</Text>
      {isLoading ? (
        <ActivityIndicator color="black" size={50} />
      ) : (
        <FlatList
          data={desbs}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.itens}>
              <Text>{item.name}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => editDesb(item)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => deleteDesb(item.id)}>
                <Text style={styles.buttonText}>Apagar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
