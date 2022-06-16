/*
Realizar requisições HTTP é uma das tarefas mais comuns em SPAs atualmente.
É por meio delas que a aplicação se comunica com APIs RESTful que lhes provêem 
dados e funcionalidades. Portanto, saber realizar esse tipo de ação no Angular é 
fundamental para todo desenvolvedor que utiliza esse framework.

Atualmente, a maioria das aplicações do tipo SPA (Single Page Applications) 
se comunicam com algum serviço no back-end por meio do protocolo HTTP. 
A fim de consumir dados e funcionalidades expostos por esse serviço, que 
normalmente é uma API RESTful, a SPA envia requisições HTTP utilizando um 
dos seus diferentes verbos (GET, POST, PUT, DELETE etc.) e trata os seus 
possíveis resultados (200, 404, 500, etc.).

Para que possamos fazer esse tipo de requisição no JavaScript dispomos 
hoje de duas APIs suportadas pelos browsers modernos: XMLHttpRequest 
(mais antiga) e fetch (mais recente e que utiliza promises). E quando se 
trata de um projeto Angular, contamos com um mecanismo nativo desse 
framework que oferece uma interface simplificada para realizar essa 
tarefa, mas que internamente utiliza o XMLHttpRequest. Trata-se da classe
 HttpClient, disponível no módulo HttpClientModule.

Neste artigo veremos como utilizar essa classe para realizar diferentes 
tipos de request, bem como aprenderemos a tratar seus retornos e erros.

Conhecendo a API RESTful
Para fins de demonstração das requisições HTTP, utilizaremos uma API 
RESTful desenvolvida em Node.js com o framework Express. Essa API vai 
expor alguns endpoints para a manutenção de um cadastro de produtos 
(dados fixos), de acordo com a seguinte especificação da Tabela 1.


*/

/*
Endpoint	    Verbo	    Objetivo	                Retornos possíveis
/produtos	    GET	        Retorna todos os produtos.	200 sempre
/produtos/id	GET	        Retorna um produto pelo id.	200 para sucesso 404 para id inexistente
/produtos	    POST	    Cadastra novo produto.	    201 para sucesso 400 para erro de validação
/produtos/id	PUT	        Atualiza um produto.	    204 para sucesso 400 para erro de validação 404 para id inexistente
/produtos/id	DELETE	    Exclui um produto pelo id.	204 para sucesso 404 para id inexistente


*/ 

/*
Primeiros passos
Para usar a classe HttpClient, primeiramente precisamos importar o 
módulo HttpClientModule no módulo em que se encontra declarado o 
componente/serviço em que vamos realizar as requisições. Aqui vamos 
realizar as requisições no próprio AppComponent, que é criado por padrão
quando iniciamos um novo projeto Angular. Portanto, precisamos importar
o módulo HttpClientModule no app.module.ts, da mesma forma que apresentada


*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
1: Importamos o módulo HttpClientModule do pacote @angular/common/http, de forma que ele possa ser usado nesse arquivo mais adiante;
2: importamos o HttpClientModule, assim a classe HttpClient poderá ser usada no componente AppComponent, que é declarado mais acima neste mesmo arquivo.

Feito isso, podemos abrir o app.component.ts e declarar no construtor da classe 
um parâmetro do tipo HttpClient. Note no código abaixo que usaremos o modificador 
private para que esse parâmetro seja automaticamente uma propriedade do componente, 
de forma que possamos usá-lo em seguida usando a sintaxe this.http.
*/

constructor(private http : HttpClient) {}

/*
Como usamos o modificador private já no parâmetro, não precisamos atribuí-lo a 
nenhum objeto internamente. O Angular será capaz de injetar uma instância da 
classe HttpClient dinamicamente. Assim sendo, não precisamos usar o operador 
new para instanciar o objeto local http.

Configurando a interface do componente
Sabendo que temos cinco tipos de requisições possíveis na API, vamos adicionar
a mesma quantidade de botões no AppComponent, um para cada request. Para isso, 
apagaremos todo o conteúdo do app.component.html e adicionaremos o código

<button (click)="listarTodosProdutos()">GET</button>
<button (click)="listarProdutoPorId()">GET /id</button>
<button (click)="adicionarProduto()">POST</button>
<button (click)="alterarProduto()">PUT</button>
<button (click)="excluirProduto()">DELETE</button>

Cada botão tem seu evento onclick vinculado a um método que criaremos a partir de agora.




Enviando requisições HTTP


Começaremos essa seção declarando uma variável no componente contendo o endereço da API. 
Ele será usado para que não precisemos repetir o endereço completo em cada requisição,
bem como para facilitar sua alteração caso seja necessário:
*/

