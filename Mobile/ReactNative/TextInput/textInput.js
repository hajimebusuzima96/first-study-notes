/*
Nos cursos anteriores aprendemos a criar aplicativos que nos permitem
exibir algo para o usuário. Neste curso permitiremos ao usuário inserir
dados no aplicativo através do componente nativo TextInput

Através do componente TextInput o usuário consegue digitar um valor
que será recebido pelo sistema

Sempre que o usuário digitar um valor em TextInput precisamos
armazená-lo em uma variável de estado

Agora que conhecemos a mecânica por trás de um componente TextInput,
aprenderemos a exibi-lo na tela

A propriedade keyboardType possui outros valores, porém eles não
servirão para todas as plataformas. Os valores apresentados nesta
aula servirão tanto para Android quanto para iOS
As propriedades apresentadas nessa aula serão usadas no nosso exemplo,
porém existem outras propriedades usadas para outras situações.
Você aprenderá outras propriedades ao longo da sua carreira como
programador React Native.

Através das propriedades que aprendemos nesta aula conseguimos
personalizar o componente TextInput

Além das propriedades que aprendemos na aula anterior existem
outras que representam eventos que serão disparados quando alguma coisa acontecer.

Quando utilizamos o componente TextInput significa que queremos receber
um valor digitado pelo usuário. O evento onChangeText e uma variável de
estado é de suma importância para que esse valor seja manipulado
O evento onChangeText possui uma forma resumida para ser declarada.

Veja no Código  a forma usada na explicação do slide:

*/

<TextInput
  onChangeText = { valor => setValorMinimo(valor)} />

/*
Este código pode ser reduzido passando apenas o nome da
função que deve ser executada quando o evento for invocado
*/

<TextInput
  onChangeText = { setValorMinimo } /> 

/*
Dessa forma o evento entende que deve passar o parâmetro que
ele recebe (o texto digitado) para a função definida entre chaves
(no nosso caso setValorMinimo).

Os eventos nos permitem chamar uma função quando alguma coisa acontecer

Nesta aula vamos exibir os campos para o que o usuário insira os valores
mínimo e máximo. Para isso utilizaremos o componente TextInput. Além disso,
vamos alterar o texto exibido para o usuário

Faremos as alterações no arquivo do componente TelaInicial (componentes/TelaInicial/index.js),
que tem o código apresentado no Código
*/ 

import React, { useState } from 'react';
  import { View, Text, Button, TextInput } from 'react-native';
  import estilo from './estilo';

  const TelaInicial = () => {
    const [ numeroSorteado, setNumeroSorteado ] = useState(0);

    const gerarNumero = () => {
      const novoNumero = Math.floor(Math.random() * 100 + 1);
      setNumeroSorteado(novoNumero);
    }

    return (
      <View style = { estilo.tela }>
        <Text style = { estilo.titulo }>
          Escolha os valores mínimo e máximo para fazer o sorteio
        </Text>

        <View style = { estilo.linhaInput }>
          <Text>Valor Mínimo: </Text>

          <TextInput style = { estilo.inputNormal }/>
        </View>

        <View style = { estilo.linhaInput }>
          <Text>Valor Máximo: </Text>

          <TextInput style = { estilo.inputNormal }/>
        </View>

        <View style = { estilo.boxBotao }>
          <Button title="Sortear" onPress = { gerarNumero } color="#1f4f66"/>
        </View>

        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado }</Text>
        </View>
      </View>
    );
  }

  export default TelaInicial


/*
Até aqui inserimos os componentes onde eles devem aparecer.
Repare que os componentes TextInput (onde o usuário vai digitar os valores)
não aparecem claramente na tela e o botão está colado com o número sorteado.

Para mudar o estilo do componente TelaInicial alterarmos o arquivo estilo.js
localizado na mesma pasta do componente (componentes/TelaInicial/estilo.js), 
conforme visto no Código
*/ 

import { StyleSheet } from "react-native";

  const estilo = StyleSheet.create({
    tela: {
      width: '100%',
      justifyContent: "center",
      alignItems: 'center',
    },

    titulo: {
      fontSize: 14,
      marginVertical: 30,
      paddingHorizontal: 20,
      textAlign: "center"
    },

    linhaInput: {
      flexDirection: 'row',
      alignItems: "center",
      marginBottom: 10
    },

    inputFocus: {
      borderWidth: 1,
      borderColor: '#1f4f66',
      borderRadius: 3,
      width: 100,
      paddingHorizontal: 5,
      marginLeft: 10
    },

    inputNormal: {
      borderWidth: 1,
      borderColor: '#d5d5d5',
      borderRadius: 3,
      width: 100,
      paddingHorizontal: 5,
      marginLeft: 10
    },

    boxNumero:{
      borderColor: '#13b0c5',
      backgroundColor: '#13b0c5',
      borderWidth: 5,
      height: 150,
      width: 150,
      borderRadius: 75,
      justifyContent: "center",
      alignItems:"center",
      marginTop: 50,
      marginBottom: 50
    },

    numero: {
      fontSize: 50,
      color: '#fff'
    },
    boxBotao: {
      width:200,
      marginTop: 20
    }
  });

  export default estilo;


