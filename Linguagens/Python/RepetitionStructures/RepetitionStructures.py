"""
Loops com FOR e WHILE
Em algumas situações, é comum que uma mesma instrução (ou conjunto delas) 
precise ser executada várias vezes seguidas. Nesses casos, normalmente 
utilizamos um loop (ou laço de repetição), que permite executar um bloco 
de código repetidas vezes, enquanto uma dada condição é atendida.

Em Python, os loops são codificados por meio dos comandos for e while. 
O primeiro nos permite percorrer os itens de uma coleção e, para cada
um deles, executar um bloco de código. Já o while, executa um conjunto 
de instruções várias vezes enquanto uma condição é atendida.
""" 

nomes = ['Pedro', 'João', 'Leticia']
for n in nomes:
    print(n) 

"""
A variável definida na linha 1 é uma lista inicializada com uma 
sequência de valores do tipo string. A instrução for percorre
todos esses elementos, um por vez e, em cada caso, atribui o 
valor do item à variável n, que é impressa em seguida. O resultado, 
então, é a impressão de todos os nomes contidos na lista.

O comando while, por sua vez, faz com que um conjunto de instruções
seja executado enquanto uma condição for atendida. Quando o resultado
passa a ser falso, a execução é interrompida, saindo do loop, e passa para o próximo bloco.
"""
contador = 0
while contador < 5:
    print(contador)
    contador = contador + 1 

"""
Estruturas de repetição estão presentes na maioria das 
linguagens de programação e representam uma parte fundamental 
de cada uma delas. Sendo assim, é muito importante conhecer a 
sintaxe e o funcionamento dessas estruturas.
"""
