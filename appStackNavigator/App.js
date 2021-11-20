import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './scr/pages/Home';
import Dados from './scr/pages/Dados';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Conta Bancária" component={Home} />
        <Stack.Screen name="Dados" component={Dados} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}