/*
Vamos então estilizar os componentes que estão faltando, começando pelo Card.

Estilizando Card
Vamos seguir o mesmo padrão e criar um arquivo chamado style.css 
dentro da pasta do componente Card, 

.card-container {
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  width: 200px;
  height: 200px;
  background-color:#f1f1f1;
  margin: 10px;
  padding: 10px
}

Em resumo estamos inserindo uma borda arredondada (border e border-radius) 
e um fundo (background-color) da cor #f1f1f1.

Lembrando que aqui estamos estilizando a classe CSS card-container.

O estilo foi criado, agora vamos importar dentro do arquivo do componente Card
*/ 

import React from 'react';
import './style.css';

export default function Card() {
 return (
  <div className="card-container">
   <p>Componentes:</p>
   <p>Facilita em manter partes menores funcionando corretamente</p>
   <p>Você pode reutilizá-los, ou seja, menos código para se escrever</p>
  </div>
 );
}

/*
 estamos importando o estilo que será usado neste componente.

Repare que inserimos a classe card-container através do atributo className. 
Desta forma este elemento (<div>) terá o estilo da classe card-container.

Repare que os Cards ficaram um embaixo do outro. Para alterar isto precisamos
estilizar o componente HomePage que é onde os Cards estão inseridos.

Estilizando HomePage
Crie um arquivo chamado style.css na mesma pasta do componente HomePage

.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}

Em resumo estamos colocando um elemento ao lado do outro (neste caso os Cards )
através da propriedade display: flex;.

Feito isso precisamos inserir esta classe dentro do elemento principal do nosso
componente HomePage. Para isso insira o Código no arquivo index.js da pasta HomePage

*/ 

import React from 'react';
import Card from '../Card/';
import './style.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

/*
Mais uma vez estamos importando o arquivo style.css da mesma pasta e inserimos 
a classe CSS home-page através do atributo className.

Feito isso, nosso próximo passo é estilizar o Footer.

Estilizando Footer

Assim como nos outros componentes, crie um arquivo chamado style.css 
na mesma pasta do componente Footer, 

footer {
    background-color: #d34040;
    color: #fff;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center
}


Lembrando que aqui estamos estilizando a tag footer e não uma classe.

Em seguida precisamos importar este arquivo dentro do componente Footer.
Para isso insira o Código  no arquivo index.js da pasta Footer.

*/

import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer>Desenvolvido com React</footer>
  );
} 


