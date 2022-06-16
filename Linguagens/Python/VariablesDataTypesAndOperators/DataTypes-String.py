nome_1 = "Ricardo Alves"
nome_2 = 'Joana Melo'

print(type(nome_1)) # type 'str'
print(type(nome_2)) # type 'str' 

"""
Índice
As strings são sequências de caracteres, de forma que podemos acessar 
um caractere em uma dada posição utilizando um índice. No exemplo a seguir,
caso se queira obter o caractere na primeira posição da string nome, basta 
acessar o índice 0 da variável.
"""

nome = 'Daniel'
print(nome[0]) # D
 

#Há também a possibilidade de "fatiar" uma variável do tipo String, retornando um "pedaço" dela.  

nome = "Daniel"
print(nome[0:3]) # Dan 

nome = "Daniel"
print(nome[-2]) # e 

""" 
Imutabilidade
Uma string no Python é uma sequência de caracteres imutável.

Para ver como isso ocorre na prática, vamos fazer uso da função id(), 
que retorna à identidade de um objeto.
"""

nome = 'Eduardo'
print(id(nome))
nome = 'Felipe'
print(id(nome))

"""
nome = 'Eduardo'
nome[6] = 'a'
""" 

nome = 'Eduardo'
nome[6] = 'a' 

"""
Um recurso importante quando estamos trabalhando com esse tipo é a função len(), 
que retorna o comprimento de uma string. O código abaixo mostra como é o seu uso:
"""
nome_1 = 'Rodrigo'
nome_2 = 'Ana'

print(len(nome_1)) # 7
print(len(nome_2)) # 3 

"""
Concatenação de Strings
Há casos em que é necessário juntar informações textuais e para esses denominamos 
concatenação, que é a junção do conteúdo de strings. Vamos fazer um exemplo no 
qual podemos ver como isso ocorre na prática:
"""

nome = 'Daniel'
sobrenome = 'Silva'

nome_completo = nome + ' ' + sobrenome

print(nome_completo) # Daniel Silva 

"""
Comparação de Strings
No Python podemos comparar strings de duas formas distintas: com o operador == ou is.

Com o operador == verificamos se o conteúdo de duas strings é igual
"""

nome_1 = 'Eduardo'
nome_2 = 'Eduardo'

if nome_1 == nome_2:
    print('iguais')
else:
    print('diferentes') 

"""
Já com o operador is, o que será comparado é a referência do endereço na memória. Vamos usar o 
mesmo código anterior apenas trocando a condição
"""

nome_1 = 'Eduardo'
nome_2 = 'Eduardo'

if nome_1 is nome_2:
    print('iguais')
else:
    print('diferentes') 

"""
Principais métodos de Strings
No Python existem métodos que podem ser usados para fazer operações com strings. 
Eles podem ser bem úteis em algumas situações. A seguir vemos alguns exemplos.

Método find()
Com o método find() podemos procurar uma substring dentro de uma string e
retornar a posição onde ela foi encontrada,
""" 

mensagem = 'string no Python'
print(mensagem.find('Python')) # 10 

"""
No caso de a ocorrência não ser encontrada, o resultado será -1
"""

mensagem = 'string no Python'
print(mensagem.find('Java')) # -1 

"""
Método replace()
O método replace() é utilizado para substituir ocorrências de substrings dentro de uma string.
""" 

mensagem = 'Quero aprender Java! Na DevMedia tem salas de Java para aprender essa linguagem'
nova_mensagem = mensagem.replace('Java', 'Python')
print(nova_mensagem) # Quero aprender Python! Na DevMedia tem salas de Python para aprender essa linguagem 

"""
Método split()

Com o método split() desmembramos uma string em múltiplas strings através de um separador passado 
no parâmetro, retornando todas numa lista.
"""

mensagem = 'Estou aprendendo Python na DevMedia'
nova_mensagem = mensagem.split(' ')
print(type(nova_mensagem)) # type 'list'
print(nova_mensagem) # ['Estou', 'aprendendo', 'Python', 'na', 'DevMedia'] 

#Note que a lista retornada pode ser acessada pelos seus índices 

mensagem = 'Estou aprendendo Python na DevMedia'
lista_mensagem = mensagem.split(' ')
print(lista_mensagem[1]) # aprendendo 

"""
No caso de um separador não ser encontrado na string pelo método split(),
uma lista com apenas um único índice será criada
"""

"""
Método upper()
Com o método upper() retornamos uma cópia da string com todas as letras minúsculas convertidas em maiúsculas.
""" 

mensagem = 'eu gosto de Python'
nova_mensagem = mensagem.upper()

print(nova_mensagem) # EU GOSTO DE PYTHON 

"""
Método lower()
Com o método lower(), retornamos uma cópia da string com todas as letras maiúsculas convertidas em minúsculas.
"""

mensagem = 'eu gosto de Python'
nova_mensagem = mensagem.lower()

print(nova_mensagem) # eu gosto de python 

"""
O Python possui diversos outros métodos que podem ser usados dependendo 
da necessidade exigida num determinado contexto.
"""

"""
Acentuação no Python
Para podermos usar acentuação no Python, devemos definir a codificação utf-8
""" 

nome = 'João da Silva'
print(nome) 

"""
O código acima irá gerar o seguinte erro: SyntaxError: Non-ASCII character '\xc3' que é gerado devido ao caractere acentuado que usamos na variável nome.

Para resolver esse problema, podemos usar #coding: utf-8 no início do código, de acordo com que é instruído na documentação. 
""" 

# coding: utf-8
nome = 'João da Silva'
print(nome)
 

