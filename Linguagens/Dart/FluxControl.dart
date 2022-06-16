//ESCOLHENDO FLUXO COM if E else 

int idade = 17;
var eAdulto = (idade > 18) ? true : false; //ternário
print(eAdulto); 

if (10%5 == 0) {
  print('O número 10 é múltiplo de 5');
} 

bool ativo = false;

   if (ativo == true) {
     print('ativo é verdadeiro.');
   } else {
     print('ativo é falso');
   } 

int idade = 17;
bool eAdulto;
if (idade > 18) {
  eAdulto = true;
} else if (idade < 18) {
  eAdulto = false;
}
print(eAdulto); 

//---------------------------------------------------------------------- 

//REPETINDO COMANDOS COM for 

String mensagem = 'Eu amo Dart!';
for (var i = 0; i < 4; i++) {
  print(mensagem);
} 

//---------------------------------------------------------------------- 

//REPETINDO COMANDOS COM while E do while 

var mensagem = 'Eu amo Dart!';
var indice = 0;

while(indice < 4) {
    print(mensagem);

    indice++;
} 

var mensagem = 'Eu amo Dart';
var indice = 0;
do {
  print(mensagem);
  indice++;
} while(indice < 4); 

//---------------------------------------------------------------------- 

//PARANDO A EXECUÇÃO COM break E CONTINUANDO A EXECUÇÃO COM continue 

for (var i = 0; i < 15; i++) {
  if (i == 8) {
    break;
  }
  print(i);
} 

var sequencia = [1,2,3,4,5];
 int indiceSequencia = 0;
 while(indiceSequencia < 5) {
   if (sequencia[indiceSequencia] % 2 == 0) {
     indiceSequencia++;
     continue;
   }
   print(sequencia[indiceSequencia]);
   indiceSequencia++;
}

//---------------------------------------------------------------------- 

//MULTIPLAS CONDIÇÕES COM switch E case 

int mes = 5;
 switch (mes) {
   case 1:
     print('janeiro');
     break;
   case 2:
     print('fevereiro');
     break;
   case 3:
    print('março');
    break;
  case 4:
    print('abril');
    break;
  case 5:
    print('maio');
    break;
  case 6:
    print('junho');
    break;
  case 7:
    print('julho');
    break;
  case 8:
    print('agosto');
    break;
  case 9:
    print('setembro');
    break;
  case 10:
    print('outubro');
    break;
  case 11:
    print('novembro');
    break;
  case 12:
    print('dezembro');
   break;
  default:
    print('mês inválido');
} 


//---------------------------------------------------------------------- 

//TESTANDO CÓDIGO COM assert 

String cidade;
assert(cidade != null, 'a variável cidade tem valor nulo'); 



