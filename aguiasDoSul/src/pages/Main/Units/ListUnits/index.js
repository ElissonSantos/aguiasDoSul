import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default function ListUnits({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [units, setUnits] = useState([]);

  useEffect(() => {
    loadUnits();
  }, []);

  async function loadUnits() {
    setLoading(true);
    await firebase
      .database()
      .ref('Units/')
      .on('value', function (snapshot) {
        const data = snapshot.val();
        let unitsDb = [];
        Object.keys(data).forEach((id) => {
          let unit = {
            id,
            name: data[id].name,
          };
          unitsDb.push(unit);
        });
        setUnits(unitsDb);
      });
    setLoading(false);
  }

  async function deleteUnit(id) {
    setLoading(true);
    await firebase.database().ref(`Units/${id}`).remove();
    setLoading(false);
    loadUnits();
  }

  function listDesb(unit) {
    navigation.navigate('ListDesb', {
      paramsUnit: unit,
    });
  }

  function editUnit(unit) {
    navigation.push('NewUnit', {
      paramsUnit: unit,
    });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push('NewUnit')}>
        <Text style={styles.buttonText}>Nova Unidade</Text>
      </TouchableOpacity>
      <Text style={styles.title}>UNIDADES</Text>
      {isLoading ? (
        <ActivityIndicator color="black" size={50} />
      ) : (
        <FlatList
          data={units}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.itens}>
              <Text>{item.name}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => listDesb(item)}>
                <Text style={styles.buttonText}>Desbravadores</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => editUnit(item)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => deleteUnit(item.id)}>
                <Text style={styles.buttonText}>Apagar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
