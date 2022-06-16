"""
Listas
Lista é uma coleção de valores indexada, em que cada valor é identificado por um índice.
 O primeiro item na lista está no índice 0, o segundo no índice 1 e assim por diante.

Para criar uma lista com elementos deve-se usar colchetes e adicionar os itens entre 
eles separados por vírgula, 
"""

programadores = ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']
print(type(programadores)) # type ‘list’
print(len(programadores)) # 5
print(programadores[4]) # Luana 

"""
Outra característica das listas no Python é que elas são mutáveis,
podendo ser alteradas depois de terem sido criadas. Em outras palavras, 
podemos adicionar, remover e até mesmo alterar os itens de uma lista.
""" 

programadores = ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']
print(programadores) # ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']

programadores[1] = 'Carolina'
print(programadores) # ['Victor', 'Carolina', 'Samuel', 'Caio', 'Luana'] 

"""
Além de alterar elementos em listas, também é possível adicionar itens nelas,
pois já vêm com uma coleção de métodos predefinidos que podem ser usados para 
manipular os objetos que ela contém. No caso de adicionar elementos, podemos usar o método append()
"""

programadores = ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']
print(programadores) # ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana

programadores.append('Renato')
print(programadores) # ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana', 'Renato'] 

"""
Na linha 1 criamos a lista e na linha 2 a imprimimos. Na linha 3 usamos o método append(),
que adiciona elementos no final de uma lista. Quando imprimimos a lista na linha 4 vemos 
que ela exibirá o item adicionado na última posição.

Há outra forma de adicionarmos itens na lista, que é através do método insert().
Ele usa dois parâmetros: o primeiro para indicar a posição da lista em que o 
elemento será inserido e o segundo para informar o item a ser adicionado na lista.
"""

programadores = ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']
programadores.insert(1, 'Rafael')

print(programadores) # ['Victor', 'Rafael', 'Juliana', 'Samuel', 'Caio', 'Luana'] 

['Victor', 'Rafael', 'Juliana', 'Samuel', 'Caio', 'Luana']
 

"""
Assim como podemos adicionar itens em nossa lista, também podemos retirá-los.
E para isso temos dois métodos: remove() para a remoção pelo valor informado
no parâmetro, e pop() para remoção pelo índice do elemento na lista.
""" 

programadores = ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']
print(programadores) # ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']

programadores.remove('Victor')
print(programadores) # ['Juliana', 'Samuel', 'Caio', 'Luana'] 

"""
A remoção é feita na linha 4 do Código 5, onde removemos um elemento pelo seu valor. 
Nesse caso, retiramos da lista programadores o item que tem a string ‘Victor’. 
Isso fará com que a linha 5 imprima os seguintes valores:
"""
['Juliana', 'Samuel', 'Caio', 'Luana']
 

#Também é possível remover um item pelo seu índice 

programadores = ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']
print(programadores) # ['Victor', 'Juliana', 'Samuel', 'Caio', 'Luana']

programadores.pop(0)
print(programadores) # ['Juliana', 'Samuel', 'Caio', 'Luana'] 

"""
Usamos o método pop() para remover o primeiro item da lista programadores,
gerando o seguinte resultado:
"""

['Juliana', 'Samuel', 'Caio', 'Luana']
 

"""
Outra característica das listas é que elas podem possuir diferentes tipos de 
elementos na sua composição. Isso quer dizer que podemos ter strings, booleanos,
inteiros e outros tipos diferentes de objetos na mesma lista.
"""

aluno = ['Murilo', 19, 1.79] # Nome, idade e altura

print(type(aluno)) # type 'list'
print(aluno) # ['Murilo', 19, 1.79] 

"""
Essa característica heterogênea das listas é mostrada no exemplo acima, 
no qual criamos uma lista com variáveis dos tipos string, inteiro e float,
que representam o nome, idade e altura, respectivamente.
"""

"""
Tuplas
Tupla é uma estrutura de dados semelhante a lista. Porém, ela tem a característica de ser imutável,
ou seja, após uma tupla ser criada, ela não pode ser alterada.
"""
times_rj = ('Botafogo', 'Flamengo', 'Fluminense', 'Vasco')

print(type(times_rj)) # class=’tuple’
print(times_rj) # ('Botafogo', 'Flamengo', 'Fluminense', 'Vasco') 

"""
Acima vemos o uso de uma tupla no Python delimitada por parênteses na sua sintaxe.
Na linha 1, a variável times_rj recebe quatro objetos do tipo string. Na linha 3, 
imprimimos o tipo da variável, que é uma tupla. E na linha 4, imprimimos também o 
conteúdo de times_rj, que dá o seguinte resultado:
"""

('Botafogo', 'Flamengo', 'Fluminense', 'Vasco')
 

times_rj = ('Botafogo', 'Flamengo', 'Fluminense', 'Vasco')

print(times_rj[2]) # Fluminense 

"""
Uma observação a ser feita no uso de uma tupla é que se ela tiver um único item,
é necessário colocar uma vírgula depois dele, pois caso contrário, o objeto que
vamos obter é uma string, porque o valor do item é do tipo string.
"""

objeto_string = ('tesoura')
objeto_tupla = ('tesoura',)

print(type(objeto_string)) # class 'str'
print(type(objeto_tupla)) # class 'tuple' 

"""É possível também acessar os itens das tuplas por meio de seus índices, da mesma forma como é feito nas listas. """
vogais = ('a', 'e', 'i', 'o', 'u')

