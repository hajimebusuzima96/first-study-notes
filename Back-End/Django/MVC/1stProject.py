''' Para criar nosso projeto Django, é necessário digitar o seguinte comando no terminal
do PyCharm:

django-admin startproject myproject
Cria o projeto myproject no nosso diretório

Após criar o projeto, é necessário criar a aplicação.
Para isso, utilizaremos o manage.py, que foi criado juntamente com o projeto myproject.

python manage.py startapp primeirosPassos


O que são models ? 


Para que os atributos, definidos no nosso model, sejam criados no banco de dados, 
é necessário criar uma migração. Para isso, o seguinte comando é necessário:

python manage.py makemigrations

Cria a migração a partir do nosso model

Após criar a migração, é necessário enviar as alterações para o banco de dados. 
Para isso, utilizaremos o seguinte comando:

python manage.py migrate

Realiza as alterações no banco de dados

Por vezes, é necessário manipular os dados diretamente do terminal, 
como a inserção de um dado para testes, por exemplo. Sendo assim, 
é necessário utilizar o Shell, um terminal para o Django. 
Para utilizarmos o Shell no nosso projeto, é necessário digitar o seguinte comando:

python manage.py shell

Inicia o shell do Django

Como utilizar rotas no Django

As URLs são extremamente importantes dentro da nossa aplicação, com elas,
definimos que, para cada rota, determinada view será chamada. No Django,
utilizamos expressões regulares para a criação das rotas, como pode ser visto a seguir:

/project/urls.py

url(r'^lista_registros/(\d+)/$)', listar_registros)
O caracter '^', indica o início de uma rota

O caracter '$', indica o final de uma rota

Para definir a captura de um determinado parâmetro, utilizamos
o que queremos capturar dentro de parênteses '()'

Para indicar a utilização de dígitos dentro das nossas rotas, utilizamos o '\d'

Por fim, se queremos definir que um determinado parâmetro pode-se repetir, utilizamos o '+'

Entendendo Views e Templates do Django 

As views são extremamente importantes dentro da nossa aplicação. 
Com elas, definimos a regra de negócio do nosso projeto, como pode ser visto a seguir:

myproject/project/views.py
'''

  from django.shortcuts import render
  from .models import Pessoa


  # Create your views here.

  def listar_registros(request):
	   pessoa = Pessoa.objects.all()
    return render(request, 'list.html', {'pessoa': pessoa})

'''
1 - Importamos o model “Pessoa” para que possamos manipular os atributos da classe

2 - Para listar nossos registros, é necessário criar um método 'listar_registros',
que recebe uma requisição (request).

3 - Recuperamos todas as pessoas existentes no banco e armazenamos na variável pessoa.

4 - Retornamos, para nosso template 'lista.html', os dados obtidos através da nossa consulta

Com os templates, podemos exibir os dados que obtivemos através das views, como pode ser visto a seguir

1 {% extends 'base.html' %}
2
3 {% block content %}
4
5 {% for pes in pessoa %}
6 {{ pes.idade }}
7 {% endfor %}
8
9 {% endblock content %}
'''
