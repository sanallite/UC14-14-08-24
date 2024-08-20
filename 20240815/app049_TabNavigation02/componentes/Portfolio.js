/* Aula 20 - Navegação entre telas, Tab Navigation - Desafio 1, Tela de portfólio */

import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { estilo } from '../estilos';

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
        <View>
            <Text style={ estilo.nomeProjetos }>{item.nome}</Text>

            <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }} >
                    { item.imagem && <Image source={ item.imagem } style={{ width: 360, height: 230 }} resizeMode='contain'></Image> }
                    { item.imagem1 && <Image source={ item.imagem1 } style={{ width: 175, height: 325 }} resizeMode='contain'></Image> }
                    { item.imagem2 && <Image source={ item.imagem2 } style={{ width: 175, height: 325 }} resizeMode='contain'></Image> }
                    {/* Formato de renderização condicional, que usa a condicional E (&&) para se caso uma das propriedades do objeto estiver definida, ou uma variável for verdadeira, será renderizado aqule componente, essa ferramenta é muito útil nesse caso, já que temos imagens com proporções diferentes, e alguns projetos tem mais de uma imagem. */}
                </View>
            </View>
        </View>
    )
        
    return (
        <View style={[ estilo.fundos, { backgroundColor: 'antiquewhite' } ]}>
            <ScrollView style={ estilo.conteudos }>
                <View style={ estilo.cabecalhos }>
                    <Text style={ estilo.titulos }>Cursos</Text>
                </View>

                <View>
                    <Text style={ estilo.cursos }>Assistente Administrativo - Senac - 2022</Text>
                    <Text style={ estilo.cursos }>Fundamentos da Logística Empresarial - Prefeitura de Pinhais/Senac - 2022</Text>
                    <Text style={ estilo.cursos }>Excel: Operações Essenciais - Senac - 2022</Text>
                    <Text style={ estilo.cursos }>HTML e CSS - Senac - 2022</Text>
                    <Text style={ estilo.cursos }>Técnico em Informática para Internet - Senac - 2023/24</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={ estilo.cabecalhos }>
                        <Text style={ estilo.titulos }>Projetos</Text>
                    </View>

                    <FlatList data={ projetos } keyExtractor={ (item, index) => [ item.nome, item[index]] } renderItem={ renderizar } contentContainerStyle={{ paddingBottom: 20 }} />
                    {/* O contentContainerStyle define o estilo do componente contâiner que envolve os componentes com todos os itens da lista */}
                </View>
            </ScrollView>

            <View style={ estilo.rodapes }>
                <Text style={ estilo.textoRodapes }>Márcio Teodoro</Text>
                <Text style={ estilo.textoRodapes }>Agosto de 2024</Text>
            </View>
        </View>
    )
}