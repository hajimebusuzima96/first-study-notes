/*
Atualmente, o Angular é um dos mais conhecidos frameworks para desenvolvimento web. 
Criado e mantido pela Google, ele já tem uma longa estrada no mercado. 
Uma das partes mais importantes de um projeto Angular é o que chamamos de componentes, 
pois eles são a parte lógica da aplicação.

Estrutura de um Component
Os componentes são classes escritas em TypeScript que recebem o decorator 
@Component, assim como mostra o Código 1. Vamos analisar esse código juntos 
ao longo dessa seção, portanto não se preocupe em entendê-lo completamente agora. 
Atente-se apenas para o fato dele ser uma classe com um decorator, por enquanto.
*/

@Component({  selector: 'cadastro',
   templateUrl: 'cadastro.component.html',
    styleUrls: ['cadastro.component.css']
})
export class CadastroComponent {

}


/*
Quando analisamos a estrutura de um componente, podemos dividi-lo nas seguintes partes:

Metadata: são definições que iremos informar ao Angular que a nossa classe é um Component,
por meio de decorators, nesse caso @Component
Classe: assim como em qualquer linguagem de programação que utiliza o paradigma da 
orientação a objeto, possui suas propriedades e métodos
Um Component é um tipo de classe existente em uma aplicação Angular, eles são 
identificados com o decorator @Component. Neste decorator existem algumas propriedades 
mais utilizadas como: selector, templateUrl e style. Vamos especificá-las:

selector é como identificamos o nosso componente. Para todo o componente existe um
elemento único associado que permite que ele seja adicionado em um documento HTML.
Nesse caso, o nome do elemento desse componente é cadastro e deve ser escrito como 

<cadastro></cadastro>

TemplateUrl é o nome do documento HTML que será a parte visual do componente. Nele 
podemos ter código em HTML juntamente com todos os bindings e diretivas necessários 
para a exibição do componente no navegador
Template também usado para descrever a parte visual do componente, porém nesse caso 
podemos fornecer código HTML "hard coded", como texto
styleUrl é onde informamos quais folhas de estilo contêm o código CSS que será 
aplicado ao template do componente.
Com isso podemos concluir que a estrutura de um componente Angular deve ser 
formada por esses três elementos, template (HTML), estilo (CSS) e classe (TypeScript). 
Essas partes são organizadas em arquivos separados e unidas nos metadados do componente
através do decorator @Component

No Código 2 vemos uma outra forma de descrever o template do componente usando a 
propriedade template, sem a necessidade de criar um arquivo HTML no projeto.


*/

@Component({  selector: 'cadastro',
    template:'<input type="text"[(ngModel)]="nome" name="nome" id="nome"/>',
    styleUrls: ['cadastro.component.css']
})
export class CadastroComponent {

}

/*
Como boa prática, o código HTML implementado na propriedade template deve conter poucas 
linhas. Caso este seja um código mais elaborado é recomendável colocá-lo em um documento
HTML, utilizando a propriedade templateUrl para indicar a localização deste arquivo.

Podemos fazer referência ao Component CadastroComponent em outros componentes do 
projeto usando o seletor cadastro. Nesse caso basta colocarmos a tag <cadastro></cadastro> 
dentro do HTML do template.

Criando componente com o Angular CLI
Em um projeto Angular usaremos uma ferramenta chamada Angular CLI para criar componentes. 
Com ela nos preocupamos menos com a estrutura do componente, pois ela adiciona o mesmo
ao projeto já com um código inicial automaticamente. Vamos ver como usar essa ferramenta 
na prática nesta seção.

Considerando que o Angular já se encontra instalado no seu sistema operacional, iremos 
em um terminal, no caso do Windows o cmd e no caso de Linux e MacOS o terminal, para criar
uma pasta para um projeto de exemplo com o nome "artigo". Para isso usamos o comando no
Código 3 para criação do projeto.
*/

ng new artigo


/*
Quando terminar, vamos entrar na pasta criada para executarmos o comando. 
Esse comando vai iniciar a aplicação na porta padrão, 4200.
*/

ng serve


/*
Se ao digitar ng serve não ocorrer nenhum erro, conseguiremos executar a aplicação. 
Digite "http://localhost:4200" em seu navegador para visualizarmos a tela com as 
informações sobre a aplicação, como mostra a


Criação de um componente
Agora que temos o projeto criado vamos adicionar nele um novo componente. 
A maioria das aplicações Angular será composta de muitos componentes. Para criar um 
novo componente deveremos executar no terminal o comando visto no Código 5 dentro da 
pasta do projeto.


*/

ng g component pagina

