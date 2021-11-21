import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Filmes from './src/pages/filmes';
import Desc from './src/pages/desc';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Filmes"  component={Filmes} />
        <Stack.Screen name="Desc"  options={{headerShown: false}} component={Desc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}