import React, { useContext } from 'react';
import { View } from 'react-native';
// Estilos
import styles from './styles';
// Components
import Option from './Option';
// Images
import account from '../../../../assets/account-icon.png';
import myArea from '../../../../assets/my-area-icon.png';
import accountGroup from '../../../../assets/account-group.png';
import qrcode from '../../../../assets/qrcode.png';
// Context
import { ContextUser } from '../../../../store/ContextUser';

export default function Menu() {
  const { user } = useContext(ContextUser);

  return user.office === 'diretoria' ? (
    <View style={styles.body}>
      <Option title="NOVO MEMBRO" image={account} navigateTo="newDesb" />
      <Option title="DIA DE CLUBE" image={accountGroup} navigateTo="DayClub" />
      <Option title="MINHA AREA" image={myArea} navigateTo="MyArea" />
      <Option title="UNIDADES" image={qrcode} navigateTo="Units" />
    </View>
  ) : (
    <View style={styles.body}>
      <Option title="MINHA AREA" image={myArea} navigateTo="MyArea" />
    </View>
  );
}
