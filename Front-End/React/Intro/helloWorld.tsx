/*
Para criar o Hello World vamos alterar o projeto da aula anterior. 
Veja qual arquivo alteramos para exibir na tela o texto Hello World:

Veja no Código o conteúdo que deve ser inserido no arquivo App.js.
*/

function App() {
 return (
  <div className="container">
   <h1>Hello world</h1>
  </div>
 );
}

export default App;

/*
Entendendo a sintaxe

No React JS, exibir o conteúdo na tela significa criar uma função que retorna
elementos HTML. Essa função é chamada de componente.

Ao analisar o código criado a seguinte dúvida surge: por que a sintaxe para 
exibir elementos na tela agora é outra?

Veja no Código  o conteúdo atualizado do arquivo App.js.

*/ 

function App() {
 return (
  <div>
   <h1>Hello world</h1>
   <p>Com React JS</p>
   <p>Criado por Athos Reis</p>
  </div>
 );
}

export default App;

/*
Já sabemos que para exibir um elemento na página basta inserir a sua tag 
no retorno da função, porém existe um caso que não é permitido.

Veja no Código  um exemplo onde a tag header é o elemento pai.
*/ 

function App() {
    return (
     <header>
      <h1>Motorola</h1>
   
      <a href="index.html">
       <img src="assets/logo.png" alt="Motorola" title="Motorola"/>
      </a>
     </header>
    );
   }
   
   export default App; 


/*
Trabalhar com uma biblioteca requer que o desenvolvedor decore a sua sintaxe. 
Em contrapartida, depois de se familiarizar com o código, o processo de 
desenvolvimento se torna mais rápido e com menos repetições de código.
*/