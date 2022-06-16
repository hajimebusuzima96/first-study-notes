/*
Estilizar um componente ou aplicativo significa dar uma forma estética a ele,
mudar a sua aparência
O que vamos aprender?
Neste curso você vai aprender os seguintes conceitos de estilização:

Elementos
Cor de fundo
Altura e largura
Borda
Espaçamento entre elementos
Estilos de textos
Cor
Tamanho
Estilo
Peso
Estilizar o aplicativo garante que o usuário entenda cada elemento
exibido na tela do celular e com isso ele vai ficar mais satisfeito
com o aplicativo e por consequência vai utilizá-lo por mais tempo


O conceito de estilização será utilizado todas as vezes que você for criar um aplicativo


Este aplicativo possui apenas um texto na tela e através dele vamos
relembrar os conceitos usados para estilização.

Veja no Código o código usado neste aplicativo.

*/ 


import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Estilizando o aplicativo</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    color: 'white'
  },
});


/*
No React Native as propriedades de estilo que são compostas por duas palavras,
por exemplo background color, são unidas e a segunda palavra fica com a
primeira letra maiúscula, backgroundColor. Veja alguns exemplos:

background color = backgroundColor
align items = alignItems
border radius = borderRadius
border color = borderColor

Na linguagem JavaScript utilizada pelo React Native, essa forma
de se escrever é chamada de camel case
Através do código StyleSheet que é importado da biblioteca react-native
que conseguimos criar a variável que vai guardar os estilos do aplicativo

Você já aprendeu a estilizar um componente utilizando para isso o código StyleSheet
Além de utilizar o código StyleSheet para estilizar um componente,
você pode utilizar o estilo inline


Veja no Código um exemplo de componente sendo estilizado de forma inline.

<Text style = { { fontSize: 36, textAlign: 'center' } } >Estilizando o aplicativo</Text>

Código. Componente Text estilizado inline
É possível estilizar um aplicativo utilizando apenas estilo inline.
Veja na Figura um aplicativo que só utiliza estilo inline.


*/

import React from 'react';
import { Text, View } from 'react-native';

export default function App () {
  return (
    <View style={ { flex:1, backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'center' } }>

      <Text style = { { fontSize: 36,color: 'white' } } >
        Estilizando o aplicativo
      </Text>

    </View>
  )
}

/*
Ao visualizar o código do aplicativo percebemos que não conseguimos
ver as propriedades de estilo inseridas dentro da tag de abertura do
componente de forma fácil, ou seja, sem utilizar a barra de rolagem 
*/

import React from 'react';
import { Text, View } from 'react-native';

export default function App () {
  return (
    <View style={ {
      flex:1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
    } }>

      <Text style = { {
        fontSize: 36,
        color: 'white'
      } } >
        Estilizando o aplicativo
      </Text>

    </View>
  )
}


//-----------------------------------------------------------------------

import React from 'react';
import { Text, View } from 'react-native';

export default function App () {
  return (
    <View style={ {
      flex:1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
    } }>
      <Text style = { {
        fontSize: 36,
        color: 'white'
      } } >
        Estilizando o aplicativo
      </Text>
    </View>
  )
}

