/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1, Tela de contato */

import React from 'react';
import { View, Text, Image } from 'react-native';
import { estilo } from '../estilos';

export default function Contato() {
    let i_email = require('../img/envelope-paper-heart-fill.svg');
    let i_github = require('../img/github.svg');
    let i_linkedin = require('../img/linkedin.svg');

    return (
        <View style={[ estilo.fundos, { backgroundColor: '#cef1ce' } ]}>
            <View style={ estilo.conteudos }>
                <View style={ estilo.links }>
                    <Image source={ i_email } style={ estilo.icones }/>
                    <Text style={ estilo.textoLinks }>marciorteodoro@proton.me</Text>
                </View>

                <View style={ estilo.links }>
                    <Image source={ i_github } style={ estilo.icones }/>
                    <Text style={ estilo.textoLinks }>github.com/sanallite</Text>
                </View>

                <View style={ estilo.links }>
                    <Image source={ i_linkedin } style={ estilo.icones }/>
                    <Text style={ estilo.textoLinks }>Márcio Rodriguês Teodoro</Text>
                </View>
            </View>

            <View style={ estilo.rodapes }>
                <Text style={ estilo.textoRodapes }>Márcio Teodoro</Text>
                <Text style={ estilo.textoRodapes }>Agosto de 2024</Text>
            </View>
        </View>
    )
}