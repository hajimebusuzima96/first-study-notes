// ESTRUTURAS DE REPETIÇÃO JAVASCRIPT 

// while
// do/while
// for
// for .. in
// for .. of 


for ( let contador = 0; contador < 10; contador++ ){

    console.log("O número é: " + contador);

}

// O número é: 0
// O número é: 1
// O número é: 2
// O número é: 3
// O número é: 4
// O número é: 5
// O número é: 6
// O número é: 7
// O número é: 8
// O número é: 9 


let contador = 0;

while ( contador < 5 ) {

    console.log( contador + " é menor que 5" );

    contador++;

}

// 0 é menor que 5
// 1 é menor que 5
// 2 é menor que 5
// 3 é menor que 5
// 4 é menor que 5 

let valor_produto = 500;

for ( let contador = 1; contador <= 5; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00
// Nº de parcelas: 5 - Valor da parcela: R$100.00 


let valor_produto = 500;
let total_parcelas = 4; // valor informado pelo usuário

for ( let contador = 1; contador <= total_parcelas; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00 


//WHILE 

let contador = 0;

while ( contador < 5 ) {

            console.log(contador);
            contador++;

}

// 0
// 1
// 2
// 3
// 4

let numero = 3;
let contador = 0;

console.log("Tabuada de multiplicação - Nº " + numero);

while ( contador <= 10 ) {

    let resultado = numero * contador;

    console.log( numero + " x " + contador + " = " + resultado );

    contador++;

}

// Tabuada de multiplicação - Nº 3
// 3 x 0 = 0
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30

let capital_emprestado = 3000;
let taxa_juros = 0.02; // 2%

let contador = 1;
let parcelas_totais = 5;

while ( contador <= parcelas_totais ) {

    let numero_parcela = contador;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    console.log("A taxa de juros no período de " + numero_parcela + " mes(es) é de R$" + juros_emprestimo + ",00");

    contador++;

}

// A taxa de juros no período de 1 mes(es) é de R$60,00
// A taxa de juros no período de 2 mes(es) é de R$120,00
// A taxa de juros no período de 3 mes(es) é de R$180,00
// A taxa de juros no período de 4 mes(es) é de R$240,00
// A taxa de juros no período de 5 mes(es) é de R$300,00

let contador = 10;

while ( contador > 0 ) {

    console.log( contador );
    contador--;

}

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

//COLEÇÃO DE DADOS
 

let paises = ["Brasil", "Suíça", "França", "Japão"];

let contador = 0;

while ( contador < paises.length ) {

    console.log(paises[contador]);
    contador++;

}

// Brasil
// Suíça
// França
// Japão

let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while ( contador < numeros.length ) {

    if( numeros[contador] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }

    contador++;

}

console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);

// O total de números ímpares é: 3
// O total de números pares é: 5

let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno_nome = alunos[contador];

    console.log( "Aluno: " + aluno_nome );
    contador++;

}

// Aluno: Diogo
// Aluno: Carlos
// Aluno: Danilo
// Aluno: Pedro
// Aluno: César

//BREAK E CONTINUE 

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while ( contador < funcionarios.length ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

}

// Id: 1
// Nome: Bruna
// Média: 8


// Id: 2
// Nome: Laura
// Média: 7


// Id: 5
// Nome: Rafael
// Média: 10

// DO WHILE 

let contador = 0;

do {

    console.log(contador);
    contador++;

} while ( contador < 5 );

// 0
// 1
// 2
// 3
// 4

let contador = 0;

do {

    console.log(contador);
    contador++;

} while ( contador < 0 );

// 0

let contador = 0;

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

do {

    console.log(meses[contador]);
    contador++;

} while ( contador < meses.length );

// Janeiro
// Fevereiro
// Março
// Abril
// Maio
// Junho
// Julho
// Agosto
// Setembro
// Outubro
// Novembro
// Dezembro

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let contador = 0;
let encontrouHabilitado = false;

do {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
} while ( contador < funcionarios.length );

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

do {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

} while ( contador < alunos.length );


// Id: 1
// Nome: Bruna
// Média: 8


// Id: 2
// Nome: Laura
// Média: 7


// Id: 5
// Nome: Rafael

let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

do {

    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;

} while( contador < total_dias );

