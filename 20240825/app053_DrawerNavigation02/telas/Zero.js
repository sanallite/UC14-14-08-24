/* Aula 21 - Drawer Navigation, Desafio - Contâiner das telas que usam a navegação por guias */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Importando o componente que gerencia a navegação por guias */

import Um from './Um';
import Dois from './Dois';
import Tres from './Tres';
/* As telas que serão as opções das guias */

export default function Zero() {
    const Tab = createBottomTabNavigator();
    /* Atribuindo a uma constante a biblioteca que retorna um objeto, para podermos usar seus métodos */

    return (
        <Tab.Navigator initialRouteName='Tela Um'>
            <Tab.Screen name='Tela Um' component={ Um }/>
            <Tab.Screen name='Tela Dois' component={ Dois }/>
            <Tab.Screen name='Tela Três' component={ Tres }/>
        </Tab.Navigator>
        /* Não deve-se ter outro contâiner de navegação, apenas o da raiz do App é necessário */
    )
}