import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default function NewUnit({ route, navigation }) {
  const { paramsUnit } = route.params || {};
  const [isLoaging, setLoading] = useState(false);
  const [unit, setUnit] = useState(paramsUnit || {});

  async function save() {
    setLoading(true);

    if (unit.id) {
      const name = unit.name;
      firebase
        .database()
        .ref(`Units/${unit.id}`)
        .update({
          name,
        })
        .then(() => {
          navigation.push('ListUnits');
        })
        .catch((error) => {
          ToastAndroid.show(
            'Ocorreu ao atualizar a unidade.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
          setLoading(false);
        });
    } else {
      const name = unit.name;
      firebase
        .database()
        .ref('Units/')
        .push({
          name: name,
        })
        .then(() => {
          navigation.push('ListUnits');
        })
        .catch((error) => {
          ToastAndroid.show(
            'Ocorreu um erro ao salvar a unidade.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
          setLoading(false);
        });
    }
  }

  return (
    <View style={styles.container}>
      {unit.id ? <Text>Editar Unidade</Text> : <Text>Nova Unidade</Text>}
      <TextInput
        placeholder="Nome da Unidade"
        onChangeText={(name) => setUnit({ id: unit.id, name })}
        defaultValue={unit.name}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ListUnits')}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={save}
        disabled={isLoaging || !unit.name}>
        {isLoaging ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <Text style={styles.buttonText}>Salvar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