//----------------------------------------------------------------------------

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App () {
  return (
    <View style = { estilos.container }>
      <Text style = { estilos.texto } >
        Estilizando o aplicativo
      </Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 36,
    color: 'white'
  }

/*
Utilize estilo inline apenas quando o componente tiver apenas
uma propriedade de estilo e quando ele não precise ser reutilizado

Criar estilo inline é mais simples do que utilizar o código StyleSheet,
porém pode deixar o código mais embolado misturando a sintaxe de estilo
com a de exibição de componentes

Padrões de cores não é um assunto exclusivo do React Native.
Qualquer carreira que utilize cores precisa conhecer os principais tipos.

RGB combina as cores vermelha,
verde e azul utilizando os valores de 0 a 255 em cada uma delas para criar uma cor.

// Cor de fundo
backgroundColor: 'rgb(255, 255, 255)',
backgroundColor: 'rgb(255, 255, 0)',

// Cor da fonte
color: 'rgb(0, 0, 0)',
color: 'rgb(220, 180, 100)',


// Cor de fundo
backgroundColor: '#FFF',
backgroundColor: '#F7F7F7',
backgroundColor: '#00F7D7',

// Cor da fonte
color: '#000000',
color: '#D5D5D5',

Utilizando um seletor de cores

Como vimos, não precisamos decorar cores RGB ou Hexadecimal,
podemos utilizar uma ferramenta para selecionar a cor que queremos.
Segue duas ferramentas seletoras de cores:

Site do Mozilla
Site Pick Color From Image
Veja abaixo essas ferramentas:

Tanto a cor RGB quanto a Hexadecimal utilizam as cores vermelha,
verde e azul para criar outras cores.
Essas cores são utilizadas entre aspas nas propriedades backgroundColor e color

Quando agrupamos componentes utilizando View, podemos definir
o seu tamanho (altura e largura) e também podemos alterar a cor de
fundo para que ele se destaque dos outros elementos

Para destacar uma parte da tela como por exemplo criar uma barra de título,
podemos utilizar o componente View e estilizá-lo

Veja no Código exemplos de uso da propriedade backgroundColor.

// backgroundColor
backgroundColor: 'rgb(0,68,170)',
backgroundColor: 'rgb(0,68,170,0.5)',
backgroundColor: '#04a',
backgroundColor: '#0044aa',
backgroundColor: '#0044aa88',


Segue no Código um exemplo de uso das propriedades width e height.

// width
width: 100,

// height
height: 50,


Exemplo prático
Para ver na prática o uso das propriedades backgroundColor,
width e height aplicadas no componente, por exemplo View e Image,

O código do aplicativo pode ser visto no Código: 

*/ 


import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Img from './assets/raposa.png';

export default function App () {
  return (
    <View style={ estilos.container }>

        <Text style={ estilos.titulo }>Raposa</Text>
        <Text style={ estilos.texto }>Mamífero da família Canidae.</Text>
        <Image style={ estilos.img } source={ Img }/>

    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#4530b2'
  },
  titulo: {
    color: '#fff',
    fontSize:22
  },
  texto: {
    color: '#a7abff'
  },
   img: {
    marginTop: 20,
    width: 150,
    height: 200,
  },
});


