/*
Caso você já saiba como criar um projeto e um componente, 
recomendo que leia pelo menos a parte sobre o CSS nessa aula, pois será 
importante para que tudo funcione como o esperado.

Criando o projeto
Para acompanhar esse curso você precisará de um projeto e um componente.

Crie o projeto com esse comando:
*/

ng new tooltip

// Agora crie um componente com esse comando:

ng g c tooltip-example
 


/*
Nota importante sobre o CSS
Em um certo momento faremos com que o texto da Tooltip mude de posição de acordo com o 
posição mouse. Isso depende muito de CSS, porque as propriedades left e right, usadas 
para mover a div.tooltip de lugar na página, só funcionarão se esse elemento estiver 
com a propriedade position tiver algum valor, exceto fixed.

Ainda, queremos que o elemento div.tooltip esteja invisível quando a página abrir, 
então precisamos atribuir a esse elemento display: none inicialmente.

Então, antes da gente começar, abra o arquivo tooltip-example.component.css e 
adicione o Código


.tooltip {
  background-color: #444;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  display: none;
  max-width: 500px;
  padding: 10px 15px;
  position: absolute;
}

.tooltip p {
  font: 14px/1.6 "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}

.visible {
  display: inline-block;
}

.term {
  cursor: pointer;
  display: inline-block;
}

*/
