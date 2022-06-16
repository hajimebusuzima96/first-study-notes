/*
Nossa aplicação está quase pronta, agora só falta o corpo que será o 
componente HomePage, mas antes disso note que dentro dele possui um outro
componente menor, o Card.

Nesta aula vamos criar o componente Card


Criando o Card
Crie uma nova pasta com o nome Card e dentro dela o arquivo index.js 
no mesmo diretório que estamos salvando nossos componentes (src/componentes/)

Abra o arquivo e digite
*/ 

import React from 'react';

export default function Card() {
 return (
  <div>
   <p>Componentes:</p>
   <p>Facilita em manter partes menores funcionando corretamente</p>
   <p>Você pode reutilizá-los, ou seja, menos código para se escrever</p>
  </div>
 );
} 


/*
Vamos analisar as partes do código que ainda não conhecemos:

<div>
  <p>Componentes:</p>
  <p>Facilita em manter partes menores funcionando corretamente</p>
  <p>Você pode reutilizá-los, ou seja, menos código para se escrever</p>
</div>

Na linha 5 utilizamos a tag <div>. Nas linhas 6, 7 e 8 utilizamos a tag <p>, 
um texto e em seguida fechamos essa tag </p>. Assim como no HTML essa tag 
representa um parágrafo.

Nosso componente Card está criado, na próxima aula vamos criar 
nosso último componente HomePage.
*/