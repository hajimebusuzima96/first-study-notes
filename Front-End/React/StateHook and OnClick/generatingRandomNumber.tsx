/*
Com a variável de estado criada, nosso próximo passo é gerar um número aleatório 
e exibir na tela, 
Para que isso seja possível vamos criar a função que vai gerar o número aleatório.
Em seguida vamos associá-la ao evento onClick,

*/

import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

  function gerarNumero() {
    const novoNumero = Math.floor(Math.random() * (100-1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return(
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{ numeroAleatorio }</h1>

      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>

        <button onClick={ gerarNumero }>
          Gerar número
        </button>
      </div>
    </div>
  );
}

/*
1:

function gerarNumero() {
  const novoNumero = Math.floor(Math.random() * (100-1) + 1);
  setNumeroAleatorio(novoNumero);
}

criamos a função que vai gerar o número aleatório.

basicamente criamos uma variável que vai receber o número aleatório. 
Utilizamos Math.random() * (100-1) + 1 para gerar um número aleatório entre 1 e 100. 
Em seguida Math.floor para retornar um número inteiro.

Math é um objeto nativo da linguagem JavaScript. 
Ele possui propriedades e métodos para funções matemáticas.

No nosso exemplo utilizamos os seguintes métodos:

random() - para gerar um número aleatório;
floor() - para arredondar o número e retornar um inteiro.

atribuímos o valor gerado a variável de estado numeroAleatorio através 
da função setNumeroAleatorio().

Aqui vemos o conceito de Hook explicado na aula anterior. 
Observe que chamamos a função setNumeroAleatorio passando um novo 
valor para atualizar a variável de estado.

Nesse momento o React vai renderizar a tela, atualizando o valor de 
numeroAleatorio exibido na página.

2:

<button onClick={ gerarNumero }>

Para chamarmos a função gerarNumero, quando o botão for clicado, utilizamos o evento onClick.
No React utilizamos camelCase para nomear eventos.

A função gerarNumero que vamos passar para o evento ‘onClick’ 
precisa ser passada entre chaves. Lembrando que no JSX colocamos código JavaScript entre chaves.

Ao salvar o arquivo podemos ver no navegador nossa aplicação 
funcionando


*/