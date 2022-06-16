/*
Para estilizar utilizando o objeto StyleSheet ou inline
utilizamos a propriedade style no componente

Vale lembrar que as propriedades usadas para estilizar
um componente são parecidas com as propriedades CSS.

No React Native utilizamos a linguagem JavaScript também
para estilizar nossos componentes. Por este motivo escrevemos as
propriedades de estilo utilizando camelCase - diferente do CSS, que
separamos o nome das propriedades utilizando hífen (-) 


Criar um arquivo de estilo e importá-lo no arquivo do componente torna
o código mais organizado, dividindo as responsabilidades dos arquivos.


Ao criar um componente podemos definir o seu tamanho especificando 
a altura e largura. Além disso podemos alterar a cor de fundo para
que ele se destaque dos outros componentes


Segue no Código as propriedades e os valores apresentados nesta aula.

// backgroundColor
backgroundColor: 'rgb(0,68,170)',
backgroundColor: 'rgb(0,68,170,0.5)',
backgroundColor: '#04a',
backgroundColor: '#0044aa',
backgroundColor: '#0044aa88',

// width
width: 100,

// height
height: 50,

A borda é uma linha que inserimos em volta de um componente.
Ela pode ser uma linha completa (valor padrão), tracejada ou pontilhada.

As palavras Left e Right podem ser respectivamente substituídas por Start e End.
Por exemplo: borderStartColor no lugar de borderLeftColor e borderEndWidth no
lugar de borderRightWidth

Segue no Código as propriedades e os valores apresentados nesta aula.

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
borderBottomLeftRadius:50,
borderBottomRightRadius:70,

// borderStyle
borderStyle: "solid", // padrão
borderStyle: "dotted",
borderStyle: "dashed",

Existem algumas propriedades que usamos para afastar
um componente do outro ou afastar os componentes filhos dentro do
componente pai. Veja a seguir a utilização dessas propriedades:

margin - afasta o componente de outros componentes;
padding - afasta o conteúdo do componente das suas bordas.

Segue no Código as propriedades e os valores apresentados

// margin
margin: 20,
marginTop: 20,
marginBottom: 30,
marginLeft: 5,
marginRight: 10,
marginHorizontal: 10,
marginVertical: 20,

// padding
padding: 20,
paddingTop: 20,
paddingBottom: 30,
paddingLeft: 5,
paddingRight: 10,
paddingHorizontal: 10,
paddingVertical: 20,

Dar espaço tanto entre um componente e outro quanto entre o
conteúdo e a sua borda deixa o aplicativo mais organizado

O Texto é utilizado para diversos fins como por exemplo para
definir um título, um parágrafo ou uma citação

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

Passar propriedades de estilo para um texto permite diferenciá-lo
dos demais e dessa forma ficará mais fácil para o usuário diferenciar um título de um texto

O conjunto de propriedades chamadas de flexbox está relacionado
com o posicionamento e a organização de um ou mais componentes na tela.

Por exemplo: se tivemos três textos na tela, podemos posicioná-los
em linha (um ao lado do outro) ou em coluna, que é o padrão (um embaixo do outro),

As propriedades flexGrow, flexShrink e flex recebem um inteiro maior ou igual a 0.

Quando não definimos um valor a uma propriedade ela se comportará da maneira indicada por padrão
Segue no Código as propriedades e os valores apresentados nesta aula.

// flexDirection
flexDirection: "column",
flexDirection: "column-reverse",
flexDirection: "row",
flexDirection: "row-reverse",

// flexWrap
flexWrap: "wrap",
flexWrap: "wrap-reverse",
flexWrap: "nowrap",

// justifyContent
justifyContent: "center",
justifyContent: "flex-start",
justifyContent: "flex-end",
justifyContent: "space-around",
justifyContent: "space-between",
justifyContent: "space-evenly",

// alignItems
alignItems: "center",
alignItems: "stretch",
alignItems: "flex-start",
alignItems: "flex-end",

// alignContent
alignContent: "center",
alignContent: "stretch",
alignContent: "flex-start",
alignContent: "flex-end",
alignContent: "space-around",
alignContent: "space-between",

// alignSelf
alignSelf: "center",
alignSelf: "stretch",
alignSelf: "flex-start",
alignSelf: "flex-end",

// flexGrow
flexGrow: 1,

// flexShrink
flexShrink: 1,

// flexBasis
flexBasis: 150,

// flex
flex: 1,

Através das propriedades flexbox organizamos os componentes do nosso aplicativo

*/ 
