/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1, Tela Inicial */

import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
    return (
        <View>
            <View>                
                <Text>Bem vindos ao app Sanallite</Text>
            </View>

            <View>
                <Text>Aqui você poderá ver os projetos de desenvolvimento web e mobile que eu fiz até agora, além de poder encontrar formas de entrar em contato comigo para futuros projetos profissionais!</Text>
            </View>

            <View>
                <Text>Márcio Teodoro</Text>
                <Text>Agosto de 2024</Text>
            </View>
        </View>
    )
}