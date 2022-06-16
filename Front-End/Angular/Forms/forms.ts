/*
A API do Angular é bastante versátil, nos oferecendo, sempre que possível, 
formas diferentes para realizar tarefas comuns do front-end de aplicações web. 
Ao trabalhar com formulários com esse framework isso não é diferente. Por isso,
neste artigo abordaremos como implementar os dois tipos de formulários disponíveis 
na API do Angular, que são o Template-Driven Forms e o Reactive Forms. Mostraremos
exemplos de como fazer isso em um existente, dando assim ao desenvolvedor a oportunidade
de escolher qual delas é a melhor forma, conforme a sua própria necessidade.

Diferenças entre Template-Drivenorms e Reactive Forms
Para criar formulários em nossas aplicações a API do Angular permite escolher
 entre duas abordagens: Template-Driven Forms ou Reactive Forms.

Abaixo, temos algumas diferenças entre elas:

No caso dos Template-Driven a lógica é implementada no template do componente (HTML)
Template-Driven Forms funcionam de forma assíncrona
Para usar o Template-Driven Forms é necessário importar o módulo FormsModule
No caso dos Reactive Forms a lógica fica, geralmente, no componente e as suas validações
 são feitas programaticamente com TypeScript.
Reactive Forms funciona de forma síncrona
Para usar Reactive Forms deverá ser importado o módulo ReactiveFormsModule
Como já vimos em outros conteúdos mais fundamentais, módulos são importados no arquivo 
app.module.ts.

Template-Driven forms
Template-Driven forms é um tipo de formulário mais simples de implementar, dada a sua
proximidade em relação a como criamos formulários apenas com HTML. Por exemplo, nessa
abordagem uma das formas de validação dos campos pode ser feita no próprio template 
do componente, usando um atributo de validação, como required, nativa do próprio HTML.
Nessa forma de criar formulários usamos a diretiva ngModel para fazer a vinculação 
(two-way data bindings) entre o componente e o elemento do template.

O projeto angular que usaremos como exemplo para demonstrar as capacidades básicas
de cada forma de criar formulários será um cadastro com poucos campos, nome, telefone
e endereço. Ao clicar no botão "Gravar" será exibido o valor de cada campo no console.

Em um projeto Angular já criado, devemos configurar o módulo responsável pelo 
funcionamento desse tipo de formulário para então termos acesso as suas funcionalidades.
Para fazer isso deveremos adicionar a diretiva import { FormsModule} from '@angular/forms';
no arquivo app.module.ts, conforme a Linha  do Código

*/ 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 


/*

Agora, podemos criar o nosso formulário.

No template de um componente devemos inserir o HTML contendo as diretivas e atributos 
de formulário, conforme o Código


<form (ngSubmit)="onSubmit(f)" #f="ngForm">
   <div>
      <label for="nome">Nome:</label>
      <input id="nome" name="nome" ngModel type="text">
   </div>
   <div>
      <label for="telefone">Telefone:</label>
      <input id="telefone" name="telefone" ngModel type="tel">
   </div>
   <div>
      <label for="endereco">Endereco:</label>
      <input id="endereco" name="endereco" ngModel type="texto">
   </div>
   <div>
      <button type="submit">Gravar</button>
   </div>
</form>



Explicando o código, na tag <form> colocamos uma variável chamada #f, 
que usaremos para acessar os campos do formulário e realizar ações baseadas 
em seus valores, tais como permitir que o botão de enviar fique ativo se 
estiverem preenchidos. Feito isso, em cada tag <input> adicionamos a diretiva 
ngModel para que o bind possa acontecer.

Agora, no nosso código do componente criaremos a função onSubmit(), 
que vai apenas ler os valores dos inputs por enquanto.


*/


