/* Aula 23 - Conectividade com os sensores do aparelho */

/* React native sensors e o expo sensors não funcionaram... */
/* O NFC talvez funcione... */
/* O bluetooth também dá erro... */
/* O wifi também não... */
/* Os erros principais são "cannot read properties of undefined." */
/* O netInfo funciona! */

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Função para lidar com as mudanças de conexão
    const handleConnectivityChange = (state) => {
      setIsConnected(state.isConnected);
    };

    // Inscreva-se nas mudanças de conexão
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    // Verifique a conectividade inicial
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });

    // Limpeza quando o componente é desmontado
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isConnected ? 'Conectado à Internet' : 'Sem Conexão com a Internet'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default App;


