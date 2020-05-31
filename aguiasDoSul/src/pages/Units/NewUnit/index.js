import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import api from '../../../services/api';

export default function NewUnit({ route, navigation }) {
  const { paramsUnit } = route.params || {};
  const [isLoaging, setLoading] = useState(false);
  const [unit, setUnit] = useState(paramsUnit || {});

  async function save() {
    setLoading(true);
    let response;
    if (unit.id) {
      response = await api.put('/unidades', {
        unidade: { id: unit.id, name: unit.name },
      });
    } else {
      response = await api.post('/unidades', {
        unidade: { name: unit.name },
      });
    }
    navigation.navigate('units');
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
        onPress={() => navigation.navigate('units')}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#000',
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});
