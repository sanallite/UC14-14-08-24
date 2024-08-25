/* Aula 21 - Drawer Navigation, Tela Inicial */

import React from 'react';
import { View, Text } from 'react-native';
import { style } from '../estilo';

export default function Home() {
    return (
        <View style={[ style.fundo, { backgroundColor: 'darkblue' } ]}>
            <Text style={{ color: 'white' }}>Olá mundo</Text>
        </View>
    )
}