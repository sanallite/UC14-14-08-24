/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1, Tela de portfólio */

import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

export default function Portfolio() {
    const projetos = [
        { nome: 'Site Hololive English - Projeto Próprio Front-End (Incompleto) - Abril de 2023', imagem: '' },
        { nome: 'Zerói - Projeto Integrador Front-End - Julho de 2023', imagem: '' },
        { nome: 'Gerenciador de Tarefas - Aulas de PHP (Incompleto) - Janeiro de 2024', imagem: '' },
        { nome: 'MKDG Player - Projeto em Grupo (Sabotado) - Fevereiro de 2024', imagem: '' },
        { nome: 'Quitandão Senac - Projeto Integrador Back-End - Abril de 2024', imagem: '' },
        { nome: 'App Fitness - Aulas de Flutterflow - Maio de 2024', imagem: '' },
        { nome: 'Jogo das Idols - Aulas de React Native - Junho de 2024', imagem: '' }
    ]

    const renderizar = ({item}) => (
        <View>
            <Text>{item.nome}</Text>
        </View>
    )
        
    return (
        <View>
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

            <View>
                <View>
                    <Text>Projetos</Text>
                </View>

                <FlatList data={ projetos } /* keyExtractor={ (item, index) => [ item.nome, item[index]] } */ renderItem={ renderizar } />
            </View>
        </View>
    )
}