print(vogais[1]) # e 

"""
O fato da tupla ser imutável faz com que os seus elementos não possam ser alterados depois
dela já criada. 
Vamos usar a tupla vogais para mostrar um exemplo desse tipo.
"""

vogais = ('a', 'e', 'i', 'o', 'u')

vogais[1] = 'E' 

"""
As tuplas devem ser usadas em situações em que não haverá necessidade de adicionar, 
remover ou alterar elementos de um grupo de itens. Exemplos bons seriam os meses do ano, 
os dias da semana, as estações do ano etc. Nesses casos, não haverá mudança nesses itens
(pelo menos isso é muito improvável).
""" 

"""
Dicionários
Os dicionários representam coleções de dados que contém na sua estrutura um
conjunto de pares chave/valor, nos quais cada chave individual tem um valor associado.
Esse objeto representa a ideia de um mapa, que entendemos como uma coleção associativa
desordenada. A associação nos dicionários é feita por meio de uma chave que faz
referência a um valor. No Código 15, vemos a estrutura de um dicionário.
"""

dados_cliente = {
    'Nome': 'Renan',
    'Endereco': 'Rua Cruzeiro do Sul',
    'Telefone': '982503645'
}

print(dados_cliente['Nome']) # Renan 

"""
A estrutura de um dicionário é delimitada por chaves,
entre as quais ficam o conteúdo desse objeto.
Veja que é criada a variável dados_cliente, à qual é atribuída uma 
coleção de dados que, nesse caso, trata-se de um dicionário. 
""" 

dados_cliente = {
    'Nome': 'Renan',
    'Endereco': 'Rua Cruzeiro do Sul',
    'Telefone': '982503645'
}

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul','Telefone': '982503645'}

dados_cliente['Idade'] = 40

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul','Telefone': '982503645', 'Idade': 40} 


"""
Para adicionar elementos num dicionário basta associar
uma nova chave ao objeto e dar um valor a ser associado a ela.
"""

dados_cliente = {
    'Nome': 'Renan',
    'Endereco': 'Rua Cruzeiro do Sul',
    'Telefone': '982503645'
}

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul','Telefone': '982503645'}

dados_cliente['Idade'] = 40

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul','Telefone': '982503645', 'Idade': 40}

#Para remover um item do dicionário, podemos usar o método pop(), 

dados_cliente = {
    'Nome': 'Renan',
    'Endereco': 'Rua Cruzeiro do Sul',
    'Telefone': '982503645'
}

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul','Telefone': '982503645'}

dados_cliente.pop('Telefone', None)

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul'}

"""
temos o uso do método pop()
usado para remover o item ‘Telefone’ do dicionário dados_clientes.
Temos na chamada do método o parâmetro None, que é passado depois da chave a ser removida.
O None serve para que a mensagem de erro KeyError não apareça devido a remoção de uma
chave inexistente.
"""

#Também poderíamos usar a palavra-chave del, que remove uma chave e o valor associado a ela no dicionário 

dados_cliente = {
    'Nome': 'Renan',
    'Endereco': 'Rua Cruzeiro do Sul',
    'Telefone': '982503645'
}

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul','Telefone': '982503645'}

del dados_cliente['Telefone']

print(dados_cliente) # {'Nome': 'Renan', 'Endereco': 'Rua Cruzeiro do Sul'}

"""
Funções para coleções
O Python conta com funções úteis quando se trabalha com coleções. Vejamos algumas delas:

min() e max()
Veremos a seguir, as funções min() e max().
"""

numeros = [15, 5, 0, 20, 10]
nomes = ['Caio', 'Alex', 'Renata', 'Patrícia', 'Bruno']

print(min(numeros)) # 0
print(max(numeros)) # 20
print(min(nomes)) # Alex
print(max(nomes)) # Renata 

"""
Nesse código temos duas listas com os nomes numeros e nomes. 
A primeira lista trabalha com números, então a função min()
retorna o menor valor dela, enquanto que a função max() 
retorna o maior valor. Já a segunda lista contém strings,
o que faz com que as funções trabalhem com comparações alfabéticas. 
Portanto, nesse exemplo o menor valor é Alexe o maior Renata.
""" 

"""
sum()
Para trabalhar com coleções na linguagem Python, 
temos também a função sum(), que é usada para retornar a soma de todos os
elementos da coleção. No Código 20, temos um exemplo dela na prática:
""" 

numeros = [1, 3, 6]

print(sum(numeros)) # 10 

"""
len()
A função len() é bastante usada em Python para retornar o tamanho de um objeto. 
Quando usada com coleções, retorna o total de itens que a coleção possui.
"""
paises = ['Argentina', 'Brasil', 'Colômbia', 'Uruguai']

print(len(paises)) # 4 

"""
Essa função é de grande utilidade, pois pode ser usada em diversas situações, 
como nas estruturas condicionais e em laços de repetição por exemplo.
"""

"""
type()
Com a função type() podemos obter o tipo do objeto passado no parâmetro.
No Código 22 usamos essa função em algumas coleções.
"""

professores = ['Carla', 'Daniel', 'Ingrid', 'Roberto']
estacoes = ('Primavera', 'Verão', 'Outono', 'Inverno')
cliente = {
    'Nome': 'Fábio Garcia',
    'email' : 'fabio_garcia_9@outlook.com'
}

print(type(professores)) # list
print(type(estacoes)) # tuple
print(type(cliente)) # dict 

