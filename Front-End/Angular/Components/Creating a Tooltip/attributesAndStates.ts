/*
Pronto para fazer a div.tooltip aparecer e sumir na página? 
Ótimo! É o que faremos nessa aula.

O componente não manipula o HTML do seu template diretamente
Antes de começar precisamos estabelecer uma regra: na classe 
do componente devemos evitar manipular o HTML do template do 
componente diretamente. Para isso utilizamos as diversas formas
 binding disponíveis: data binding, property binding, class binding, etc.

Lembra de quando falamos sobre o estado do componente na aula 2? 
Devemos fazer com que todas as mudanças necessárias no template 
sejam controladas por alguma propriedade do componente. Dessa forma, 
um evento pode executar um método do componente que altera essa 
propriedade e essa mudança pode transformar a página.

No nosso caso, essa propriedade é visible e é ela quem vai controlar 
quando a div.tooltip estará visível ou não.


Sabendo disso, vamos começar criando um componente que contenha a propriedade 
visible, um booleano com valor inicial false, além de dois métodos que atribuem 
a esse booleano os valores true ou false.

Abra o arquivo tooltip-example.component.ts e adicione o Código
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent {

  public visible = false;

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }
}

/*
O método exibeTooltip() será invocado sempre que o evento mouseover for emitido,
deixando o texto da Tooltip visível na página.


O método escondeTooltip() será invocado sempre que o evento mouseleave for emitido, 
deixando o texto da Tooltip invisível na página.

Para que essa comunicação entre o mouse e a classe do componente aconteça precisamos
configurar o event binding. Abra o arquivo tooltip-example.component.html e adicione 
nele o Código


<p class="term"
    (mouseover)=”exibeTooltip()”
    (mouseleave)=”escondeTooltip()”>DOM</p>

<div class="tooltip" [class.visible]="visible">
  <p>The Document Object Model (DOM) connects web pages to scripts or
  programming languages by representing the structure of a document—such
  as the HTML representing a web page—in memory. Usually that means
  JavaScript, although modelling HTML, SVG, or XML documents as objects
  is not part of the JavaScript language, as such.</p>
</div>

Dessa forma, toda vez que o mouse estiver sobre o elemento p.term, exibeTooltip()
será invocado graças a configuração (mouseover)=”exibeTooltip()”. Quando o mouse 
sair do elemento p.term, escondeTooltip() será invocado, graças a configuração 
(mouseleave)=”escondeTooltip()”. Apenas event binding, nada demais.

Mas e quanto a classe "visible"? Como ela é adicionada e removida?
A div.tooltip também possui uma configuração feita através de class binding: 
[class.visible]="visible". Isso faz com que ela receba a classe CSS .visible 
sempre que a propriedade visible do componente for true. Quando essa propriedade 
for false, a classe CSS .visible será removida desse elemento.


Class binding é como controlamos quais classes um elemento deve receber ou renunciar.


*/