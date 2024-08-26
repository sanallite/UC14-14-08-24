/* Aula 22 - Passagem de parâmetros entre telas, Folha de estilos */

import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    fundo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    caixaTexto: {
        borderColor: 'lightgray',
        borderWidth: 2,
        padding: '0.625rem',
        borderRadius: 5,
        margin: '0.625rem'
    },

    margem: {
        margin: '0.625rem'
    },

    nome_sobrenome: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})