/*
Laravel é um Framework PHP utilizado para o desenvolvimento web,
que utiliza a arquitetura MVC e tem como principal característica
ajudar a desenvolver aplicações seguras e performáticas de forma rápida,
com código limpo e simples, já que ele incentiva o uso de boas práticas de
programação e utiliza o padrão PSR-2 como guia para estilo de escrita do código.

Para a criação de interface gráfica, o Laravel utiliza uma Engine de
template chamada Blade, que traz uma gama de ferramentas que ajudam
a criar interfaces bonitas e funcionais de forma rápida e evitar a duplicação de código.

Para se comunicar com um Banco de Dados o Laravel utiliza uma implementação
simples do ActiveRecord chamada de Eloquent ORM, que é uma ferramenta 
que traz várias funcionalidades para facilitar a inserção, atualização,
busca e exclusão de registros. Com configuração simples e pequena e com
pouco código podemos configurar a conexão com Banco de Dados e trabalhar com ele.

Para esse artigo você deve ter instalado em seu computador a versão 5.5.9 ou maior
do PHP e as extensões OpenSSL PHP, PDO PHP, Mbstring PHP, Tokenizer. Também precisará
ter instalado o Composer, um servidor como Apache/Nginx e um editor de código ou 
IDE de sua preferência.

Além disso, utilizaremos o XAMPP que já nos fornece o PHP, o servidor Apache e
e o banco de dados MySQL, o editor de código Sublime Text 3 e o Cmder como terminal.
Neste exemplo inicial não usaremos o banco de dados, mas é importante ter um instalado 
para futuras aplicações.

Criação do Projeto
Iremos primeiramente criar um projeto Laravel em nossa máquina. Abra o terminal do
Windows e navegue até a pasta htdocs do XAMPP e digite o comando a seguir:

composer create-project laravel/laravel aprendendo-laravel --prefer-dist
Assim usamos o Composer para criar um novo projeto Laravel em nosso diretório
htdocs chamado “aprendendo-laravel”. Espere alguns instantes até serem baixados
todos os arquivos, pois o processo pode demorar dependendo da conexão.

Criando nosso Virtual Host
Com nosso projeto criado, agora precisamos criar e configurar nosso host virtual.
Primeiramente abra o arquivo httpd-vhosts.conf, que se encontra no diretório do XAMPP:
<DIRETÓRIO XAMPP>\apache\conf\extra. No final do arquivo insira o código da Listagem 1.

Listagem 1. Código para criar Virtual Host

<VirtualHost *:80>
    ServerName aprendendoLaravel
    DocumentRoot "<DIRETÓRIO XAMPP>\htdocs\aprendendo-laravel\public"
    <Directory "<DIRETÓRIO XAMPP>\htdocs\aprendendo-laravel\public">
      AllowOverride all
    </Directory>
</VirtualHost>

Depois de alterar o arquivo, salve-o e feche-o. Abra o arquivo hosts no diretório
C:\Windows\System32\drivers\etc e no final do arquivo insira esse código:

127.0.0.1   aprendendoLaravel
Salve e feche o arquivo. Depois dessas alterações já temos nosso Virtual Host configurado.

Agora vamos ver se nossa aplicação está funcionando. Se o XAMPP não estiver ativo,
ative-o e vá até o browser e digite na barra de endereços: “http://aprendendoLaravel”

No diretório raiz podemos ver que temos vários arquivos e outros diretórios:

Diretório “app” - nele temos todos arquivos de nossa aplicação, podemos ver vários 
outros diretórios, mas iremos focar no diretório Http, pois nele temos o nosso arquivo 
routes.php, que é onde definimos todas as rotas de nossa aplicação. 
Temos também vários diretórios, entre eles, o “Controllers”, que é 
onde ficam todos os controllers de nossa aplicação.

Diretório config - onde configuramos todo nosso projeto. Nele temos 
o arquivo app.php, que é onde podemos configurar várias variáveis de nossa 
aplicação como local, fuso-horário, os providers e definir os aliases de nossa 
aplicação. Ainda no diretório config temos o arquivo database.php que é onde definimos
todas as configurações sobre a conexão com o Banco de Dados. Ainda temos vários
outros arquivos como o mail.php para definir configurações de e-mail de nossa aplicação;

Diretório database - onde definimos três tipos de arquivos importantes:
o Migrations: uma das ferramentas mais poderosas do Laravel para definir,
através de arquivos PHP, como nosso Banco de Dados deve ser criado. 
Através do Artisan, que é a interface de linha de comando do Laravel, 
criamos, alteramos e excluímos tabelas do nosso Banco de Dados de forma fácil,
rápida e intuitiva;
o Seeds: com esses arquivos podemos popular as tabelas do Banco de Dados
com os dados que queremos para testes de forma fácil e rápida;
o Factories: essa ferramenta foi introduzida na versão 5.1 do Framework,
para popular as tabelas do Banco de Dados com dados criados de forma automática
e randômica, permitindo incluir uma grande massa de dados de forma bem rápida para
criação de testes;

Diretório “public” - possui os arquivos .htaccess e index.php, que é o
roteador de nossa aplicação. Ele recebe as requisições, as trata através do kernel
e retorna para os usuários as respostas.

Diretório “resources” - nele temos três diretórios importantes:
o Assets: usado para armazenarmos todos arquivos de estilo (CSS, LESS, SASS, etc.),
scripts (JavaScript, etc.), imagens e outros recursos necessários para nossa aplicação
o Lang: usado para armazenarmos os arquivos de tradução para nossa aplicação;
o Views: usado para armazenar os arquivos de nossa camada de visualização;

Diretório “tests” - nele salvamos todos os testes de nossa aplicação;

Diretório “vendor” - nele temos todos os arquivos de terceiros utilizados em nosso projeto,
ou seja, bibliotecas, plugins, etc;

Arquivo “.env” - nele definimos várias configurações de nossa aplicação,
como os dados de configuração da conexão do banco de dados e a configuração de e-mails.

Arquivo gulpfile.js - nele temos acesso a API do Elixir, que é usado para
definir tarefas do Gulp para nossa aplicação.

O Fluxo de Nossa Aplicação
As aplicações criadas com o Framework Laravel seguem um fluxo baseado na
arquitetura MVC. Primeiramente devemos definir as rotas para que nossos
usuários possam fazer requisições e criar os Controllers necessários para
tratar as requisições de nossos usuários.

Vamos fazer um exemplo básico abrindo o arquivo routes.php dentro do
diretório app\Http. Nele podemos ver um código padrão, que podemos apagar
e digitar o código a seguir no lugar:

<?php
Route::get('/', 'PagesController@index');

Assim definimos que quando nosso usuário acessar a rota /, ou seja,
a rota inicial de nossa aplicação, o Controller chamado PagesController.php
ficará responsável por tratar a requisição de nosso usuário e retornar uma resposta a ele.

Vamos agora utilizar o Artisan, abrindo o terminal e navegando até o
diretório raiz de nosso projeto, onde digitaremos:

php artisan make:controller PagesController

Depois de executar o código, abra o diretório Controllers em app\Http e veja que
um novo arquivo foi criado: o PagesController.php. Como padrão do Framework,
quando criamos um novo Controller, damos um nome a ele e logo à frente colocamos
a palavra “Controller”.

Abra o arquivo que foi criado e verá que o Laravel já cria, por padrão,

vários métodos em nosso Controller, que você pode apagar, com exceção do método index().

Até agora já temos configurado a rota, o Controller e o método que irá cuidar
da requisição de nosso usuário.

Quando o Controller acessa no browser
“http://aprendendoLaravel”, o método index() do controller será executado.

O que falta para que o fluxo de nossa aplicação se complete é que devemos
criar a camada de visualização de nossa aplicação. Para isso abra o arquivo
welcome.blade.php em resources\views e apague todo o seu conteúdo. Em seguida,
digite o código da Listagem 2.

Listagem 2. Código da página inicial de nossa aplicação

<!
DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Minha Primeira Aplicação Laravel</title>
    </head>
    <body>
        <h1>Olá Mundo!</h1>
    </body>
</html>

Depois de definirmos o conteúdo da página inicial da nossa aplicação,
precisamos fazer com que nosso Controller exiba nossa página criada
quando o usuário acessar a rota inicial de nossa aplicação. Abra novamente o
arquivo PagesController.php e edite o método index() para que ele fique com o
código da Listagem 3.

Listagem 3. Código para Controller chamar página welcome.blade.php

public function index()
    {
        return view('welcome');
   }


Assim definimos que quando o usuário acessar a rota / de nossa aplicação o
método index() irá retornar ao usuário a página welcome.blade.php que criamos.
Quando definimos qual página devemos retornar, não precisamos colocar .blade.php,
o Laravel consegue entender qual a página que estamos referenciando.

Dessa maneira criamos um fluxo completo de uma aplicação Laravel, onde o usuário
acessa uma rota definida em nossa aplicação, o método definido é chamado, processa
a requisição e devolve ao nosso usuário uma resposta, nesse caso uma página.

Pronto para aplicações RESTful
O Laravel já foi feito pensado para facilitar a criação de serviços RESTful,
portanto, quando devolvemos alguma variável, objeto, array ou qualquer outro dado
em nossos Controllers, eles já são convertidos automaticamente para formato JSON.
Para exemplificar vamos criar mais uma rota em nosso arquivo routes.php


Route::get(‘/amigos’, ‘PagesController@amigos’);
Agora vamos criar mais um método em nosso arquivo PagesController.php
para tratar a requisição de nossa nova rota, como mostra a Listagem 4.

Listagem 4. Método que cria array e o retorna em formato JSON

/**
     * Retorna JSON com lista de amigos
     *
     * @return Response
     */
    public function amigos()
    {
                $amigos = [
                               ['nome' => 'José Silva', 'idade' => 22],
                               ['nome' => 'Maria José', 'idade' => 20],
                               ['nome' => 'João Pinheiro', 'idade' => 35]
                ];

                return $amigos;
    }
