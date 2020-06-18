import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import PickerUnits from '../../../../components/PickerUnits';
import { saveUser } from '../../../../services/User.service';

export default function SignUp() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState({ password: null });
  const [passwordOk, setPasswordOk] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [valid, setValid] = useState(false);
  const [errorMessage, setMessage] = useState();

  useEffect(() => {
    if (user.password === null || passwordConfirm === null) {
      return;
    }
    if (user.password === passwordConfirm) {
      setPasswordOk(true);
    } else {
      setPasswordOk(false);
    }
  }, [passwordConfirm, user.password]);

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(user.email) === false) {
      setValid(false);
      return;
    }
    if (passwordOk && user.password && user.password.length >= 6) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [user.email, user.password, passwordOk]);

  useEffect(() => {
    if (user.dt && user.name && user.office && user.units) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [user, valid]);

  async function save() {
    saveUser(user);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Icon style={styles.icon} name="account" size={25} color="#c0c0c0" />
        <TextInput
          style={styles.textInput}
          placeholder="Nome"
          autoCompleteType="name"
          textAlignVertical="center"
          placeholderTextColor="#c0c0c0"
          onChangeText={(nameValue) =>
            setUser((prevState) => ({
              ...prevState,
              name: nameValue,
            }))
          }
          value={user.name}
        />
      </View>

      <View style={styles.inputArea}>
        <Icon
          style={styles.icon}
          name="calendar-month"
          size={22}
          color="#c0c0c0"
        />
        <TextInputMask
          style={styles.textInput}
          placeholderTextColor="#c0c0c0"
          placeholder="Data de Nascimento: 01/01/2010"
          textAlignVertical="center"
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
      </View>

      <View style={styles.inputArea}>
        <Icon style={styles.icon} name="email" size={20} color="#c0c0c0" />
        <TextInput
          autoCompleteType="email"
          keyboardType="email-address"
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          textAlignVertical="center"
          placeholderTextColor="#c0c0c0"
          onChangeText={(emailValue) =>
            setUser((prevState) => ({
              ...prevState,
              email: emailValue,
            }))
          }
          defaultValue={user.email}
        />
      </View>

      <View style={styles.inputArea}>
        <Icon style={styles.icon} name="lock" size={20} color="#c0c0c0" />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Senha"
          textAlignVertical="center"
          placeholderTextColor="#c0c0c0"
          onChangeText={(passwordValue) =>
            setUser((prevState) => ({
              ...prevState,
              password: passwordValue,
            }))
          }
          defaultValue={user.password}
        />
      </View>

      <View style={styles.inputArea}>
        <Icon style={styles.icon} name="lock" size={20} color="#c0c0c0" />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Confirmar senha"
          textAlignVertical="center"
          placeholderTextColor="#c0c0c0"
          onChangeText={(passwordValue) => setPasswordConfirm(passwordValue)}
          defaultValue={passwordConfirm}
        />
      </View>

      {passwordOk === false && (
        <Text style={styles.errorMessage}>Senhas diferentes</Text>
      )}

      <PickerUnits
        onChange={(itemValue) =>
          setUser((prevState) => ({
            ...prevState,
            units: itemValue,
          }))
        }
      />

      <View style={styles.inputArea}>
        <Icon
          style={styles.icon}
          name="account-group"
          size={20}
          color="#c0c0c0"
        />
        <Picker
          style={styles.textInput}
          selectedValue={user.office}
          onValueChange={(itemValue, itemIndex) =>
            setUser((prevState) => ({
              ...prevState,
              office: itemValue,
            }))
          }>
          <Picker.Item color="#00000090" label="Cargo" value={undefined} />
          <Picker.Item label="Desbravador" value="desbravador" />
          <Picker.Item label="Secretario" value="secretario" />
          <Picker.Item label="Capitao" value="capitao" />
          <Picker.Item label="Conselheiro" value="conselheiro" />
          <Picker.Item label="Diretoria" value="diretoria" />
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={save}
        disabled={!valid || isLoading}>
        {isLoading ? (
          <ActivityIndicator color="#fff" size={30} />
        ) : (
          <Text style={styles.buttonText}>REGISTRAR</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signin}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.signinText}>Já tem uma conta?</Text>
        <Text style={styles.signinText1}>Entre</Text>
      </TouchableOpacity>
    </View>
  );
}
