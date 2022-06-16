/*
Chegamos à criação do nosso último componente HomePage. 
Este componente é responsável pelo corpo da nossa aplicação que neste caso é 
composto por três componentes Card

Criando o HomePage

Crie uma pasta com o nome HomePage e dentro um arquivo chamado index.js e 
insira o seguinte código no arquivo que acabamos de criar, como vemos no Código

*/

import React from 'react';
import Card from '../Card/';

export default function HomePage() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

/*
Mais uma vez temos aqui um código padrão de criação de componente. 
Vamos analisar e reforçar apenas algumas partes:

1:

import Card from '../Card/';

Vejamos: Basicamente, estamos importando o componente Card que criamos na aula anterior.

Por se tratar de um arquivo em um diretório acima, utilizamos ../ 
e em seguida o caminho do componente (no caso é a pasta Card/).

2:

<Card />
<Card />
<Card />


Importamos o componente Card da mesma forma que fizemos com os componentes Header e Footer.
Note que estamos repetindo <Card />, com isso teremos três componentes Card na nossa HomePage.

Agora que nosso componente HomePage está criado, só precisamos importar 
ele dentro do nosso componente principal App, porém esse é o assunto para a próxima aula.

Trabalhar com componentes nos permite reutilizá-los de forma simples.
*/