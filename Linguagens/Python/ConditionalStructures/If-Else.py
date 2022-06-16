"""
if/else em Python
Quando programamos, muitas vezes precisamos que determinado bloco 
de código seja executado apenas se uma determinada condição for verdadeira. 
Em casos assim, devemos fazer uso de uma estrutura de condição.

Neste documento você aprenderá a utilizar a estrutura de condição if-else e elif em Python.
"""

"""
if
O if é uma estrutura de condição que permite avaliar uma expressão e,
de acordo com seu resultado, executar uma determinada ação.

No código a seguir temos um exemplo de uso do if no qual verificamos se
a variável idade é menor que 20. Em caso positivo, imprimimos uma
mensagem na tela e em caso negativo o código seguirá normalmente,  
"""

idade = 18
if idade < 20:
    print('Você é jovem!') 

"""
if-else
Vimos anteriormente como utilizar o if para executar 
uma ação caso uma condição seja atendida. No entanto, nenhum comportamento 
específico foi definido para o caso de a condição não ser satisfeita.
Quando isso é necessário, precisamos utilizar a reservada else
"""

idade = 18
if idade >= 18:
    print('maior de idade')
else:
    print('menor de idade') 

"""
Dessa vez, caso a condição avaliada na linha 3 não seja atendida, 
definimos o fluxo alternativo que o código deve seguir. Ou seja, 
se a idade não for maior ou igual a 18, o bloco abaixo da palavra 
reservada else deverá ser executado.
"""

"""
if-elif-else
Adicionalmente, se existir mais de uma condição alternativa 
que precisa ser verificada, devemos utilizar o elif para avaliar as 
expressões intermediárias antes de usar o else, da seguinte forma:
"""

idade = 18
if idade < 12:
    print('crianca')
elif idade < 18:
    print('adolescente')
elif idade < 60:
    print('adulto')
else:
    print('idoso') 

"""
Na linha 2 definimos a primeira condição (idade < 12). Caso essa não seja atendida,
o programa seguirá para a linha 4 e avaliará a próxima condição (elif),
que se for verdadeira fará com que o bloco logo abaixo (a linha 5, nesse caso) 
seja executado. Caso essa condição ainda não seja atendida (elif), há uma outra 
alternativa na linha 6 que será avaliada e que fará com que o bloco logo abaixo
seja executado se ela for atendida. Por fim, se nenhuma das condições for satisfeita,
o programa seguirá para a linha 8, executando o que é definido pelo else.
"""
