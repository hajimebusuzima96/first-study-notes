/*
Nos cursos anteriores aprendemos a criar componentes e utilizar props.
Neste curso vamos aprender a utilizar uma variável de estado e o evento onPress de um botão.

onPress é a associação entre a ação do usuário de tocar no botão e a chamada de uma função

Através das variáveis de estado o React Native consegue localizar e alterar um valor na tela


Já sabemos o que são variáveis de estado e porque precisamos delas.
Nesta aula vamos aprender a manipular uma variável de estado.

Antes de criar uma variável de estado precisamos entender dois pontos importantes:

o que são hooks;
funções não possuem estado.

Pontos Importantes:
Hooks é como se fossem gatilhos: é o mecanismo que permite ao React reagir
a um momento específico. Em nosso exemplo, usamos Hooks para renderizar a tela
automaticamente toda vez que a variável é modificada - por isso a chamamos de
variável de estado.

Funções não possuem estado, por isso, depois de serem executadas,
suas variáveis deixam de ser acessíveis. O que nos permite criar uma variável
de estado é o Hook useState, com isso conseguimos preservá-la e mantê-la acessível
mesmo depois da execução da função.

Perceba que quando criamos uma variável de estado criamos junto uma
função para alterar o seu valor


Atribuição por desestruturação (conceito da linguagem JavaScript)
não é o assunto desta aula, porém vamos relembrar.
Desestruturar é o ato de criar variáveis a partir do valor de um array ou objeto. Exemplo:
*/


let tecnologias = ['JavaScript', 'React'];
const [ linguagem, frontend ] = tecnologias;

console.log(linguagem); // ‘‘JavaScript’
console.log(frontend); // ‘React’

/*
Para que uma função tenha um ciclo de vida mantendo uma variável
acessível é necessário utilizar o hook useState

Quando inserimos um botão em uma tela é esperado que ao ser tocado alguma coisa aconteça.
Essa ação ocorre graças ao evento onPress que vai chamar a função associada a ele.

Sempre que precisamos passar alguma coisa para o componente, seja um valor,
uma variável ou uma função, isso será feito através de props.
No nosso caso temos uma propriedade chamada onPress que representa o evento de toque.

Quando inserimos um botão na tela é esperado que alguma coisa aconteça quando ele for clicado

Nesta aula vamos criar a variável de estado numeroSorteado que será exibida dinamicamente na tela

Abra o arquivo do componente TelaInicial (componentes/TelaInicial/index.js) e insira o Código
*/ 


import React, { useState } from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(1);

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>Toque no botão e veja quem é o
         vencedor de 1 à 100</Text>

      <View style = { estilo.boxNumero }>
        <Text style = { estilo.numero }>{ numeroSorteado }</Text>
      </View>
    </View>
  );
}

export default TelaInicial;


/*
Ao salvar o código e executar o aplicativo note que texto 0 foi
substituído pelo valor da variável numeroSorteado que é 1

O React Native nos possibilita criar componentes com funções regulares ou com arrow function

Nosso aplicativo está quase pronto. Agora precisamos criar o botão que ao ser tocado,
vai sortear o valor e exibir na tela através da variável numeroSorteado

Ainda no arquivo do componente TelaInicialinsira o Código

*/ 

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * (101 - 1) + 1);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>
        Toque no botão e veja quem é o vencedor de 1 à 100
      </Text>

      <View style = { estilo.boxNumero }>
        <Text style = { estilo.numero }>{ numeroSorteado }</Text>
      </View>

      <View style = { estilo.boxBotao }>
        <Button title="Sortear" onPress = { gerarNumero } color="#1f4f66"/>
      </View>
    </View>
  );
}

export default TelaInicial;


/*
Posso colocar o evento onPress em qualquer componente?
Não. Apenas alguns componentes possuem esse evento.
Alguns exemplos de componentes que possuem onPress: Button, TouchableOpacity, 
TouchableHighlight e Pressable.

Por que não utilizou a propriedade style para estilizar o componente Button?
Button é um componente nativo que vai se comportar baseado na plataforma que
está sendo exibido. No Android ele vai ter uma aparência e no Iphone outra.
Por esse motivo quem vai fazer a estilização é a plataforma. O que conseguimos
alterar nele é a sua cor.
*/