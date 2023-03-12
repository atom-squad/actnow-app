import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ActionsMain from './ActionsMain';
import ActionsType from './ActionsType';
import ActionsCongrats from './ActionsCongrats';

const Stack = createStackNavigator();

function ActionsScreen() {

  return (

    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ActionsMain" component={ActionsMain} />
        <Stack.Screen name="ActionsType" component={ActionsType}  />
        <Stack.Screen name="ActionsCongrats" component={ActionsCongrats} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default ActionsScreen;