readonly apiURL : string;

/*
A variável foi declarada como readonly, pois ela não deve ser alterada em nenhum outro ponto 
do código após ser inicializada, o que será feito no construtor da classe:
*/

constructor() {
    this.apiURL == 'http://localhost:3000';
 } 


/*
Em seguida, a primeira requisição que enviaremos será do tipo GET para listar todos os produtos,
então vamos codificar o método listarTodosProdutos
*/

listarTodosProdutos() {
    this.http.get(`${ this.apiURL }/produtos`)
             .subscribe(resultado => console.log(resultado));
  }


/*
1: com nome sugestivo, o método get da classe HttpClient é o responsável por 
enviar requisições do tipo GET para o endereço informado como parâmetro. Aqui
esse endereço é formado pela concatenação da URL base + /produtos, conforme 
vimos na documentação da API.

2: o método get é assíncrono e retorna um Observable. Sendo assim, para 
recuperarmos seu resultado precisamos invocar o método subscribe, passando
para ele uma função anônima cujo argumento é o corpo da resposta obtido, 
já devidamente convertido para objeto JavaScript.

Observe que automaticamente o retorno da API é convertido de JSON para 
sua representação em objetos JavaScript. Nesse caso, um array contendo três itens.

De forma semelhante ao que acabamos de fazer, podemos enviar outra 
requisição GET passando o id do objeto desejado como parâmetro. 
Faremos isso no método listarProdutoPorId


*/ 

listarProdutoPorId() {
    this.http.get(`${ this.apiURL }/produtos/1`)
              .subscribe(resultado => console.log(resultado));
  }


/*

Por ser um padrão do browser, não temos como suprimir a primeira mensagem, 
mas podemos tratar o erro para apresentar um retorno amigável para o usuário.
Para isso, podemos informar uma segunda função como parâmetro para o método 
subscribe, dessa vez tendo como argumento o erro que é retornado, como mostra

*/ 

listarProdutoPorId() {
    this.http.get(`${ this.apiURL }/produtos/99`)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }


/*

Nesse ponto já temos o conhecimento necessário para enviar requisições e 
tratar tanto seu resultado, quanto seus erros. No entanto, até o momento 
não enviamos dados no corpo da requisição. Isso será feito na requisição 
POST para adicionar um novo produto, a qual é realizada no método adicionarProduto

*/

adicionarProduto() {
    var produto = { nome : "" };
  
    this.http.post(`${ this.apiURL }/produtos`, produto)
              .subscribe(
                resultado => {
                  console.log(resultado)
                },
                erro => {
                  if(erro.status == 400) {
                    console.log(erro);
                  }
                }
              );
} 

/*
Como já sabemos que em caso de sucesso o retorno da API será impresso no console, 
aqui declaramos a variável produto intencionalmente com o nome vazio. Isso fará 
com que a API retorne um status 400 (Bad Request) e então poderemos imprimir
esse retorno no console


Ao imprimir o retorno completo, podemos ver que ele possui vários campos que podem 
nos interessar. Nesse caso estamos especialmente interessados no campo error, 
que contém o corpo da resposta. Veja que ele contém um subcampo chamado mensagem 
contendo uma descrição do que ocasionou tal erro.

Sabendo disso, podemos alterar nosso método para imprimir apenas a parte 
que nos interessa desse resultado:

*/ 

if(erro.status == 400) {
    console.log(erro.error.mensagem);
  } 


/*

O método alterarProduto, responsável por enviar a requisição PUT é bem semelhante 
ao anterior, contando apenas com uma validação adicional para o status 404 e exibindo
uma mensagem fixa em caso de sucesso, já que o status 204 (No Content) indica que o 
corpo da resposta vem vazio, como no código


*/

