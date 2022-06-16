/*
Agora que criamos o objeto Vue e as propriedades que serão utilizadas
na aplicação precisamos criar os métodos que vão criptografar e
descriptografar o texto quando os botões forem clicados

Para criar os métodos, abra o arquivo script.js e insira o Código
*/

const aplicacao = new Vue({
    el: '#main',
    data: {
      txtParaCripto: '',
      txtParaDescripto: '',
      msgErro: '',
      resultadoTitulo: '',
      resultadoTexto: '',
    },
    methods: {
      criptografar: function(event) {
        event.preventDefault();

        if ( this.txtParaCripto.length > 0 ) {
          this.resultadoTitulo = 'Texto criptografado';
          this.resultadoTexto = btoa(this.txtParaCripto)
          this.msgErro = "";
        } else {
          this.resultadoTitulo = '';
          this.resultadoTexto = '';
          this.msgErro = "Digite um texto para criptografar";
        }
      },
      verificaBase64: function(texto) {
        const regex = /^([A-Za-z0-9+/])*([A-Za-z0-9+/]|[A-Za-z0-9+/]=|[A-Za-z0-9+/]==)$/;
        return regex.test(texto);
      },
      descriptografar: function(event) {
        event.preventDefault();

        const verificaBase64 = this.verificaBase64(this.txtParaDescripto);

        if ( verificaBase64 && this.txtParaDescripto.length > 0) {
          this.resultadoTitulo = 'Texto descriptografado';
          this.resultadoTexto = atob(this.txtParaDescripto);
          this.msgErro = "";
        } else {
          this.resultadoTitulo = '';
          this.resultadoTexto = '';
          this.msgErro = "Este não é um formato válido";
        }
      }
    }
  });


/*
Com os métodos devidamente criados precisamos chamá-los no código HTML.
Para isso abra o arquivo index.html e insira o Código
<!DOCTYPE html>
  <html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aplicação Vue.js</title>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?
      family=Montserrat:300,400,500,600,700" rel="stylesheet">
  </head>
  <body>
    <header>
      <h1 class="titulo-header">
        Criptografando e descriptografando um texto
      </h1>
    </header>

    <main id="main">
      <section class="formularios">
        <div class="form-box">
          <img src="assets/imgs/locked-padlock.png" />
          <h2 class="titulo">Criptografar</h2>
          <p class="subtitulo">Digite o texto para criptografar</p>

          <form v-on:submit.prevent="criptografar">
            <input type="text"
              v-model="txtParaCripto"
              placeholder="Digite o texto"/>

            <input type="submit" value="Criptografar">
          </form>
        </div>

        <div class="form-box">
          <img src="assets/imgs/padlock.png" />
          <h2 class="titulo">Descriptografar</h2>
          <p class="subtitulo">Digite o texto para descriptografar</p>

          <form v-on:submit.prevent="descriptografar">
            <input type="text"
              v-model="txtParaDescripto"
              placeholder="Digite o texto"/>

            <input type="submit" value="Descriptografar">
          </form>
        </div>
      </section>

      <section class="box-mensagem">

        <h4 class="subtitulo">{{ resultadoTitulo }}</h4>
        <h3>{{ resultadoTexto }}</h3>

      </section>

      <section class="box-mensagem">
        <h3 class="titulo-erro">{{ msgErro }}</h3>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
  </html>
*/