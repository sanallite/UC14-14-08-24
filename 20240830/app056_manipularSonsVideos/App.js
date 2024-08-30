/* Aula 24 - Manipulando sons, vídeos, câmera e arquivos... */

/* O som precisa de uma biblioteca dentro do react native. Erro: Unable to resolve "../Utilities/Platform" from "node_modules\react-native\Libraries\Image\AssetSourceResolver.js" */
/* O vídeo tem erro de função: Uncaught TypeError: (0 , react_native_1.requireNativeComponent) is not a function */
/* A câmera tem o mesmo erro do vídeo */
/* O acesso a arquivos tem esse erro: Uncaught TypeError: Cannot read properties of undefined (reading 'getEnforcing')
 */

import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';

const App = () => {
  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res);
      
      // Ler o conteúdo do arquivo (exemplo para arquivo de texto)
      const fileContent = await RNFS.readFile(res.uri);
      console.log(fileContent);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        console.error(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Document" onPress={pickDocument} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;



