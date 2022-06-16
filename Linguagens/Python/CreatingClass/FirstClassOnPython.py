#Primeira classe em Python

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def setNome(self, nome):
        self.nome = nome

    def setIdade(self, idade):
        self.idade = idade

    def getNome(self):
        return self.nome

    def getIdade(self):
        return self.idade 

"""
Linha 1: A criação de uma classe começa pelo uso da palavra reservada class, 
seguida do nome da classe e dois pontos;

Linha 2: Aqui temos a definição do construtor da classe, que é um método especial 
chamado __init__. Como todo método em Python, sua declaração começa com def e entre
 parênteses estão os parâmetros, incluindo o parâmetro obrigatório self, que está
  presente em todos os métodos;

Linhas 3 e 4: O corpo do método deve estar identado, como manda a sintaxe da 
linguagem. Aqui estamos apenas atribuindo os valores recebidos por parâmetro 
aos atributos da classe;

Linhas 6 a 16: Criamos os métodos get e set de todos os atributos da classe 
Pessoa que serão responsáveis, respectivamente, por retornar ou modificar os a
tributos desta classe.

"""

#Herança em Python
 

"""
Na Programação Orientada a Objetos o conceito de herança é muito utilizado. 
Basicamente, dizemos que a herança ocorre quando uma classe (filha) herda 
características e métodos de uma outra classe (pai), mas não impede de que a
classe filha possua seus próprios métodos e atributos.
"""

from pessoa import Pessoa

class PessoaFisica(Pessoa):
   def __init__(self, CPF, nome, idade):
       super().__init__(nome, idade)
       self.CPF = CPF

   def getCPF(self):
       return self.CPF

   def setCPF(self, CPF):
       self.CPF = CPF 

"""
Linha : Como vamos herdar da classe Pessoa e ela foi definida em outro arquivo 
(pessoa.py), precisamos importá-la. Para isso usamos a instrução import e indicamos
 o nome do arquivo, sem a extensão .py, seguido do nome da classe que queremos importar;

Linha : Para definir que uma classe herdará de uma outra classe, precisamos 
indicar o nome da classe pai entre parênteses após o nome da classe filha;

Linha : Criamos o construtor da classe filha e definimos quais atributos ela
 espera receber. Neste caso, o nome e idade estão definidos na classe pai, 
 enquanto o cpf é próprio da classe filha;

Linha : Utilizando o método super, invocamos o construtor da classe pai. 
Com isso aproveitamos todo a lógica definida nesse método, que no caso faz 
a atribuição dos valores de nome e idade aos atributos da classe. Com isso 
garantimos que ao ser criada, a classe filha efetuará o mesmo processamento 
que a classe pai e mais alguns passos adicionais.

Dessa mesma forma podemos criar a classe PessoaJuridica:
""" 

from pessoa import Pessoa

class PessoaJuridica(Pessoa):
    def __init__(self, CNPJ, nome, idade):
        super().__init__(nome, idade)
        self.CNPJ = CNPJ

    def getCNPJ(self):
        return self.CNPJ

    def setCNPJ(self, CNPJ):
        self.CNPJ = CNPJ 

"""
Observe que o nome das classes começa com letra maiúscula 
(inclusive quando há mais de uma palavra, como em PessoaFisica).
Essa é uma convenção de escrita de código na linguagem, mas não
uma obrigatoriedade da sintaxe
"""

