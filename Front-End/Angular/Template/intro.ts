/*
Criando o componente do contador
Nosso projeto Angular foi criado anteriormente utilizando o comando ng new,
 e não sofreu nenhuma alteração.

O primeiro passo para construirmos nosso contador é criar um componente que
ficará responsável pela sua lógica e template. Para isso, no terminal, 
utilizamos o comando ng generate component e o nome do componente:

ng generate component contador

Já criamos o nosso componente contador, mas ele ainda não está sendo utilizado
 em lugar nenhum. Para que esse componente seja exibido ao usuário, 
 precisaremos instanciá-lo dentro do componente App da nossa aplicação.

Para isso, precisaremos saber o seletor desse componente, o nome pelo qual
é conhecido pela aplicação. Podemos encontrar essa informação dentro do 
arquivo contador.component.ts.

Podemos copiar o seletor, pois o utilizaremos para instanciar o componente 
dentro do componente app da aplicação.

Como nosso projeto foi criado com o comando ng new, encontraremos uma página 
de boas vindas dentro do template do componente app. Podemos apagar a 
app.component.html por completo.

Finalmente, instanciamos o componente do contador:

<app-contador></app-contador>

Para sabermos se funcionou, podemos executar nossa aplicação com o
comando ng serveno terminal.

Ao final do carregamento, veremos a nossa aplicação funcionando no navegador. 
Essa mensagem que você está vendo faz parte do template do componente contador
e prova que o mesmo foi criado e instanciado corretamente.

Todo componente tem um seletor que usamos para adicioná-lo nas interfaces da aplicação.
*/