"""
Declaração e atribuição
Assim como em outras linguagens, o Python pode manipular variáveis 
básicas como strings (palavras ou cadeias de caracteres), inteiros e reais (float).
Para criá-las, basta utilizar um comando de atribuição, que define seu tipo e seu valor,
conforme vemos no código abaixo:
"""

mensagem = 'Exemplo de mensagem!'
n = 25
pi = 3.141592653589931 

"""
Observe que não foi necessário fazer uma declaração explícita de cada variável, 
indicando o tipo ao qual ela pertence, pois isso é definido pelo valor que ela
armazena, conforme vemos no código abaixo:
"""

type (mensagem)
# <class 'str'>
type (n)
# <class 'int'>
type (pi)
# <class 'float'> 

"""
Para exibir o conteúdo dessas variáveis utilizamos o comando de impressão print, da seguinte forma:
"""

print(mensagem)
# Exemplo de mensagem!
print (n)
# 25
print (pi)
# 3.141592653589931 

