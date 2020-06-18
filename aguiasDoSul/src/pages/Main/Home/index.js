import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

import Approve from './Approve';
import Iniciar from './Iniciar';

// import usersToApprove from '../../../services/User.service';

export default function Home({ route }) {
  const { userLogado } = route.params;
  // const [userToApprove, setUserToApprove] = useState(false);
  const [users, setUsers] = useState();
  const [user, setUser] = useState(userLogado);

  useEffect(() => {
    userApprove();
  }, []);

  async function userApprove() {
    console.log('Comecou a funcao no home');
    // const usuario = await usersToApprove();
    console.log('Executou a funcao;');
    // console.log(usuario);
  }

  return (
    <View style={styles.container}>
      <Iniciar user={user} />
      {/* {userToApprove ? <Approve users={users} /> : <Iniciar user={user} />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