/*
O comando acima gerará um novo componente dentro da pasta "app" chamado pagina, 
dentro de uma pasta chamada "pagina". Esse componente será composto pelos arquivos 
"pagina.component.html", "pagina.component.css" e "pagina.component.ts", que contém 
a estrutura do Component presente
*/

import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}


/*
O Angular CLI facilita muito a criação de um novo componente, 
pois além de criar os arquivos que o compõem, também registra o componente a 
nível de projeto. No Angular, todo componente precisa ser registrado em um módulo 
antes de ser utilizado. O Angular CLI, ao criar o componente, também configura a
referência para ele no arquivo app.modules.ts
*/

import { BrowserModule } from '@angular/platform-browser';import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';

@NgModule({
    declarations: [
      AppComponent,
      PaginaComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

/*
Como vimos, as referências aos componentes ficam dentro do decorator @NgModule 
na propriedade declarations. É nela que, a princípio, ficarão todos os componentes
da nossa aplicação.


Utilizando um componente

Agora, utilizaremos o componente "pagina" para entender como ele pode funcionar 
em uma aplicação. Serão exibidos alguns textos no browser, porém o conteúdo do 
texto estará no arquivo pagina.component.ts e usaremos o recurso do binding do 
Angular para exibir na view.

No arquivo pagina.component.ts colocaremos as variáveis que receberão o título e 
o conteúdo do texto.

Conforme Código 8, criaremos duas variáveis do tipo string: uma chamada titulo 
e a outra chamada texto. Ambas terão o modificador de acesso public, já que 
usaremos em uma view (todo ou parte de uma página web) da aplicação.


*/
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

    public titulo: string;
    public texto: string;

    constructor() { }

    ngOnInit() { }

}

/*
Dentro do decorator @Component temos a propriedade templateUrl, 
onde nesse caso colocaremos o código HTML no arquivo "pagina.component.html".

No arquivo "pagina.component.html", implementamos um código que 
exibirá na tela o título e o texto

*/

<div id="header">
	<h1><p class="textoTitulo">Artigo</p></h1>
</div>
<div id="titulo">
      <h2>{{titulo}}</h2>
</div>
<div id="texto">
      {{texto}}
</div>

/*
Para que os valores das variáveis possam ser exibidos na view podemos 
utilizar a interpolation (interpolação), que consiste em adicionar o nome 
da variável entre chaves duplas {{ }} dentro do elemento em que o valor da 
variável deve aparecer.

Colocaremos no arquivo "pagina.component.ts"

*/ 

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

    public titulo: string;
    public texto: string;

    constructor() {}

    ngOnInit() {

      this.titulo = 'O que são Components no Angular?';
      this.texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nibh mauris cursus mattis molestie a iaculis at erat.
                    Ipsum dolor sit amet consectetur adipiscing elit ut aliquam
                    purus. Egestas tellus rutrum tellus pellentesque eu tincidunt
                    tortor aliquam nulla. In dictum non consectetur a erat nam at.
                    Enim ut sem viverra aliquet eget sit amet tellus cras.
                    Fames ac turpis egestas integer. Odio pellentesque diam volutpat
                    commodo sed egestas. Augue lacus viverra vitae congue eu consequat
                    ac. Et malesuada fames ac turpis egestas maecenas pharetra convallis.
                    Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    Sollicitudin tempor id eu nisl nunc mi ipsum faucibus.`

    }

}

/*
Para conseguirmos visualizar o conteúdo da nossa view, visto que não configuramos 
uma rota no nosso projeto, teremos que fazer uma alteração no arquivo "app.component.html" 
na raiz da nossa pasta "app". Excluiremos o conteúdo já existente e colocaremos o seletor 
do nosso componente app-pagina para quando carregarmos a aplicação a nossa view possa aparecer

Caso a aplicação esteja em execução, logo a nova página será exibida, do contrário, deverá
executar o comando ng serve em um terminal dentro da pasta do nosso projeto.

Poderemos dar uma melhorada no visual da aplicação editando o arquivo pagina.compoment.css, 
onde colocaremos o código CSS


#header{   position: relative;
      width: 100%;
      height: 50px;
      background-color: darkgrey;
}

.textoTitulo{
      position: absolute;
      left: 12px;
      top: -25px;
}

#titulo{
      text-align: center;
}

#texto{
      text-align: justify;
}


quando a página for executada novamente veremos a aplicação com um visual bem melhor.

Conclusão

Os componentes são uma parte importante de toda aplicação Angular, pois é neles que 
criamos a lógica por trás do funcionamento das views. Neste artigo vimos como eles são
estruturados e como implementá-los em um projeto já criado. Também vimos como podemos
configurar as variáveis criadas dentro de um componente e fazer com que os seus valores 
sejam visualizados em um template.


*/  




