/* Aula 21 - Drawer Navigation, Desafio */
/* Prévia da navegação aninhada, sem estilização e componentes para prosseguir com o resto do conteúdo */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
/* Contâiner de navegação, que é apenas necessário na raiz do App */

import { createDrawerNavigator } from '@react-navigation/drawer';
/* Importando os componentes de navegação, nesse desafio vamos usar a navegação por guias e gavetas, com a por guias estando na tela Zero */

import Zero from './telas/Zero';
import Quatro from './telas/Quatro';
import Cinco from './telas/Cinco';
import Seis from './telas/Seis';
/* As telas que serão as opções na gaveta */

export default function App() {
  const Drawer = createDrawerNavigator();
  /* Atribuindo a biblioteca a uma constante, para usarmos os métodos de navegação */

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Tela Quatro'>
        <Drawer.Screen name='Telas Um a Três' component={ Zero }/>

        <Drawer.Screen name='Tela Quatro' component={ Quatro }/>

        <Drawer.Screen name='Tela Cinco' component={ Cinco }/>

        <Drawer.Screen name='Tela Seis' component={ Seis }/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}