/*
O objetivo desse curso é focar no componente TextInput,
por este motivo não detalhamos cada linha de código referente ao estilo do componente
Com a aparência devidamente definida nosso próximo passo é alterar algumas
características do componente TextInput. Este será o assunto da próxima aula.

Definimos a aparência do nosso aplicativo através do arquivo estilo.js

Com nossa tela (componente TelaInicial) devidamente criada e estilizada
vamos fazer alguns ajustes no componente TextInput inserindo as propriedades
que aprendemos nas aulas anteriores.

O código alterado do componente TelaInicial segue no Código


*/ 

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100 + 1);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style = { estilo.linhaInput }>
        <Text>Valor Mínimo: </Text>

        <TextInput
          style = { estilo.inputNormal }
          textAlign = "center"
          keyboardType = "number-pad"
          maxLength = { 5 }
          autoFocus = { true }/>
      </View>

      <View style = { estilo.linhaInput }>
        <Text>Valor Máximo: </Text>

        <TextInput
          style = { estilo.inputNormal }
          textAlign = "center"
          keyboardType = "number-pad"
          maxLength = { 5 }/>
      </View>

      <View style = { estilo.boxBotao }>
        <Button title="Sortear" onPress = { gerarNumero } color="#1f4f66"/>
      </View>

      <View style = { estilo.boxNumero }>
        <Text style = { estilo.numero }>{ numeroSorteado }</Text>
      </View>
    </View>
  );
}

export default TelaInicial;


/*
Para que a aparência do nosso aplicativo seja concluída precisamos mudar o
estilo do componente TextInput quando ele estiver em foco. Para isso, na
próxima aula vamos utilizar os eventos onFocus e onBlur.

O componente TextInput é estilizado através da propriedade
style e personalizado através das propriedades que vimos nesta aula

O último passo para que a aparência do nosso aplicativo seja concluída
é mudar o estilo do componente TextInput quando ele estiver em foco.


Para chegarmos nesse comportamento vamos precisar criar uma variável
de estado e utilizar os eventos onFocuse onBlur, conforme vemos no Código
*/

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);

  const [ flagInputFocus, setFlagInputFocus ] = useState("");

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100 + 1);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style = { estilo.linhaInput }>
        <Text>Valor Mínimo: </Text>

        <TextInput
          textAlign = "center"
          keyboardType = "number-pad"
          maxLength = { 5 }
          autoFocus = { true }
          style = { flagInputFocus === "txt_min" ?
           estilo.inputFocus : estilo.inputNormal }
          onFocus ={ () => setFlagInputFocus("txt_min")}
          onBlur = { () => setFlagInputFocus("") }/>
      </View>

      <View style = { estilo.linhaInput }>
        <Text>Valor Máximo: </Text>

        <TextInput
          textAlign = "center"
          keyboardType = "number-pad"
          maxLength = { 5 }
          style = { flagInputFocus === "txt_max" ?
           estilo.inputFocus : estilo.inputNormal }
          onFocus = {()=>setFlagInputFocus("txt_max")}
          onBlur = {()=>setFlagInputFocus("")}/>
      </View>

      <View style = { estilo.boxBotao }>
        <Button title = "Sortear" onPress = { gerarNumero } color = "#1f4f66"/>
      </View>

      <View style = { estilo.boxNumero }>
        <Text style = { estilo.numero }>{ numeroSorteado }</Text>
      </View>
    </View>
  );
}

export default TelaInicial;


