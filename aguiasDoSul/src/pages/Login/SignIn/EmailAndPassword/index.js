import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import { useNavigation } from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import styles from './styles';

export default function EmailAndPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setMessage] = useState();

  async function handleLoginGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navigation.navigate('Main');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  function handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Main'))
      .catch((error) => setMessage(error.message));
  }

  return (
    <View style={styles.container}>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        textAlignVertical="center"
        placeholderTextColor="#fff"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />

      <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholderTextColor="#fff"
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        value={password}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={!email && !password}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.google}>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={handleLoginGoogle}
        />
      </View>

      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Voce ainda não tem uma conta?</Text>
        <Text style={styles.signupText1}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