No método apenas criamos um array com três posições e o retornamos.
Quando fazemos isso, o Framework já o converte para o formato JSON automaticamente
e o retorna para o usuário,

Passando Informações para a Camada de Visualização
Além de retornar os dados como JSON para nossos usuários, podemos também retornar uma página com os dados de nossas variáveis. Vamos criar mais uma rota para nossa aplicação com o seguinte código:

Route::get(‘/sobre’, ‘PagesController@sobre’);
Agora vamos criar um método em nosso arquivo PagesController.php para tratar as requisições de nossa nova rota, como mostra a Listagem 5.

Listagem 5. Método que retorna tela ao usuário com dados passados pelo Controller

/**
     * Retorna página com informações pessoais
     *
     * @return Response
     */
    public function sobre()
    {
                $eu = [
                               'nome' => 'Wendell Adriel',
                               'idade' => 23
                ];

                return view('sobre', compact('eu'));
    }
Criamos um array com nome e idade e passamos ao nosso arquivo sobre.blade.php.
Poderíamos também passar as informações sem utilizar a função compact(),
ficando à escolha de cada um.

Agora vamos criar nosso arquivo sobre.blade.php no diretório resources/views,
como mostra a Listagem 6.

Listagem 6. Página com as informações recebidas pelo Controller

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Sobre mim</title>
    </head>
    <body>
        <h1>Meu nome é {{ $eu['nome'] }}</h1>
        <h2>Tenho {{ $eu['idade'] }} anos</h2>
    </body>
