/*
No desenvolvimento de aplicações em Angular precisamos criar diferentes tipos de artefatos,
como componentes e diretivas. É através destes dois artefatos, por exemplo, que criamos a
parte visual de nossa aplicação, como caixas de texto, tabelas, entre outros. O Angular
CLI facilita bastante a criação destes artefatos através de comandos específicos para isto.

Neste documento apresentaremos como criar todos os artefatos do Angular a partir do comando
ng generate.

Tópicos

ng generate
ng generate component
ng generate directive
ng generate class
ng generate enum
ng generate interface
ng generate guard
ng generate module
ng generate pipe
ng generate service
Exemplo prático

*/ 


/*
ng generate

O Angular CLI provê um conjunto de comandos que permitem criar todos os artefatos do Angular,
como diretivas, componentes, pipes e muitos outros. A sintaxe básica para isso é:

ng generate <tipo do artefato> <nome>


Nota: Para executar um comando desse tipo, você deve estar dentro do diretório do projeto.
A seguir, serão descritos todos os comandos ng generate disponíveis.

*/

/*
ng generate component <nome>

Um dos artefatos mais importantes para o desenvolvimento com Angular, 
um componente pode ser criado de forma bastante simples, utilizando o 
comando ng generate component <nome>.

Exemplo de uso:

ng generate component favorito
O resultado da execução desse comando é:

ng generate component favorito
installing component
 create src/app/favorito/favorito.component.css
 create src/app/favorito/favorito.component.html
 create src/app/favorito/favorito.component.spec.ts
 create src/app/favorito/favorito.component.ts
 update src/app/app.module.ts
Observe que além de criar um novo diretório e os quatro arquivos necessários para um componente, esse comando também atualiza o arquivo app.module.ts, com o objetivo de incluir nele os dados necessárias para informar ao Angular sobre esse novo componente.

Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 1.

Parâmetro

Descrição

--flat

Flag que indica se deve ser criado um diretório no qual os arquivos do componente 
serão colocados. Valor padrão: true.

--inline-style

Colocar os estilos (CSS) inline, dentro do próprio arquivo ts, ao invés de 
criar um arquivo em separado para eles. Valor padrão: false.

--inline-template

Colocar os templates inline, dentro do próprio arquivo ts, ao invés de criar 
um arquivo em separado. Valor padrão: false.

--prefix <string>

Define o prefixo do seletor do componente. Caso não informado, é utilizado o 
prefixo padrão da aplicação (valor "app" ou outro definido a partir do parâmetro prefix do comando ng new).

--spec

Define se o arquivo de teste com extensão .spec.ts deve ser criado. Valor padrão: true.

--view-encapsulation <string>

Informa a estratégia de encapsulamento da View, que é relacionada ao uso do 
Shadow DOM (HTML 5) por sua aplicação de forma nativa ou emulada.

--change-detection <string>

Define a estratégia de detecção de mudanças que o componente deve usar.

--skip-import

Define se o novo componente deve ser automaticamente importado no módulo para o 
qual ele foi criado. Caso contrário, será necessário importá-lo manualmente.

--module <string>

Define para qual módulo da aplicação este componente deve ser criado.

--export

Define se o componente é visível para outros módulos.

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo 
diferentes configurações. Este parâmetro especifica para qual dessas aplicações o 
componente deve ser criado. Por padrão, é a primeira aplicação informada no 
arquivo angular-cli.json.


*/

