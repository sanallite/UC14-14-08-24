/* Aula 20 - Navegação entre telas, Tab Navigation - Tela inicial do app */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    fundo: {
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textos: {
        color: 'white'
    }
})

export default function TelaHome() {
    return (
        <View style={ estilo.fundo }>
            <View>
                <Text style={[ estilo.textos, { fontSize: '1.2rem' } ]} >Tela Inicial</Text>
                <Text style={[ estilo.textos, { fontSize: '1.5rem' } ]} >Tab Navigation</Text>
                <Text style={[ estilo.textos, { fontSize: '1rem' } ]} >DSV Mobile</Text>
            </View>
            {/* Se os textos não tivessem dentro dessa segunda View, eles teriam sido alinhados ao centro, pelo alignItems do componente de fundo */}
        </View>
    )
}