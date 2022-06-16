/*

É cada vez mais comum encontrarmos aplicações nas quais front-end e back-end estão
totalmente separados. Nesse cenário, a comunicação entre essas duas aplicações ocorre,
em geral, a partir de requisições HTTP feitas pelo cliente (front-end) para a API 
(back-end). Dessa forma a API passa a ser responsável por tarefas como processar os
pedidos dos cliente e acessar o banco de dados, enquanto o cliente apresenta esses 
dados para o usuário e dispõe da forma como o mesmo interage com a aplicação.

Atualmente o modelo arquitetural de API mais utilizado é o REST, sendo necessário
para o programador conhecê-lo, mesmo se esse deseja trabalhar apenas no cliente 
da aplicação. Isso se dá pelo fato dessa arquitetura determinar como o cliente enviará
as suas requisições e processará a resposta fornecida pela API.

O padrão REST determina como deve ser realizada a Transferência de 
Estado Representacional (Representational State Transfer — REST), ou seja, a 
representação que corresponde ao conjunto de valores que representa uma determinada
entidade em um dado momento. Essa transmissão de estados se dá a partir da 
especificação de parâmetros, em alguns casos chamados de restrições, que podem 
ser aplicados a web services. Quando isso ocorre, o que se obtém são serviços
escaláveis, de fácil modificação e manutenção, e que apresentam boa performance, 
tornando esses serviços adequados a serem utilizados através da internet. 
Outra característica do padrão REST é que a aplicação fica limitada a uma 
arquitetura cliente/servidor na qual um protocolo de comunicação que não mantenha 
o estado das transações entre uma solicitação e outra deve ser utilizado.

Nos serviços RESTful, tanto os dados quanto as funcionalidades são considerados 
recursos e ficam acessíveis aos clientes através da utilização de URIs (Uniform 
Resource Identifiers), que normalmente são endereços na web que identificam 
tanto o servidor no qual a aplicação está hospedada quanto a própria aplicação 
e qual dos recursos oferecidos pela mesma está sendo solicitado. No exemplo a 
seguir vemos como o Angular realiza a consulta a um recurso a partir da sua URI.


*/

this.http.get('https://api.starwars.com/ships/x-wing').subscribe(data => {
      console.log(data);
}); 

/*
O código acima utiliza a biblioteca HttpClient para enviar uma requisição via 
GET para a API https://api.starwars.com, utilizando a URI ships/x-wing, a 
partir da qual dados do recurso identificado como "x-wing" são listados.

Os recursos disponíveis em um serviço RESTful podem ser acessados ou manipulados 
a partir de um conjunto de operações predefinido pelo padrão. As operações 
possibilitam criar (POST), ler (GET), alterar (PUT) e apagar (DELETE) recursos, 
e estão disponíveis a partir de mensagens utilizando o protocolo HTTP. Ao receber 
uma solicitação, ou mensagem HTTP, todas as informações necessárias para a 
realização da transação estão inclusas, não sendo necessário salvar informações
para requisições de serviço futuras, o que resulta em aplicações simples e
leves do ponto de vista do desenvolvedor. Já para os usuários que utilizam 
sistemas baseados em web services RESTful, são serviços com um bom desempenho 
e transparentes, considerando sua utilização. Isso quer dizer que além de as 
solicitações aos serviços apresentarem boa responsividade, de acordo com a 
infraestrutura disponível, os usuários não fazem muita distinção entre um 
sistema executando localmente ou em um servidor de aplicação. Além dessas 
qualidades, a adoção do RESTful também tem impacto sobre outras métricas de
qualidade de software, por exemplo: a facilidade de uso da aplicação e o tempo 
necessário pelo usuário para aprender a utilizá-la.
*/