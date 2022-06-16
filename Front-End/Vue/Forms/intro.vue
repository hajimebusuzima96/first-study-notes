/*
Já aprendemos que é através da diretiva v-on:submit que o Vue.js 
vai saber que o botão de um formulário foi clicado e que ele precisa 
chamar um método para executar uma ação.

Existem algumas rotinas que precisamos executar baseadas em uma ação
do usuário, como por exemplo, criptografar um texto quando o usuário clicar em um botão

O Vue.js só consegue executar essa rotina se ela for criada dentro do objeto do tipo Vue.
Essa rotina ou função é chamada de método

Uma função anônima (conceito da linguagem JavaScript) é uma função que não possui 
um nome e que são atribuídas a uma variável, propriedade ou passadas como parâmetro
para uma função
Métodos são funções criadas dentro do objeto Vue definidas dentro da propriedade methods

Já sabemos que a diretiva v-on:submit vai executar um método quando o botão de um
formulário for clicado

A diretiva v-on pode ser substituída por @ como visto no código abaixo:

<form @submit.prevent="criptografar">
  ...
</form>

Lembrando que o método criptografar só pode ser chamado porque foi 
criado dentro do objeto do tipo Vue.

A diretiva v-on:submit executa uma função sempre que o botão do formulário for clicado
*/