/*
Introdução

No Angular a interação entre componentes é uma técnica que permite aos componentes 
trocarem informações entre si. Durante este artigo nós utilizaremos dois componentes,
pai e filho, que servirão como base para os diversos exemplos que serão apresentados
e que nos ensinarão técnicas de comunicação entre componentes. Esses componentes 
serão utilizados apenas a nível de exemplo, para que tenhamos como demonstrar 
tais técnicas. Por isso, começaremos criando um projeto com esses dois componentes 
e depois faremos modificações em seus códigos a fim de que eles troquem informações entre si.

Criando e configurando o projeto
Como vimos, para utilizarmos a técnica de interação entre componentes precisamos 
de um projeto que possua pelo menos dois componentes, e é isso que criaremos agora.

O primeiro passo é executarmos o código de criação do projeto no CMD/terminal:
*/ 

ng new interacao-entre-componentes

/*Com o projeto criado, precisaremos criar dois componentes, que chamaremos de pai 
e fiho. Para isso, usaremos os comandos abaixo:*/

ng generate component pai
ng generate component filho 


/*Cada componente criado possui uma pasta com quatro arquivos. Para esse artigo, 
nós utilizaremos apenas dois deles, o com final 'component.ts' e o 'component.html',
para cada um dos componentes.*/

/*Como temos dois componentes no nosso projeto, utilizaremos um total de quatro 
arquivos durante o artigo, são eles:

pai.component.ts - Que vamos chamar de classe do componente pai
pai.component.html - Que vamos chamar de template do componente pai
filho.component.ts - Que vamos chamar de classe do componente filho
filho.component.html - Que vamos chamar de template do componente filho

Com o projeto e os componentes criados, precisamos agora configurar nosso projeto.
O processo é bem rápido. Para isso, a primeira coisa que faremos é abrir a classe 
do componente pai que está localizada dentro da pasta src/app/pai/ do projeto que 
foi criado e copiar o valor localizado do seletor, conforme mostra a imagem abaixo.

Com o valor do seletor copiado, vamos precisar abrir também o arquivo app.component.html 
que fica na raiz de src/app, remover todo seu conteúdo e colocar o seguinte código:


*/

<app-pai></app-pai>

/*
Isso vai fazer com que nossa aplicação chame o componente pai ao ser iniciada.

Por fim, vamos fazer duas alterações simples para certificar que tudo foi configurado 
corretamente. No template do componente pai colocaremos o código:
*/

<p>Componente pai</p>
<app-filho></app-filho>

// Já no template do componente filho colocaremos:


<p>Componente filho</p>


/*

Pronto. Agora vamos compilar nosso projeto utilizando o comando 'ng serve' 
e assim que o processo for concluído, vamos acessar a url 'localhost:4200' 
no navegador. Se o resultado da sua aplicação for o mesmo da imagem abaixo, 
você está pronto para continuar.

Com nosso projeto criado e configurado, agora seguiremos com a técnica de 
interação de componentes. Existem diversas formas de utilizar essa interação,
vamos começar com o Input Binding.

*/

/*
Passando dados para o componente filho através de Input Binding

Em Angular, podemos passar dados para o componente filho através de Input Binding. 
Esta é uma das formas básicas de interação entre componentes, onde utilizamos
o recurso de input Binding da linguagem para comunicar informações do 
componente pai para o componente filho. Nos Códigos 1 a 4 temos um exemplo 
completo que vai utilizar uma variável que armazena um nome e passará esse 
dado para o componente filho, que vai exibir na tela. Podemos conferir a 
aplicação em execução na Figura 6.

O primeiro passo é executarmos o código de criação do projeto no CMD/terminal:

*/

import { Component } from '@angular/core';

 @Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
 })
 export class PaiComponent{
  nomePai = 'Eduardo';
 } 

/*Na linha 9 temos a variável nomePai, que armazena o nome do usuário (Eduardo). 
Esse é o valor que será passado ao componente filho.*/

import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
 })

 export class FilhoComponent {

  @Input() nomeFilho: string;
 } 

/*Na linha 10 temos a variável nomeFilho do tipo string,
que é decorada com @Input para permitir ao componente pai acessá-la.*/

<app-filho [nomeFilho]="nomePai"></app-filho>

/*No Código 3, incluímos o componente filho através do seletor 
app-filho e em seguida passamos o valor da variável nomePai para a variável nomeFilho.*/

