/*
O código da sintaxe do v-for
*/ 

var application = new Vue({
    el: '#app',
    data: {
      colecaoUsuarios: [
        "Fernando",
        "Ana",
        "Rita"
      ]
    }
  });

<div id="app">
      <ul>
        <li v-for="usuario in colecaoUsuarios">
          {{ usuario }}
        </li>
      </ul>
  </div> 

/*
No exemplo acima vimos o v-for percorrendo um array de strings,
porém ele pode ser utilizado em um array de números ou de objetos.
 */ 


var application = new Vue({
    el: '#app',
    data: {
      colecaoProdutos: [
        { id: 1, nome: 'Moto g9', valor: 1400 },
        { id: 2, nome: 'iPhone X', valor: 7000 },
        { id: 3, nome: 'Galaxy S20', valor: 3200 },
      ]
    }
  }); 

/*

<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Lista de produtos</title>
  </head>
  <body>

    <div id="app">
      <h1>Lista de produtos</h1>

      <ul>
        <li v-for="produto in colecaoProdutos">
          <h3>{{ produto.nome }}</h3>
          <p>R$ {{ produto.valor }}</p>
        </li>
      </ul>
    </div>

    <script src="script.js"></script>
  </body>
  </html>


Além de percorrer um array, o v-for pode ser utilizado para percorrer 
as propriedades de um objeto


Veja um exemplo prático da utilização do v-for percorrendo um array e outro
v-for percorrendo as propriedades de um objeto
*/ 

var application = new Vue({
    el: '#app',
    data: {
      colecaoTecnologias: [
        {
          nome: 'React',
          dados: { Stack: 'Front-end', Tipo: 'Biblioteca' }
        },
        {
          nome: 'Vue.js',
          dados: { Stack: 'Front-end', Tipo: 'Framework' }
        },
        {
          nome: 'React Native',
          dados: { Stack: 'Mobile', Tipo: 'Framework' }
        },
        {
          nome: 'Node.js',
          dados: { Stack: 'Back-end', Tipo: 'Interpretador' }
        },
      ],
    },
  });


/*
<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Tecnologias JavaScript</title>
  </head>
  <body>
    <div id="app">
      <h3>Tecnologias JavaScript</h3>

      <ul v-for="tecnologia in colecaoTecnologias">
        <li>
          {{ tecnologia.nome }}
        </li>

        <ul v-for="(valor, propriedade) in tecnologia.dados">
          <li>
            {{ propriedade }}: {{ valor }}
          </li>
        </ul>
      </ul>
    </div>

    <script src="script.js"></script>
  </body>
  </html> 
*/ 


/*
Existem algumas situações em que nem todos os elementos de um array devem
ser exibidos para o usuário, nesses casos podemos utilizar o v-for para percorrer
o array e o v-if para validar se o elemento deve ou não ser exibido.

Veja no Código o exemplo do uso de v-for e v-if com a tag template.

<template>
 <li v-for="post in colecaoPosts">
  <p v-if="post.publico">
   {{ post.conteudo }}
  </p>
 </li>
</template> 


Não é recomendado o uso do v-for e do v-if na mesma tag como exibido no código abaixo:

<ul>
  <li v-for="post in colecaoPosts" v-if="post.publico">
    {{ post.conteudo }}
  </li>
</ul>

O v-if é executado antes do v-for e por esse motivo a propriedade que está sendo
comparada poderá não existir, o que vai gerar um erro.

Veja um exemplo prático da utilização do v-for e v-if


*/ 

var app = new Vue({
    el: "#app",
    data: {
      colecaoCandidatos: [
        { id: 1, nome: "Douglas", pontos: 550, aprovado: true },
        { id: 2, nome: "Albert", pontos: 530 , aprovado: true },
        { id: 3, nome: "Carlos", pontos:200, aprovado: true },
        { id: 4, nome: "Rafaela", pontos: 100, aprovado: false },
        { id: 5, nome: "Vera", pontos: 85, aprovado: false  }
      ],
    }
  });


/*
<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Quadro de Candidatos</title>
  </head>
  <body>
    <div id="app">
      <h3>Candidatos aprovados</h3>
      <table>
        <tr>
          <th>Nome</th>
          <th>Pontuação</th>
        </tr>

        <template v-for="candidato in colecaoCandidatos">
          <tr v-if="candidato.aprovado">
            <td>{{ candidato.nome }}</td>
            <td>{{ candidato.pontos }}</td>
          </tr>
        </template>
      </table>
    </div>

    <script src="script.js"></script>
  </body>
  </html>
*/