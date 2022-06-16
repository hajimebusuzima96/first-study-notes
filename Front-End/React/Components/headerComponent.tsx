/*
Na aula anterior você criou o componente App 
Isso foi feito através do Código
*/ 

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;


/*
No React existem diversas formas de criar um componente, 
isso porque ele é criado utilizando a sintaxe de uma função JavaScript que é 
exportada. A seguir veremos alguns exemplos.

Podemos criar e exportar um componente utilizando 
uma função nomeada como pode ser visto no Código
*/ 

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App; 

/*
Repare que criamos o componente através da função nomeada 
e  o exportamos, porém podemos criá-lo e exportá-lo na mesma linha como visto no Código
*/ 

import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="App">

    </div>
  );
} 

/*
Além de utilizar uma função nomeada também podemos utilizar uma arrow function 
para criar um componente como pode ser visto no Código
*/ 

import React from 'react';
import './App.css';

const App = ( ) => {
  return (
    <div className="App">

    </div>
  );
}

export default App; 


/*
Independentemente de qual tipo de função será utilizado para criar o componente, 
o importante é que ele seja exportado. Sem exportá-lo ele não poderá ser exibido na tela.

Com o nosso componente App criado, agora podemos começar a construir os componentes 
filho que vão compor nossa página. Nessa aula vamos criar o componente Header


Criando uma pasta para os componentes
Para organizar melhor os arquivos do nosso código vamos criar uma pasta chamada
‘componentes’ dentro do diretório src.

Dentro do diretório componentes vamos criar uma pasta chamada Header e 
nela um arquivo chamado index.js. Esse arquivo terá o código do nosso componente Header

Abra esse arquivo e vamos codar o nosso componente.

Criando o Header

*/ 
import React from 'react';

function Header() {
  return (
    <header>Trabalhando com componentes</header>
  );
}

export default Header;


/*
Entendendo o código
1:

import React from 'react';

Sempre que formos criar um novo componente, ou seja, 
um elemento que vamos colocar na tela, precisamos importar 
o componente React da dependência react.

Dessa forma o React vai entender que esse código é um 
componente que será renderizado na tela. Isso é uma mecânica 
padrão da construção de componentes com React.

2:

function Header() {

Na linha 3 criamos uma função JavaScript com o nome do próprio componente - 
novamente, um comportamento padrão na codificação de componentes React.

3:

return (

Todo componente precisa retornar o que será renderizado na tela. 
Isso é feito utilizando a palavra-chave return.

Nosso componente está quase pronto porém ele ainda não vai exibir nada na tela. 
O que precisamos agora é colocar dentro dos parênteses o que vamos exibir,
nesse caso o texto "Trabalhando com componentes".

Vamos colocar uma tag JSX <header> (ver nota) com o texto "Trabalhando com componentes".
*/

import React from 'react';

function Header() {
  return (
    <header>Trabalhando com componentes</header>
  );
} 


/*
A sintaxe que usamos dentro do return se chama JSX e é bem parecida com HTML. 
Você não precisa se preocupar em se tornar um expert em JSX, pois a sintaxe é 
facilmente aprendida durante a programação em React - e é muito similar ao HTML tradicional.


1:

export default Header;

Agora com nosso componente criado precisamos exportá-lo para que o componente
App possa consumi-lo. Fazemos isso com o uso de export.

Outra forma de exportar nosso componente é direto no cabeçalho da função. Veja como ficaria:
*/

export default function Header() {
    return (
      <header>Trabalhando com componentes</header>
    );
  }

/*
A palavra-chave default indica que este será o componente principal deste arquivo 
(de fato, só teremos um componente no arquivo 'Header/index.js' do exemplo).

*/ 

import React from 'react';

function Header() {
  return (
    <header>Trabalhando com componentes</header>
  );
}

export default Header; 


/*
Todos os componente usados neste curso são criados como padrão do arquivo, 
ou seja, utilizando a palavra chave default. Porém é importante que você 
saiba que é possível criar um componente que não é padrão.

Um componente que não é padrão é criado da seguinte forma:

export function MeuComponente () { ... }

ou

function MeuComponente () { ... }

export MeuComponente;
Resumindo basta não utilizar a palavra chave default.
Usamos a palavra chave 'default' para exportar um componente padrão.
*/
