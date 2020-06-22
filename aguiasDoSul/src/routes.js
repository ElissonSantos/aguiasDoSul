import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import { ContextUnits } from './store/ContextUnits';

const Stack = createStackNavigator();

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
  const [units, setUnits] = useState(undefined);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ContextUnits.Provider value={{ units: units, setUnits: setUnits }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ContextUnits.Provider>
  );
}
