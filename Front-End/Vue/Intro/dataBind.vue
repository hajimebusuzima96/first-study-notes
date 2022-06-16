/*
O Vue.js é um framework JavaScript que, semelhante a outros, como Angular,
e React, tem o objetivo de otimizar a criação de interfaces web modernas e reativas.
Para isso, ele utiliza conceitos como data bind (uni e bidirecional) e componentes,
muito comuns no desenvolvimento web atualmente.

Tendo como um de seus diferenciais a leveza (para usar o framework, 
basta incluir um pequeno arquivo JavaScript), o Vue.js permite,
por meio de uma sintaxe simples, ligar a interface gráfica da aplicação a dados 
e métodos do JavaScript. Com ele, tarefas como exibição ou captura de dados da 
tela e exibição condicional de certos elementos, que normalmente seriam feitas 
com jQuery, são simplificadas e passam a ser gerenciadas pelo próprio framework.

Nesse artigo conheceremos os conceitos e características iniciais do Vue.js 
e veremos o que é necessário para utilizá-lo em nossos projetos.

Instalação do Vue.js
O framework Vue.js consiste de um pequeno arquivo JavaScript e, 
portanto, sua “instalação” resume-se à adição da referência a esse script na 
página HTML, seja baixando o arquivo na página oficial, seja apontando para a 
CDN (Content Delivery Network), da seguinte forma:

*/ 

<!-- Link utilizado para projetos em desenvolvimento-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

/*A partir daí, já é possível utilizar os recursos do Vue.js. 
O primeiro passo para isso é criar uma instância da classe Vue com sua 
propriedade el apontando para o id de um elemento da página, o qual 
representará o container principal da aplicação.
*/

<div id="app">

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app'
    });
</script> 

/*
Aqui é importante observar que a propriedade el da instância de Vue contém 
o símbolo de cerquilha (#), semelhante ao que fazemos no CSSpara referenciar 
o id de um elemento. Além disso, é fundamental que o script em que criamos 
essa inicialização seja adicionado após a referência ao arquivo JavaScript do framework.

Observação: o nome dado ao objeto Vue (app) não precisa ser igual ao id da 
div que estamos referenciando.



Data bind unidirecional
Um dos principais recursos do Vue.js é seu mecanismo de data binding,
uni e bidirecional, que permite ligar as tags HTML aos dados definidos
no JavaScript. Uma vez feita a ligação, o elemento da interface
passará a ser atualizado sempre que os objetos no script sofrerem mudanças.
A essa relação damos o nome de one-way bindind. Quando essa atualização
acontece nos dois sentidos, podemos dizer que temos o two-way binding.

Para realizar o data bind, é necessário declarar a propriedade data no objeto
Vue e definir nela as demais propriedades que serão ligadas às tags HTML. 
Feito isso, para exibir seu valor na tela podemos usar a sintaxe {{ propriedade }}
*/

<div id="app">
    <h1>{{ titulo }}</h1>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data : {
            titulo : 'Página de Cursos'
        }
    });
</script>

/*
temos uma tag h1 que deverá exibir o conteúdo da propriedade titulo,
definida na linha 10. Aqui é importante observar que a instância de Vue está diretamente
ligada à div de id app. Logo, para que o data bind funcione, as tags com as quais
desejamos ligar os dados devem estar no interior dessa div.

Ao abrir esse documento no browser, veremos que o Vue.js renderiza o conteúdo dinamicamente


Data bind bidirecional
No exemplo anterior, fizemos uso do data bind unidirecional. 
Dessa forma, não podíamos fazer alterações nos dados a partir da view. 
Para que isso seja possível, devemos realizar essa ligação por meio da diretiva v-model.

Para testar esse recurso, podemos inserir um input dentro da div app.
Ao alterar o conteúdo desse input, o objeto que está ligado a ele será
automaticamente atualizado. Vejamos um exemplo disso no código abaixo:
*/ 

<input type="text" v-model="titulo">

/*
Com isso, sempre que o conteúdo do input for alterado, essa mudança será
refletida na propriedade titulo e, consequentemente, em todos os elementos
visuais que estiverem ligados a ela, como a tag h1, adicionada anteriormente.

Além das funcionalidades básicas de ligação de dados, o Vue.js permite, também,
ligar os elementos da tela a funções do JavaScript, simplificando o tratamento de eventos.
*/