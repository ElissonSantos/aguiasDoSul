import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import firebase from 'react-native-firebase';

export default function Approved(users, { navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [usersToApprove, setUsersToApprove] = useState([]);

  useEffect(() => {
    setUsersToApprove(users.users);
  }, []);

  function approveUser() {
    console.log('aprovar');
  }

  function reproveUser() {
    console.log('reprovar');
  }

  function changeUser() {
    console.log('mudar');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={usersToApprove}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View style={styles.itens}>
            <Text>{item.name}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => approveUser(item)}>
              <Text style={styles.buttonText}>Aprovar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => reproveUser(item)}>
              <Text style={styles.buttonText}>Reprovar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => changeUser(item.id)}>
              <Text style={styles.buttonText}>Mudar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
