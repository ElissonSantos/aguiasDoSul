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

export default function SignUp({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({ password: null });
  const [units, setUnits] = useState([]);
  const [passwordOk, setPasswordOk] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  useEffect(() => {
    loadUnits();
  }, []);

  useEffect(() => {
    if (user.password === null) {
      return;
    }
    if (user.password === passwordConfirm) {
      setPasswordOk(true);
    } else {
      setPasswordOk(false);
    }
  }, [passwordConfirm, user.password]);

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
    await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        firebase
          .database()
          .ref('Desbravadores/')
          .push({
            name: user.name,
            dt: user.dt,
            email: user.email,
            unit: user.unit,
            office: user.office,
            verify: false,
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Desbravador</Text>
      {isLoading ? (
        <View>
          <ActivityIndicator color="#fff" size={30} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            placeholderTextColor="#fff"
            onChangeText={(nameValue) =>
              setUser((prevState) => ({
                ...prevState,
                name: nameValue,
              }))
            }
            defaultValue={user.name}
          />
          <TextInputMask
            style={styles.textInput}
            placeholderTextColor="#fff"
            placeholder="Data de Nascimento: 01/01/2010"
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            onChangeText={(text) => {
              setUser((prevState) => ({
                ...prevState,
                dt: text,
              }));
            }}
            value={user.dt}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#fff"
            onChangeText={(emailValue) =>
              setUser((prevState) => ({
                ...prevState,
                email: emailValue,
              }))
            }
            defaultValue={user.email}
          />
          {passwordOk === false && <Text>Senhas diferentes</Text>}
          <TextInput
            style={styles.textInput}
            placeholder="Senha"
            placeholderTextColor="#fff"
            onChangeText={(passwordValue) =>
              setUser((prevState) => ({
                ...prevState,
                password: passwordValue,
              }))
            }
            defaultValue={user.password}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirmar Senha"
            placeholderTextColor="#fff"
            onChangeText={(passwordValue) => setPasswordConfirm(passwordValue)}
          />
          <Picker
            style={styles.textInput}
            selectedUnit={undefined}
            onValueChange={(itemValue, itemIndex) =>
              setUser((prevState) => ({
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
            style={styles.textInput}
            selectedOffice={undefined}
            onValueChange={(itemValue, itemIndex) =>
              setUser((prevState) => ({
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
