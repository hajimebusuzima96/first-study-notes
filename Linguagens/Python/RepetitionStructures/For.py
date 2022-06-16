"""
For Python
O laço for nos permite percorrer os itens de uma coleção e
para cada um deles, executar o bloco de código declarado no loop.
Sua sintaxe é a seguinte:
"""

for variavel in lista:
comandos 

"""
Enquanto percorremos a lista de valores, a variável indicada no for receberá,
a cada iteração, um item da coleção. Assim, podemos executar algum 
processamento com esse elemento. No código abaixo percorremos a lista 
nomes e imprimimos cada elemento.
"""
nomes = ['Pedro', 'João', 'Leticia']
for n in nomes:
     print(n) 

"""
A variável definida na linha 1 é uma lista inicializada com uma 
sequência de valores do tipo string. A instrução for percorre todos 
esses elementos, um por vez e, em cada caso, atribui o valor do item à 
variável n, que é impressa em seguida. O resultado, então, é a impressão 
de todos os nomes contidos na lista.
"""

"""
For/else
É possível adicionar a instrução else ao final do for. 
Isso faz com que um bloco de código seja executado ao final da iteração, 
como mostra o exemplo a seguir:
""" 

nomes = ['Pedro', 'João', 'Leticia']
for n in nomes:
     print(n)
else:
     print("Todos os nomes foram listados com sucesso")

"""
Na primeira linha definimos uma variável que armazenará uma lista de nomes. 
Após isso, a instrução for percorre todos esses elementos e atribui um a um à variável 
n, que será impressa, como pode ser visto na linha 3. Após o loop se encerrar, 
o bloco de código contido na instrução else é acionado, imprimindo a mensagem na tela.
"""

