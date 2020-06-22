import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ContextUser } from '../../store/ContextUser';

const Stack = createStackNavigator();

// Pages
import Home from './Home';
import Units from './Units';
import MyArea from './MyArea';
import NewDesb from './NewDesb';
import DayClub from './DayClub';
import NoVerify from './NoVerify';
import Loading from './Loading';
import Pontualidade from './DayClub/Pontualidade';

export default function Main() {
  const [user, setUser] = useState(undefined);

  return (
    <ContextUser.Provider value={{ user: user, setUser: setUser }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NoVerify"
          component={NoVerify}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Pontualidade"
          component={Pontualidade}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NewDesb"
          component={NewDesb}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DayClub"
          component={DayClub}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Units"
          component={Units}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MyArea"
          component={MyArea}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ContextUser.Provider>
  );
}
