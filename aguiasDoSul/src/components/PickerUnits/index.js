import React, { useEffect, useState, useContext } from 'react';
import { Picker } from '@react-native-community/picker';

import styles from './styles';
import { ContextUnits } from '../../store/ContextUnits';

export default function PickerUnits(props) {
  const editable = props.enabled;
  const unitProps = props.selectedValue;
  const { units } = useContext(ContextUnits);
  const [unitSelected, setUnitSelected] = useState(unitProps);

  useEffect(() => {
    props.onValueChange(unitSelected);
  }, [unitSelected]);

  useEffect(() => {
    setUnitSelected(unitProps);
  }, [unitProps]);

  return (
    <Picker
      enabled={editable}
      style={styles.textInput}
      selectedValue={unitSelected}
      onValueChange={(itemValue, itemIndex) => setUnitSelected(itemValue)}>
      {units.map((unit) => {
        return <Picker.Item label={unit.name} value={unit.id} />;
      })}
    </Picker>
  );
}
