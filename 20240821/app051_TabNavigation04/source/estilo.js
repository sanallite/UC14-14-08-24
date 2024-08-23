/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Folha de estilos */

import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    fundo: {
        flex: 1
    },

    cabecalhoGuias: {
        backgroundColor: '#22114c',
    },

    inicial: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#22114c'
    },

    textosInicial: {
        color: 'white',
        fontSize: '1.1rem'
    },

    cabecalhos: {
        padding: '1rem',
        alignItems: 'center'
    },

    textos: {
        fontSize: '1.1rem'
    },

    espacamento: {
        padding: '1rem',
    },

    viewSlider: {
        flexDirection: 'row',
        marginTop: '0.625rem'
    },

    aumentarZoom: {
        marginLeft: '0.625rem'
    },

    diminuirZoom: {
        marginRight: '0.625rem'
    },

    caixasTexto: {
        marginBottom: '0.625rem',
        borderColor: 'lightgray',
        borderRadius: 5,
        borderWidth: 2,
        color: 'gray',
        padding: '0.625rem'
    },

    viewPublicar: {
        alignItems: 'center',
        marginBottom: '1.25rem'
    },

    publicar_cadastrar: {
        backgroundColor: '#22114c',
        padding: '0.625rem'
    },

    comentarios: {
        marginBottom: '1rem',
        marginHorizontal: '1rem',
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 5,
        padding: '0.625rem'
    },

    viewEscolhaFotos: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    fotosPerfil: {
        width: 100,
        height: 100,
        borderRadius: 5
    },

    textoFotosPerfil: {
        textAlign: 'center',
        marginVertical: '0.625rem',
        fontSize: '1.1rem'
    }
})

export { estilo }