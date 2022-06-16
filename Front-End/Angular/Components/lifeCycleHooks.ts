/*
Todo componente no angular tem um conjunto de eventos de ciclo de vida(lifecycle hooks) 
que ocorrem quando um componente é criado, renderizado, tem o valor de suas propriedades
alteradas ou é destruído. o Angular invoca uma séries de métodos (hooks),
que são executados no momento em que esses eventos são acionados. 
Uma aplicação de loja com um carrinho de compras por exemplo, poderia utilizar 
os lifecycle hooks para detectar mudanças, como adição ou remoção de produtos do 
carrinho, e atualizar esses dados na tela.

Conhecendo os Lifecycle Hooks
Agora que já vimos a definição dos Lifecycle hooks, vamos conhecer métodos que mencionamos 
anteriormente. Cada método listado abaixo está associado a uma interface, e cada interface 
possui apenas um método associado a ela. Cada método possui uma ou mais condições para ser 
executado, além de ter uma posição fixa (ordem) na sequência do ciclo. A seguir
descrevemos os métodos, que estão listados na ordem em que são executados pelo Angular.
Os métodos do lifecycle hooks possuem uma nomeclatura própria que utiliza o nome da
interface junto do prefixo ng. A interface OnInit por exemplo, possúi um método chamado

ngOnInit()
*/ 


/*
ngOnChanges()

O ngOnChanges() é executado quando uma propriedade decorada com @Input é alterada. 
Ele recebe um objeto do tipo SimpleChanges com o valor atual e anterior da propriedade.


O @Input é um decorador que informa ao Angular que uma propriedade do componente filho
pode compartilhar dados com o componente pai, é dessa forma que podemos utilizar o
ngOnChanges para detectar mudanças que ocorrem no componente filho.

Além de ser chamado após cada alteração das propriedades decoradas, o ngOnChanges() 
também é executado uma vez durante o carregamento do componente, antes mesmo do ngOnInit().

*/

/*
ngOnInit()

Ele é executado após o Angular definir e exibir os dados das propriedades decoradas
com @Input pela primeira vez. O ngOnInit é executado apenas uma vez após o primeiro
ngOnChanges().

*/

/*

ngDoCheck()

O ngDoCheck() detecta e age mediante mudanças que o Angular não consegue detectar sozinho.
Entretanto é sempre bom ficar atento a utilização desse método, pois uma simples troca de 
foco de um campo de texto por exemplo, já seria suficiente para disparar esse método, o 
que pode prejudicar o desempenho da sua aplicação. Isso ocorre porque o ngDoCheck() é 
executado sempre que o detector de mudanças do angular é chamado, mesmo que não haja 
nenhuma alteração. Esse método é executado executado sempre após o ngOnChanges()

É recomendado que nunca se utilize o ngDoCheck() e o ngOnChanges() para checar mudanças 
em propriedades @Input ao mesmo tempo, pois isso poderá causar problemas.

*/

/*

ngAfterContentInit()
O ngAfterConentInit é executado após a projeção de algum conteúdo externo na view 
do componente. Assim como o ngOnInit(), o ngAfterContentInit() é chamado apenas uma vez,
após a primeira execução do ngDoCheck().

*/

/*

ngAfterContentChecked()

Ele é chamado após o Angular checar o conteúdo projetado no componente, ou seja,
após a execução do ngAfterContentInit e depois de cada execução do ngDoCheck().

*/ 

/*
ngAfterViewInit()

O ngAfterViewInit é chamado após o Angular inicializar as views do componente e as 
views filhas, ou seja, ele é chamado apenas uma vez após o primeiro ngAfterContentChecked().
*/

/*

ngAfterViewChecked()
O ngAfterViewChecked é chamado após o Angular checar as views do componente, 
assim como as views filhas. Ou seja, é executado uma vez após o ngAfterViewInit() 
e a cada execução do ngAfterContentChecked().

*/

/*
ngOnDestroy()

É executado antes do Angular destruir o componente. O ideal é que esse 
método seja utilizado para promover uma 'limpeza' no componente, tal como 
remover events handler por exemplo, antes da sua destruição para evitar memory leaks.

*/

/*

Métodos mais comuns
Até aqui vimos os diversos hooks dentro do ciclo de vida do componente e agora 
vamos detalhar os mais comuns, além de mostrar alguns exemplos de como eles podem ser aplicados.

*/

