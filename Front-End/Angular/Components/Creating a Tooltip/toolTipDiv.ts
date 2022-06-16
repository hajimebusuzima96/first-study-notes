/*
Conseguimos um grande avanço até aqui fazendo a div.tooltip aparecer e desaparecer na tela.

Passamos por duas técnicas importantes para isso:

Event binding;
Class binding.
Então, parabéns! 👏🎉

Agora vem comigo ver mais uma técnica muito utilizada, o style binding!

Capturando as coordenadas do mouse
Um recurso muito legal que as Tooltips geralmente têm é posicionar 
o texto que aparece em relação ao elemento ou a posição do mouse. 
Fazer isso da primeira forma, em relação ao elemento, requer um pouco mais de geometria, 
e uma vez que esse não é o tema deste curso vamos fazer algo mais simples, posicionando 
o texto ao lado do mouse. Embora a gente vá pelo caminho mais fácil, a técnica usada 
para ambos seria a mesma.

Primeiro, precisamos preparar o componente para armazenar as coordenadas do mouse, 
inserindo nele o atributo public mouse = { x: 0, y: 0 };. Com isso, para atribuir 
valor a essa propriedade criaremos o método alteraPosicaoDaTooltip(x: number, y: number).
Após essas duas alterações, o código do componente no arquivo tooltip-example.componente.ts
ficará igual ao do Código
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent {

  public visible = false;
  public mouse = { x: 0, y: 0 };

  alteraPosicaoDaTooltip(x: number, y: number) {
    this.mouse = { x, y };
  }

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }
} 

/*
Agora, devemos pegar as coordenadas do mouse e transmiti-las ao componente. 
É fácil porque o evento mouseover possui essa informação.

Configurando o event binding para transmitir as coordenadas do mouse
No template do componente, arquivo tooltip-example.componente.html, 
o event binding será alterado conforme vemos no Código 


<p class="term"
  (mouseover)="alteraPosicaoDaTooltip($event.x, $event.y); exibeTooltip()"
  (mouseleave)="escondeTooltip()">DOM</p>


Perceba que agora utilizamos $event como parâmetro para alteraPosicaoDaTooltip
($event.x, $event.y). Além disso, invocamos dois métodos quando o evento mouseover 
é emitido, separando-os com um ponto e vírgula (;).

As coordenadas do mouse vêm do objeto $event, criado quando o evento mouseover 
é disparado, que possui as propriedades $event.x e $event.y.

Primeira parte concluída.

Configurando o style binding
Agora, precisamos transmitir as coordenadas x e y do mouse para os atributos 
left e right da div.tooltip, fazendo assim com que esse elemento se mova na página. 
Para isso usaremos uma técnica chamada style binding, que vincula uma propriedade 
do componente (mouse.x ou mouse.y) a um atributo de um elemento (left ou right).

Esses atributos, left, posição no eixo x, e right, posição no eixo y, 
já são acessados nativamente via CSS e o que devemos fazer é utilizar o 
Angular para gerar código CSS inline no elemento que precisa mudar de posição, 
algo como o Código.

<div left="54px" top="34px"></div>


Essa necessidade é suprida pelo style binding, que é configurado usando a sintaxe style.
[nome-da-propriedade-css]. Uma vez que as propriedades left e right recebem valores 
numéricos, podemos informar em que unidade de medida do CSS esses valores serão passados, 
como no Código

<div [class.visible]="visible"
  [style.left.px]="mouse.x" [style.top.px]="mouse.y">
  ...
</div>

Aqui escolhemos pixels (px).

Olhando mais de perto, o style binding...

[style.left.px]=”14”
...é equivalente ao CSS…

{
    left: 14px;
}
...fácil, né?

Com isso o elemento
já aparece na posição em que o mouse estava quando o evento mouseover foi emitido.
*/