// Dia(s) de atraso: 1 - mensalidade atualizada: R$102,00
// Dia(s) de atraso: 2 - mensalidade atualizada: R$104,00
// Dia(s) de atraso: 3 - mensalidade atualizada: R$106,00
// Dia(s) de atraso: 4 - mensalidade atualizada: R$108,00
// Dia(s) de atraso: 5 - mensalidade atualizada: R$110,00
// Dia(s) de atraso: 6 - mensalidade atualizada: R$112,00
// Dia(s) de atraso: 7 - mensalidade atualizada: R$114,00
// Dia(s) de atraso: 8 - mensalidade atualizada: R$116,00
// Dia(s) de atraso: 9 - mensalidade atualizada: R$118,00

//FOR 

let multiplicador = 8;

console.log("Tabuada de multiplicação do Nº " + multiplicador);

for ( let contador = 0; contador <= 10; contador++ ) {

    let resultado = multiplicador * contador;

    console.log( multiplicador + " x " + contador + " = " + resultado );

}

// 8 x 0 = 0
// 8 x 1 = 8
// 8 x 2 = 16
// 8 x 3 = 24
// 8 x 4 = 32
// 8 x 5 = 40
// 8 x 6 = 48
// 8 x 7 = 56
// 8 x 8 = 64
// 8 x 9 = 72
// 8 x 10 = 80

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for( let contador = 0; contador < meses.length; contador++ ) {

    console.log(meses[contador]);

}

// Janeiro
// Fevereiro
// Março
// Abril
// Maio
// Junho
// Julho
// Agosto
// Setembro
// Outubro
// Novembro
// Dezembro

let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let encontrouHabilitado = false;

for ( let contador = 0; contador < funcionarios.length; contador++ ) {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

}

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan

let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
   ];
 
   for ( let contador = 0; contador < alunos.length; contador++ ) {
 
    let aluno = alunos[contador];
 
    if ( aluno.media < 6 ) {
    continue;
    }
 
    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");
 
   }
 
 
   // Id: 1
   // Nome: Bruna
   // Média: 8
 
 
   // Id: 2
   // Nome: Laura
   // Média: 7
 
 
   // Id: 5
   // Nome: Rafael
   // Média: 10

// FOR IN 

let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

for ( let dados in aluno ) {
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25

let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {

        let preco = propriedade;

        let desconto = ( carro[preco] * percentual_desconto ) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }

}

// nome: Argo
// marca: Fiat
// Novo preço: R$47500,00
// ano: 2020

let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){

    let produto = produtos[contador];

    for ( let propriedade in produto ){

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }

    }

    console.log("\n");
}

// id: 1
// nome: pizza
// preço atualizado: R$45,00


// id: 2
// nome: macarronada
// preço atualizado: R$20,00


// id: 3
// nome: lasanha
// preço atualizado: R$40,00


// id: 4
// nome: nhoque
// preço atualizado: R$25,00

// FOR OF 

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    console.log("Email: " + email);

}

// Email: danilo@email.com
// Email: jessica@email.com
// Email: luana@email.com
// Email: gustavo@email.com

let clientes_array = [ //array de coleção de objetos
    {id: 1, nome: "Mônica", telefone: "99999-6565"},
    {id: 2, nome: "Tânia", telefone: "99999-0778"},
    {id: 3, nome: "Carlos", telefone: "99999-0551"}
];

for ( let cliente of clientes_array ) {

    let nome = cliente.nome;
    let telefone = cliente.telefone;

    console.log("Nome: " + nome + " - Telefone: " + telefone);

}

// Nome: Mônica - Telefone: 99999-6565
// Nome: Tânia - Telefone: 99999-0778
// Nome: Carlos - Telefone: 99999-0551

let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

let percentual_desconto = 10;

for ( let produto of produtos_array ) {

    let nome = produto.nome;
    let preco = produto.preco;

    let valor_desconto = (preco * percentual_desconto) / 100;
    let novo_preco = preco - valor_desconto;

    console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

}

// Novo valor do produto mouse: R$45,00
// Novo valor do produto teclado: R$81,00
// Novo valor do produto monitor: R$315,00
// Novo valor do produto nobreak: R$540,00

let notas_trimestrais = [9, 7, 6, 7];

let total_notas = notas_trimestrais.length;
let soma_notas = 0;

for ( let nota of notas_trimestrais ) {

    soma_notas = soma_notas + nota;

}

let media = soma_notas / total_notas;

console.log("Média: " + media);

if ( media >= 7 ) {

    console.log("Aprovado");

} else if ( media >= 6 && media < 7 ) {

    console.log("Recuperação");

} else {

    console.log("Reprovado");

}

// Média: 7.25
// Aprovado



