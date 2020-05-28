/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#ec3237" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