<p>Nome do usuário: {{ nomeFilho }}</p>


/*
Por fim, o template do componente filho exibe o nome do usuário na tela.

Interceptando e mudando propriedades input usando um setter

Outra coisa que podemos fazer através da interação entre componentes é utilizar
um setter para interceptar os dados recebidos do componente pai e retornar 
valores mais amigáveis. No nosso caso, ao encontrar um nome vazio, o componente
filho retorna o texto <Nome não informado>, ao invés de retornar um valor em branco,



Phil, Mark e June foram exibidos, e onde não havia um nome em branco foi exibido o
texto <Nome em branco>


*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})

export class PaiComponent {
  nomes = ['Phil', 'Mark', ' ', 'June'];
} 


/*a variável nomes possui como valor um array com quatro índices, sendo um deles em branco.*/ 

<app-filho *ngFor="let nome of nomes" [nome]="nome"></app-filho>
 

/*possui a diretiva ngFor, que é utilizada para passar cada nome do array nomes para o componente filho. */

import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-filho',
 templateUrl: './filho.component.html'
})
export class FilhoComponent {

 private _nome = '';

 @Input()
 set nome(nome: string) {
   this._nome = (nome && nome.trim()) || '<Nome em branco>';
 }

 get nome(): string { return this._nome;}
}


/*
o setter nome recebe os dados passados pelo componente pai e trata a informação. 
Caso o valor do nome seja vazio, ele substitui por <Nome em branco>.
*/ 

<p>Nome: {{ nome }}</p>


/*

Interceptando e mudando propriedades input usando o ngOnChanges()
Agora veremos um exemplo semelhante ao que vimos anteriormente, porém, 
ao invés de interceptar os dados do campo vazio utilizando um setter, 
utilizaremos o lifecycle hook ngOnChanges, 

*/

import { Component } from '@angular/core';

@Component({
 selector: 'app-pai',
 templateUrl: './pai.component.html',
 styleUrls: ['./pai.component.css']
})

export class PaiComponent{
 paises = ['Brasil', 'Estados Unidos', ' ', 'Israel'];
}


// utilizamos um array com o nome de três países e um índice em branco. 

<app-filho *ngFor="let pais of paises" [pais]="pais"></app-filho>

import { Component, Input, SimpleChanges } from '@angular/core';

 @Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
 })
 export class FilhoComponent {

  @Input() pais: string;

  ngOnChanges(changes: SimpleChanges){
   for(let change in changes)
   {
    this.pais = (changes[change].currentValue && changes[change].currentValue.trim()) || '<País não informado>';
   }
  }
} 


/*
1: @Input() pais é quem recebe o nome dos países cadastrados no array paises do componente pai.

2: O método ngOnChanges é chamado toda vez que o @Input pais recebe um novo valor 
e executa o mesmo tratamento feito no exemplo anterior. Caso o valor do país seja 
vazio, a mensagem <País não informado> é exibida.

*/

<p>Nome do país: {{ pais }}</p>


/*
Escutando eventos do componente filho
O exemplo que vamos ver agora tem um comportamento diferente do que vimos até 
o momento, pois dessa vez vamos ver como o componente pai pode escutar eventos
do componente filho

*/

import { Component, Input } from '@angular/core';

 @Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
 })

 export class PaiComponent{
  paises = ['Brasil', 'Estados Unidos', 'Japão', 'Israel'];

  @Input() votado: string = "";

  onVoted(votado: string) {
    this.votado = votado;
  }
 } 

/*
1: temos um array contendo o nome de quatro países.
2: @Input votado é uma variável que será utilizada para mostrar o nome do país na tela após receber um voto.
3: O método onVoted recebe como parâmetro uma string e define o valor da variável votado.
*/

import { Component, Input, Output, EventEmitter } from '@angular/core';

 @Component({
   selector: 'app-filho',
   templateUrl: './filho.component.html',
   styleUrls: ['./filho.component.css']
 })

 export class FilhoComponent {
  @Input() pais: string;

  @Output() votado = new EventEmitter<string>();

  vota(pais: string) {
    this.votado.emit(pais);
  }
 }


/*
1: @Input pais recebe o nome dos países;
2: EventEmitter é criado e associado à variável decorada votado. Já o decorator @Output permite que os dados dessa variável sejam passados para o componente pai.
3: Através do método vota o nome do país é passado para componente pai através do this.votado.emit(pais).
*/ 

