/*
Quando criamos um aplicativo com abas e definimos as rotas,
por padrão em cima do nome da rota apareça um ícone em formato de X

Para fazer essa personalização, ou seja, inserir ícones nas abas,
vamos aprender como utilizar a biblioteca @expo/vector-icons.

Biblioteca @expo/vector-icons

A biblioteca @expo/vector-icons possui uma série de ícones e
você pode pesquisá-los através do site oficial.


Não é necessário instalar a biblioteca @expo/vector-icons.
Ela já vem instalada por padrão nos aplicativos criados utilizando o Expo
Vamos aprender a sintaxe de uso dos ícones em um aplicativo.
Lembrando que neste momento não vamos inserir ícones nas abas,
mas focaremos em como utilizar a biblioteca.

Veja no Código o código base que usaremos.


*/

import React from "react";
import { Text, View } from "react-native";

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Casa (home)</Text>
    </View>
  )
};

// Veja no Código o código de estilo do aplicativo. 

import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 36,
    marginBottom: 20,
    marginTop: 30
  }
});

export default estilos;


// Veja no Código o código de importação dos dois ícones.

import React from "react";
import { Text, View } from "react-native";
import { Entypo, FontAwesome } from '@expo/vector-icons';

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Casa (home)</Text>
      <Entypo name="home" size={ 24 } color="black" />

      <Text style={ estilos.texto }>Usuário (user)</Text>
      <FontAwesome name="user" size= color="black" />
    </View>
  )
};


/*
O componente importado da biblioteca @expo/vector-icons possui
uma coleção de ícones e o que define qual será exibido é o valor da propriedade name

Através da propriedade size definimos um único valor para altura e largura do ícone,
ou seja, os ícones serão sempre quadrados
Veja no Código exemplos de uso dos ícones da biblioteca @expo/vector-icons.

*/


import React from "react";
import { View } from "react-native";
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function App () {
  return (
    <View>
      <Entypo name="home" size={ 100 } color="black" />
      <Entypo name="add-user" size= color="#ff00f0" />

      <FontAwesome name="user" size= color="blue" />
      <FontAwesome name="user-circle-o" size= color="rgb(255,0,0)" />

      <MaterialIcons name="verified-user" size= color="#d9d9d9" />
      <MaterialIcons name="supervised-user-circle" size= color="gold" />
    </View>
  )
};

/*
Veja o código de exibição do aplicativo.
*/ 

import React from "react";

import { Text, View } from "react-native";
import { Entypo, EvilIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>Entypo</Text>

          <View style={ estilos.iconesLista}>
            <Entypo name="arrow-bold-up" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-down" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-left" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-right" size={ 40 } color="#1f5831" />
            <Entypo name="chat" size={ 40 } color="#038cf5" />
            <Entypo name="cloud" size={ 40 } color="#6a6a6a" />
          </View>
        </View>

        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>EvilIcons</Text>

          <View style={ estilos.iconesLista}>
            <EvilIcons name="close" size={ 40 } color="red" />
            <EvilIcons name="location" size={ 40 } color="gold" />
            <EvilIcons name="navicon" size={ 40 } color="#871ed7" />
            <EvilIcons name="star" size={ 40 } color="yellow" />
            <EvilIcons name="trash" size={ 40 } color="black" />
            <EvilIcons name="search" size={ 40 } color="black" />
          </View>
        </View>

        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>MaterialCommunityIcons</Text>

          <View style={ estilos.iconesLista}>
            <MaterialCommunityIcons name="account-box" size= color="#1e71d7" />
            <MaterialCommunityIcons name="alarm" size= color="#f16658" />
            <MaterialCommunityIcons name="alert-circle" size= color="gold" />
            <MaterialCommunityIcons name="autorenew" size= color="green" />
            <MaterialCommunityIcons name="camera-outline" size= color="#323232" />
            <MaterialCommunityIcons name="cart" size= color="#6a6a6a" />
          </View>
        </View>
    </View>
  )
};


/*
Veja o codigo do aplicativo abaixo:
*/

