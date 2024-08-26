/* Aula 22 - Passagem de parâmetros entre telas, Tela inicial */

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
/* Hooks de navegação e de roteamento, para utilizar a passagem de parâmetros */

import { style } from '../style';

export default function Home() {
    const nav = useNavigation();
    /* Constante que acessa o método de navegação utilizado */

    const rota = useRoute();
    /* Constante que acessa a rota de navegação das telas */

    const parametros = rota.params;
    /* Capturando os parâmetros que foram passados para a tela */

    let nome_recebido;
    /* Variável que irá receber o atributo nome do objeto recebido por parâmetro. */

    if ( parametros?.nome ) /* Se o parâmetro 'nome' foi passado */
        nome_recebido = "Olá " + parametros.nome; /* Seu valor será armazenado na variável, concatenado com um texto. */

    else
        nome_recebido = ""; /* Caso nenhum parâmetro nome tenha sido passado, o valor da variável será uma string vazia */
    /* Formato de if else alternativo, pesquise mais! */

    return (
        <View style={ style.fundo }>
            <Text>Essa é a tela home</Text>

            <Text style={ style.margem }>
                { nome_recebido }
                {/* Mostra na tela o parâmetro que foi passado, mesmo estando vazio, esse componente ainda estará ocupando um espaço com margem, por isso seria melhor exibi-lo com uma renderização condicional, exemplo no arquivo Cadastro do app_051 */}
            </Text>

            <View style={ style.margem }>
                <Button title='Ir para a tela Detalhes' color='#841584' onPress={ () => nav.navigate('Detalhes', { nome: 'Márcio', sobrenome: 'Teodoro', data: 'Agosto de 2024' }) }/>
                {/* Usando um novo componente semelhante ao Pressable, o Button precisa ter um título, uma cor e o método onPress, que nesse caso chama uma função que chama o método de navegação para ir para outra tela, com passagem de parâmetros. */}
            </View>
            {/* Aparentemente a prop style não se aplica ao Button... */}

            <View style={ style.margem }>
                <Button title='Ir para a tela Acesso' color='red' onPress={ () => nav.navigate('Acesso') }/>
            </View>
        </View>
    )
}