import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereco}`;

    console.log(dados);
  }
} 


/*
Observando a função onSubmit() vemos que nela recuperamos qualquer valor 
digitado nos inputs, por meio da variável form.value, concatenado com o 
nome do campo e com isso conseguimos exibi-los no console.

Da forma como implementamos o código não temos nenhuma validação ainda.
Se clicarmos no botão “Gravar” os nomes dos campos serão exibidos no console 
sem seus respectivos valores, caso estejam em branco, pois não implementamos
nenhuma restrição quanto a isso.

Para corrigir esse comportamento, vamos adicionar o atributo de validação 
required nos campos para habilitar o botão “Gravar” passará a estar inicialmente
desabilitado através do atributo disabled. Assim, somente quando os campos 
forem preenchidos e o formulário for considerado válido o botão “Gravar” 
será habilitado. Para isso, faremos algumas alterações no template, conforme o Código



<form (ngSubmit)="onSubmit(f)" #f="ngForm">
   <div>
      <label for="nome">Nome:</label>
      <input id="nome" name="nome" ngModel type="text" required>
   </div>
   <div>
      <label for="telefone">Telefone:</label>
      <input id="telefone" name="telefone" ngModel type="tel" required>
   </div>
   <div>
      <label for="endereco">Endereco:</label>
      <input id="endereco" name="endereco" ngModel type="texto" required>
   </div>
   <div>
      <button type="submit" [disabled]="f.form.invalid">Gravar</button>
   </div>
</form>


A parte mais importante desse código é quando atribuímos a expressão f.form.invalid 
o atributo disabled do elemento button. Dessa forma, utilizamos o mecanismo de validação
nativo do HTML para que disabled seja true enquanto o formulário for inválido. 
No momento em que o formulário passar a ser válido, disabled receberá false e o 
botão poderá ser clicado.

Com isso, conseguimos implementar o Template-Driven form em nosso projeto.

Reactive forms
Reactive forms é um tipo de formulário pelo qual temos todo o controle do comportamento 
dos campos do formulário via componente. Nesse caso, moldamos as validações e o bind 
dos campos programaticamente pelo TypeScript e vinculamos no template.

Neste tipo de formulário não usamos a diretiva ngModel para fazermos o bind. 
Em vez disso temos diversas classes que permitem a manipulação dos elementos 
de formulário, que possibilitam a customização deles.

Neste artigo vamos destacar as duas dessas classes, FormControl e FormGroup.

FormControl permite a criação dos campos que usaremos em nosso formulário, 
ao criar uma instância, podemos definir se o campo terá alguma validação.
FormGroup usamos para agrupar os campos criados (FormControl). Ao criarmos 
um objeto dessa classe, iremos fazer a referência no arquivo do templateUrl na tag <form>.
Vamos ver na prática como isso tudo funciona.

Em um projeto Angular já criado, teremos que implementar o módulo responsável 
pelo funcionamento desse tipo de formulário. Para fazer isso, deveremos adicionar 
a diretiva import { ReactiveFormsModule } from '@angular/forms'; no arquivo app.module.ts, 
conforme o Código
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Para fins didáticos, colocaremos no construtor do componente as funcionalidades 
para montar o formulário. Nesse caso, usaremos a classe FormGroup e passaremos 
para quais serão os campos que vão compor o formulário. Aqui, já poderemos definir
quais serão os campos obrigatórios usando no construtor da classe FormControl o
atributo Validators.required, de acordo com o Código


*/

import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

formularioCadastro : FormGroup;

  constructor() {

  this.formularioCadastro = new FormGroup({
    'nome': new FormControl(null, Validators.required),
    'telefone': new FormControl(null, Validators.required),
    'endereco': new FormControl(null, Validators.required)});
  }

  ngOnInit() { }

  onSubmit(){
    let dados = `
    Nome: ${this.formularioCadastro.value.nome}
    Telefone: ${this.formularioCadastro.value.telefone}
    Endereço: ${this.formularioCadastro.value.endereco}`;

    console.log(dados);
  }
} 


/*
Na função onSubmit() do código acima, conseguimos recuperar os valores que digitamos 
nos campos do templateUrl que estão vinculados ao formularioCadastro (FormGroup), 
logo eles serão exibidos no console.

Agora, no arquivo do templateUrl, deveremos fazer a referência aos campos que 
definimos. Para isso colocaremos na tag <form> o nome do formGroup (formularioCadastro) 
adicionando a propriedade [formGroup], e em cada tag <input>, deveremos por formControlName
com os mesmos nomes que criamos na inicialização do formulário no Construtor do Component.
Código



<form [formGroup]="formularioCadastro" (ngSubmit)="onSubmit()">
    <div>
        <label for="nome">Nome:</label>
        <input id="nome" name="nome" type="text" formControlName="nome">
    </div>
    <div>
        <label for="telefone">Telefone:</label>
        <input id="telefone" name="telefone" type="tel" formControlName="telefone">
    </div>
    <div>
        <label for="endereco">Endereco:</label>
        <input id="endereco" name="endereco" type="texto" formControlName="endereco">
    </div>
    <div>
        <button type="submit" [disabled]="formularioCadastro.invalid">Gravar</button>
    </div>
</form>


Para complementar, colocaremos uma validação no botão. Na tag <button> usaremos o 
atributo [disabled] para somente habilitá-lo quando os campos forem preenchidos, 
assim evitando que no console seja exibido os valores dos campos vazios ao pressionar o botão.

Com isso, conseguimos implementar o Reactive form em nosso projeto.

Como vimos neste artigo, tivemos uma visão geral dos tipos de formulário disponíveis 
na API do Angular e como implementar em um projeto existente. Nesse caso cabe ao 
desenvolvedor escolher qual irá atender melhor a sua necessidade.

Conclusão

A API do Angular nos permite utilizar duas abordagens para a criação de formulários 
em um mesmo projeto, as quais vimos neste artigo.

O Template-Driven Form é recomendável em formulários mais simples, sem validações 
muito complexas, atendo a maioria dos casos. Para formulários mais elaborados é 
recomendável utilizar o Reactive Form, pois permite um maior controle no 
comportamento do formulário via código TypeScript.
*/