/*
O código passo a passo para criar a Tooltip será explicado nas próximas aulas, 
mas vamos analisar o comportamento desse componente antes de colocarmos a mão no teclado.

Conhecendo a mecânica por trás do comportamento da Tooltip

Por baixo do capô, uma Tooltip é apenas uma conversa entre dois elementos na página, 
nesse caso um p.term e uma div.tooltip.

Lembrando das aulas de CSS, os elementos aparecem e desaparecem da página através 
da propriedade display.

display: none → o elemento está invisível;
display: inline-block → o elemento está visível.
Construir a Tooltip consiste em fazer com que div.tooltip possua { display: inline-block } 
quando o mouse estiver sobre ela e { display: none } em qualquer outro caso.

Para simplificar e organizar esse processo criamos duas classes, como vemos



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

.visible {
  display: inline-block;
}

Com isso, nosso trabalho se resume em fazer com que o Angular adicione a classe 
.visible em div.tooltip quando o mouse estiver sobre p.term. Complementando, 
quando o mouse deixar p.term, o Angular deve remover a classe .visible de div.tooltip.

Como trocar a classe de um elemento?
Precisamos usar duas técnicas para isso, as quais já vimos anteriormente: 
o event binding e o data binding. Utilizando o primeiro conseguimos avisar 
ao componente que o usuário fez uma ação na página, lembra?
As ações nas quais estamos interessados são colocar o mouse sobre um elemento, 
que emite o evento mouseover, e retirar o mouse de sobre um elemento, que emite 
o evento mouseleave.

Olhando um pouco mais de perto, o mouse determina dois estados possíveis para o texto da Tooltip:

O mouse está sobre o elemento → div.tooltip visível;
O mouse deixou o elemento → div.tooltip invisível.
De uma forma um pouco mais técnica, estado é como chamamos as
informações armazenadas em memória pelo componente em um determinado momento.
Quando essas informações mudam, o estado do componente muda também. Geralmente, 
quando isso acontece, ocorre uma mudança também no seu template.

O estado de um componente é representado por suas propriedades.
Sabendo disso, uma vez que a Tooltip possui apenas dois estados, 

que são texto visível ou texto invisível, na classe do componente (Código ) 
teremos uma propriedade booleana chamada visible, que guardará a informação 
"o texto deve estar visível?". Quando essa informação for true, uma mudança 
ocorrerá no template do componente e o texto aparecerá, porque o estado do componente 
mudou. Quando essa informação for false, o texto ficará invisível, acompanhando 
novamente a mudança de estado do componente.


*/

export class TooltipExampleComponent {

    public visible = false;
    ...
  }


/*
O valor da propriedade visible vai mudar quando o usuário fizer uma ação na 
página e saberemos dela através do event binding.


Bom, e como exibir ou ocultar a div.tooltip baseado no valor da propriedade 
visible? Faremos isso utilizando property binding.


Uma Tooltip é apenas uma conversa entre dois elementos na página: um p.term e uma div.tooltip.
*/

