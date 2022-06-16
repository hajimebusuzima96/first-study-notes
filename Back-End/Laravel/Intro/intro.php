/*
Laravel é um dos frameworks PHP mais utilizados atualmente. Possui uma baixa curva de 
aprendizado e é intuitivo, pois foi criado com foco na clareza do código.

Guia do artigo:

Requisitos
Instalação do Laravel via Composer
Diretórios do projeto
Hello World
Requisitos

Para esse artigo você deve ter instalado em seu computador:

O PHP na versão 7.2 ou superior
O Composer
Um servidor como Apache/Nginx
E um editor de código ou IDE de sua preferência
As extensões BCMath, Ctype, JSON, XML, OpenSSL, PDO, Mbstring, Tokenizer
precisam estar habilitadas. Para verificar ou habilitá-las é necessário editor
o arquivo php.ini que se encontra na pasta de instalação do PHP.

Com um editor de texto localize as extensões e remova o ; no começo da linha.
Pois isso fará com que o PHP as reconheça como habilitadas.

Com essas configurações feitas, podemos partir para a instalação do Laravel 
e uma das formas mais comuns para fazer isso é através do Composer.

Instalação do Composer
O Composer é um gerenciador de dependências para PHP que tem como objetivo 
simplificar a instalação e atualização de bibliotecas externas. Será por meio 
dele que realizaremos a instalação do Laravel em nosso computador. 
Então é necessário tê-lo instalado em nosso ambiente de desenvolvimento.

Acessando sua página oficial, vamos na opção Download e baixamos o 
arquivo Composer-Setup.exe referente a versão Windows.

Utilizaremos para criar nossa aplicação o XAMPP, que já nos fornece o PHP, 
o servidor Apache e e o banco de dados MySQL, o editor de código Visual Studio 
Code e o terminal do sistema operacional. Neste exemplo inicial não usaremos o 
banco de dados, mas é importante ter um instalado para futuras aplicações.

Instalação do Laravel via Composer

Primeiramente instalaremos o Laravel e criaremos um projeto em nosso computador via composer.

Abra o terminal do Windows e navegue até a pasta htdocs do XAMPP e digite o comando a seguir:

composer create-project --prefer-dist laravel/laravel hello-world

Assim usamos o Composer para criar um novo projeto Laravel em nosso diretório 
htdocs chamado hello-world. Espere alguns instantes até serem baixados todos 
os arquivos, pois o processo pode demorar dependendo da sua velocidade de internet

SUPORTE AO ALUNO
ANOTAÇÕES
FAVORITAR
CONCLUÍDO
106GOSTEI
106
Por que eu devo ler este artigo:Este artigo é uma introdução ao Laravel e apresenta como instalá-lo através do composer, bem como a criação de um primeiro código que responde ao usuário apresentando a mensagem "Hello world" no navegador.
Voltar

Suporte ao aluno

Anotar

Marcado como concluído
Artigos
PHP
Laravel: Criando um Hello World
Laravel é um dos frameworks PHP mais utilizados atualmente. Possui uma baixa curva de aprendizado e é intuitivo, pois foi criado com foco na clareza do código.

Guia do artigo:
Requisitos
Instalação do Laravel via Composer
Diretórios do projeto
Hello World
Requisitos
Para esse artigo você deve ter instalado em seu computador:

O PHP na versão 7.2 ou superior
O Composer
Um servidor como Apache/Nginx
E um editor de código ou IDE de sua preferência
As extensões BCMath, Ctype, JSON, XML, OpenSSL, PDO, Mbstring, Tokenizer precisam estar habilitadas. Para verificar ou habilitá-las é necessário editor o arquivo php.ini que se encontra na pasta de instalação do PHP.

Com um editor de texto localize as extensões e remova o ; no começo da linha. Pois isso fará com que o PHP as reconheça como habilitadas.

Extensões do PHP
Figura 1. Extensões do PHP
Com essas configurações feitas, podemos partir para a instalação do Laravel e uma das formas mais comuns para fazer isso é através do Composer.

Instalação do Composer
O Composer é um gerenciador de dependências para PHP que tem como objetivo simplificar a instalação e atualização de bibliotecas externas. Será por meio dele que realizaremos a instalação do Laravel em nosso computador. Então é necessário tê-lo instalado em nosso ambiente de desenvolvimento.

Acessando sua página oficial, vamos na opção Download e baixamos o arquivo Composer-Setup.exe referente a versão Windows.

Sua instalação é um processo bem simples, veja o passo a passo abaixo de como realizar:

Figura 2. Instalação Composer
#PraCegoVer - Transcrição dos SlidesPágina oficial do Composer, com várias opções. Escolha a opção download para baixar o arquivo de instalação
Ao executar o programa baixado, clique em next até chegar na opção install
Após acompanhar o download e a instalação do Composer, a mensagem de setup completo aparecerá. Clique em Finish para fechar o programa
Saiba mais sobre o Composer
Utilizaremos para criar nossa aplicação o XAMPP, que já nos fornece o PHP, o servidor Apache e e o banco de dados MySQL, o editor de código Visual Studio Code e o terminal do sistema operacional. Neste exemplo inicial não usaremos o banco de dados, mas é importante ter um instalado para futuras aplicações.

Instalação do Laravel via Composer
Primeiramente instalaremos o Laravel e criaremos um projeto em nosso computador via composer.

Abra o terminal do Windows e navegue até a pasta htdocs do XAMPP e digite o comando a seguir:

composer create-project --prefer-dist laravel/laravel hello-world

Código 1: Instalação do Laravel e criação do projeto hello-world

Assim usamos o Composer para criar um novo projeto Laravel em nosso diretório 
htdocs chamado hello-world. Espere alguns instantes até serem baixados todos os 
arquivos, pois o processo pode demorar dependendo da sua velocidade de internet, 
como mostra as figuras a seguir:

Agora vamos ver se nossa aplicação está funcionando. Iniciaremos o servidor 
interno do PHP para que possamos acessar no navegador o projeto criado. 
Digite o comando dentro da pasta hello-world:

php artisan serve

O artisan é o nome da interface da linha de comando incluída no Laravel.
Ela fornece um bom número de comandos auxiliares para que você use durante
o desenvolvimento de sua aplicação.

Após a execução do comando será exibido no terminal o caminho
http://127.0.0.1:8000. Através dele podemos acessar a aplicação no
navegador e assim verificar se ela está em execução e o laravel foi instalado corretamente


Diretórios do projeto

Com o projeto criado vemos que alguns diretórios e arquivos são criados automaticamente.
Destes veremos abaixo os principais e suas caracteristicas:

App - contém o código principal do seu aplicativo.

Bootstrap - contém o arquivo app.php que inicializa a estrutura.

Config - como o nome indica, contém todos os arquivos de configuração do seu aplicativo..

Database - contém sua database migrations, model factories, and seeds.

Public - contém o arquivo index.php, que é o ponto de entrada para todas 
as solicitações que entram no seu aplicativo e configura o carregamento automático.

Resources - contém suas visualizações e seus recursos brutos, não compilados, 
como LESS, SASS ou JavaScript.

Routes - contém todas as definições de rota para seu aplicativo. 
Por padrão, vários arquivos de rota estão incluídos no Laravel: 
web.php, api.php, console.php and channels.php.

Storage -contém seus modelos Blade compilados, 
sessões baseadas em arquivo, caches de arquivos e outros arquivos gerados pela estrutura.

Tests - contém seus testes automatizados.

Vendor - contém suas dependências do Composer.


Hello World
Para darmos o primeiro Hello World com Laravel precisamos abrir 
a pasta do projeto num editor de código, que no caso será o Visual 
Studio Code. Com o terminal aberto na pasta do projeto podemos digitar o comando:

code .

Com o projeto aberto vamos editar o arquivo web.php na pasta routes. 
Este arquivo contém uma rota do projeto, que responde no endereço localhost:8000/,
perceba na Código 4 que informamos apenas a / como nome da rota. 
Estudaremos sobre rotas mais a frente. Veja a estrutura de uma rota abaixo:

Route::get('/', function () {
    return view('welcome');
});

Arquivo web.php

Na linha 1 o Routes:: é parte inicial para se criar uma rota.
get é verbo HTTP definido para esta rota.

/ é rota que iremos acessar, que refere se a raiz do sitema, localhost:8000.

funcion () é declaração de uma função anônima.

return irá retornar view('welcome') quando a rota for acessada.

view('welcome') é uma view que esta referenciando o arquivo welcome.blade.php 
na pasta resources/view. Quando a rota for acessada seu conteúdo será exibido,

Verbos HTTP

Na definição de uma rota poderemos utilizar outros verbos HTTP 
além do GET usado no código acima. Toda solicitação HTTP possui um verbo, 
o Laravel permite definir suas rotas com base em qual verbo foi usado.
Veja abaixo os mais comuns utilizados:

GET - solicita a representação de um recurso específico. 
Requisições utilizando o método GET devem retornar apenas dados.

POST - é utilizado para submeter uma entidade a um recurso específico,
frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

PUT - substitui todas as atuais representações do recurso de destino
pela carga de dados da requisição.

DELETE - remove um recurso específico.

PATCH - é utilizado para aplicar modificações parciais em um recurso.

Funções anônimas

Uma função anônima é qualquer função que não possui ou não precise de um nome
identificador, estas funções podem ser definidas em qualquer lugar e normalmente
são atribuídas a uma variável e/ou utilizadas como callback.

Vamos alterar as informações do código para exibir na tela nosso primeiro Hello World:

Route::get('/', function () {
    return 'Hello World com Laravel';
});

E assim executamos nosso primeiro Hello World com o framework Laravel.
Concluimos que com poucas linhas de código podemos facilmente utiliza-lo.
Desta forma a curva de aprendizado do framework se torna menor
*/