/* Aula 21 - Drawer Navigation, Tela sobre nós */

import React from 'react';
import { View, Text } from 'react-native';
import { style } from '../estilo';

export default function Sobre() {
    return (
        <View style={[ style.fundo, { backgroundColor: 'lightgray' } ]}>
            <Text>Sobre Nós</Text>
        </View>
    )
}