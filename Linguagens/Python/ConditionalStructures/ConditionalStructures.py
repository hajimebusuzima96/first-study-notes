"""
Estruturas de condição com o IF
O IF é uma estrutura de condição que permite avaliar uma expressão
e, de acordo com seu resultado, executar uma determinada ação.

No Código 1 a seguir, temos um exemplo de uso do IF no qual 
verificamos se a variável idade é menor que 20. Em caso positivo,
imprimimos uma mensagem na tela, e em caso negativo, o código seguirá normalmente,
"""

idade = 18
if idade < 20:
    print('Você é jovem!') 


"""
Operadores de comparação
Um assunto diretamente relacionado às estruturas de condição e repetição são os operadores de comparação. Como o nome sugere, eles são usados para avaliar o valor de duas ou mais expressões/variáveis e compará-las. Na linha 2 do código que vimos anteriormente, por exemplo, comparamos a variável idade com o valor 20, por meio do operador menor que (<).

Na Tabela 1 podemos ver todos os operadores de comparação da linguagem Python e seu significado/aplicação.

Símbolo	Definição
==	Igual
!=	Diferente
>	Maior que
<	Menor que
>=	Maior ou igual que
<=	Menor ou igual que
""" 

"""
Vimos anteriormente como utilizar o IF para executar uma ação caso uma 
condição seja atendida. No entanto, nenhum comportamento específico foi 
definido para o caso de a condição não ser satisfeita. Quando isso é necessário, 
precisamos utilizar a palavra reservada else. Adicionalmente, se existir mais
de uma condição alternativa que precisa ser verificada, devemos utilizar 
o elif para avaliar as expressões intermediárias antes de usar o else.
"""

idade = int(input('Digite sua idade: '))
if idade >= 10 and idade < 20:
    print('Você é adolescente')
elif idade >= 20 and idade < 30:
    print('Você é jovem')
elif idade >= 30 and idade <= 100:
    print('Você é adulto')
else:
    print('Valor não encontrado!') 

"""
verificamos se o valor informado está dentro de uma faixa de valores específica. 
Caso a condição seja satisfeita, o programa executará a linha 3. Por outro lado,
 caso o resultado não seja o esperado, então o programa verificará o próximo condicional,
  na linha 4 e, caso ele seja verdadeiro, a linha 5 será executada.
   O mesmo ocorre para a verificação da linha 6. 
   Por fim, se nenhuma das condições foi satisfeita, o programa executará 
   o que é especificado no bloco else.

Estruturas de controle condicionais estão presentes na maioria das 
linguagens de programação e representam uma parte fundamental de cada
uma delas. Sendo assim, é muito importante conhecer a sintaxe e o 
funcionamento dessas estruturas. 

"""