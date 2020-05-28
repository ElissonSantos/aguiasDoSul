import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import NewDesb from './pages/NewDesb';
import Units from './pages/Units';
import DayClub from './pages/DayClub';
import MyArea from './pages/MyArea';

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#ec3237' },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="newdesb"
        component={NewDesb}
        options={{
          headerTitle: 'Novo Desbravador',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="units"
        component={Units}
        options={{ headerTitle: 'Unidades', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name="dayclub"
        component={DayClub}
        options={{ headerTitle: 'Dia de Clube', headerTitleAlign: 'center' }}
      />

      <Stack.Screen
        name="myarea"
        component={MyArea}
        options={{ headerTitle: 'Minha Area', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}
