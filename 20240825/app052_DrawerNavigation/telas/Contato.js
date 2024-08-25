/* Aula 21 - Drawer Navigation, Tela de contatos */

import React from 'react';
import { View, Text } from 'react-native';
import { style } from '../estilo';

export default function Contato() {
    return (
        <View style={[ style.fundo, { backgroundColor: 'turquoise' } ]}>
            <Text>Contato</Text>
        </View>
    )
}