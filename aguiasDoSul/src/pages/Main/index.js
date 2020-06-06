// Main.js
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default class Main extends React.Component {
  state = { currentUser: null };
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
      </View>
    );
  }
}
