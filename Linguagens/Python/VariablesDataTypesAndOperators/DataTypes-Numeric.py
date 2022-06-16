"""
O Python é uma linguagem fortemente tipada,
entretanto permite que o tipo de uma variável seja alterado ao longo do código.
"""

numero = "15"
numero = 15 

"""
Apesar dessa característica, o Python não converte automaticamente tipos 
de dados incompatíveis em operações. Por exemplo, em uma soma entre um 
número inteiro e uma string, o resultado será um erro
"""

numero_1 = 10
numero_2 = "15"

numero_3 = numero_1 + numero_2

print(numero_3) 

"""
Isso acontece porque o Python não vai converter a String “15”
 para que a mesma possa ser usada como um inteiro na operação de soma.

Já no exemplo abaixo, não teremos erro, pois o tipo Booleano 
é um subtipo do tipo numérico inteiro.
""" 

numero = True + 1
 
 
"""
Para saber o tipo de uma variável usaremos a função type(), que retorna o 
tipo de qualquer variável que ela receba como parâmetro. Vamos usar o 
código anterior para ver na prática como isso funciona.
"""

numero_1 = 10
numero_2 = "15"

print(type(numero_1))
print(type(numero_2)) 

"""
Tipo Numérico
Os tipos de dados usados para números se dividem em três conjuntos:

Inteiros
Números de ponto flutuante
Complexos
Vejamos cada um deles. 
""" 

"""
Tipo Inteiro
Esse tipo representa os números inteiros positivos e negativos.
""" 

numero = 5 # Criação da variável numero

print(type(numero)) # Exibindo o tipo da variável
# que será int 


"""
Ponto Flutuante (float)
Esses são números reais, que contém casas decimais. Por exemplo, a altura de uma pessoa ou o seu peso devem ser representadas usando números de ponto flutuante. Na Listagem 7 temos um exemplo no qual criamos uma variável desse tipo.
""" 

altura = 1.79 # Declaração da variável altura

print(type(altura)) # Impressão do tipo da variável "altura" 

from decimal import Decimal

numero = Decimal('0.1') 

"""
Complexos
Os números complexos são mais utilizados na engenharia e pesquisa. A parte imaginária do número recebe a letra j ou J.
""" 

numero = 1j * 1J

print(type(numero)) 

"""
Booleanos (bool)
O tipo Booleano é um subtipo Int e por isso pode ser representado pelos valores True e False. Quando uma variável é definida como True, seu valor é verdadeiro. E no caso de receber o valor False, seu valor é falso.
"""

var1 = True
var2 = False

print(type(var1))
print(type(var2)) 

s = 1

if s == True:
    print("true")
else:
    print("false") 

s = 2

if s == True:
    print("true")
else:
    print("false") 