import React from "react";
import { Text, View } from "react-native";
import { Entypo, EvilIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

import estilos from "./estilos";

export default function App () {
  return (
    <View style={ estilos.container }>
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>Entypo</Text>

          <View style={ estilos.iconesLista}>
            <Entypo name="arrow-bold-up" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-down" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-left" size={ 40 } color="#1f5831" />
            <Entypo name="arrow-bold-right" size={ 40 } color="#1f5831" />
            <Entypo name="chat" size={ 40 } color="#038cf5" />
            <Entypo name="cloud" size={ 40 } color="#6a6a6a" />
          </View>
        </View>
        
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>EvilIcons</Text>

          <View style={ estilos.iconesLista}>
            <EvilIcons name="close" size={ 40 } color="red" />
            <EvilIcons name="location" size={ 40 } color="gold" />
            <EvilIcons name="navicon" size={ 40 } color="#871ed7" />
            <EvilIcons name="star" size={ 40 } color="yellow" />
            <EvilIcons name="trash" size={ 40 } color="black" />
            <EvilIcons name="search" size={ 40 } color="black" />
          </View>
        </View>
        
        <View style={ estilos.boxIcones}>
          <Text style={ estilos.boxIconesTitulo}>MaterialCommunityIcons</Text>

          <View style={ estilos.iconesLista}>
            <MaterialCommunityIcons name="account-box" size={40} color="#1e71d7" />
            <MaterialCommunityIcons name="alarm" size={40} color="#f16658" />
            <MaterialCommunityIcons name="alert-circle" size={40} color="gold" />
            <MaterialCommunityIcons name="autorenew" size={40} color="green" />
            <MaterialCommunityIcons name="camera-outline" size={40} color="#323232" />
            <MaterialCommunityIcons name="cart" size={40} color="#6a6a6a" />
          </View>
        </View>
    </View>
  )
};

/*Vejao código do componente App, responsável por criar as rotas. */

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Início"
          component = { TelaInicial }
        />

        <Tabs.Screen
          name="Sobre"
          component = { TelaSobre }
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};

/*
A propriedade options é utilizada para alterar a aparência de uma rota.
Passamos para ela o valor tabBarIcon para alterar o ícone que será exibido
na aba relacionada à rota escolhida

O Código exibe o trecho de código da aba Início já com o ícone (App.js).
*/ 

<Tabs.Screen
    name="Início"
    component = { TelaInicial }
    options={{
        tabBarIcon: () => (
            <Entypo name="home" color="black" size={ 24 } />
        ),
    }}
/>


/*
Veja no Código como ficou o código do componente App depois de inserir os ícones nas abas.
*/ 

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Início"
          component = { TelaInicial }
          options={{
            tabBarIcon: () => (
              <Entypo name="home" color="black" size={ 24 } />
            ),
          }}
        />

        <Tabs.Screen
          name="Sobre"
          component = { TelaSobre }
          options={{
            tabBarIcon: () => (
              <FontAwesome name="question-circle-o" color="black" size={ 24 } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};

/*
Ao salvar o código já é possível ver os ícones nas abas,
porém podemos reparar que quando tocamos em uma aba o texto com o nome da
rota muda de cor e o ícone se mantém da cor que definimos.

Veja no Código o código do componente App refatorado.

*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={{tabBarLabelStyle:{fontSize: 20}}} >
        <Tabs.Screen
          name="Início"
          component = { TelaInicial }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 24 } />
            ),
          }}
        />

        <Tabs.Screen
          name="Sobre"
          component = { TelaSobre }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="question-circle-o" color={ color } size={ 24 } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};


/*
Ao associar a cor dinâmica à propriedade color do componente,
a aba será por padrão azul quando estiver ativa e cinza quando estiver inativa

Veja o código do componente App.js responsável por personalizar as abas do aplicativo.
*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaQuartos";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Início"
          component = { TelaInicial }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 24 } />
            ),
          }}
          />

        <Tabs.Screen
          name="Quartos"
          component = { TelaSobre }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bed" color={ color } size={ 24 } />
            ),
          }}
        />

        <Tabs.Screen
          name="Contato"
          component = { TelaContato }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="phone-alt" color={ color } size={ 24 } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};

/*
Veja o codigo do aplicativo abaixo:
*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaQuartos";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
          name="Início" 
          component = { TelaInicial }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 24 } />
            ),
          }}
          />

        <Tabs.Screen 
          name="Quartos" 
          component = { TelaSobre } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bed" color={ color } size={ 24 } />
            ),
          }}
        />
        
        <Tabs.Screen 
          name="Contato" 
          component = { TelaContato } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="phone-alt" color={ color } size={ 24 } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};

/*
Para que seu aplicativo tenha uma melhor experiência para o usuário,
sempre que utilizar tab navigation não crie muitas abas. Um número maior
que quatro telas pode fazer com que a aparência das abas não tenha a proporção
desejada em telas menores


Veja a seguir como estilizar as abas e o container das abas.

Estilizando as abas e o container das abas
Para demonstrar as propriedades que podemos utilizar para estilizar o container
e as abas do aplicativo, vamos utilizar o código de um aplicativo que possui três abas.


A propriedade screenOptions é utilizada para estilizar tanto o container das abas
quanto as abas ativa e inativa

O valor das propriedades tabBarStyle e tabBarLabelStyle é um estilo,
por isso inserimos entre chaves. O valor das propriedades tabBarLabelPosition,
tabBarActiveBackgroundColor, tabBarActiveTintColor e tabBarInactiveTintColor
é um texto, por isso inserimos entre aspas simples ou dupla
Você já aprendeu a utilizar uma propriedade por vez dentro de screenOptions.
Para utilizar mais de uma propriedade basta separá-las por vírgula

O Código apresenta o trecho de código usado para estilizar as abas do aplicativo.


*/

<Tabs.Navigator
  screenOptions={{
    tabBarStyle: {
      backgroundColor: "#eab990",
    },
    tabBarLabelStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    tabBarActiveBackgroundColor: "#e07d42",
    tabBarInactiveTintColor: "#f00",
    tabBarActiveTintColor: "#150b13",
    tabBarLabelPosition: 'beside-icon',
  }}
>
</Tabs.Navigator>

/*

Veja o código referente a personalização das abas do aplicativo - arquivo App.js
*/ 

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import TelaPerfil from "./componentes/TelaPerfil";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#fff"},
          tabBarActiveBackgroundColor: "#013987",
          tabBarLabelStyle:{ fontSize: 16},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#013987",
          tabBarLabelPosition: 'beside-icon',
        }}
      >
        <Tabs.Screen
          name="Perfil"
          component = { TelaPerfil }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={ color } size={ 24 } />
            ),
          }}
        />

        <Tabs.Screen
          name="Contato"
          component = { TelaContato }
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" size={ 24 } color={ color } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};


