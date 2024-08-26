/* Aula 22 - Passagem de parâmetros entre telas */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './telas/Home';
import Details from './telas/Details';
import Login from './telas/Login';

export default function App() {
  const Pilha = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Acesso'>
        <Pilha.Screen name='Principal' component={ Home } options={{ headerTitleAlign: 'center' }}/>

        <Pilha.Screen name='Detalhes' component={ Details } options={{ headerShown: false }}/>

        <Pilha.Screen name='Acesso' component={ Login } options={{ headerShown: false }}/>
      </Pilha.Navigator>
    </NavigationContainer>
  )
}