/*
Veja no Código  o conteúdo que deve ser inserido no arquivo App.css.

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #282c34;
}

h1 {
    color: #fff;
}

p {
    color: gray;
    font-size: 22px;
}


Veja no Código  a alteração feita no arquivo App.js para importar o arquivo App.css
*/

import './App.css';

function App() {
 return (
  <div>
   <h1>Hello world</h1>
   <p>Com React JS</p>
   <p>Criado por Mateus Correa</p>
  </div>
 );
}

export default App;

/*
Neste exemplo utilizamos o arquivo App.css, porém podemos criar qualquer arquivo 
.css para inserir os elementos da página, basta importá-lo no arquivo App.js.

Estilizando utilizando uma classe CSS
Vamos avançar mais um pouco na estilização, para isso veja no seguinte como
adicionar uma classe no segundo parágrafo:

Veja no Código o arquivo App.css com a classe autor definida.

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #282c34;
}

h1 {
    color: #fff;
}

p {
    color: gray;
    font-size: 22px;
}

.autor {
    font-style: italic;
    text-decoration: underline;

}


Veja no Código como a classe autor foi inserida no arquivo App.js.


*/

import './App.css';

function App() {
 return (
  <div>
   <h1>Hello world</h1>
   <p>Com React JS</p>
   <p className="autor">Criado por Mateus Correa</p>
  </div>
 );
}

export default App;

/*
Assim como criamos arquivos .css para definir os estilos a páginas que usavam apenas
HTML e CSS, também utilizamos para estilizar páginas React JS - a única parte que muda
é na sua importação no arquivo .js e na inserção da classe na tag HTML.
*/