/*
Finalizamos toda a parte visual do nosso aplicativo.
O último passo é programar para que ele sorteie o número baseado 
nos valores digitados pelo usuário.

Através de uma variável de estado definimos dinamicamente
qual o estilo o componente receberá

Já codificamos toda parte visual do nosso aplicativo.
O que precisamos agora é armazenar o que foi digitado pelo usuário para sortearmos o número,

Para isso vamos criar duas variáveis de estado e inserir o evento onChangeText
dos componentes TextInput.

O novo código do componente TelaInicial segue no Código
*/

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);
  const [ valorMinimo, setValorMinimo ] = useState(0);
  const [ valorMaximo, setValorMaximo ] = useState(10);

  const [ flagInputFocus, setFlagInputFocus ] = useState("");

  const gerarNumero = () => {
    const novoNumero = Math.floor(Math.random() * 100 + 1);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style = { estilo.linhaInput }>
        <Text>Valor Mínimo: </Text>

        <TextInput
          textAlign = "center"
          keyboardType = "number-pad"
          maxLength = { 5 }
          autoFocus = { true }
          style = { flagInputFocus === "txt_min" ?
           estilo.inputFocus : estilo.inputNormal }
          onFocus={ () => setFlagInputFocus("txt_min")}
          onBlur = { () => setFlagInputFocus("") }
          value = { valorMinimo.toString() }
          onChangeText = { valor => setValorMinimo(valor) }  />
      </View>

      <View style = { estilo.linhaInput }>
        <Text>Valor Máximo: </Text>

        <TextInput
          textAlign="center"
          keyboardType="number-pad"
          maxLength=
          style = { flagInputFocus === "txt_max" ?
           estilo.inputFocus : estilo.inputNormal }
          onFocus = { ()=>setFlagInputFocus("txt_max") }
          onBlur = { ()=>setFlagInputFocus("") }
          value = { valorMaximo.toString() }
          onChangeText = { setValorMaximo } />
      </View>

      <View style = { estilo.boxBotao }>
        <Button title="Sortear" onPress = { gerarNumero } color="#1f4f66"/>
      </View>

      <View style = { estilo.boxNumero }>
        <Text style = { estilo.numero }>{ numeroSorteado }</Text>
      </View>
    </View>
  );
}

export default TelaInicial;


/*
Estilizamos nosso aplicativo e já conseguimos armazenar o que o usuário digitou.
O último passo para que o número sorteado leve em consideração os valores digitados
é alterar a função gerarNumero. Veremos o que será alterado na próxima aula.

Atribuir o valor de uma variável de estado ao componente TextInput garante
que o valor exibido será o da variável

Agora só precisamos de uma última alteração para que nosso aplicativo funcione
como desejado, ou seja, sortear um número baseado no que o usuário digitou,

Para isso vamos alterar mais uma vez o arquivo do componente TelaInicial,
conforme mostra o Código
*/ 

import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilo';

const TelaInicial = () => {
  const [ numeroSorteado, setNumeroSorteado ] = useState(0);
  const [ valorMinimo, setValorMinimo ] = useState(0);
  const [ valorMaximo, setValorMaximo ] = useState(10);

  const [ flagInputFocus, setFlagInputFocus ] = useState("");

  const validarCampos = (minimo, maximo) => {
    if ( isNaN(minimo) || isNaN(maximo)) {
      alert('Digite os valores');
      return false;
    }

    if ( minimo > maximo ) {
      alert('O valor mínimo deve ser menor que o valor máximo');
      return false;
    }

    return true;
  }

  const gerarNumero = () => {
    const min = parseInt(valorMinimo);
    const max = parseInt(valorMaximo);

    if ( !validarCampos(min, max) ) {
      return;
    }

    const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
    setNumeroSorteado(novoNumero);
  }

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style = { estilo.linhaInput }>
        <Text>Valor Mínimo: </Text>

        <TextInput
          textAlign = "center"
          keyboardType = "number-pad"
          maxLength = { 5 }
          autoFocus = { true }
          style = { flagInputFocus === "txt_min" ?
          estilo.inputFocus : estilo.inputNormal }
          onFocus={ () => setFlagInputFocus("txt_min")}
          onBlur = { () => setFlagInputFocus("") }
          value = { valorMinimo.toString() }
          onChangeText = { valor => setValorMinimo(valor) } />
      </View>

      <View style = { estilo.linhaInput }>
        <Text>Valor Máximo: </Text>

        <TextInput
          textAlign="center"
          keyboardType="number-pad"
          maxLength=
          style = { flagInputFocus === "txt_max" ?
          estilo.inputFocus : estilo.inputNormal }
          onFocus = { ()=>setFlagInputFocus("txt_max") }
          onBlur = { ()=>setFlagInputFocus("") }
          value = { valorMaximo.toString() }
          onChangeText = { setValorMaximo } />
      </View>

      <View style = { estilo.boxBotao }>
        <Button title="Sortear" onPress = { gerarNumero } color="#1f4f66"/>
      </View>

      <View style = { estilo.boxNumero }>
        <Text style = { estilo.numero }>{ numeroSorteado }</Text>
      </View>
    </View>
  );
}

export default TelaInicial;


