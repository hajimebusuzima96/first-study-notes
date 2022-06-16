"""
Os operadores são usados na construção de expressões, as quais contém um número variado de 
operandos. Por exemplo, na expressão a + b, temos o operador de aritmético + e operandos 
são as variáveis a e b.

Na linguagem Python temos a seguinte separação entre os diferentes tipos de operadores:

Operadores aritméticos
Operadores de atribuição
Operadores de comparação
Operadores lógicos
Operadores de identidade
Operadores de associação
A seguir veremos cada um deles.
"""

"""
Operadores aritméticos
Os operadores aritméticos são utilizados na execução de operações matemáticas, 
tais como a soma e a subtração, por exemplo.


SUPORTE AO ALUNO
ANOTAÇÕES
FAVORITAR
CONCLUÍDO
120GOSTEI
120
Por que eu devo ler este artigo:Os operadores são utilizados para construir expressões lógicas, aritméticas, associativas, atribuir valores a variáveis e compará-los. Trata-se de um recurso utilizado nas tarefas mais fundamentais da programação, conforme veremos neste artigo e, portanto, de conhecimento obrigatório para qualquer programador.
Voltar

Suporte ao aluno

Anotar

Marcado como concluído
Artigos
Python
Operadores no Python
Os operadores são usados na construção de expressões, as quais contém um número variado de operandos. Por exemplo, na expressão a + b, temos o operador de aritmético + e operandos são as variáveis a e b.

Na linguagem Python temos a seguinte separação entre os diferentes tipos de operadores:

Operadores aritméticos
Operadores de atribuição
Operadores de comparação
Operadores lógicos
Operadores de identidade
Operadores de associação
A seguir veremos cada um deles.

Operadores aritméticos
Os operadores aritméticos são utilizados na execução de operações matemáticas, tais como a soma e a subtração, por exemplo. Vejamos na Tabela 1 a lista deles.

Operador	Conceito	Exemplo
+ (Adição ou sinal positivo)	- Realiza a soma entre operandos - Adiciona o sinal de positivo ao número	- 10 + 7 - +4
- (Subtração ou sinal negativo)	- Realiza a subtração entre operandos - Adiciona o sinal de negativo ao número	- 10 - 7 - -4
* (Multiplicação)	Realiza a multiplicação entre operandos	3 * 4
/ (Divisão)	Realiza a divisão entre operandos	10 / 5
// (Divisão inteira)	Realiza a divisão entre operandos e a parte decimal do resultado	10 // 6
% (Módulo)	Retorna o resto da divisão entre operandos	4 % 2
** (Exponenciação)	Retorna um número elevado a potência de outro	4 ** 2

"""
numero_1 = 5
numero_2 = 2

soma = numero_1 + numero_2
subtracao = numero_1 - numero_2
multiplicacao = numero_1 * numero_2
divisao = numero_1 / numero_2
divisao_inteira = numero_1 // numero_2
modulo = numero_1 % numero_2
exponenciacao = numero_1 ** numero_2

print(soma) # 7
print(subtracao) # 3
print(multiplicacao)  # 10
print(divisao) # 2.5
print(divisao_inteira) # 2
print(modulo)  # 1
print(exponenciacao) # 25 

"""
Uma característica importante a ser observada quando falamos dos operadores
matemáticos é a precedência. Essa característica é relativa à ordem da
execução deles e acontece quando mais de um operador está presente numa
expressão. Segue a precedência dos operadores no Python.
"""

"""
As expressões contidas em parênteses têm a precedência maior na linguagem Python. 
Isso permite que uma expressão execute antes de outra. Ex.:
"""

print((2 + 5) * 3) # O resultado será 21
 

"""
Após os parênteses, o próximo operador com maior precedência é o de exponenciação. Ex.:
"""
print( 1 + 5**2 ) # O resultado será 26
 

"""
Multiplicação e divisão têm precedência sobre a adição e subtração:
como já é conhecido na matemática, divisão e multiplicação são executadas 
antes das operações de adição e subtração. Ex.:
"""

print(5 * 3 + 8) # O resultado será 23
 
"""
Ordem de precedência é avaliada da esquerda para a direita. Portanto, após os operadores anteriores,
a sequência da execução será da esquerda para a direita. Ex.:
"""

print(8 + 5 - 10) # O resultado será 3

