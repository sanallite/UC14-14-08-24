/* Aula 20 - Navegação entre telas, Tab Navigation - Tela de portfólio do app */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    fundo: {
        backgroundColor: 'yellow',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textos: {
        color: 'black'
    }
})

export default function TelaPortfolio() {
    return (
        <View style={ estilo.fundo }>
            <View>
                <Text style={[ estilo.textos, { fontSize: '1.2rem' } ]} >Portfólio</Text>
                <Text style={[ estilo.textos, { fontSize: '1.5rem' } ]} >Tab Navigation</Text>
                <Text style={[ estilo.textos, { fontSize: '1rem' } ]} >DSV Mobile</Text>
            </View>
        </View>
    )
}