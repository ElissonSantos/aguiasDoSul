import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Pages
import ListUnits from './ListUnits';
import ListDesb from './ListDesb';
import NewUnit from './NewUnit';

export default function Units() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListUnits"
        component={ListUnits}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ListDesb"
        component={ListDesb}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewUnit"
        component={NewUnit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
