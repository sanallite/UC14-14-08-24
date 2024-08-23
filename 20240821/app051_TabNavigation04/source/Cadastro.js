/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela de cadastro  */

import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Switch } from 'react-native';
import { estilo } from './estilo';

export default function Cadastro() {
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ notificacoes, setNotificacoes ] = useState(false);
    const [ fotoEscolhida, setFoto ] = useState(0);

    let foto1 = require('./loid.png');
    let foto2 = require('./yor.png');
    let foto3 = require('./anya.png');

    const [ cadastrado, setCadastrado ] = useState(false);

    const salvarCadastro = () => {
        if ( nome.trim() && email.trim() ) {
            setCadastrado(true)
        }
    }

    const limparCadastro = () => {
        setCadastrado(false);
        setNome('');
        setEmail('');
    }

    function ligarNotificacoes() {
        if ( notificacoes === true ) {
            setNotificacoes(false)
        }

        else {
            setNotificacoes(true);
        }
    }

    function alterarFoto(nova) {
        if ( nova === 1 ) {
            setFoto( foto1 )
        }

        else if ( nova === 2 ) {
            setFoto( foto2 )
        }

        else if ( nova === 3 ) {
            setFoto( require('./anya.png') )
            /* setFoto( foto3 ); ) */
        }
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.cabecalhos }>
                <Text style={ estilo.textos }>Faça seu cadastro conosco!</Text>
            </View>

            <View style={ estilo.espacamento }>
                <View style={ estilo.viewEscolhaFotos }>
                    <Pressable onPress={ () => alterarFoto(1) }>
                        <Image source={ foto1 } style={ estilo.fotosPerfil }></Image>
                    </Pressable>

                    <Pressable onPress={ () => alterarFoto(2) }>
                        <Image source={ foto2 } style={ estilo.fotosPerfil }></Image>
                    </Pressable>

                    <Pressable onPress={ () => alterarFoto(3) }>
                        <Image source={ foto3 } style={ estilo.fotosPerfil }></Image>
                    </Pressable>
                </View>

                <Text style={ estilo.textoFotosPerfil }>Escolha uma foto de perfil</Text>

                <TextInput style={ estilo.caixasTexto } placeholder='Nome' value={ nome } onChangeText={ (novo) => setNome(novo) } />
                
                <TextInput style={ estilo.caixasTexto } placeholder='E-mail' value={ email } onChangeText={ (novo) => setEmail(novo) } keyboardType='email-address' />

                <View style={{ flexDirection: 'row' }}>
                    <Switch value={ notificacoes } onValueChange={ ligarNotificacoes } />
                    <Text style={{ marginLeft: 20 }}>Deseja receber notificações no seu e-mail?</Text>
                </View>
            </View>

            <View>
                <Pressable onPress={ salvarCadastro }>
                    <Text>Cadastrar</Text>
                </Pressable>

                <Pressable onPress={ limparCadastro }>
                    <Text>Limpar Dados</Text>
                </Pressable>
            </View>

            { cadastrado && 
                <View>
                    <Text>Resumo</Text>
                    { fotoEscolhida != 0 && <Image source={ fotoEscolhida } style={{ width: 50, height: 50 }}></Image> }

                    <Text>Nome: {nome}</Text>
                    <Text>Email: {email}</Text>

                    { notificacoes && <Text>Notificações ativadas</Text> }
                    { notificacoes === false && <Text>Notificações desativadas</Text> }

                    { fotoEscolhida === 0 && <Text>Nenhuma foto escolhida</Text> }
                </View>
            }
        </View>
    )
}