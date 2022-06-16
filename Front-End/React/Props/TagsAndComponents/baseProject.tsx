/*
Para acelerar o processo de aprendizagem, disponibilizamos um projeto 
base que vai permitir focar no conteúdo desta aula que é passar tags e 
componentes através de props.

O projeto base pode ser baixado no botão Baixar código.

Criando o projeto
O projeto base baixado possui o arquivo package.json

Este arquivo possui todas as configurações necessárias para que o npm 
(gerenciador de pacotes) crie a aplicação e instale as bibliotecas necessárias
para que o projeto funcione.

Abra a pasta do projeto base no terminal e execute o seguinte comando do Código.

npm install

1. Criando um projeto utilizando o arquivo package.json
Dessa forma o npm vai criar o projeto e instalar todas as bibliotecas definidas
no arquivo package.json.

Cada projeto possui seu próprio arquivo package.json com as suas próprias configurações.

Na próxima aula vamos criar o componente EstruturaPagina que representará a estrutura de
todas as páginas do nosso projeto. Dessa forma vamos colocar em prática o que aprendemos
neste curso.

O arquivo package.json possui as configurações necessárias para criar o projeto e instalar
as bibliotecas necessárias para que ele execute corretamente

Baseado no que aprendemos neste curso vamos criar um componente que representa esta estrutura
e que recebe o seu conteúdo (tags e componentes) através de props.

Dentro do diretório componentes crie uma nova pasta chamada EstruturaPagina e nela um
arquivo chamado index.js. Insira o Código
*/ 


import React from 'react';

import Rodape from '../Rodape';
import Topo from '../Topo';

const EstruturaPagina = ( props ) => {
  return (
    <section>
      <Topo />

      { props.children }

      <Rodape />
    </section>
  );
};

export default EstruturaPagina;


/*
O próximo passo é importar o componente EstruturaPagina nos componentes (Home e Contato)
que representam as páginas da nossa aplicação. Esse é o assunto da próxima aula.

Através de props.children exibimos as tags e componentes que serão passados para o componente

Com a estrutura das páginas do projeto criada vamos agora importá-la nos componentes Home
e Contato. Vamos também passar o conteúdo das respectivas páginas para o componente
EstruturaPagina

Refatorando a página Home


A página Home - paginas/Home/index.js

Vamos refatorar o seu código e importar o componente EstruturaPagina.
Para isso abra o arquivo paginas/Home/index.js e insira o Código


*/
import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';

const Home = (  ) => {
  return (
    <EstruturaPagina>

      <div className="home-apresentacao">
        <div className="limitar-container">
          <h1>Os melhores <span>aparelhos dentários</span>!</h1>

          <p>
            Confira abaixo todas as especialidades odontológicas que temos à sua disposição!
          </p>

          <ul className="lista-servicos">
            <li>
              <img src="assets/dente.png" alt="logo" title="logo"/>
              <p>Pré-avaliação</p>
            </li>

            <li>
              <img src="assets/dente.png" alt="logo" title="logo"/>
              <p>Aparelhos Dentários</p>
            </li>

            <li>
              <img src="assets/dente.png" alt="logo" title="logo"/>
              <p>Raio-X digital</p>
            </li>

            <li>
              <img src="assets/dente.png" alt="logo" title="logo"/>
              <p>Clareamento dental</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="titulo-sessao">Por que usar <b>aparelho</b>?</h2>

      <img className="img-aparelho" src="assets/aparelho.png" alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho"/>

      <ul className="lista-sobre-aparelho limitar-container">
        <li>
          <h3>Alinhar os dentes</h3>
          <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
        </li>
        <li>
          <h3>Melhorar a dicção e a higiene dentária</h3>
          <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
        </li>
        <li>
          <h3>Corrigir espaço entre os dentes</h3>
          <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
        </li>
      </ul>

      <div className="home-depoimentos">
        <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>

        <ul className="lista-depoimentos">
          <li>
            <img className="img-aparelho" src="assets/cliente01.png" alt="Cliente Alberto" title="Cliente Alberto"/>
            <p>Alberto</p>
            <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
          </li>

          <li>
            <img className="img-aparelho" src="assets/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana"/>
            <p>Eliana</p>
            <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
          </li>

          <li>
            <img className="img-aparelho" src="assets/cliente03.png" alt="Cliente Carla" title="Cliente Carla"/>
            <p>Carla</p>
            <p>Começei a usar ano passado e já estou notando a diferença.</p>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/contato" className="btn-contato">Entrar em contato</Link>

      </div>
    </EstruturaPagina>
  );
}

export default Home;

/*
Refatorando a página Contato

Em seguida vamos refatorar a página Contato (paginas/Contato/index.js)

Abra o arquivo paginas/Contato/index.js e insira o Código


*/

import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Mapa from '../../componentes/Mapa';

import './estilo.css';

const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>

          <p>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>

          <ul className="lista-medicos">
            <li>
              <img className="img-aparelho" src="assets/medico01.png" alt="Dr. Hélio" title="Dr. Hélio"/>
              <p>Dr. Hélio</p>
              <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
            </li>

            <li>
              <img className="img-aparelho" src="assets/medico02.png" alt="Dr. Carlos" title="Dr. Carlos"/>
              <p>Dr. Carlos</p>
              <p>Terças e quintas das 13:00 às 18:00</p>
            </li>

            <li>
              <img className="img-aparelho" src="assets/medico03.png" alt="Dra. Suzana" title="Dra. Suzana"/>
              <p>Dra. Suzana</p>
              <p>Terças, quintas e sábados das 08:00 às 12:00</p>
            </li>
          </ul>

        </div>

        <div className="contato-mapa">
          <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>

          <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904
          </p>

          <Mapa />
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Contato;

/*
Ao salvar as alterações o código do seu projeto estará refatorado e utilizando o 
conceito que vimos neste curso que é passar tags e componentes através de props.
*/