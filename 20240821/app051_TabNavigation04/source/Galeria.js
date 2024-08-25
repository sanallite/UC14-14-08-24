/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela da galeria */

import React, { useState } from 'react';
import { View, Text, Image, SectionList, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Feather';
import { estilo } from './estilo';
/* Atenção a abertura e fechamento de chaves na hora de importar um componente. */

export default function Galeria() {
    const secoes = [ 'Lugares', 'Fotos de Perfil', 'Carros' ];
    /* Títulos das seções para a lista, no caso o nome dos álbuns */

    const fotos = [
        [ { foto1: require('./ruaxv.jpg'), foto2: require('./palacete.jpg'), foto3: require('./opera.jpeg') } ],

        [ { foto1: require('./loid.png'), foto2: require('./yor.png'), foto3: require('./anya.png') } ],

        [ { foto1: require('./silverado.webp'), foto2: require('./challenger.jpg'), foto3: require('./fastback.jpg') } ]
    ]
    /* Vetor com três matrizes, cada uma com um objeto com três propriedades, as matrizes representam as seções, estando com o mesmo índice dos títulos no outro vetor, já os objetos armazenam todas as fotos da aquela seção/álbum. */

    const [ largura, setLargura ] = useState(210);
    /* Largura inicial das fotos, que será controlada pelo deslizador. */

    const secoesMapeadas = secoes.map( (secao, index) => ({
        title: secao,
        data: fotos[index]
    }) );
    /* Usando a função map para passar pelo vetor seções e para cada item retornar um objeto com as propriedades necessárias para criar uma lista de seção, com o título sendo o item atual e os dados o item do vetor fotos com o mesmo índice do título */

    const alterarLargura = (novoValor) => {
        setLargura(novoValor);
    }
    /* Função para alterar o valor da largura das imagens conforme o valor atual do deslizador. */

    function exibirFotos({item}) {
        return (
            <ScrollView horizontal={ true } style={{ paddingHorizontal: '1rem' }}>
                <View style={{ flexDirection: 'row' }}>
                    { item.foto1 && <Image source={item.foto1} style={{ width: largura, height: 225, marginRight: '0.625rem', borderRadius: 10 }}></Image> }

                    { item.foto2 && <Image source={item.foto2} style={{ width: largura, height: 225, marginRight: '0.625rem', borderRadius: 10 }}></Image> }

                    { item.foto3 && <Image source={item.foto3} style={{ width: largura, height: 225, borderRadius: 10 }}></Image> }
                </View>
            </ScrollView>
            /* View com rolagem horizontal que exibe as imagens caso elas tenham sido definidas, com todas tendo uma largura dinâmica, mas uma altura fixa. */
        )
    }
    /* Função para renderizar cada item da seção. */

    function exibirTitulos({ section }) {
        return (
            <View style={ estilo.espacamento }>
                <Text style={ estilo.textos }>{ section.title }</Text>
            </View>
        )
    }
    /* Função para renderizar os títulos dos álbuns/seções */

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.cabecalhos }>
                <Text style={ estilo.textos }>Visualize sua galeria de fotos!</Text>
            </View>

            <SectionList
                sections={ secoesMapeadas }
                renderItem={ exibirFotos }
                renderSectionHeader={ exibirTitulos }
                /* style={ estilo.listaSecao } */
            />

            <View style={ estilo.espacamento }>
                <Text style={ estilo.textos }>Largura das fotos</Text>

                <View style={ estilo.viewSlider }>
                    <Icon name='zoom-out' size={ 25 } style={ estilo.diminuirZoom }/>
                    {/* Usando os icones importados. */}

                    <Slider minimumValue={ 210 } maximumValue={ 400 } step={ 5 } value={ largura } onValueChange={ alterarLargura } style={{ flex: 1 }} />

                    <Icon name='zoom-in' size={ 25 } style={ estilo.aumentarZoom }/>
                </View>
            </View>
        </View>
    )
}