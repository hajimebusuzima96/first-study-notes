/*
Antes de gerar o instalador do aplicativo precisamos alterar alguns arquivos.
Eles são importantes para publicar o app na loja.

Antes de gerar o instalador algumas configurações são necessárias
para personalizar as informações sobre o aplicativo.

Quando falamos em informações do aplicativo estamos falando do
arquivo app.json. Através dele codificamos as características exclusivas do nosso app.

resizeMode possui os valores cover e contain (default).
Essa propriedade é a mesma do componente Image


Configuração do Android
Para gerarmos um aplicativo para Android precisamos definir duas
configurações que são: o ID do aplicativo e o código da versão


Configuração do iOS
Assim como no Android, não é diferente no iOS e
por isso precisamos definir o ID e a versão do aplicativo

O package (no caso do Android) e o bundleIdentifier (no caso do iOS)
devem ser únicos e por isso não poderá ter outro aplicativo com este mesmo ID na loja

Gerar um instalador é o processo necessário para que outros usuários instalem
o aplicativo final. No Android podemos gerar dois arquivos: .apk e .aab.


apk pode ser instalado diretamente no celular sem passar pela loja,
porém é um arquivo muito maior e menos otimizado do que o arquivo .aab



Para gerar o instalador do nosso aplicativo - .apk ou .aab para Android
e .ipa para iOS, o primeiro passo é alterar as informações sobre ele no arquivo app.json.

Esse arquivo fica na raiz do projeto


O Expo recomenda utilizar uma imagem PNG com o tamanho 1024x1024 para o ícone
O código do arquivo app.json segue no Código


*/ 

{
    "expo": {
      "name": "Desafio Tabuada",
      "icon": "./assets/icone.png",
      "slug": "desafio-tabuada",
      "version": "1.0.0",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#03989e"
      },
      "android": {
        "package": "com.devup.desafiotabuada",
        "versionCode": 1
      },
      "ios": {
        "bundleIdentifier": "com.devup.desafiotabuada",
        "buildNumber": "1.0.0"
      }
    }
  }

/*
No arquivo JSON não utilizamos aspas simples apenas aspas duplas
Através do arquivo app.json configuramos as informações únicas do nosso aplicativo


Chegamos ao ponto final da programação do nosso aplicativo que é gerar o instalador.
Através dele vamos conseguir enviar nosso App para as lojas.

Antes de gerar o aplicativo você precisa se logar em sua conta no expo.
Para se logar execute o Código 1 no terminal e em seguida digite seu usuário e senha.

expo login

Em seguida precisamos instalar uma ferramenta responsável por gerar o instalador
do Android. Para isso execute o Código .

npm install -g eas-cli

Com a ferramenta eas-cli instalada o próximo passo é abrir o seu projeto
no terminal - já logado na sua conta do expo, e executar o comando do Código .

eas build -p android

O arquivo que você acabou de baixar (.aab) já pode ser enviado para a Google Play.

Para publicar Apps na Google Play é preciso criar uma conta de desenvolvedor,
que requer o pagamento de uma taxa única

Caso você não queira criar uma conta na Google Play, o que requer pagamento de uma taxa, a alternativa é gerar o .apk e enviar diretamente para os dispositivos dos usuários.

Gerando um arquivo .apk

Veja no Código o conteúdo do arquivo eas.json.

*/ 

{
    "build": {
      "preview": {
        "android": {
          "buildType": "apk"
        }
      },
      "preview2": {
        "android": {
          "gradleCommand": ":app:assembleRelease"
        }
      },
      "preview3": {
        "developmentClient": true
      },
      "production": {}
    },
    "cli": {
      "version": ">= 0.53.1"
    }
  } 


/*Tanto o .apk quanto o .aab são gerados no site do Expo, 
onde podemos baixá-los e enviar para a loja (.aab) ou então
instalar direto no dispositivo (.apk)*/