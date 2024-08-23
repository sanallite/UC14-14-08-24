/* Aula 20 - Tab Navigation, Parte 2 - Desafio 1, Tela de comentários */

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { estilo } from './estilo';

export default function Comentarios() {
    const [ nome, setNome ] = useState('');
    const [ comentario, setComentario ] = useState('');
    /* Valores do campo de texto */

    const [ arquivoComentarios, setNovoComentario ] = useState([ {nome_autor: 'Márcio', comentario: 'Olá'} ]);
    /* Vetor que armazena os comentários feitos */

    const publicarComent = (nome_param, comentario_param) => {

        /* Usando a função trim para remover os espaços em branco, que se caso tenha algo escrito retornará um valor true que será verficado. */
        if ( nome_param.trim() && comentario_param.trim() ) {

            setNovoComentario( comentariosAnteriores => [
                ...comentariosAnteriores,
                { nome_autor: nome_param, comentario: comentario_param }
            ] );
            /* Alterando o estado da variável de armazenamento de comentários, passando por parâmetro o estado do vetor antes de ser atualizado, que no caso contém os comentários anteriores. O spread operator ... cria um novo vetor com os dados armazenados no vetor comentariosAnteriores e depois adicionando uma nova linha nesse novo vetor com o comentário que acabou de ser escrito, envolvido por um objeto. */

            /* Explicação do porquê usar esse padrão, é muito pra traduzir, mas eu entendi como funciona: 
                State Consistency:
                React’s state updates can be asynchronous, meaning that if you directly modify the state without considering its previous value, you might run into issues where your updates overwrite each other. Using the arrow function ensures that you’re working with the most up-to-date version of the state.

                Immutable Updates:
                React relies on immutability to detect changes and trigger re-renders. By creating a new array with the spread operator, you ensure that the arquivoComentarios state is updated immutably. This allows React to efficiently determine when to re-render the component.
            */

            setNome('');
            setComentario('');
            /* Limpando os valores dos campos de texto. */
        }
       
        else {
            alert('Escreva um nome e um comentário!');
        }
        /* Se ambos os campos estiverem em branco um alerta será exibido. */
    }

    const renderizar = ( {item} ) => {
        return (
            <View style={ estilo.comentarios }>
                <Text>{ item.nome_autor } disse:</Text>
                <Text>{ item.comentario }</Text>
            </View>
        )
    }

    return (
        <View style={ estilo.fundo }>
            <View style={ estilo.cabecalhos }>
                <Text style={ estilo.textos }>Deixe seus comentários aqui!</Text>
            </View>

            <View style={ estilo.espacamento }>
                <TextInput style={ estilo.caixasTexto } placeholder='Escreva seu nome' value={ nome } onChangeText={ (nome_digitado) => setNome(nome_digitado) }/>

                <TextInput style={ estilo.caixasTexto } placeholder='Escreva seu comentário' value={ comentario } onChangeText={ (comentario_digitado) => setComentario(comentario_digitado) } />
                {/* A cada mudança de texto, o que foi digitado é enviado por parâmetro da função que atualiza o estado da variável, o atualizando para aquele valor. */}
            </View>

            <View style={ estilo.viewPublicar }>
                <Pressable style={ estilo.publicar_cadastrar } onPress={ () => publicarComent(nome, comentario) }>
                    <Text style={{ color: 'white' }}>Publicar</Text>
                </Pressable>
                {/* Enviado por parâmetro os valores das variáveis de estados para serem adicionados ao vetor que serve como fonte de dados para a lista. */}

            </View>

            <View>
                <FlatList data={ arquivoComentarios } renderItem={ renderizar } keyExtractor={ (item, index) => [ index, item.nome_autor ] } />
                {/* A chave de cada item da lista será o índice do comentário na lista e a propriedade que contém o nome do autor daquele comentário. */}
            </View>
        </View>
    )
}