/*

ngOnInit()

O ngOnInit é um dos lifecycle hooks mais comuns por ser necessário para a maioria dos projetos. 
Ao criar um componente através do angular-cli, o ngOnInit é automaticamente implementado 
na classe.

É dentro do ngOnInit que o desenvolvedor poderá adicionar todo o código que precisa ser 
executado quando o componente for inicializado.

Uma dúvida muito frequente é: Porque não usar o construtor ao invés do ngOnInit()? 
O principal motivo é que o construtor da classe fica fora do controle do Angular. 
Por ser executado diretamente pela engine JavaScript do navegador, o Angular 
não tem como informar quando o construtor foi chamado/executado ou quando concluiu sua execução.

Por esse motivo o método ngOnInit existe: para informar que o componente foi 
inicializado, garantindo por exemplo, que todos os bindings estarão disponíveis para utilização.

Então para quê usar o construtor?

O ideal é que o construtor da classe seja utilizado apenas para injeção de 
dependências, deixando os códigos de inicialização e outras regras de negócio para o ngOnInit()


*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    //Aqui você pode carregar as notícias
    console.log("ngOnInit: Componente iniciado");
  }

} 

/*
Ao executar o código acima é possível verificar no console a mensagem ngOnInit: 
Componente iniciado, que indica que o componente notícia foi completamente carregado.

Tecnicamente não é necessário implementar e/ou importar o OnInit ou qualquer 
outra interface para utilizar seus métodos. Entretanto, é tido como boa prática
fazer essas adições, já que essa regra vale para qualquer um dos lifecycle hooks.

*/ 

/*

ngOnChanges

Outro método bastante utilizado é o ngOnChanges, pois com ele é possível
identificar qualquer alteração feita em propriedades decoradas com @Input, 
como falamos anteriormente, além de obter o valor anterior e atual da propriedade. 
No Código 2 é possível ver um exemplo de sua utilização.


*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeUsuario = 'Dom Mattrick';

  public changeUser(){
    this.nomeUsuario = 'Phil Spencer';
  }

}

/*No Código definimos o valor padrão da variável nomeUsuario e criamos o método changeUser()
para alterar o valor dessa variável.

<button (click)="changeUser()">Mudar Usuário</button>
<app-componente-filho [nome]="nomeUsuario"></app-componente-filho>


Agora no Código  associamos um evento de click no botão ao método changeUser, 
para que o nome seja alterado quando o botão for clicado.
*/

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent implements OnChanges {

  @Input() nome: string;

  ngOnChanges(changes: SimpleChanges){
    console.log(changes.nome);
  }

} 


/*No componente filho temos a criação da propriedade nome juntamente do decorator 
@Input para permitir a troca de informações com o componente pai como vimos no código 
anterior (app.component.html).

<p>Nome: {{nome}}</p>


Por fim, no Código 5 colocamos a propriedade nome para ser exibida no template do 
componente filho.

Veja que no arquivo componente-filho.component.ts o método ngOnChanges() recebe um 
parâmetro do tipo SimpleChanges. Ele é um objeto que armazena alterações do tipo 
SimpleChange, que por sua vez, é um objeto que possui três propriedades que podem 
ser usadas pelo desenvolvedor:

currentValue: retorna o valor atual da propriedade;
previousValue: retorna o valor anterior da propriedade;
firstChange: é utilizada para identificar qual foi a primeira alteração feita na propriedade.
Ao executar este código, será exibido um objeto do tipo SimpleChange no 
console do navegador, na primeira execução, é possível notar que a propriedade
'previousValue' está como 'undefined', isso ocorre pois ainda não havia nenhum
valor definido anteriormente para a propriedade 'nome', mas ao clicar no botão
'mudar usuário', o método changeUser será chamado e a propriedade 'previousValue'
passará a trazer o valor 'Dom Mattrick', que dará lugar a 'Phil Spencer' na 
propriedade 'currentValue'.
*/

/*
ngOnDestroy

O ngOnDestroy é o mais simples dos três métodos mais populares dos lifecycle hooks. 
Ele é chamado antes do Angular destruir o componente. O seu objetivo é permitir que 
o desenvolvedor execute todos os seus códigos de 'limpeza', como desanexar os Events 
Handlers por exemplo, antes do componente ser removido pelo Angular, evitando memory 
leaks. No Código 6 veremos um exemplo de implementação do ngOnDestroy().
*/

import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy',
  templateUrl: './destroy.component.html',
  styleUrls: ['./destroy.component.css']
})

export class DestroyComponent implements OnDestroy {
  constructor() {
  }

  ngOnDestroy() {
    console.log('Componente finalizado');
  }
} 

/*
Na linha 13 é onde se inicia a implementação do método ngOnDestroy. 
Se utilizado em um ambiente real, esse método será disparado assim que 
o componente estiver para ser destruído. Uma forma de visualizar esse 
comportamento é habilitando e desabilitando a exibição de um componente
utilizando o atributo ngIf, assim, toda vez que o componente for desabilitado 
o ngOnDestroy será chamado, 


Conclusão

Como vimos nesse artigo, os lifecycle hooks nos dão acesso a diversas 
fases do ciclo de vida do componente. Com eles podemos executar ações 
no momento exato em que uma fase desse ciclo é atingida, o que vai permitir 
a criação de códigos mais assertivos.
*/


