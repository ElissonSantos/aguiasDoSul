import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TextInputMask } from 'react-native-masked-text';
import firebase from 'react-native-firebase';

import styles from './styles';

export default function NewDesb({ route, navigation }) {
  const [isLoading, setLoading] = useState(false);
  const { paramsDesb } = route.params || {};
  const [desbravador, setDesbravador] = useState(paramsDesb || {});
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

  async function save() {
    setLoading(true);

    if (desbravador.id) {
      firebase
        .database()
        .ref(`Desbravadores/${desbravador.id}`)
        .update({
          name: desbravador.name,
          dt: desbravador.dt,
          email: desbravador.email,
          unit: desbravador.unit,
          office: desbravador.office,
          verify: true,
        })
        .then(() => {
          ToastAndroid.show(
            'Desbravador salvo com sucesso.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
          navigation.push('Units');
        })
        .catch((error) => {
          ToastAndroid.show(
            'Ocorreu ao atualizar a desbravador.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
          setLoading(false);
        });
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(desbravador.email, '123456')
        .catch((error) => {
          ToastAndroid.show(
            'Ocorreu um erro ao salvar o desbravador.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
          setLoading(false);
          return;
        });

      await firebase
        .database()
        .ref('Desbravadores/')
        .push({
          name: desbravador.name,
          dt: desbravador.dt,
          email: desbravador.email,
          unit: desbravador.unit,
          office: desbravador.office,
          verify: true,
        })
        .then(() => {
          ToastAndroid.show(
            'Desbravador salvo com sucesso.',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            50
          );
          navigation.push('Home');
        })
        .catch((error) => {
          ToastAndroid.show(
            'Ocorreu um erro ao salvar o desbravador.',
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
    <View>
      <Text>Novo Desbravador</Text>
      {isLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View>
          <TextInput
            placeholder="Nome do Desbravador"
            onChangeText={(nameValue) =>
              setDesbravador((prevState) => ({
                ...prevState,
                name: nameValue,
              }))
            }
            defaultValue={desbravador.name}
          />
          <TextInputMask
            placeholder="Data de Nascimento: 01/01/2010"
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            onChangeText={(text) => {
              setDesbravador((prevState) => ({
                ...prevState,
                dt: text,
              }));
            }}
            value={desbravador.dt}
          />
          <TextInput
            placeholder="Email do Desbravador"
            onChangeText={(emailValue) =>
              setDesbravador((prevState) => ({
                ...prevState,
                email: emailValue,
              }))
            }
            defaultValue={desbravador.email}
          />
          <Picker
            selectedUnit={undefined}
            onValueChange={(itemValue, itemIndex) =>
              setDesbravador((prevState) => ({
                ...prevState,
                unit: itemValue,
              }))
            }>
            <Picker.Item label="Unidades" value={undefined} />
            {units.map((unit) => {
              return <Picker.Item label={unit.name} value={unit.id} />;
            })}
          </Picker>
          <Picker
            selectedOffice={undefined}
            onValueChange={(itemValue, itemIndex) =>
              setDesbravador((prevState) => ({
                ...prevState,
                office: itemValue,
              }))
            }>
            <Picker.Item label="Cargo" value={undefined} />
            <Picker.Item label="Desbravador" value="desbravador" />
            <Picker.Item label="Secretario" value="secretario" />
            <Picker.Item label="Capitao" value="capitao" />
            <Picker.Item label="Conselheiro" value="conselheiro" />
            <Picker.Item label="Diretoria" value="diretoria" />
          </Picker>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push('Home')}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={save}>
            {isLoading ? (
              <ActivityIndicator size={'large'} color={'white'} />
            ) : (
              <Text style={styles.buttonText}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