</html>

Podemos ver que para imprimir variáveis na nossa página devemos utilizar
os valores passados dentro de dois pares de chaves “{{ variável }}”.

Criando e Utilizando Layouts com Blade
Pensando no reaproveitamento de código, o Blade permite criar “páginas mestres” 
para que outras páginas possam utilizá-las como padrão e mudar apenas o conteúdo
variável de cada página específica. Para exemplificar vamos criar um arquivo que
irá servir como template para todas as nossas outras páginas e depois mudá-las.

Crie o arquivo app.blade.php no diretório resources/views com o conteúdo da Listagem 7.

Listagem 7. Página-mestre de nossa aplicação

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <title>@yield('titulo')</title>
    </head>
    <body>
        <div class="container">
                @yield('conteudo')
        </div>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </body>
</html>

Definimos um layout padrão para nossas páginas com a importação do Framework
Bootstrap para podermos criar nossas páginas.

Definimos também duas seções diferentes na página. Para isso utilizamos o
@yield e definimos um nome para a seção, dessa maneira, outras páginas podem
utilizar o layout padrão e aproveitar toda a parte estática de nosso layout
sem ter que duplicar o código e apenas definir o conteúdo particular de cada página.

Vamos agora voltar ao nosso arquivo welcome.blade.php e fazer as alterações
necessárias para que ele utilize o layout padrão, como na Listagem 8.

Listagem 8. Atualizando nossa página para utilizar layout padrão

