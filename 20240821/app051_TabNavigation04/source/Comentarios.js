/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela de comentários */

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Comentarios() {
    const [ nome, setNome ] = useState('');
    const [ comentario, setComentario ] = useState('');

    return (
        <View>
            <View>
                <Text>Deixe seus comentários aqui!</Text>
            </View>

            <View>
                <TextInput placeholder='Escreva seu nome' value={ nome } onChangeText={ (nome_digitado) => setNome(nome_digitado) }/>
                <TextInput placeholder='Escreva seu comentário' value={ comentario } onChangeText={ (comentario_digitado) => setComentario(comentario_digitado) } />
            </View>

            <View>
                <View>
                    { nome != '' && <Text>Nome: {nome}</Text> }
                </View>

                <View>
                    { comentario != '' && <Text>Comentário: {comentario}</Text> }
                </View>
            </View>
        </View>
    )
}