/*
Veja abaixo o codigo do aplicativo: 

*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Img from './assets/raposa.png';

export default function App () {
  return (
    <View style={ estilos.container }>
      
        <Text style={ estilos.titulo }>Raposa</Text>
        <Text style={ estilos.texto }>Mamífero da família Canidae.</Text>
        <Image style={ estilos.img } source={ Img }/>
      
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#4530b2'
  },
  titulo: {
    color: '#fff',
    fontSize:22
  },
  texto: {
    color: '#a7abff'
  },
   img: {
    marginTop: 20,
    width: 150,
    height: 200,
  },
});

/*
A borda é uma linha que inserimos em volta de um componente.
Ela pode ser uma linha completa (valor padrão), tracejada ou pontilhada.

As palavras Left e Right podem ser respectivamente substituídas por Start e End.
Por exemplo: borderStartColor no lugar de borderLeftColor e borderEndWidth
no lugar de borderRightWidth

Segue no Código as propriedades e os valores apresentados no flow anterior.

// borderColor
borderColor: '#313131',
borderTopColor: '#ff00ff',
borderBottomColor: '#0d5d5d5',
borderLeftColor: '#a00',
borderRightColor: '#550',

// borderWidth
borderWidth: 5,
borderTopWidth: 40,
borderBottomWidth: 50,
borderLeftWidth: 30,
borderRightWidth: 20,

// borderRadius
borderRadius: 20,
borderTopLeftRadius:10,
borderTopRightRadius:30,
borderTopLeftRadius:50,
borderTopRightRadius:70,

// borderStyle
borderStyle: "solid", // padrão
borderStyle: "dotted",
borderStyle: "dashed",

O código do aplicativo pode ser visto no Código
*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Img from './assets/bart-img.png';

export default function App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Os Simpsons</Text>
      <Image style={ estilos.img } source={ Img }/>
      <Text style={ estilos.texto }>Bart o filho mais velho</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#feda0a'
  },
  titulo: {
    color: '#000',
    fontSize:32,
    marginBottom: 20,
  },
  texto: {
    color: '#000',
    marginBottom: 20,
    fontSize:20,
  },
   img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
  },
});

//--------------------------------------------------------------------------

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Img from './assets/bart-img.png';

export default function App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Os Simpsons</Text>
      <Image style={ estilos.img } source={ Img }/>
      <Text style={ estilos.texto }>Bart o filho mais velho</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#feda0a'
  },
  titulo: {
    color: '#000',
    fontSize:32,
    marginBottom: 20,
  },
  texto: {
    color: '#000',
    marginBottom: 20,
    fontSize:20,
  },
   img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
  },
});

/*
Para que um componente, por exemplo uma imagem, fique redonda o valor de
borderRadius deve ser a metade de seu tamanho, por exemplo se width e height
tiverem o valor 100 então borderRadius deve ser 50

Quando criamos a tela do aplicativo é comum afastarmos uns componentes dos outros 


Existem algumas propriedades que usamos para afastar um componente do outro
ou afastar os componentes filhos (Image e Text) dentro do componente pai (View).
Veja a seguir a utilização dessas propriedades.


Veja no Código exemplos de uso das propriedades que definem margin.

// Exemplos de margin
const estilos = StyleSheet.create({
  container1:{
    margin: 20,
  },
  container2:{
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 10,
  },
  container3:{
    marginHorizontal: 10,
    marginVertical: 20,
  },
});


Padding

Veja no flow abaixo as variações da propriedade padding:


Veja no Código as propriedades e os valores apresentados para o padding.

// padding
const estilos = StyleSheet.create({
  container1:{
    padding: 20,
  },
  container2:{
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 5,
    paddingRight: 10,
  },
  container3:{
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});


Em resumo:

margin - afasta o componente de outros componentes.
padding - afasta o conteúdo do componente das suas bordas.

Exemplo prático

Para ver na prática o uso das propriedades margin e padding vamos criar um aplicativo

O código do aplicativo pode ser visto no Código:

*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import MobileImg from './assets/mobile-img.png';
import BackendImg from './assets/backend-img.png';
import FullStackImg from './assets/fullstack-img.png';

export default function App () {
  return (
    <View style={ estilos.container }>
      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Mobile Developer</Text>
        <Text style={ estilos.texto }>Michonne Hawthorne</Text>
        <Image style={ estilos.img } source={ MobileImg }/>
      </View>

      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Backend Developer</Text>
        <Text style={ estilos.texto }>Elijah Price / Mr Glass</Text>
        <Image style={ estilos.img } source={ BackendImg }/>
      </View>

      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Full Stack Developer</Text>
        <Text style={ estilos.texto }>Chuck Norris</Text>
        <Image style={ estilos.img } source={ FullStackImg }/>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#dbe9f8'
  },
  card: {
    backgroundColor: '#5450d6',
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2d1f76',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20
  },
  titulo: {
    color: '#fff',
    fontSize:18
  },
  texto: {
    color: '#a7abff',
    marginBottom: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 2
  },
});

//------------------------------------------------------------------------

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import MobileImg from './assets/mobile-img.png';
import BackendImg from './assets/backend-img.png';
import FullStackImg from './assets/fullstack-img.png';

export default function App () {
  return (
    <View style={ estilos.container }>
      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Mobile Developer</Text>
        <Text style={ estilos.texto }>Michonne Hawthorne</Text>
        <Image style={ estilos.img } source={ MobileImg }/>
      </View>

      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Backend Developer</Text>
        <Text style={ estilos.texto }>Elijah Price / Mr Glass</Text>
        <Image style={ estilos.img } source={ BackendImg }/>
      </View>   

      <View style={ estilos.card }>
        <Text style={ estilos.titulo }>Full Stack Developer</Text>
        <Text style={ estilos.texto }>Chuck Norris</Text>
        <Image style={ estilos.img } source={ FullStackImg }/>
      </View>      
    </View>
  )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#dbe9f8'
  },
  card: {
    backgroundColor: '#5450d6',
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2d1f76',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20
  },
  titulo: {
    color: '#fff',
    fontSize:18
  },
  texto: {
    color: '#a7abff',
    marginBottom: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 75,
    borderColor: '#fff',
    borderWidth: 2
  },
});

/*
Dar espaço tanto entre um componente e outro quanto entre o conteúdo
e a sua borda deixa o aplicativo mais organizado o que torna mais atraente
para o usuário e de fácil compreensão

O texto é utilizado para diversos fins como por exemplo para definir um título,
uma descrição ou uma citação


Segue no Código as propriedades e os valores apresentados nesta aula.

// color
color: 'rgb(0,68,170)',
color: 'rgb(0,68,170,0.5)',
color: '#04a',
color: '#0044aa',
color: '#0044aa88',

// fontSize
fontSize: 8,
fontSize: 16,
fontSize: 20,

// lineHeight
lineHeight: 20,
lineHeight: 30,

// letterSpacing
letterSpacing: 10,
letterSpacing: 20,
letterSpacing: 30,

// fontStyle
fontStyle: "normal",
fontStyle: "italic",

// fontWeight
fontWeight: "normal", // padrão
fontWeight: "bold",

// textAlign
textAlign: "center",
textAlign: "justify",
textAlign: "left", // padrão
textAlign: "right",

// textTransform
textTransform: 'none', // padrão
textTransform: 'capitalize',
textTransform: 'lowercase',
textTransform: 'uppercase',

// textDecorationLine
textDecorationLine: "none", // padrão
textDecorationLine: "line-through",
textDecorationLine: "underline",
textDecorationLine: "underline line-through",


Existem diversos tipos de fontes como por exemplo: Arial,
Times, Courier. Por se tratar de um conteúdo mais avançado,
o seu uso será explicado em um outro momento

Veja no Código o exemplo do aplicativo que exibe uma frase com uma palavra em destaque.


*/

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <Text>
        Exemplo de palavra <Text style={ styles.destaque }>destacada</Text> das demais
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  destaque: {
    fontWeight: 'bold',
  },
});


