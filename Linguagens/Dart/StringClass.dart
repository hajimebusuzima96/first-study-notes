//  STRINGS SÃO IMUTÁVEIS
//  Antes de falar sobre a classe String é preciso entender um conceito importante do tipo de dado 
// string. É uma coleção de caracteres que é imutável, por isso quando manipulamos uma string não 
// alteramos a string original, mas criamos uma nova string.

//  Por exemplo se convertemos todos caracteres de uma string para maiúsculo, essa string não 
// vai mudar, mas geramos uma nova string com caracteres maiúsculos que poderá ser armazenada em 
// uma variável ou constante.

//  Quando manipulamos strings com métodos da classe String criamos novas strings. 

//---------------------------------------------------------------------------------------------------


//PROPRIEDADES DA CLASSE STRING 

// São sete as propriedades mais utilizadas da classe String: codeUnits, hashCode, isEmpty, isNotEmpty, 
// length, runes e runtimeType. 


//codeUnits 

String nome = 'Renato';
  print(nome.codeUnits); 

//hashCode 

String mes = 'Janeiro';
print(mes.hashCode);

//isEmpty 

String vazia = '';
print(vazia.isEmpty);

//isNotEmpy 

String naoVazia = 'olá';
print(naoVazia.isNotEmpty);

//length 

var tamanhoDaString = 'Polígono'.length;
print(tamanhoDaString);

//runes 

// string UTF-16 que representa
// o emoji de lágrimas de alegria
var lagrimasDeAlegria = '\u{1F602}';
print(lagrimasDeAlegria.runes); // retorna (128514)
print(lagrimasDeAlegria.runes.length); // retorna 1

//runTimeType 

String cidade = 'Juazeiro';
print(cidade.runtimeType);

//---------------------------------------------------------------------------------------------------


//STRING INDICES 

var forma = 'Triângulo';
print(forma[5]); // g 

//---------------------------------------------------------------------------------------------------
 
//MÉTODOS DA CLASSE STRING 

//compareTo 

var palavra = 'casa';
print(palavra.compareTo('CASA'));

//contains 

var nomeInformado = 'Ferdinando';
print(nomeInformado.contains('nando',5));

//startsWith 

var imperador = 'Julius Cesar';
print(imperador.startsWith('Julius'));

//endsWith 

var filme = 'Jornada nas estrelas';
print(filme.endsWith('estrelas'));

//substring 

var poligono = 'quadrado';
print(poligono.substring(0,6));

//replaceAll 

var frase = 'não vou lutar e não vou vencer';
print(frase.replaceAll('não', ''));

//replaceFirst 

var outraFrase = 'a palavra é prata, o silêncio é ouro';
print(outraFrase.replaceFirst('é', 'já foi'));

//replaceRange 

var frase2 = 'em terra de cego quem tem um olho é rei';
print(frase2.replaceRange(0, 16, 'na selva'));

//toUpperCase 

var nomeEmMinusculo = 'joão';
print(nomeEmMinusculo.toUpperCase());

//toLowerCase 

var nomeEmMaiusculo = 'ANTONIO';
print(nomeEmMaiusculo.toLowerCase());

//trim 

var stringComEspacos = ' speed ';
print(stringComEspacos.trim());


//---------------------------------------------------------------------------------------------------
 
//OPERADORES DA CLASSE STRING 

// * OPERATOR 

var paraMultiplicar = ' matrix';
print(paraMultiplicar*(5));

// + OPERATOR 

var paraConcatenar = 'um';
print(paraConcatenar+(' dois'));

// [] OPERATOR 

var caracteresEIndices = 'performance';
print(caracteresEIndices[3]);


