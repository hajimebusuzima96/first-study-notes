/*
Nós já vimos que o Spring é um conjunto de projetos e que cada um
deles visa solucionar um problema específico. Agora, o próximo passo
como desenvolvedor Java/Spring, é criar o um primeiro projeto, bem básico,
que será um Hello World utilizando o Spring Boot junto com o Spring MVC.
Para alcançarmos esse resultado, seguiremos alguns passos que, hoje em dia,
são comuns no desenvolvimento Java com o Spring, que são:

A criação de um projeto Spring com o Spring Boot
A adição e configuração do módulo Spring MVC na nossa aplicação
Os dois pré-requisitos para você acompanhar esse curso são:

Instalar o JDK
Ter uma IDE no seu computador
A versão do Java que recomendamos para esse curso é a 1.8, por ter
melhor compatibilidade com o Spring Boot na data atual. Quanto a IDE,
a gente recomenda o Intellij IDEA na versão Community, por essa ser uma
IDE moderna, fácil de usar em comparação ao Eclipse e NetBeans, além de gratuita.

Os links para essas ferramentas estão disponíveis abaixo.

JDK
Intellij
Iniciamos um novo projeto Spring com Spring Boot.

Começar um projeto do zero nem sempre é uma tarefa fácil porque podemos
precisar de muitas configurações antes de começarmos a escrever nossos códigos.
Visando facilitar esse processo em projetos Spring usamos o Spring Boot, que é
um módulo muito especial porque absorve a configuração de qualquer outro módulo
Spring que venhamos utilizar no projeto. Atualmente, é difícil ver uma aplicação
que não faça uso do Spring Boot, ao passo que muitas pessoas costumam chamar, de
forma equivocada, aplicações Spring de aplicações Spring Boot, tamanha é a
popularidade desse módulo.

A melhor maneira da gente começar um projeto com o Spring Boot é usando uma
ferramenta web, desenvolvida pelo próprio time Spring, chamada Spring Initializr.
Nessa ferramenta informamos as características do projeto e ela nos entrega um
arquivo .zip, contendo toda estrutura básica de uma aplicação Spring, já pronta
para ser executada.

É comum chamarmos o código que não escrevemos e que é necessário para a aplicação
funcionar de dependência. Por exemplo, em uma aplicação que usa o Spring Boot e
o Spring MVC temos pelo menos essas duas dependências. Em um projeto Spring Boot,
as dependências da aplicação podem ser selecionadas no Spring Initializr em um
primeiro momento, mas podem ser gerenciadas a qualquer momento através no maven.
É essa a ferramenta que constrói, executa e provê informações sobre o projeto,
por exemplo, quais são as suas dependências.

Hoje em dia, qualquer IDE profissional tem ótima integração com o maven, de
forma que não é necessário conhecer os seus comandos para programar e depurar
um projeto que faço uso dele. Porém, é bom que saibamos que todo projeto que
utiliza o maven possui um arquivo chamado pom.xml,

Esse arquivo pode ser resumido em três seções principais:
*/

<groupId>br.com.myproject</groupId>
<artifactId>calculadoraPintura</artifactId>
<version>0.0.1-SNAPSHOT</version>
<name>calculadoraPintura</name>
<description>Demo project for Spring Boot</description> 

/*
Contém informações do projeto, como o seu nome (artefactId), versão (version)
e a que time de desenvolvimento ele pertence (groupId).
*/

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>


/*
qui estão contidas as dependências do projeto. Note que as informações contidas
aqui são semelhantes as que estão contidas na seção de informações do projeto,
ou seja, cada dependência é um projeto maven que possui um group, artefact e version.
Nesse caso, a ferramenta Spring Initializr criou três dependências para o projetos,
sendo Thymeleaf e Web para que ele seja uma aplicação web, e test para que possamos
testá-lo, implementando TDD.
*/


<build>
    <plugins>
        <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</build> 


/*
Chegamos finalmente a seção de plugins, que são pequenos programas utilizados pelo
maven para realizar tarefas triviais, como gerar código automaticamente, executar
a aplicação, enviá-la para um servidor web, entre outras. Caso você tenha alguma
experiência com desenvolvimento web deve ter notado que não é necessário configurar
um servidor web para executar uma aplicação Spring Boot e isso acontece graças a
um plugin, que após compilar o código do projeto o envia para o Tomcat, permitindo
assim que a aplicação passa ser testada no navegador.

Uma última informação para entender o Spring Boot é que ele configura
a aplicação de forma incremental, separando a configuração para cada módulo Spring
que venha ser adicionado ao projeto em um pom.xml diferente. A isso ele chama
de starters, porque são eles os pontos de partida para utilizar os módulos do Spring
com pouca ou nenhuma configuração. Dessa forma, cada módulo do Spring Boot possui
um starter diferente e sempre que precisarmos adicionar um novo módulo Spring
faremos isso adicionando o starter desse módulo, mas isso veremos como fazer em
outros cursos sobre o ecossistema Spring.

Digitamos na pasta src\main.

Agora, com a aplicação aberta na IDE, veremos como adicionar um Controller
com um mínimo de código para fazê-la funcionar no navegador. A adição desse
componente é possível porque anteriormente selecionamos o módulo Web na aplicação,
usando o Spring Initializr. Confira esse passo a passo no vídeo acima.

Nesse curso aprendemos a criar e a configurar uma aplicação com Spring Boot,
que é uma ferramenta que nos ajuda na configuração inicial e na publicação de uma
aplicação Spring.

A gente viu que o Spring Boot nos permite iniciar uma aplicação sem ter que
fazer nenhuma configuração, utilizando apenas a ferramenta Spring Initializr e
uma IDE, nos deixando mais livres para pensarmos nas regras de negócio da nossa
aplicação, tornando-nos assim, muito mais produtivos.

Gerando um projeto
Importando um projeto
Estrutura de um projeto
executando o projeto

*/