/*

ng generate directive <nome>


O comando ng generate directive é utilizado para criar uma nova diretiva. 
Ao executá-lo, dois novos arquivos serão criados dentro da pasta /src/app: 
o arquivo contendo a classe que representa a diretiva e outro contendo a 
classe de testes para a diretiva.

Esse comando também força a atualização do arquivo app.module.ts, para 
informar ao Angular a existência da nova diretiva.

Exemplo de uso:

ng generate directive upperCase
Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 2.

Parâmetro

Descrição

--flat

Flag que indica se deve ser criado um diretório no qual os arquivos do componente 
serão colocados. Valor padrão: true.

--inline-style

Colocar os estilos (CSS) inline, dentro do próprio arquivo ts, ao invés de criar 
um arquivo em separado para eles. Valor padrão: false.

--inline-template

Colocar os templates inline, dentro do próprio arquivo ts, ao invés de criar 
um arquivo em separado. Valor padrão: false.

--prefix <string>

Define o prefixo do seletor da diretiva. Caso não informado, é utilizado 
o prefixo padrão da aplicação (valor "app" ou outro definido a partir do 
parâmetro prefix do comando ng new).

--spec

Define se o arquivo de teste com extensão .spec.ts deve ser criado. Valor padrão: true.

--view-encapsulation <string>

Informa a estratégia de encapsulamento da View, que é relacionada ao uso 
do Shadow DOM (HTML 5) por sua aplicação de forma nativa ou emulada.

--change-detection <string>

Define a estratégia de detecção de mudanças que a diretiva deve usar.

--module <string>

Define para qual módulo da aplicação esta diretiva deve ser criada.

--export

Define se a diretiva é visível para outros módulos da mesma aplicação.

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo 
diferentes configurações. Este parâmetro especifica para qual dessas aplicações 
a diretiva deve ser criada. Por padrão, é a primeira aplicação informada no
arquivo angular-cli.json.
*/

/*

ng generate guard <nome>


Um guard é um recurso utilizado para informar se um usuário pode navegar para 
uma determinada rota ou não. Ele pode ser criado através do comando ng generate
guard, conforme exemplo abaixo.

Exemplo de uso:

ng generate guard UserLoggedInGuard
O resultado da execução serão dois arquivos: um contendo a classe que 
representa o guard e outro contendo os testes dessa classe.

Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 3.

Parâmetro

Descrição

--flat

Flag que indica se deve ser criado um diretório no qual os arquivos do
guard serão colocados. Valor padrão: true.

--spec

Define se deve ser gerado o arquivo de testes (arquivo com extensão .spec.ts).

--module <string>

Define para qual módulo da aplicação este guard deve ser criado.


*/


/*
ng generate module <nome>

Os módulos são úteis para agregar funcionalidades em comum dentro de uma aplicação. 
Por exemplo, é possível criar um módulo para conter todas as funcionalidades da
área de administração de sua aplicação usando o comando ng generate module, conforme
exemplo abaixo.

Exemplo de uso:

ng generate module admin
O resultado dessa operação é a criação de um diretório chamado admin e um arquivo,
dentro dessa pasta, chamado admin.module.ts.

Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 4.

Parâmetro

Descrição

--flat

Flag que indica se deve ser criado um diretório no qual os arquivos do módulo serão colocados. Valor padrão: true.

--spec

Define se deve ser gerado o arquivo de testes (arquivo com extensão .spec.ts).

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo diferentes configurações. Este parâmetro especifica para qual dessas aplicações o módulo deve ser criado. Por padrão, é a primeira aplicação informada no arquivo angular-cli.json.

--routing

Cria um módulo onde serão definidas as rotas da aplicação. Dessa forma, dentro de um módulo teremos um outro módulo responsável pela definição das rotas relacionadas. Valor padrão: falso.


*/

/*

ng generate pipe <nome>
Muito utilizado em aplicações Angular, um pipe é responsável por transformar 
um valor de entrada em outro valor desejado. Por exemplo, ele pode receber uma 
data e formatá-la para o padrão brasileiro. A criação de pipes também é bem simples 
usando o CLI, conforme pode ser visto no exemplo abaixo.

Exemplo de uso:

ng generate pipe date
O resultado desse comando será a criação de dois arquivos: /src/app/date.pipe.ts 
e /src/app/date.pipe.spec.ts. O primeiro contém a declaração da classe que representa o pipe,
enquanto o segundo contém os testes.

Além disso, o arquivo /src/app/app.module.ts é atualizado para informar ao 
Angular a existência desse novo artefato.

Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 5.

Parâmetro

Descrição

--flat

Flag que indica se deve ser criado um diretório no qual os arquivos do módulo serão colocados. Valor padrão: true.

--spec

Define se deve ser gerado o arquivo de testes (arquivo com extensão .spec.ts).

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo diferentes configurações. Este parâmetro especifica para qual dessas aplicações o módulo deve ser criado. Por padrão, é a primeira aplicação informada no arquivo angular-cli.json.

--module <string>

Define para qual módulo da aplicação este guard deve ser criado.

--skip-import

Define se o novo pipe deve ser automaticamente importado no módulo para o qual ele foi criado. Caso contrário, será necessário importá-lo manualmente.

--export

Define se o pipe é visível para outros módulos da mesma aplicação.
*/

