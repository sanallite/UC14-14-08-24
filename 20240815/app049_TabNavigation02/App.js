/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './componentes/Home';
import Portfolio from './componentes/Portfolio';

export default function App() {
  const Guias = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar />

      <Guias.Navigator>
        <Guias.Screen name='Home' component={ Home } options={{ title: 'Início' }} />
        <Guias.Screen name='Portfolio' component={ Portfolio } options={{ title: 'Meu Portfólio' }}/>
      </Guias.Navigator>
    </NavigationContainer>
  )
}