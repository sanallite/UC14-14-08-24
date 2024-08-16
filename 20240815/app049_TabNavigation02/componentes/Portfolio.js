/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1, Tela de portfólio */

import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';

export default function Portfolio() {
    const projetos = [
        { nome: 'Site Hololive English - Projeto Próprio Front-End (Incompleto) - Abril de 2023', imagem: require('../img/holoen.png') },
        { nome: 'Zerói - Projeto Integrador Front-End - Julho de 2023', imagem: require('../img/zeroi.png') },
        { nome: 'MKDG Player - Projeto em Grupo (Sabotado) - Fevereiro de 2024', imagem: require('../img/mkdg.png') },
        { nome: 'Quitandão Senac - Projeto Integrador Back-End - Abril de 2024', imagem: require('../img/quitanda.png') },
        { nome: 'App Fitness - Aulas de Flutterflow - Maio de 2024', imagem1: require('../img/fit1.png'), imagem2: require('../img/fit2.png') },
        { nome: 'Jogo das Idols - Aulas de React Native - Junho de 2024', imagem1: require('../img/jogo1.png'), imagem2: require('../img/jogo2.png') }
    ]

    const renderizar = ({item}) => (
        <View style={{ marginBottom: 20 }}>
            <Text>{item.nome}</Text>

            <View>
                <View>
                    <View style={{ flexDirection: 'row' }} >
                        { item.imagem && <Image source={ item.imagem } style={{ width: 300, height: 200 }} resizeMode='contain'></Image> }
                        { item.imagem1 && <Image source={ item.imagem1 } style={{ width: 150, height: 300 }} resizeMode='contain'></Image> }
                        { item.imagem2 && <Image source={ item.imagem2 } style={{ width: 150, height: 300 }} resizeMode='contain'></Image> }
                        {/* Renderização condicional, explicar depois! */}
                    </View>
                </View>
            </View>
        </View>
    )
        
    return (
        <View style={{ flex: 1 }}>
            <View>
                <View>
                    <Text>Cursos</Text>
                </View>

                <Text>Assistente Administrativo - Senac - 2022</Text>
                <Text>Fundamentos da Logística Empresarial - Prefeitura de Pinhais/Senac - 2022</Text>
                <Text>Excel: Operações Essenciais - Senac - 2022</Text>
                <Text>HTML e CSS - Senac - 2022</Text>
                <Text>Técnico em Informática para Internet - Senac - 2023/24</Text>
            </View>

            <View style={{ flex: 1 }}>
                <View>
                    <Text>Projetos</Text>
                </View>

                <FlatList data={ projetos } keyExtractor={ (item, index) => [ item.nome, item[index]] } renderItem={ renderizar } contentContainerStyle={{ paddingBottom: 20 }} />
            </View>
        </View>
    )
}