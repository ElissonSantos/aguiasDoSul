import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-community/picker';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import { View } from 'react-native';

export default function PickerUnits(props) {
  const [units, setUnits] = useState([]);
  const [unitSelected, setUnitSelected] = useState();

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    props.onChange(unitSelected);
  }, [unitSelected]);

  async function load() {
    await firebase
      .database()
      .ref('Units/')
      .on('value', (snapshot) => {
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
  }

  return (
    <View style={styles.inputArea}>
      <Icon
        style={styles.icon}
        name="account-group"
        size={20}
        color="#c0c0c0"
      />
      <Picker
        style={styles.textInput}
        selectedValue={unitSelected}
        onValueChange={(itemValue, itemIndex) => setUnitSelected(itemValue)}>
        <Picker.Item color="#00000090" label="Unidade" value={undefined} />
        {units.map((unit) => {
          return <Picker.Item label={unit.name} value={unit.id} />;
        })}
      </Picker>
    </View>
  );
}
