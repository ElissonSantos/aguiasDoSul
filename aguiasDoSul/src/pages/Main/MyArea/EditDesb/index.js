/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-community/picker';

import styles from './styles';

import PickerUnits from '../../../../components/PickerUnits';
import { updateDesb } from '../../../../services/Desb.service';
import { ContextUser } from '../../../../store/ContextUser';

export default function EditDesb(props) {
  const { user } = useContext(ContextUser);
  const [editable, setEditable] = useState(false);
  const [userEdit, setUserEdit] = useState(user);
  const [valid, setValid] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEdit.email) === false) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  }, [user.email]);

  useEffect(() => {
    if (
      userEdit.dt &&
      userEdit.name &&
      userEdit.office &&
      userEdit.unit &&
      validEmail
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [user, valid]);

  async function save() {
    updateDesb(userEdit);
    setEditable(false);
  }

  function canEdit() {
    if (user.toVerify) {
      ToastAndroid.show(
        'Já há uma solicitação aguardando aprovação.',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        25,
        50
      );
    } else {
      setEditable(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.inputType}>NOME:</Text>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.textInput}
            placeholder="Nome"
            autoCompleteType="name"
            textAlignVertical="center"
            placeholderTextColor="#c0c0c0"
            editable={editable}
            onChangeText={(nameValue) =>
              setUserEdit((prevState) => ({
                ...prevState,
                name: nameValue,
              }))
            }
            value={userEdit.name}
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputType}>DATA NASC.:</Text>

        <View style={styles.inputArea}>
          <TextInputMask
            style={styles.textInput}
            editable={editable}
            placeholderTextColor="#c0c0c0"
            placeholder="Data de Nascimento: 01/01/2010"
            textAlignVertical="center"
            type={'datetime'}
            options={{
              format: 'DD/MM/YYYY',
            }}
            onChangeText={(text) => {
              setUserEdit((prevState) => ({
                ...prevState,
                dt: text,
              }));
            }}
            value={userEdit.dt}
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputType}>EMAIL:</Text>

        <View style={styles.inputArea}>
          <TextInput
            editable={editable}
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email"
            textAlignVertical="center"
            placeholderTextColor="#c0c0c0"
            value={userEdit.email}
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputType}>UNIDADE:</Text>

        <View style={styles.inputArea}>
          <PickerUnits
            enabled={editable}
            selectedValue={userEdit.unit}
            onValueChange={(text) =>
              setUserEdit((prevState) => ({
                ...prevState,
                unit: text,
              }))
            }
          />
        </View>
      </View>

      <View style={styles.input}>
        <Text style={styles.inputType}>CARGO:</Text>

        <View style={styles.inputArea}>
          <Picker
            enabled={editable}
            style={styles.textInput}
            selectedValue={userEdit.office}
            onValueChange={(itemValue, itemIndex) =>
              setUserEdit((prevState) => ({
                ...prevState,
                office: itemValue,
              }))
            }>
            <Picker.Item label="Desbravador" value="desbravador" />
            <Picker.Item label="Secretario" value="secretario" />
            <Picker.Item label="Capitao" value="capitao" />
            <Picker.Item label="Conselheiro" value="conselheiro" />
            <Picker.Item label="Diretoria" value="diretoria" />
          </Picker>
        </View>
      </View>

      {editable ? (
        <View style={styles.buttonsSave}>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              setUserEdit(user);
              setEditable(false);
            }}>
            <Text style={styles.cancelText}>CANCELAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={save}
            disabled={!valid || isLoading}>
            {isLoading ? (
              <ActivityIndicator color="#fff" size={30} />
            ) : (
              <Text style={styles.buttonText}>SALVAR</Text>
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonsEdit}>
          <TouchableOpacity style={styles.password} onPress={props.setChangeP}>
            <Text style={styles.passwordText}>MUDAR SENHA?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonEdit} onPress={canEdit}>
            <Text style={styles.buttonText}>EDITAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
