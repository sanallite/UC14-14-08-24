/* Aula 22 - Passagem de parâmetros entre telas - Desafio 1, Tela Login */

import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TextInput, Button } from 'react-native';

export const usuarios = [
    { nome: 'Márcio', email: 'marcio@proton', telefone: '4198437', data_nascimento: '11/05/1999', login: 'Sanallite', senha: 'chattino' },
    { nome: 'Estelle', email: 'estelle@bright', telefone: '', data_nascimento: '08/10/1187', login: 'Estelle', senha: 'strega' },
    { nome: 'Lula', email: 'lula@pt.com.br', telefone: '13131313', data_nascimento: '31/12/1969', login: 'Lulinha', senha: 'fazueli' }
]

export default function Login() {
    const nav = useNavigation();

    const [ email_digitado, setEmail ] = useState('');
    const [ senha_digitada, setSenha ] = useState('');

    const alterarEmail = ( novo ) => {
        setEmail(novo)
    }

    const alterarSenha = ( nova ) => {
        setSenha(nova)
    }

    const irCadastro = () => {
        nav.navigate('Cadastro');
    }

    const acessar = () => {
        console.log(email_digitado, senha_digitada);

        if ( email_digitado.trim() && senha_digitada.trim() ) {
        /* Verficação se os campos estão vazios */

            let usuario_encontrado = false;
            /* Variável usada para indicar se os dados do login foram encontrados e estão corretos, que se caso forem, será feita a navegação para a tela inicial */

            for ( i = 0; i < usuarios.length; i++ ) {
                if ( usuarios[i].email === email_digitado && usuarios[i].senha === senha_digitada ) {
                    usuario_encontrado = true;
                    alert('Dados corretos!');

                    nav.navigate('Principal', { nome: usuarios[i].login });
                    /* Será feita a navegação para a tela, enviando por parâmetro o valor da propriedade login, que será exibida como o nome do usuário na tela Home */

                    setEmail('');
                    setSenha('');
                    /* Limpando as caixas de texto */

                    break;
                }
            }

            if ( !usuario_encontrado ) {
                alert('Dados incorretos, caso não tenha cadastrado-se, aperte em Criar Conta.');
            }
            /* Se o email e a senha digitados não corresponderem aos dos usuários no array, será exibido um alerta, que depende da verificação da variável, para não executar para os outros itens do array dentro do loop. */
        }

        else {
            alert('Preencha todos os campos!');
        }
    }

    return (
        <View>
            <View>
                <Text>Bem Vindo</Text>
            </View>

            <View>
                <View>
                    <Text>Login</Text>
                    <TextInput value={ email_digitado } onChangeText={ alterarEmail }/>
                </View>

                <View>
                    <Text>Senha</Text>
                    <TextInput value={ senha_digitada } onChangeText={ alterarSenha }/>
                </View>

                <View>
                    <Button title='Acessar' color='red' onPress={ acessar }/>
                </View>

                <View>
                    <Button title='Criar Conta' color='pink' onPress={ irCadastro } />
                </View>
            </View>

            <View>
                <Text>Márcio Teodoro</Text>
                <Text>Agosto de 2024</Text>
            </View>
        </View>
    )
}