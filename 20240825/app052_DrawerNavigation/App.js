/* Aula 21 - Navegação entre telas, Drawer Navigation */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './telas/Home';
import Contato from './telas/Contato';
import Sobre from './telas/Sobre';

export default function App() {
  const Gaveta = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Gaveta.Navigator initialRouteName='Home'>
        <Gaveta.Screen name='Home' component={ Home }/>

        <Gaveta.Screen name='Contato' component={ Contato }/>

        <Gaveta.Screen name='Sobre' component={ Sobre }/>
      </Gaveta.Navigator>
      {/* A mesma forma de configurar a navegação por telas, assim como o Stack o Tab */}

    </NavigationContainer>
  )
}