<app-filho  *ngFor="let pais of paises" [pais]="pais" (votado)="onVoted($event)"></app-filho>
<p>Você votou em: {{ votado }}</p>


/*

Logo no início do código passamos o nome de cada país para a variável de mesmo 
nome no componente filho. Associamos ao método onVoted o EventEmitter do componente 
filho. Em seguida exibimos o texto Você votou em: seguido do nome do país.

*/ 

<button (click)="vota(pais)">{{ pais }}</button>


/*Associamos um evento de click ao método vota para cada botão exibido na tela.
O parâmetro passado é o nome do país e ao clicar em qualquer um desses botões 
o nome do país votado será mostrado na tela.


Interagindo com o componente filho através de variáveis locais
Neste tópico veremos como acessar os dados de um componente filho utilizando uma variável local.


Dentro do nosso contexto utilizamos as variáveis locais para acessar dados do componente filho.
Assim, a classe do componente pai não possuirá nenhum código além do necessário para o 
carregamento do template, que é o código padrão criado pelo Angular quando um componente é criado.

No Código 17 vemos o filho.component.ts, onde todas as variáveis e métodos criados 
serão acessíveis através da variável local. No nosso caso, apenas a variável nome 
estará disponível.

*/

import { Component } from '@angular/core';

@Component({
 selector: 'app-filho',
 templateUrl: './filho.component.html'
})
export class FilhoComponent {
 nome = 'Clark Kent';
} 

<app-filho #filho></app-filho>
<p>{{ filho.nome }}</p>

/*
Na linha do Código  incluímos o componente filho através do seletor app-filho e
atribuímos a ele a variável local #filho. Já na linha 2 acessamos o nome do
componente filho através da variável local.

Essa variável local é o meio mais simples e fácil de acessar dados de um componente filho, 
porém, é um recurso que possui limitações. A principal delas é que a técnica da variável 
local não pode ser utilizada caso a classe componente pai precise ler ou escrever em dados 
do componente filho. Também não é possível utilizar se sua classe pai precisar acessar 
métodos da classe filho. Para resolver esse problema existe uma solução simples, 
que veremos a seguir.

*/ 

/*

Injeção de componentes com o decorator @ViewChild

Como vimos, existem casos em que não é possível utilizar a técnica de 
variáveis locais para acessar dados do componente filho. A solução então é 
injetar o componente filho dentro do componente pai através do decorator 
@ViewChild. Veja na Figura 11 e nos Códigos 19 a 21 o mesmo exemplo que 
utilizamos com a técnica da variável local sendo implementada com o @ViewChild.

*/
import { Component } from '@angular/core';

@Component({
 selector: 'app-filho',
 templateUrl: './filho.component.html'
})

export class FilhoComponent {
 nome = 'Eduardo';
}

// Com a variável definida, agora precisamos acessá-la no componente pai, como vemos nos 


import { Component, ViewChild} from '@angular/core';
import { FilhoComponent }  from '../filho/filho.component';

@Component({
 selector: 'app-pai',
 templateUrl: './pai.component.html',
 styleUrls: ['./pai.component.css']
})

export class PaiComponent {

@ViewChild(FilhoComponent, {static: false})

 private filhoComponent: FilhoComponent;

 nome: string;

 ngAfterViewInit() {
   setTimeout(() => this.nome = this.filhoComponent.nome, 0);
 }
} 

/*
1: Utilizamos o @ViewChild para importar o componente filho através da sua classe FilhoComponent. Além disso, o parâmetro static é utilizado para que as consultas de exibição sejam feitas depois que a detecção de mudanças for executada. Ou seja, somente após a execução do ngAfterViewInit.
2: Criamos a variável filhoComponent, que recebe como tipo a FilhoComponent.
3: Encontramos a variável nome do tipo string.
4: Cada vez que uma nova @ViewChild é iniciada, o ngAfterViewInit é executado.
5: O valor da variável nome do componente filho é associada a variável de mesmo nome do componente pai.
*/ 

<p>{{ nome }}</p>
<app-filho></app-filho>

/*

No início do Código o componente pai exibe o nome na tela. 
Em seguida incluímos o componente filho no template pai para permitir acesso ao seus dados.

Conclusão

Como vimos nesse artigo, a comunicação entre componentes
pais e filhos pode ser feita de várias formas, dependendo da necessidade da
sua aplicação e podem ser aplicadas em diversos contextos diferentes.

*/