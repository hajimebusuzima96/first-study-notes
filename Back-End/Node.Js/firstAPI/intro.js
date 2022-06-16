/*
Vimos que uma aplicação é composta pelas camadas front-end e back-end
e que elas se comunicam: esta comunicação é feita através de requisições e respostas.

As requisições e respostas trafegam dados. Um dado transferido do front-end
para o back-end e vice-versa, percorre um caminho - o protocolo HTTP.

Front-end e back-end se comunicam através de requisições e respostas graças
ao protocolo HTTP, que é o meio de transferência de dados.


*/ 

/*
Vimos na aula anterior que o front-end e o back-end se comunicam através
de requisições e respostas. Nesta aula conheceremos o papel de uma API. 


Consumo de APIs
Certo, agora que entendemos o que são APIs, vamos ver como funciona o consumo de uma API

A comunicação entre tecnologias de diferentes linguagens se dá através de uma API REST,
que é simplesmente um conjunto de padrões usados para a comunicação entre sistemas

Como vimos o Node.js vem com recursos básicos apenas. Para criar uma API REST
precisamos utilizar o framework Express, que será instalado através do NPM.

Reinstalando dependências
Vale destacar que precisamos nos atentar ao transferir o projeto do ambiente local
- nosso computador - para qualquer outro ambiente, como hospedagem, GitHub ou outro computador.


O Express é um framework utilizado com o Node e é instalado como dependência, através do NPM.
Através deste framework poderemos construir APIs back-end com o Node.js
*/

/*
Para chegarmos ao nível de construímos uma API REST completa,
precisamos progredir gradativamente e para isso vamos implementar uma aplicação
simples que retorna a mensagem Hello world!.

Implementando o projeto
Certo, para iniciarmos o nosso projeto é necessário que você instale o Express,
assim como vimos na aula anterior. Feito isso, vamos ao próximo passo:

Fluxo da aplicação
Normalmente quando executamos uma aplicação, seu fluxo segue um início, meio e fim
- ou seja, sabemos que a aplicação será encerrada logo após a última linha de código.

Reiniciando a aplicação
Ao realizarmos uma alteração na nossa aplicação, devemos reiniciá-la para que as
alterações de fato entrem em vigor. Veja no próximo flow como podemos reiniciar
nossa aplicação:

Usamos o Express para criar uma aplicação back-end em nosso ambiente de testes,
que fica aguardando requisições através de uma porta HTTP.

Na última aula criamos um aplicação back-end que ainda não atendia a todos os 
padrões REST, foi um degrau necessário para a evolução do nosso estudo sobre APIs REST.

O conceito de API REST determina que a comunicação entre as aplicações deve
seguir algumas diretrizes,

Na aula anterior implementamos o projeto "Hello, World!" que ainda não atendia
totalmente ao padrão REST, agora iremos alterar o código deste projeto para que
ele atenda ao padrão.

Substituímos em nossa aplicação o método send() pelo método json(), para que
ela retorne ao front-end dados no formato JSON. Com isso, nossa aplicação passa
a estar totalmente no padrão REST.

Durante o desenvolvimento da nossa API, utilizaremos o Postman que é uma
ferramenta que tem como objetivo testar APIs REST por meio do envio de requisições HTTP.

O Postman é uma ferramenta indispensável durante o desenvolvimento de APIs REST e possui
uma interface bastante simples e intuitiva que auxilia na execução dos testes de APIs e
requisições em geral

*/