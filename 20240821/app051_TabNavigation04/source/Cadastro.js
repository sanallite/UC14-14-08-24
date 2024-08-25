/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela de cadastro  */

import React, { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, Switch } from 'react-native';
import { estilo } from './estilo';

export default function Cadastro() {
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    /* Caixas de texto */

    const [ notificacoes, setNotificacoes ] = useState(false);
    /* Alternador */

    const [ fotoEscolhida, setFoto ] = useState(0);

    let foto1 = require('./loid.png');
    let foto2 = require('./yor.png');
    let foto3 = require('./anya.png');

    const [ cadastrado, setCadastrado ] = useState(false);
    /* Variável de estado que controla a exibição do resumo */

    const salvarCadastro = () => {
        if ( nome.trim() && email.trim() ) {
            setCadastrado(true)
        }
        /* Se o nome e o email digitados não estiverem vazios, a variável de estado será definida como verdadeira, o que permite os componentes que exibem o resumo sejam renderizados. */

        else {
            alert('Preencha todos os campos!');
        }
    }

    const limparCadastro = () => {
        setCadastrado(false);
        setNome('');
        setEmail('');
    }
    /* Limpando as caixas de texto e o resumo do cadastro. */

    function ligarNotificacoes() {
        if ( notificacoes === true ) {
            setNotificacoes(false)
        }

        else {
            setNotificacoes(true);
        }
    }
    /* Função que muda o valor do alternador/switch */

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
    /* Função que muda a foto atribuida a variável de estado. */

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

            <View style={ estilo.cadastrar_limpar }>
                <Pressable onPress={ salvarCadastro } style={ estilo.publicar_cadastrar }>
                    <Text style={{ color: 'white' }}>Cadastrar</Text>
                </Pressable>

                <Pressable onPress={ limparCadastro } style={ estilo.limpar_dados }>
                    <Text style={{ color: '#22114c' }}>Limpar Dados</Text>
                </Pressable>
            </View>

            { cadastrado && 
                <View style={ estilo.viewResumo }>
                    <Text style={[ estilo.textos, estilo.espaco_abaixo ]}>Resumo</Text>
                    { fotoEscolhida != 0 && <Image source={ fotoEscolhida } style={[ estilo.fotosPerfil, estilo.espaco_abaixo ]}></Image> }
                    {/* Será exibida apenas se uma foto foi escolhida */}

                    <Text style={ estilo.espaco_abaixo }>Nome: {nome}</Text>
                    <Text style={ estilo.espaco_abaixo }>Email: {email}</Text>

                    { notificacoes && <Text style={ estilo.espaco_abaixo }>Notificações ativadas</Text> }
                    { notificacoes === false && <Text style={ estilo.espaco_abaixo }>Notificações desativadas</Text> }
                    {/* Verificador se o alternador foi ativado ou não */}

                    { fotoEscolhida === 0 && <Text style={ estilo.espaco_abaixo }>Nenhuma foto escolhida</Text> }
                    {/* Só será exibido se nenhuma foto foi escolhida. */}
                </View>
            }
            {/* Só serão exibidos caso o usuário for considerado cadastrado. */}
        </View>
    )
}