/*
Exemplo prático
Para ver na prática o uso das propriedades de estilo de texto, vamos criar um aplicativo

O código do aplicativo pode ser visto no Código
*/

import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Capa from './assets/capa-livro.jpg';

export default function App() {
  return (
    <View style={ styles.container }>
      <Image style={ styles.imagem } source={ Capa } />
      <Text style={ styles.titulo }>Uma Breve História do Tempo</Text>
      <Text style={ styles.descricao }>Marco definitivo da literatura de divulgação científica, Uma breve história do tempo é relançado em edição revista e atualizada.</Text>
      <Text style={ styles.citacao }>"Uma obra magistral." The Wall Street Journal</Text>
      <Text style={ styles.citacao }>"Uma breve história do tempo é a união do entusiasmo de uma criança ao intelecto de um gênio." The Sunday Times</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagem: {
    width: 175,
    height: 250,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
  },
  descricao: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center"
  },
  citacao: {
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: "center"
  }
});

//-------------------------------------------------------------------

import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Capa from './assets/capa-livro.jpg';

export default function App() {
  return (
    <View style={ styles.container }>
      <Image style={ styles.imagem } source={ Capa } />
      <Text style={ styles.titulo }>Uma Breve História do Tempo</Text>
      <Text style={ styles.descricao }>Marco definitivo da literatura de divulgação científica, Uma breve história do tempo é relançado em edição revista e atualizada.</Text>
      <Text style={ styles.citacao }>"Uma obra magistral." The Wall Street Journal</Text>
      <Text style={ styles.citacao }>"Uma breve história do tempo é a união do entusiasmo de uma criança ao intelecto de um gênio." The Sunday Times</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagem: {
    width: 175,
    height: 250,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
  },
  descricao: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center"
  },
  citacao: {
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: "center"
  }
});

/*
Veja no Código o código usado para criar o aplicativo.:
*/

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Img from './assets/lua.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.img } source={ Img } />

      <View style={ estilos.boxTexto }>
        <Text style={ estilos.titulo }>Lua</Text>
        <Text style={ estilos.texto }>A Lua é o satélite natural do <Text style={ estilos.destaque }>planeta Terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 30,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  boxTexto: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  texto: {
    color: '#fff',
    textAlign: 'center'
  },
  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

/*
Até aqui entendemos a finalidade do código do aplicativo.
O próximo passo é entender as propriedades que utilizamos para criar os estilos

Veja abaixo o codigo do aplicativo: 

*/

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Img from './assets/lua.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.img } source={ Img } />
      
      <View style={ estilos.boxTexto }>
        <Text style={ estilos.titulo }>Lua</Text>
        <Text style={ estilos.texto }>A Lua é o satélite natural do <Text style={ estilos.destaque }>planeta Terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 30,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  boxTexto: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  texto: {
    color: '#fff',
    textAlign: 'center'
  },
  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});

