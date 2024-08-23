/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela inicial */

import React from 'react';
import { View, Text } from 'react-native';
import { estilo } from './estilo';

export default function Inicial() {
    return (
        <View style={ estilo.inicial }>
            <Text style={ estilo.textosInicial }>Bem vindos!</Text>

            <Text style={ estilo.textosInicial }>Selecione uma das telas abaixo para continuar.</Text>
        </View>
    )
}