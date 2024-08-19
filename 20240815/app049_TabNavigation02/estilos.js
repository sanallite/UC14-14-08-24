/* Aula 20 - Navegação entre telas - Tab Navigation, Desafio 1 - Folha de estilos */

import { StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
    fundos: {
        flex: 1
    },

    cabecalhos: {
        padding: '1rem',
        alignItems: 'center'
    },

    titulos: {
        fontSize: '1.3rem'
    },
    
    conteudos: {
        padding: '1rem',
        flex: 1
    },

    rodapes: {
        padding: '1rem',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderTopColor: '#e4e4e4',
        borderTopWidth: 2
    },

    textoRodapes: {
        fontSize: '1rem'
    },

    descricao: {
        fontSize: '1rem',
        textAlign: 'justify'
    },

    cursos: {
        backgroundColor: 'white',
        marginBottom: '0.625rem',
        padding: '0.625rem',
        borderRadius: 10,
        borderBottomColor: 'orange',
        borderBottomWidth: 1
    },

    nomeProjetos: {
        fontSize: '1rem',
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: '0.625rem'
    },

    links: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '0.625rem'
    },

    icones: {
        width: 50,
        height: 50,
        marginRight: '1rem'
    },
    
    textoLinks: {
        fontSize: '1rem'
    }
})