@extends('app')

@section('titulo')
SEJA BEM VINDO
@stop

@section('conteudo')

<h1>Olá Mundo</h1>

@stop

No código vimos que a definição da nossa página fica bem mais limpa e
rápida de se fazer, pois como estamos utilizando o layout padrão, agora
definimos apenas o conteúdo que é particular de cada página.

Primeiramente utilizamos o @extends com o nome de nosso arquivo
(nesse caso utilizamos ‘app’, que aponta para o nosso arquivo app.blade.php)
de layout padrão para indicar ao framework que o estamos utilizando,
além da definição das seções desse arquivo.

Em segundo lugar declaramos as duas seções do layout: ‘titulo’ e
‘conteudo’, e definimos o conteúdo de cada uma. Dessa maneira poderemos
personalizar nossas páginas de forma rápida e sem duplicação de código.

Agora abra o arquivo sobre.blade.php e altere o seu conteúdo conforme a Listagem 9.

Listagem 9. Código atualizado do arquivo sobre.blade.php.

@extends('app')

@section('titulo')
                SOBRE MIM
@stop

@section('conteudo')
                <h1>Meu nome é {{ $eu['nome'] }}</h1>
                <h2>Tenho {{ $eu['idade'] }} anos</h2>
@stop
Aumentando a produtividade
Além de todas funcionalidades apresentadas até agora, o Laravel
fornece diversas ferramentas para aumentar nossa produtividade e evitar
que gastemos tempo com certas tarefas, permitindo assim que o nosso foco
seja o desenvolvimento de soluções para nossas aplicações e cuidando da
parte “chata” do trabalho para nós. Algumas dessas ferramentas são o Elixir
(automatizador de tarefas), o SwiftMailer (Biblioteca para envio de e-mails)
e o Artisan (Interface de Linha de Comando).

Elixir
Esse nos dá suporte para utilizar diversos pré-processadores CSS e JavaScript,
além de fornecer uma API simples e prática para definir tarefas simples do Gulp,
que é um automatizador de tarefas que realiza para nós tarefas como concatenação,
minificação e testes de scripts. O Gulp utiliza um arquivo de configuração
(Gulpfile) com uma sintaxe de código bem simples.

SwiftMailer
O Laravel oferece uma API simples que utiliza a biblioteca SwiftMailer
para envio de e-mails utilizando serviços locais ou serviços na nuvem. 
Além disso, ele nos oferece drivers para SMTP, Mailgun, Mandrill e Amazon
SES e um serviço como o Mailtrap para testar se os e-mails estão da forma
que foram planejados. Dessa maneira podemos enviar e-mails com textos, imagens
e anexos de forma rápida e sem muito esforço.

Artisan CLI
É a interface de Linha de Comando do Laravel, que pode realizar diversas ações
em nossas aplicações como: configuração de ambiente da nossa aplicação, verificar
rotas existentes, interagir com nossa aplicação e criar diversos tipos de arquivos
como: migrations, controllers, etc.

Além de todos os comandos já oferecidos, podemos criar nossos próprios
comandos para agilizar e automatizar alguns processos durante o desenvolvimento
de nossas aplicações, permitindo personalizar o Framework às nossas necessidades.

Testando as aplicações
O Laravel já oferece uma estrutura simples, prática e sólida para testes
utilizando o PHPUnit. Basta você criar um arquivo de teste no diretório “tests”
e deixar que o Framework cuide do restante, pois quando você roda seus testes
com o comando “phpunit” ele já muda automaticamente o ambiente de sua aplicação para teste.

Homestead
Às vezes pode ser bem chato configurar um ambiente de desenvolvimento e isso
pode gastar muito tempo dependendo do tipo, e pensando nisso, foi criado o
Laravel Homestead, um box oficial com todo ambiente necessário para começarmos
a desenvolver nossas aplicações. Nele temos o PHP 5.6, banco de dados MySQL,
PostgreSQL e Redis, NodeJS, servidor Nginx, HHVM e várias outras ferramentas
rodando no Ubuntu 14.04 para auxiliar no desenvolvimento de nossas aplicações.
Com isso, podemos começar a desenvolver sem grandes esforços para montar o
ambiente de desenvolvimento.

Vimos que o Framework Laravel oferece várias ferramentas para a criação rápida
de aplicações, focando apenas nas regras de negócios e sem códigos repetitivos.


*/