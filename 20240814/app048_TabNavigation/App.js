/* Aula 20 - Navegação entre telas, Tab Navigation */

import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Importando as bibliotecas de navegação de telas. */

import TelaHome from './components/TelaHome';
import TelaPortfolio from './components/TelaPortfolio';
import TelaContato from './components/TelaContato';
/* Importando os componentes externos para exibí-los na tela. */

const Tela_Home = "Podemos armazenar os componentes numa variável e exibi-los na tela, ou criar uma função, tornando a TelaHome em um componente, quando se armazena numa variável, não é preciso colocar o return.";

/* Essas const e function não estão sendo utilizadas no código. */
function Home() {
  return (
    <View>
      <View>
        <Text>Tela Inicial</Text>
        <Text>Tab Navigation</Text>
        <Text>DSV Mobile</Text>
      </View>
    </View>
  )
}

export default function App() {
  const Tab = createBottomTabNavigator();
  /* Assim como na navegação por pilhas, instânciamos a biblioteca de navegação por abas, depois definimos um Navigator e suas Screens */

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar />
      {/* Componente que faz o app reconhecer a área reservada da barra de status do app, para que o conteúdo não fique sobreposto a ela. */}

      { /* { Tela_Home } Exibe o conteúdo da variável, que seriam os componentes, mas agora é um texto, porém não devemos deixar uma string solta assim no código */}
      {/* <Home /> Exibe o componente criado, que como está no mesmo arquivo, não precisou ser exportado e importado. Porém as boas práticas são deixar o máximo de componentes externamente, para melhor leitura de cada código */}

      {/* <TelaHome />
      <TelaPortfolio />
      <TelaContato /> Componente para serem exibidos dentro de uma View */}

      <Tab.Navigator initialRouteName = 'Home'>
        <Tab.Screen name='Home' component={ TelaHome }/>
        <Tab.Screen name='Contato' component={ TelaContato }/>
        <Tab.Screen name='Portfolio' component={ TelaPortfolio }/>
      </Tab.Navigator>
      {/* Se não for definida uma rota inicial, a primeira tela a ser exibida vai ser a primeira da lista, com a ordem dos botões na parte inferior da tela também seguindo essa ordem */}
    </NavigationContainer>
  )
}