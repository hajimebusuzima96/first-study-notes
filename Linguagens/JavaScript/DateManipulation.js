//CRIANDO UMA DATA 

const hoje = new Date( );


// Sem parâmetro: Data atual
const hoje= new Date();

// Com parâmetro: String com a data
const exemplo1 = new Date(  "2020-02-28"  );
const exemplo2 = new Date(  "2020-02-27 10:35:00"  );

//  Com parâmetro: Um número para ano, mês, dia, hora, minuto, segundo e milissegundo
const exemplo3 = new Date(  2020, 2, 28, 13, 20, 2, 15  );

//UTC E TIMESTAMP 

const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log( hoje.toLocaleString() );

// Imprimindo uma string com a data armazenada
console.log( hoje.toString() );

// Imprimindo uma string com a data universal (UTC)
console.log( hoje.toUTCString() );

// Imprimindo timestamp
console.log( hoje.valueOf() );

const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getTime();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferenca = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// Exibindo a diferença
console.log(horas);

//GETTERS 

// 2020-11-09T18:43:57.961Z
const dataAtual = new Date();

// Vai imprimir 10
console.log( 'getMonth', dataAtual.getMonth());

// Vai imprimir 11
console.log( 'getMonth', dataAtual.getMonth() + 1);

const dataAtual = new Date();

console.log( dataAtual.getFullYear() );
console.log( dataAtual.getMonth() );
console.log( dataAtual.getDate() );
console.log( dataAtual.getHours() );
console.log( dataAtual.getMinutes() );
console.log( dataAtual.getSeconds() );
console.log( dataAtual.getMilliseconds() );
console.log( dataAtual.getDay() );

console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay() );

const dataAtual = new Date();

console.log( dataAtual.getTime() );
console.log( dataAtual.getTimezoneOffset() );
console.log( dataAtual.valueOf() );

//GETTERS DE CONVERSAO 

const personalizandoData =  {
    weekday: 'long', // segunda-feira
    weekday: 'short', // seg.
    weekday: 'narrow', // S

    month: "numeric", // 2
    month: "2-digit", // 02
    month: "long", // Março
    month: "short", // Mar
    month: "narrow", // M

    year: 'numeric', // 2020
    year: '2-digit', // 20

    day: 'numeric', // 1
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));

  const personalizandoTempo = {
    hour: 'numeric', // 1
    hour: '2-digit', // 01,

    minute: 'numeric', // 1
    minute: '2-digit', // 01,

    second: 'numeric', // 1
    second: '2-digit', // 01,
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );

  const personalizandoDataTempo = {
    dateStyle: "full", // segunda-feira, 9 de novembro de 2020
    dateStyle: "long", // 9 de novembro de 2020
    dateStyle: "medium", // 9 de nov. de 2020
    dateStyle: "short", // 09/11/2020

    timeStyle: "full", // 01:05:09 Horário Padrão de Brasília
    timeStyle: "long", // 01:05:09 BRT
    timeStyle: "medium", // 01:05:09
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );

  const personalizandoData =  {
    weekday: 'long', // segunda-feira
    month: "2-digit", // 02
    year: '2-digit', // 20
    day: '2-digit', // 01
  };
  console.log(dataAtual.toLocaleDateString('pt-BR', personalizandoData));
  // segunda-feira, 09/11/20

  const personalizandoTempo = {
    hour: 'numeric', // 01
    minute: 'numeric', // 05
    second: 'numeric', // 09
  }
  console.log( dataAtual.toLocaleTimeString('pt-BR', personalizandoTempo) );
  // 01:05:09

  const personalizandoDataTempo = {
    dateStyle: "medium", // 9 de nov. de 2020
    timeStyle: "short", // 01:05
  }
  console.log( dataAtual.toLocaleString('pt-BR', personalizandoDataTempo) );
  // 9 de nov. de 2020 01:05

  const MesAno = {
      month: "numeric",
      year: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', MesAno) );
  //  11/2020

  const SemanaHora = {
    weekday: "long",
    hour: 'numeric',
    minute: 'numeric',
  }
  console.log( dataAtual.toLocaleString('pt-BR', SemanaHora) );
  // Wednesday 2:45 PM 

//SETTERS 

const dataAtual = new Date();

dataAtual.setFullYear(1998);
console.log( dataAtual );

dataAtual.setMonth(1);
console.log( dataAtual );

dataAtual.setDate(20);
console.log( dataAtual );

dataAtual.setHours(11);
console.log( dataAtual );

dataAtual.setMinutes(0);
console.log( dataAtual );

dataAtual.setSeconds(59);
console.log( dataAtual );

dataAtual.setMilliseconds(15);
console.log( dataAtual );

dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);

const dataAtual = new Date("2020-11-09 01:05:09");
console.log(dataAtual.toDateString());
// Impressão: Mon Nov 09 2020

dataAtual.setTime(886302309000);
console.log(dataAtual.toDateString());
// Impressão: Sun Feb 01 1998 