/*
Veja codigo do aplicativo abaixo:

*/


import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import TelaPerfil from "./componentes/TelaPerfil";
import TelaContato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Tabs.Navigator 
        screenOptions={{        
          tabBarStyle: { backgroundColor: "#fff"},
          tabBarLabelStyle:{ fontSize: 16},
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveBackgroundColor: "#013987",
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#013987",
        }}
      >
        <Tabs.Screen 
          name="Perfil" 
          component = { TelaPerfil }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={ color } size={ 24 } />
            ),
          }}
        />
        
        <Tabs.Screen 
          name="Contato" 
          component = { TelaContato } 
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" size={24} color={ color } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};


/*
Quando estilizamos as abas conseguimos fazer com que o design do aplicativo
fique uniforme. Isso vai trazer uma melhor experiência para o usuário e deixa
o seu aplicativo mais profissional.

Na aula anterior aprendemos a utilizar a propriedade screenOptions para
estilizar as abas do aplicativo. Nesta aula, vamos aprender a inserir propriedades
em screenOptions para estilizar a barra de título.


Veja a seguir como estilizar a barra de título do aplicativo.

Estilizando a barra de título

Para demonstrar as propriedades que podemos utilizar para estilizar a barra de título,
vamos utilizar o código de um aplicativo que possui duas abas.

O valor false não foi inserido entre aspas na propriedade headerShown porque ele não é um texto,
porém ele também não é um número e nem é um estilo. Ele é um valor chamado booleano
- conceito da linguagem JavaScript
Assim como vimos na aula anterior, para utilizar mais de uma propriedade em
screenOptions basta separá-las por vírgula


O Código apresenta o trecho usado para estilizar a barra de título do aplicativo.
*/ 

<Tabs.Navigator
  screenOptions={{

    headerStyle: {
      backgroundColor: '#4530b2'
    },

    headerTitleStyle: {
      color: '#fff',
      fontWeight: 'bold'
    },

    headerTitleAlign: 'center',

  }}
>
</Tabs.Navigator>


/*O Código apresenta um exemplo que estiliza a
barra de título e o containers das abas.*/ 

<Tabs.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#4530b2'
    },
    headerTitleStyle: {
      color: '#fff',
      fontWeight: 'bold'
    },
    headerTitleAlign: 'center',

    tabBarStyle: {
      backgroundColor: "#fff",
    },
    tabBarLabelStyle: {
      fontWeight: 'bold',
    },
    tabBarActiveBackgroundColor: "#ff7a00",
    tabBarActiveTintColor: "#fff",
  }}
