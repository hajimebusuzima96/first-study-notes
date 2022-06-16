/*
Antes de começar a codificar nosso projeto, crie uma nova aplicação. 


Basicamente o que temos aqui:

App.js é o componente pai da nossa aplicação;

App.css é o arquivo que estiliza o componente App;

PaginaInicial/index.js é o corpo da nossa aplicação;

PaginaInicial/estilo.css é o arquivo que estiliza o corpo da nossa aplicação.


Com nossa estrutura base pronta começaremos a dar funcionalidade a nossa aplicação

Nosso primeiro passo é criar uma variável de estado e para isso abra o arquivo 
do componente PaginaInicial (componentes/Paginainicial/index.js).

Criando uma variável de estado

Segue no Código o componente com as alterações necessárias.

*/ 

import React, { useState } from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

  return(
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{ numeroAleatorio }</h1>

      <div className='area-botao'>
        <label>
          Click no botão abaixo para gerar um número aleatório:
        </label>

        <button>
          Gerar número
        </button>
      </div>
    </div>
  );
}


/*
Entendendo o código:

1:

import React, { useState } from 'react';

Para criar e utilizar uma variável de estado precisamos importar o 
Hook useState da dependência react.

Importante:

Funções não possuem estado, por isso ao serem executadas suas variáveis
deixam de ser acessíveis. Criar uma variável de estado utilizando o Hook useState 
significa preservá-la e mantê-la acessível.

Hooks são como gatilhos: mecanismo que permite ao React reagir a um momento específico.
Em nosso exemplo, usamos Hooks para renderizar a tela automaticamente toda vez 
que a variável é modificada, e por isso a chamamos de variável de estado.
Aqui utilizamos o Hook useState para criar uma variável de estado.

2:

const [ numeroAleatorio, setNumeroAleatorio ] = useState(1);

Na linha 5 consumimos o Hook useState que foi importado. A sintaxe é:

const [NOME_DA_VARIAVEL_DE_ESTADO, FUNCAO_PARA_USO_INTERNO] =
 useState(VALOR_INICIAL_DA_VARIAVEL);


Vejamos:

NOME_DA_VARIAVEL_DE_ESTADO = é a variável que queremos manter o estado e 
acompanhar a sua mudança de valor.

FUNCAO_PARA_USO_INTERNO = aqui apenas indicamos um nome de uma função. 
O React utilizará esse nome de função internamente para acompanhar a 
mudança de estado da variável. Não precisamos implementar essa função, 
apenas definir seu nome.

useState(VALOR_INICIAL_DA_VARIAVEL) = no nosso exemplo iniciamos a variável 
com o valor 1 (mas poderia ser qualquer valor).

Atribuição por desestruturação 
(conceito da linguagem JavaScript) não é assunto desta aula, 
porém vamos relembrar: desestruturar é o ato de criar variáveis a partir do 
valor de um array ou objeto, por exemplo:

let tecnologias = [‘JavaScript’, ‘React’];

const [ linguagem, frontend ] = tecnologias;

console.log(linguagem); // ‘‘JavaScript’
console.log(frontend); // ‘React’


3:

<h1>{ numeroAleatorio }</h1>

O próximo passo é exibir a variável de estado numeroAleatorio na tela dentro de h1.

Dentro do JSX conseguimos imprimir uma variável de forma bem simples, 
bastando colocá-la entre chaves. Dessa forma, o JSX vai interpretar o 
código e substituir pelo valor da variável, neste caso 1.

Ao salvar o código note que no navegador o valor 0 foi substituído 
pelo valor da variável numeroAleatorio,/ que é 1

Já temos nossa variável de estado criada e exibida na tela

A variável de estado fica no componente PaginaInicial.

*/