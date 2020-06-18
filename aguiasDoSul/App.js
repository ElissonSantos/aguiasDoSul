import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';
import firebase, { firestore } from 'firebase';

const config = {
  databaseURL: 'https://aguiasdosul-2020.firebaseio.com',
  projectId: '1:303062517647:android:d950a584ab8086d3ab6dfa',
};

firebase.initializeApp(config);

GoogleSignin.configure();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#f82110" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
