/* Aula 22 - Passagem de parâmetros entre telas, Tela de detalhes */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
/* Hooks de navegação e de roteamento, para utilizar a passagem de parâmetros */

import { style } from '../style';

export default function Details() {
    const nav = useNavigation();
    const rota = useRoute();
    /* Constante que acessa a rota de navegação das telas */

    const parametros = rota.params;
    /* Capturando os parâmetros que foram passados para a tela */

    let nomeRecebido = parametros.nome;
    let sobrenome = parametros.sobrenome;
    let data = parametros.data;
    /* Variáveis que vão conter o valor das propriedades do objeto recebido por parâmetro */

    const [ nomeDigitado, setNome ] = useState('');

    const mudarTelas = () => {
        /* nav.goBack(); */
        /* Se a tela de Detalhes for a rota inicial, não vai ter pra onde voltar, então não vai acontecer nada. */

        nav.navigate('Principal', { nome: nomeDigitado });
        /* Navegação utilizando a passagem de parâmetros, com a escolha da tela que vai ser navegada e envia um objeto que contém um atributo e um valor que serão recebidos naquela tela. */
    }

    const capturarNome = (novo) => {
        setNome(novo);
    }

    return (
        <View style={ style.fundo }>
            <Text>Essa é a tela de detalhes</Text>

            <Text>Digite seu nome:</Text>
            <TextInput style={ style.caixaTexto } value={ nomeDigitado } onChangeText={ capturarNome } onBlur={ () => alert(nomeDigitado) }/>
            {/* No método onBlur será exibido um alerta com o nome que será enviado por parâmetro */}

            <Button title='Voltar' color='blue' onPress={ mudarTelas }/>

            <View>
                <View style={ style.nome_sobrenome }>
                    <Text>{ nomeRecebido }</Text>
                    <Text>{ sobrenome }</Text>
                </View>

                <Text>{ data }</Text>
            </View>
            {/* Quando o botão na tela home que navega para essa tela for pressionado, também serão enviados três valores que são atributos de um objetos, esses valores foram armazenados em variáveis e serão exibidos nessa view, que não tem verificação caso tenha sido recebido algum valor, mas isso não é necessário para esse caso */}
        </View>
    )
}