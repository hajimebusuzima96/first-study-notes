/*
Com nossos dois componentes criados (Header e Footer) 
chegou a hora de exibi-los no navegador.

A princípio não vamos nos preocupar com a estilização e 
sim em aprender a parte lógica. No final deste curso vamos estilizar toda nossa aplicação.

Nesta aula vamos importar os componentes Header e Footer para nosso componente principal App.

Abra seu arquivo App.js. Ele terá a seguinte estrutura apresentada no Código

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
Vamos agora importar nossos componentes.

Importando componentes

O código do componente App modificado segue no Código
*/ 

import React from 'react';
import './App.css';

import Header from './componentes/Header/';
import Footer from './componentes/Footer/';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App; 


/*
Entendendo o código


import Header from './componentes/Header/';
import Footer from './componentes/Footer/';

Nestas linhas estamos, basicamente, importando os componentes Header e Footer 
para dentro do nosso arquivo App.js. Desta forma conseguimos exibi-los no nosso componente App.

Comentários importantes:

Esses componentes estão em uma pasta dentro do mesmo diretório do arquivo App.js, 
por isso utilizamos ./componentes/, o caminho até chegar ao nosso arquivo.

Por se tratar de um arquivo chamado ‘index.js’ dentro da pasta de ambos os 
componentes, não precisamos inserir o seu nome, ou seja, ./componentes/Header/index.js. 
Como não foi passado o nome do arquivo, o JavaScript vai chamar o arquivo 
principal da pasta que será o que possui o nome index.js.

Podemos perceber uma ligeira diferença de sintaxe nos códigos de importação - veja:
import React from 'react';
import Header from './componentes/Header/';

Observe que na primeira linha não indicamos nenhum diretório. Na segunda linha, 
indicamos o diretório ./componentes/.

Essa diferença existe pois na primeira linha estamos importando um componente 
de uma dependência (react). Na segunda linha estamos importando o componente do 
diretório da aplicação.

Não se preocupe: quanto mais você programar em React, mais natural para você será essa mecânica.

<Header />
<Footer />

Agora que já importamos nossos componentes, basta inseri-los dentro do código JSX.

Repare que eles são codificados como se fossem uma tag comum, ou seja, 
iniciando com < e finalizando com />.

Devemos seguir o padrão de escrita case sensitive utilizado no arquivo do
componente. Ou seja, usamos nesse exemplo a primeira letra maiúscula, 
seguindo o padrão utilizado. A convenção é criar componentes com a primeira letra em maiúsculo.

Tudo pronto agora basta abrir o seu navegador com a aplicação em

execução e veja o resultado. Caso já tenha encerrado a sua aplicação
execute novamente o comando yarn start no terminal.


*/