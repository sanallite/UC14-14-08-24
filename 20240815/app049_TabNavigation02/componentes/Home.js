/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1, Tela Inicial */

import React from 'react';
import { View, Text } from 'react-native';
import { estilo } from '../estilos';

export default function Home() {
    return (
        <View style={ estilo.fundos }>
            <View style={ estilo.cabecalhos }>                
                <Text style={ estilo.titulos }>Bem vindos ao app Sanallite</Text>
            </View>

            <View style={ estilo.conteudos }>
                <Text style={ estilo.descricao }>Aqui você poderá ver os projetos de desenvolvimento web e mobile que eu fiz até agora, além de poder encontrar formas de entrar em contato comigo para futuros projetos profissionais!</Text>
            </View>

            <View style={ estilo.rodapes }>
                <Text style={ estilo.textoRodapes }>Márcio Teodoro</Text>
                <Text style={ estilo.textoRodapes }>Agosto de 2024</Text>
            </View>
        </View>
    )
}