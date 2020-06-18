/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import firebase from 'react-native-firebase';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function EmailAndPassword(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [valid, setValid] = useState(false);
  const [errorMessage, setMessage] = useState();

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      console.log('Email não está correto');
      setValid(false);
    } else {
      if (password && password.length >= 6) {
        console.log('Email e Senha está correto');
        setValid(true);
      } else {
        console.log('Email está correto');
        setValid(false);
      }
    }
  }, [email, password]);

  const keyboardDidShow = () => {
    props.onChangeMin();
  };

  const keyboardDidHide = () => {
    props.onChangeMax();
  };

  function handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch((error) =>
        Alert.alert(
          'Erro ao realizar o Login.',
          'Usuario e/ou senha incorreto.'
        )
      );
  }

  return (
    <View style={styles.container}>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <View style={styles.inputArea}>
        <Icon style={styles.icon} name="email" size={20} color="#c0c0c0" />
        <TextInput
          autoCompleteType="email"
          onSubmitEditing={Keyboard.dismiss}
          keyboardType="email-address"
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          textAlignVertical="center"
          placeholderTextColor="#c0c0c0"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
      </View>

      <View style={styles.inputArea}>
        <Icon style={styles.icon} name="lock" size={20} color="#c0c0c0" />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholderTextColor="#c0c0c0"
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={!valid}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>É novo por aqui?</Text>
        <Text style={styles.signupText1}>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signupText}>Esqueceu a senha?</Text>
        <Text style={styles.signupText1}>Alterar senha</Text>
      </TouchableOpacity>
    </View>
  );
}
