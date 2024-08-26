/* Aula 22 - Passagem de parâmetros entre telas - Desafio 1, Tela Login */

import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TextInput, Button } from 'react-native';

export const usuarios = [
    { nome: 'Márcio', email: 'marcio@proton', telefone: '4198437', data_nascimento: '11/05/1999', login: 'Sanallite', senha: 'chattino' },
    { nome: 'Estelle', email: 'estelle@bright', telefone: '', data_nascimento: '08/10/1187', login: 'Estelle', senha: 'strega' },
]

export default function Login() {
    return (
        <View>
            <View>
                <Text>Bem Vindo</Text>
            </View>

            <View>
                <View>
                    <Text>Login</Text>
                    <TextInput />
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput />
                </View>

                <View>
                    <Button title='Acessar' color='red' />
                </View>

                <View>
                    <Text>Criar Conta</Text>
                </View>
            </View>

            <View>
                <Text>Márcio Teodoro</Text>
                <Text>Agosto de 2024</Text>
            </View>
        </View>
    )
}