"""
Operadores de atribuição
Os operadores de atribuição atribuem valor a uma variável. temos uma lista desses operadores.

Operador	Exemplo	Equivalente a
=	x = 1	x = 1
+=	x += 1	x = x + 1
-=	x -= 1	x = x - 1
*=	x *= 1	x = x * 1
/=	x /= 1	x = x / 1
%=	x %= 1	x = x % 1
""" 
numero = 5

numero += 5

print(numero) # O resultado será 10 

"""
Acima, vemos que a variável numero_1 recebe na linha 3 o valor dela mesmo somado a 5.
Isso fará com que o resultado impresso na linha 5 seja igual a 10.
"""

"""
Operadores de comparação
Os operadores de comparação são usados para comparar valores, 
o que vai retornar True ou False, dependendo da condição. 
A seguir, na Tabela 3 temos exemplos de alguns usados no Python.

Operador	Conceito	Exemplo
>(Maior que)	Verifica se um valor é maior que outro	x > 5
<(Menor que)	Verifica se um valor é menor que outro	x < 5
== (Igual a)	Verifica se um valor é igual a outro	x == 5
!= (Diferente de)	Verifica se um valor é diferente de outro	x != 5
>= (Maior ou igual a)	Verifica se um valor é maior ou igual a outro	x >= 5
<= (Menor ou igual a)	Verifica se um valor é menor ou igual a outro	x <= 5
"""

numero_1 = 2
numero_2 = 4

soma = numero_1 + numero_2

if soma < 10:
    print("soma não é maior que 10")
else:
    print("soma é maior ou igual a 10") 

#Vejamos a seguir, uma operação que faz comparação de igualdade entre duas variáveis: 

soma_1 = 7 + 8
soma_2 = 10 + 5

if soma_1 == soma_2:
    print("Os resultados são iguais")
else:
    print("Os resultados são diferentes") 

"""
Operadores lógicos
Os operadores lógicos são usados para unir duas ou mais expressões condicionais.
Isso é feito por meio de conectivos, como podemos ver na Tabela 4.

Operador	Conceito	Exemplo
and	Retorna True se todas as condições forem verdadeiras, caso contrário retorna False	x > 1 and x < 5
or	Retorna True se uma das condições for verdadeiras, caso contrário retorna False	x > 1 or x < 5
not	Inverte o resultado: se o resultado da expressão for True, o operador retorna false	not(x > 1 and x < 5)
"""

idade_lucas = 21
idade_carolina = 19

# OPERADOR OR
if idade_lucas >= 18 or idade_carolina >= 18:
    print("Pelo menos um dos dois é maior de idade")
else:
    print("Lucas e Carolina não são maiores de idade")

# OPERADOR AND
if idade_lucas >= 18 and idade_carolina >= 18:
    print("Lucas e Carolina são maiores de idade")
else:
    print("Pelo menos um dos dois não é maior de idade") 

"""
temos um exemplo no qual usamos os operadores or e and.
Com o operador or, apenas uma das condições precisa ser verificadas. 
Já no operador and, todas as condições precisam ser satisfeitas.
Com a execução do código teremos a impressão das mensages 
“Lucas e Carolina são maiores de idade” e "Pelo menos um dos dois é maior de idade".
"""

"""
Operadores de identidade
Os operadores de identidade servem para a comparação de objetos. 
Nessa comparação é verificado se eles ocupam a mesma posição na memória,
o que significará que se trata do mesmo objeto,
"""

"""
Operador	Conceito	Exemplo
is	Retorna True se as variáveis comparadas forem o mesmo objeto	nome is ‘Marcos’
is not	Retorna True se as variáveis comparadas não forem o mesmo objeto	x is not ‘Python’ 
"""

time_carlos = 'Botafogo'
time_luciano = 'Flamengo'
time_fabricia = 'Botafogo'

if time_carlos is time_luciano:
    print("time_carlos - time_luciano = mesmo objeto")
else:
    print("time_carlos - time_luciano = objetos diferentes")

if time_carlos is time_fabricia:
    print("time_carlos - time_fabricia = mesmo objeto")
else:
    print("time_carlos - time_fabricia = objetos diferentes") 


"""
Operadores de associação
Os operadores de associação são utilizados para verificar se uma sequência 
contém um objeto. Na Tabela 6 temos os exemplos.

Operador	Conceito	Exemplo
in	Retorna True caso o valor seja encontrado na sequência	2 in x
not in	Retorna True caso o valor não seja encontrado na sequência	2 not in x
"""

frutas = ["banana","laranja","uva","ameixa"]

fruta_1 = "ameixa"
fruta_2 = "melancia"

print(fruta_1 in frutas) # True
print(fruta_2 in frutas) # False 

