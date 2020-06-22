import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import { updatePassword } from '../../../../services/Desb.service';

export default function ChangePassword(props) {
  const [isLoading, setLoading] = useState(false);
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [passwordOk, setPasswordOk] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [errorMessage, setMessage] = useState();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (newPassword !== undefined && passwordConfirm !== undefined) {
      if (newPassword === passwordConfirm) {
        setPasswordOk(true);
      } else {
        setPasswordOk(false);
      }
    }
  }, [passwordConfirm, newPassword]);

  useEffect(() => {
    if (passwordOk && newPassword && newPassword.length >= 6) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [passwordOk, valid, newPassword]);

  function save() {
    setLoading(true);
    updatePassword(password, newPassword);
    setLoading(false);
    props.hide();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALTERAR SENHA</Text>

      <View style={styles.input}>
        <Text style={styles.inputType}>SENHA ATUAL:</Text>

        <View style={styles.inputArea}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Senha atual"
            textAlignVertical="center"
            placeholderTextColor="#c0c0c0"
            onChangeText={(passwordValue) => setPassword(passwordValue)}
            defaultValue={password}
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputType}>NOVA SENHA:</Text>

        <View style={styles.inputArea}>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Senha"
            textAlignVertical="center"
            placeholderTextColor="#c0c0c0"
            onChangeText={(passwordValue) => setNewPassword(passwordValue)}
            defaultValue={newPassword}
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputType}>CONFIRMAR NOVA SENHA:</Text>

        <View style={styles.inputArea}>
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
      </View>

      {passwordOk === false && (
        <Text style={styles.errorMessage}>Senhas diferentes</Text>
      )}

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonCancel} onPress={props.hide}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSave}
          onPress={save}
          disabled={!valid || isLoading}>
          {isLoading ? (
            <ActivityIndicator color="#fff" size={30} />
          ) : (
            <Text style={styles.buttonText}>SALVAR</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
