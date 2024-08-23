/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1 */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Não esqueça das chaves na hora de importar bibliotecas, componentes não precisam de chaves, fique atento! */

import Icon from 'react-native-vector-icons/Ionicons';
/* Importando a biblioteca de icones que vai ser usada. */

import Inicial from './source/Inicial';
import Comentarios from './source/Comentarios';
import Cadastro from './source/Cadastro';
import Galeria from './source/Galeria';
import { estilo } from './source/estilo';

function App() {
  const Guia = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <StatusBar />

      <Guia.Navigator screenOptions={{ tabBarStyle: { height: '60px' }, tabBarActiveTintColor: 'blue', tabBarLabelStyle: { fontSize: '0.8rem' } }}>
        <Guia.Screen name='Home' component={ Inicial } options={{ title: 'Início', headerShown: false,
          tabBarIcon: () => (  
            <Icon name='home' size={ 30 } color='#22114c'/> 
          ) 
        }} />
        
        <Guia.Screen name='Galeria' component={ Galeria } options={{ headerStyle: { backgroundColor: '#22114c' }, headerTintColor: 'white',
          tabBarIcon: () => (
            <Icon name='images' size={ 30 } color='#22114c'/>
          )
        }} />

        <Guia.Screen name='Comentarios' component={ Comentarios } options={{ headerStyle: { backgroundColor: '#22114c'}, headerTintColor: 'white',
          tabBarIcon: () => (
            <Icon name='chatbox' size={ 30 } color='#22114c' />
          ) 
        }}/>

        <Guia.Screen name='Cadastro' component={ Cadastro } options={{ headerStyle: estilo.cabecalhoGuias , headerTintColor: 'white',
          tabBarIcon: () => (
            <Icon name='person-add' size={ 30 } color='#22114c' />
          )
        }}/>
      </Guia.Navigator>
    </NavigationContainer>
  )
}

export default App;