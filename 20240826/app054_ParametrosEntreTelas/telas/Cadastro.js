/* Aula 22 - Passagem de parâmetros entre telas, Desafio 1 - Tela de cadastro */

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { usuarios } from "./Login";

export default function Cadastro() {
    return (
        <View>
            <Text>Bem Vindo, cadastre-se aqui!</Text>
        </View>
    )
}

console.log(usuarios);