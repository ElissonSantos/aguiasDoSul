import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase';

import Approve from './Approve';
import Iniciar from './Iniciar';

export default function Home({ route }) {
  const { userLogado } = route.params;
  const [userToApprove, setUserToApprove] = useState(false);
  const [users, setUsers] = useState();
  const [user, setUser] = useState(userLogado);

  useEffect(() => {
    userApprove();
  }, []);

  async function userApprove() {
    await firebase
      .database()
      .ref('Desbravadores/')
      .on('value', (snapshot) => {
        const data = snapshot.val();
        let desbs = [];
        Object.keys(data).forEach((id) => {
          let desb = data[id];
          if (!desb.verify) {
            desbs.push(desb);
            setUserToApprove(true);
          }
        });
        setUsers(desbs);
      });
  }

  return (
    <View style={styles.container}>
      {userToApprove ? <Approve users={users} /> : <Iniciar user={user} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