/*

ng generate service <nome>

Os serviços são úteis para separar toda a lógica que não está relacionada à 
visão em classes separadas como, por exemplo, o acesso a uma API para obter 
dados para exibição na tela. Para criar um serviço usando o CLI, basta executar
o comando ng generate service.

Exemplo de uso:

ng generate service api
O resultado disso será a criação do arquivo /src/app/api.service.ts contendo 
a classe que representa o serviço e o arquivo /src/app/api.service.spec.ts, 
que contém os testes dessa classe.

Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 6.

Parâmetro

Descrição

--flat

Flag que indica se deve ser criado um diretório no qual os arquivos do módulo serão colocados. Valor padrão: true.

--spec

Define se deve ser gerado o arquivo de testes (arquivo com extensão .spec.ts).

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo diferentes configurações. Este parâmetro especifica para qual dessas aplicações o módulo deve ser criado. Por padrão, é a primeira aplicação informada no arquivo angular-cli.json.

--module <string>

Define para qual módulo da aplicação este guard deve ser criado.

*/ 

/*

ng generate class <nome>

Além de artefatos do Angular, o Angular CLI também pode criar artefatos que são 
puramente TypeScript, como classes, enums e interfaces. Por exemplo, o comando ng 
generate class cria um arquivo com o nome informado e que será colocado dentro da 
pasta /src/app/. Dentro desse arquivo haverá uma classe básica escrita em Typescript,
cujo o nome é o mesmo do arquivo.

Exemplo de uso:

ng generate class produto
A execução desse comando criará o arquivo /src/app/produto.ts contendo uma 
classe chamada Produto.

Parâmetros
Para esse comando, podemos especificar os parâmetros apresentados na Tabela 7.

Parâmetro

Descrição

--spec

Define se deve ser gerado o arquivo de testes (arquivo com extensão .spec.ts).

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo 
diferentes configurações. Este parâmetro especifica para qual dessas aplicações 
a classe deve ser criada. Por padrão, é a primeira aplicação informada no arquivo 
angular-cli.json.


*/ 

/*

ng generate enum <nome>
De forma similar ao comando para criar uma classe, também é possível utilizar o
Angular CLI para gerar um enum em TypeScript. A única diferença é a mudança da 
palavra class para enum, conforme exemplo abaixo. Nesse caso, também teremos a 
criação de um novo arquivo em /src/app, que conterá a declaração de um enum.

Exemplo de uso:

ng generate enum situacaoProduto
O comando do exemplo cria o arquivo /src/app/status-produto.ts contendo um enum 
chamado SituacaoProduto.

Parâmetros
Para esse comando, podemos especificar apenas o parâmetro --app <string>.

Parâmetro

Descrição

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json contendo 
diferentes configurações. Este parâmetro especifica para qual dessas aplicações
o enum deve ser criado. Por padrão, é a primeira aplicação informada no arquivo 
angular-cli.json.


*/ 

/*
ng generate interface <nome>

A interface é outro artefato do TypeScript que pode ser criado com o Angular CLI. 
A regra é similar ao que foi feito para gerar classes e enums.

Exemplo de uso:

ng generate interface IProdutoService
A execução desse comando criará um arquivo /src/app/iproduto-service.ts
 contendo a declaração de uma interface com nome IProdutoService.

Parâmetros
Para esse comando, podemos especificar apenas o parâmetro --app <string>.

Parâmetro

Descrição

--app <string>

É possível definir várias aplicações no arquivo angular-cli.json
contendo diferentes configurações. Este parâmetro especifica para qual dessas 
aplicações a interface deve ser criada. Por padrão, é a primeira aplicação informada 
no arquivo angular-cli.json.

*/

/*
Exemplo prático

Suponha que seja necessário criar um novo componente para seu projeto e você não 
deseja que seja criado um diretório ou arquivos de teste para ele. Para tal, você 
deve usar o comando abaixo:

ng generate component Favorito --flat --spec false
Com esse componente criado, suponha que agora você precisa de um serviço para 
se comunicar com uma API externa para obter dados. Entretanto, você não quer 
arquivos de testes, mas gostaria que esse serviço fosse criado dentro de um diretório 
próprio. Para fazer isso, utilize o comando abaixo:

ng generate service API --spec false --flat false
*/