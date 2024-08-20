/* Aula 20 - Navegação entre telas, Tab Navigation - Parte 2 */

import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
/* Importando uma biblioteca com ícones para personalizar as nossas guias. não é necessário instalar essa biblioteca. Todos os icones podem ser consultados em: https://oblador.github.io/react-native-vector-icons/ No caso estamos usando só os icones do FontAwesome. */

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Importando as bibliotecas de navegação de telas. */

import TelaHome from './components/TelaHome';
import TelaPortfolio from './components/TelaPortfolio';
import TelaContato from './components/TelaContato';
/* Importando os componentes externos para exibí-los na tela. */

export default function App() {
  const Tab = createBottomTabNavigator();
  /* Assim como na navegação por pilhas, instânciamos a biblioteca de navegação por abas, depois definimos um Navigator e suas Screens */

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar />

      <Tab.Navigator initialRouteName = 'Home' 
        screenOptions={{ tabBarActiveTintColor: 'green', tabBarInactiveTintColor: 'red', tabBarShowLabel: true, tabBarLabelPosition: 'bellow-icon' }}>
        <Tab.Screen name='Home' component={ TelaHome } 
          options={{ headerShown: false, tabBarIcon: () => ( <Icon name='home' size={ 20 }/> ) }} />
        {/* Definindo nas opções que o header da telaHome não será exibido e definindo um icone para a barra de navegação, icone que foi importado e é chamado como um componente retornado por uma função anônima. */}

        <Tab.Screen name='Contato' component={ TelaContato } options={{ tabBarIcon: () => ( <Icon name='user' size={ 20 }/> ) }}/>

        <Tab.Screen name='Portfolio' component={ TelaPortfolio } options={{ tabBarIcon: () => <Icon name='suitcase' size={ 20 }/> }}/>
      </Tab.Navigator>
      {/* Se não for definida uma rota inicial, a primeira tela a ser exibida vai ser a primeira da lista, com a ordem dos botões na parte inferior da tela também seguindo essa ordem */}
    </NavigationContainer>
  )
}