/*
Com nosso ambiente preparado chegou a hora de criarmos uma aplicação 
com Vue CLI chamada de hello-world

Para criar a aplicação, abra o terminal na pasta onde quer salvar o
seu projeto e execute o comando do Código 1.

vue create hello-world

Código 1. Comando usado para criar uma aplicação com Vue CLI

Para visualizar o código criado precisamos abrir a pasta do projeto no VS Code.

Ele pode ser visualizado no navegador ao executar o comando do Código .

npm run serve

Executando a aplicação hello-world

Com o projeto aberto no VS Code e em execução no navegador,
vamos analisar a sua estrutura

Para ficar mais fácil de entender os conceitos do arquivo App.vue,
vamos alterar o seu código. Para isso, abra-o e insira o Código


*/

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Hello World</h1>
  <p>Aplicação criada com Vue CLI</p>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



/*
Até agora não tem muita diferença entre uma página criada apenas 
com HTML e CSS e uma página criada com Vue.js. Na próxima aula vamos 
alterar um pouco o código do arquivo App.vue para entendermos essa diferença.

Todo arquivo .vue é um componente Vue.js. Esse componente possui código 
HTML, Vue e CSS dentro dele


Até este momento não temos muita diferença entre criar uma página
utilizando apenas HTML e CSS e uma com o Vue.js. Nesta aula vamos alterar
o código do nosso componente para aprender a funcionalidade chamada data bind do Vue.js.

Abra o arquivo App.vue e insira o Código

*/

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{ titulo }}</h1>
  <p>{{ texto }}</p>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      titulo: 'Hello World',
      texto: 'Aplicação criada com Vue CLI'
    }
  }
}</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


/*
Com essas alterações, nossa aplicação está funcionando e utilizando 
as propriedades do componente Vue.

Parabéns!! Você já sabe preparar um ambiente para programar 
com Vue.js e a criar uma aplicação Vue.js que utiliza propriedades do componente
*/