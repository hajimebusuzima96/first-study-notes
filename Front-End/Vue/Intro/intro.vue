/*
O Vue.js é um framework JavaScript utilizado na construção das views 
de aplicações baseadas em HTML. Seu principal objetivo é permitir a 
interação uni e bidirecional dos elementos HTML com os dados e métodos
definidos via JavaScript.

Nota: A url de importação do Vue.js foi alterada para os links a seguir:

Quando seu projeto estiver em desenvolvimento:

<!-- Inclui warnings que são úteis quando o projeto estiver em desenvolvimento-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
Quando seu projeto estiver em produção:

<!-- Versão otimizada para produção em produção -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>

O Vue.js é um framework JavaScript que tem por objetivo principal interligar 
de forma eficiente os elementos HTML com os dados e métodos definidos via JavaScript.

Progressivo e focado nas views
Da definição do Vue.js é importante perceber que ele é considerado um framework
progressivo. Isso significa que ele tem uma proposta inicial simplificada, 
mas que pode progredir quando empregado em conjunto com outras bibliotecas e 
ferramentas de desenvolvimento.

Data Bind
O data bind é um recurso que está presente na maioria dos frameworks 
JavaScript que se propõem a interagir com as views, como Ember.js, Angular e 
Knockout. No Vue.js não é diferente e ele implementa essa funcionalidade de 
forma bastante eficiente.

Com o Vue.js é possível realizar a ligação dos elementos HTML com os dados no 
JavaScript de forma uni e bidirecional. Ou seja, é possível ligar uma tag a 
uma propriedade, de forma que se o usuário alterar o dado na tela, essa 
informação será automaticamente alterada na variável JavaScript.

Abaixo temos dois exemplos de data bind, sendo o primeiro unidirecional 
e o segundo bidirecional:

<h1>{{ titulo }}</h1>
<input v-model="titulo">

Diretivas
Diretivas são atributos customizados aplicados às tags HTML para dar a elas 
características adicionais.. Por exemplo, é por meio de diretivas que ligamos 
um elemento visual a uma variável no JavaScript. De forma semelhante, por meio 
de diretiva podemos condicionar a exibição de uma tag a uma expressão booleana.

Abaixo temos um exemplo de uso da diretiva condicional v-if, que faz com 
que a tag seja exibida somente se a expressão booleana atribuída a ela for verdadeira:

<p v-if="ativo">
 Usuário ativo
</p>

Componentes
Outro recurso fundamental do Vue.js são os componentes. 
Por meio deles é possível criar tags com características e comportamentos 
customizados, cujo código pode ser reaproveitado em várias páginas.

Abaixo temos um exemplo de definição de um componente chamado “card” no Vue.js:
*/ 

Vue.component("card", {
    props : ["titulo", "subtitulo"],
template : "<div>"+
            "    <h3> {{ titulo }} </h3>"+
          "      <h4> {{ subtitulo }} </h4>"+
          "</div>"
}); 

/*E a seguir temos um exemplo de uso desse componente no HTML:*/

<card titulo="O que é Vue.js"
      subtitulo="Introdução ao framework">
</card> 


/*
Entre os vários recursos oferecidos pelo Vue.js está o data bind uni e bidirecional,
que vimos em funcionamento nesse vídeo. No código abaixo vemos um exemplo de como 
fica o código HTML:
*/

<div id="app">
   <h1>{{ titulo }}</h1>
   </br>
   <input v-model="titulo">
</div>

/*
1: a div com id=”app” será o container da aplicação nessa página. 
Esse id será referenciado posteriormente ao instanciar o objeto do tipo Vue;

2: aqui temos um exemplo de data bind unidirecional.
Note o uso das chaves duplas com o nome da variável/expressão que será impressa;

3: já aqui temos um exemplo de data bind bidirecional.
Aqui a diretiva v-model faz a ligação do input com a variável 
titulo definida no JavaScript. Dessa forma, alterações na variável serão 
automaticamente exibidas nas views e se o usuário alterar o valor do input, 
a variável será também modificada.

Para que isso funcione é necessário importar o script do Vue.js:

<script src="https://unpkg.com/vue"></script>


 <script>
    var app = new Vue({
          el : "#app",
          data : {
          titulo : "O que é Vue.js"
          }
    });
 </script>


1: toda aplicação que use Vue.js precisa instanciar um objeto do tipo Vue;

2: a propriedade el indica qual elemento HTML vai representar esse objeto.
No caso, será a div com id=”app”;

3: as propriedades do objeto Vue são definidas dentro da propriedade data;

4: aqui definimos apenas a propriedade titulo, que foi ligada aos 
elementos h1 e input do HTML.


*/