></Tabs.Navigator> 


/*
As propriedades utilizadas para estilizar a barra de título são iniciadas
com header e as propriedades utilizadas para estilizar as abas são iniciadas com tabBar
Exemplo prático
Para colocar em prática a estilização da barra de título, vamos criar o aplicativo


Veja no Código 3 o código do arquivo App.js responsável por criar as rotas
do aplicativo e estilizar a barra de título do aplicativo.
*/ 

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';

import TelaHome from './componentes/TelaHome';
import TelaSobre from './componentes/TelaSobre';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },

          headerTitleStyle: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 22
          },

          tabBarStyle: {
            backgroundColor: "#fff",
          },
          tabBarActiveBackgroundColor: "#000",
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="Evanescense"
          component=
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size='' color='' />
            ),
          }}
        />

        <Tabs.Screen
          name="Sobre a banda"
          component=
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="guitar-electric" size='' color={ color } />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
} 

    // Veja o codigo do aplicativo abaixo:
    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import { FontAwesome5, MaterialCommunityIcons  } from '@expo/vector-icons';
    
    import TelaHome from './componentes/TelaHome';
    import TelaSobre from './componentes/TelaSobre';
    
    const Tabs = createBottomTabNavigator();
    
    export default function App() {
      return (
        <NavigationContainer>
                <Tabs.Navigator 
                    screenOptions={{
                        headerStyle: { 
                            backgroundColor: '#000',
                        },
                        
                        headerTitleStyle: { 
                            color: '#fff', 
                            fontWeight: 'bold',
                fontSize: 22
                        },
    
              tabBarStyle: {
                            backgroundColor: "#fff",
                        },
                        tabBarActiveBackgroundColor: "#000",
                        tabBarActiveTintColor: "#fff",
                    }}
                >
            <Tabs.Screen
              name="Evanescense"
              component={TelaHome}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="home" size={24} color={color} />
                ),
              }}
            />
    
            <Tabs.Screen
              name="Sobre a banda"
              component={TelaSobre}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="guitar-electric" size={24} color={ color } />
                ),
              }}
            />
          </Tabs.Navigator>
        </NavigationContainer>
      );
    }


/*
Você aprendeu neste curso a estilizar as abas e a barra de título do aplicativo,
além de utilizar a biblioteca @expo/vector-icons para inserir ícones no seu aplicativo.


Veja a seguir como os conceitos deste curso foram aplicados no aplicativo.

O código completo do aplicativo pode ser baixado e visualizado através do botão
Ver projeto e código
Estilizando a barra de título e as abas
A barra de título e as abas foram estilizadas no código do componente App
responsável por criar as rotas do aplicativo.

*/

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicial from './componentes/TelaInicial/';
import TelaCatalogo from './componentes/TelaCatalogo';
import TelaContato from "./componentes/TelaContato";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator screenOptions={{
        headerStyle:{
          backgroundColor: '#400303'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#ab887c",
        tabBarActiveBackgroundColor: "#400303",
      }}>
        <Abas.Screen
          name="Início"
          component = { TelaInicial }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />

        <Abas.Screen
          name="Catálogo"
          component = { TelaCatalogo }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
            ),
          }}
        />

        <Abas.Screen
          name="Contato"
          component = { TelaContato }
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" color={ color } size={ 20 }/>
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  )
}


/*
Vale lembrar que as propriedades utilizadas para estilizar a barra de
título são iniciadas com header e as propriedades utilizadas para estilizar
as abas são iniciadas com tabBar

o código do aplicativo pode ser observado abaixo;
*/ 

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicial from './componentes/TelaInicial';
import TelaCatalogo from './componentes/TelaCatalogo';
import TelaContato from "./componentes/TelaContato";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator screenOptions={{
        headerStyle:{ 
          backgroundColor: '#400303' 
        },
        headerTitleStyle: { 
          color: '#fff', 
          fontWeight: 'bold' 
        },
        headerTitleAlign: 'center',
        
        tabBarStyle: { 
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{ 
          fontSize: 14, 
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#ab887c",
        tabBarActiveBackgroundColor: "#400303",
      }}>
        <Abas.Screen 
          name="Início" 
          component = { TelaInicial } 
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />
        
        <Abas.Screen 
          name="Catálogo" 
          component = { TelaCatalogo } 
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
            ),
          }}
        />
        
        <Abas.Screen 
          name="Contato" 
          component = { TelaContato } 
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" color={ color } size={ 20 }/>
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  )
}