/*
Antes de criar o componente HomePage vamos criar o componente Footer 
que é muito similar ao componente Header

Criando o componente Footer

Crie uma pasta chamada Footer e nela um arquivo chamado index.js no mesmo 
diretório que estamos salvando nossos componentes (src/componente),

*/

import React from 'react';

export default function Footer() {
  return (
    <footer>Desenvolvido com React</footer>
  );
}


/*
Você já deve estar se familiarizando com essa estrutura, mas vamos relembrar a 
funcionalidade desse código.

Entendendo o código

1:

import React from 'react';

Lembrando que precisamos importar o React da dependência react 
para que ele entenda que este é um componente que será exibido na tela.

2:

export default function Footer() {

Estamos criando uma função JavaScript com o nome do próprio componente.
Dessa vez já estamos exportando esse componente direto no cabeçalho da função.

3:

return (

Utilizamos a palavra-chave return e colocaremos entre 
parênteses o que será exibido na tela para o usuário.

4:

<footer>Desenvolvido com React</footer>

Dessa vez utilizamos outra tag JSX chamada <footer> com o texto Desenvolvido com React.

Perceba que criar e exportar componentes no React é muito 
fácil e com pouco código já criamos mais um componente.

*/