alterarProduto() {
    var produto = { id : 1, nome : "Smart TV 50 Polegadas" };
  
    this.http.put(`${ this.apiURL }/produtos/1`, produto)
              .subscribe(
                resultado => {
                  console.log('Produto alterado com sucesso.')
                },
                erro => {
                  switch(erro.status) {
                    case 400:
                      console.log(erro.error.mensagem);
                      break;
                    case 404:
                      console.log('Produto não localizado.');
                      break;
                  }
                }
              );
  } 

/*
e informássemos um id inválido ou não preenchêssemos o nome do produto, 
teríamos como retorno os status 404 e 400, respectivamente.

Por fim, temos a requisição DELETE, na qual informamos o id do produto
a ser excluído, mas não passamos nada no corpo. Nesse caso, o único 
erro previsto ocorre se o produto não for localizado, situação em que 
é retornado um status 404. Na Listagem temos o código do método excluirProduto

*/

excluirProduto() {
    this.http.delete(`${ this.apiURL }/produtos/1`)
              .subscribe(
                resultado => {
                  console.log('Produto excluído com sucesso.');
                },
                erro => {
                  if(erro.status == 404) {
                    console.log('Produto não localizado.');
                  }
                }
              );
  }


/*
O resultado, como esperado, é a exclusão do produto 1 e um status 204 (No Content), 
por isso imprimimos uma mensagem fixa



Com isso finalizamos esse estudo inicial sobre a realização de requisições HTTP 
no Angular usando a classe HttpClient. Esse conhecimento é basicamente o que 
precisamos para consumir APIs RESTful. Há, porém, uma melhoria que podemos fazer 
sobre esse código: como no Angular usamos TypeScript e um dos principais recursos
dessa linguagem é a tipagem de dados, podemos usar isso para deixar nosso código 
mais claro e de fácil manutenção. Esse é o tema da próxima seção.

Requisições tipadas
Projetos Angular usam a linguagem TypeScript por padrão, o que nos permite 
desfrutar dos recursos que essa linguagem oferece. Entre eles está a tipagem 
estática, que é a possibilidade de fixar o tipo de uma variável no momento da 
sua declaração.

Uma das possíveis aplicações para esse recurso é na definição das classes que 
representam os dados/entidades da nossa aplicação. Por exemplo, seguindo a 
ideia que desenvolvemos anteriormente, podemos criar uma classe Produto 
representando esse tipo que trafega entre a SPA e a API (e que possivelmente 
seria vinculado a inputs, por exemplo, para exibição e captura de dados em um projeto real).

Fazendo isso, podemos tipar também o retorno das requisições HTTP, de forma 
que nós, ou quem precisar manter nosso código, saberemos o que esperar como 
resultado de cada request.

Para exemplificar, vamos criar uma classe chamada Produto. Para isso 
adicionaremos uma pasta models e dentro dela o arquivo produto.model.ts ao 
projeto contendo o seguinte código


*/
export class Produto {
    id : number;
    nome : string;
}

// Em seguida, importaremos esse tipo no AppComponent para que possamos usá-lo nas requisições:

import { Produto } from './models/produto.model';


/*
Feito isso, podemos agora especificar o tipo de retorno das requisições GET. 
No caso do método listarTodosProdutos, o tipo de retorno será Produto[], ou seja,
um array de produtos. Já no listarProdutoPorId o tipo é apenas Produto, posto que
apenas um item é retornado. Na Listagem 10 vemos como fica a requisição GET.

*/

listarTodosProdutos() {
    this.http.get<Produto[]>(`${ this.apiURL }/produtos`)
              .subscribe(resultado => console.log(resultado));
  }

/*
Já na requisição POST podemos especificar o tipo tanto no corpo da requisição, 
quanto na resposta


*/

adicionarProduto() {
    var produto = new Produto();
    produto.nome = "Cadeira Gamer";
  
    this.http.post<Produto>(`${ this.apiURL }/produtos`, produto)
    //restante do código sem alterações
  }

/*
O mesmo ocorre com a requisição PUT, porém como seu retorno esperado é 204 (No Content), 
ela não deve ser tipada como Produto, pois o corpo da resposta virá vazio.

Assim finalizamos este conteúdo sabendo realizar diferentes tipos de requisição HTTP 
no Angular, seja com objetos dinâmicos ou tipados.
*/