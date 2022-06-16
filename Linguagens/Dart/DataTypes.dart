// Os tipos de dados suportados pela linguagem Dart são:

// booleans
// lists
// maps
// numbers
// runes
// sets
// strings 



//OBJETO DO TIPO MAP 

var venda = {
 'segunda-feira':22,
 'terça-feira':35,
 'quarta-feira':29,
 'quinta-feira':33,
 'sexta-feira':27,
 'sábado':30
}; 

//OBJETO DO TIPO NUMBER 

num quantidade = 5;
num valor = 3.4; 

//OBJETO TIPO INT

int contagem = 22;

//OBJETO TIPO DOUBLE(aka FLOAT)

double preco = 4.52; 

//OBJETO TIPO STRING 

String nome = 'José de Almeida';
String sobrenome = "Almeida"; 

//OBJETO TIPO BOOLEANO 

bool resultado = false;

//OBJETO TIPO LIST 

var nomes = ['Renato','Diego','Estevão','Rodolfo'];
var terceiroNome = nomes[2]; // acessando o terceiro elemento da lista

//OBJETO TIPO SET

var carros = {'Ferrari','Ferrari','Mustang','Jaguar'};
print(carros); // vai exibir {Ferrari,Mustang,Jaguar}

//OBJETO TIPO RUNES 

Runes emojis = new Runes("\u{1F603}");
print(new String.fromCharCodes(emojis));



