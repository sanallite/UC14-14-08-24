/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela da galeria */

import React, { useState } from 'react';
import { View, Text, Image, SectionList, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Feather';
import { estilo } from './estilo';

export default function Galeria() {
    const secoes = [ 'Lugares', 'Fotos de Perfil', 'Carros' ];
    const fotos = [
        [ { foto1: require('./ruaxv.jpg'), foto2: require('./palacete.jpg'), foto3: require('./opera.jpeg') } ],
        [ { foto1: require('./loid.png'), foto2: require('./yor.png'), foto3: require('./anya.png') } ],
        [ { foto1: require('./silverado.webp'), foto2: require('./challenger.jpg'), foto3: require('./fastback.jpg') } ]
    ]

    const [ largura, setLargura ] = useState(210);

    const secoesMapeadas = secoes.map( (secao, index) => ({
        title: secao,
        data: fotos[index]
    }) );

    const alterarLargura = (novoValor) => {
        setLargura(novoValor);
    }

    function exibirFotos({item}) {
        return (
            <ScrollView horizontal={ true } style={{ paddingHorizontal: '1rem' }}>
                <View style={{ flexDirection: 'row' }}>
                    { item.foto1 && <Image source={item.foto1} style={{ width: largura, height: 225, marginRight: '0.625rem', borderRadius: 10 }}></Image> }

                    { item.foto2 && <Image source={item.foto2} style={{ width: largura, height: 225, marginRight: '0.625rem', borderRadius: 10 }}></Image> }

                    { item.foto3 && <Image source={item.foto3} style={{ width: largura, height: 225, borderRadius: 10 }}></Image> }
                </View>
            </ScrollView>
            
        )
    }

    function exibirTitulos({ section }) {
        return (
            <View style={ estilo.espacamento }>
                <Text style={ estilo.textos }>{ section.title }</Text>
            </View>
        )
    }

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
                <Text style={ estilo.textos }>Tamanho das fotos</Text>

                <View style={ estilo.viewSlider }>
                    <Icon name='zoom-out' size={ 25 } style={ estilo.diminuirZoom }/>

                    <Slider minimumValue={ 210 } maximumValue={ 400 } step={ 5 } value={ largura } onValueChange={ alterarLargura } style={{ flex: 1 }} />

                    <Icon name='zoom-in' size={ 25 } style={ estilo.aumentarZoom }/>
                </View>
            </View>
        </View>
    )
}