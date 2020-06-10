import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  ToastAndroid,
  View,
} from 'react-native';
import firebase from 'react-native-firebase';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import styles from './styles';

export default function SignUp() {
  const navigation = useNavigation();
  const [isLoaging, setLoading] = useState(false);
  const [user, setUser] = useState({ password: null, verificado: false });
  const [units, setUnits] = useState([]);
  const [passwordOk, setPasswordOk] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setMessage] = useState();

  useEffect(() => {
    // loadUnits();
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

  // async function loadUnits() {
  //   const response = await api.get('/unidades');
  //   setUnits(response.data);
  //   setLoading(false);
  // }

  function handleSignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch((error) => setMessage(error.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nome Completo"
        placeholderTextColor="#fff"
        onChangeText={(nameValue) =>
          setUser((prevState) => ({
            ...prevState,
            name: nameValue,
          }))
        }
      />
      <TextInput
        style={styles.textInput}
        placeholder="Usuario"
        placeholderTextColor="#fff"
        onChangeText={(usernameValue) =>
          setUser((prevState) => ({
            ...prevState,
            username: usernameValue,
          }))
        }
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
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirmar senha"
        placeholderTextColor="#fff"
        onChangeText={(passwordValue) => setPasswordConfirm(passwordValue)}
      />
      <TextInputMask
        style={styles.textInput}
        placeholder="Data de Nascimento: 01/01/2010"
        placeholderTextColor="#fff"
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={user.dt}
        onChangeText={(text) => {
          setUser((prevState) => ({
            ...prevState,
            dt: text,
          }));
        }}
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
        <Picker.Item label="Selecionar" value={undefined} />
        <Picker.Item label="Diretoria" value="diretoria" />
        <Picker.Item label="Pernilongos" value="pernilongos" />
        <Picker.Item label="Joaninhas" value="joaninhas" />
        <Picker.Item label="Corujas" value="corujas" />
        <Picker.Item label="Penas" value="penas" />
        <Picker.Item label="Corvos" value="corvos" />
        <Picker.Item label="Gaivotas" value="gaivotas" />
        {/* {units.map((unit) => {
          return <Picker.Item label={unit.nome} value={unit.id} />;
        })} */}
      </Picker>
      <Picker
        style={styles.textInput}
        selectedCargo={undefined}
        onValueChange={(itemValue, itemIndex) =>
          setUser((prevState) => ({
            ...prevState,
            cargo: itemValue,
          }))
        }>
        <Picker.Item label="Selecionar" value={undefined} />
        <Picker.Item label="Desbravador" value="desbravador" />
        <Picker.Item label="Secretario" value="secretario" />
        <Picker.Item label="Capitao" value="capitao" />
        <Picker.Item label="Conselheiro" value="conselheiro" />
        <Picker.Item label="Diretoria" value="diretoria" />
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignUp}
        disabled={isLoaging || !passwordOk}>
        {isLoaging ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signin}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signinText}>Voce já possui uma conta?</Text>
        <Text style={styles.signinText1}>Faça Login</Text>
      </TouchableOpacity>
    </View>
  );
}
