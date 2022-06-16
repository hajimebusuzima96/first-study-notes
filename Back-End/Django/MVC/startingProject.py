'''
Para reaproveitar o código html das páginas em comum, 
precisamos criar uma página base e herdar dessa página. 
Além disso, definimos alguns blocos para utilizar dentro das nossas páginas herdadas:

       <title>
        {% block title %}
        {% endblock %}
    </title>
</head>
<body>
<h1>
    {% block tituloPagina %}

    {% endblock %}
</h1>
<hr>
{% block content %}

{% endblock %}

</body>

1 - Definimos o bloco ‘title’ para inserir um determinado registro dentro das tags ‘tilte’
do html

2 - Bloco ‘tituloPagina’ é utilizado para criar um h1 em todas as páginas herdadas
do aquivo ‘base.html’

3 - Com o bloco ‘content’, é definido todo o conteúdo que irá ser exibido
dentro da tag ‘body’ do html

Nossa primeira funcionalidade do sistema é a listagem de livros.
Para isso, criamos a função ‘livro_list’ dentro do nosso arquivo ‘views.py’:

'''

   class LivroForm(ModelForm):
     class Meta:
     model = Livro
     fields = ['autor', 'editora', 'isbn', 'numeroPaginas', 'titulo', 'anoPublicacao', 'emailEditora']


  def livro_list(request, template_name='livro_list.html'):
    livro = Livro.objects.all()
    livros = {'lista': livro}
    return render(request, template_name, livros) 

'''
1 - Criamos nossa classe LivrForm e definimos, na variável ‘fields’,
um array com todos os atributos do nosso livro. Vale lembrar que os
atributos devem ser definidos na mesma ordem da classe ‘Livro’, no arquivo ‘models.py’

2 - O nosso método ‘livro_list’ é responsável por recuperar todos
os livros cadastrados no banco de dados e enviar, para nosso template
‘livro_list’, esses dados.

Para que possamos cadastrar um novo livro, é preciso definir o método ‘livro_new’ 
no nosso arquivo ‘views.py’. Esse método verifica se os dados vindos do ‘LivroForm’
são válidos e, caso positivo, os dados são salvos no banco e o usuário é
redirecionado para a tela de listagem de livros.O código pode ser visto a seguir:

'''

def livro_new(request, template_name='livro_form.html'):
  form = LivroForm(request.POST or None)
  if form.is_valid():
    form.save()
    return redirect('listar_livros')
  return render(request, template_name, {'form': form}) 

''' 

1 - Obtemos o formulário vindo através da requisição e armazenamos na variável form

2 - Verificamos se o formulário é válido, armazenamos os dados no banco 
e redirecionamos o usuário para a tela de listagem de livros

3 - Por fim, se não obtivermos nenhum formulário do request, renderizamos 
o formulário de cadastro de livros no nosso template ‘livro_form’

Para que o formulário seja renderizado no nosso template, precisamos 
criar as tags ‘form’ do html, além de definir o ‘csrf_token’ e invocar 
o form enviado através da nossa view. Por fim, criamos um botão para submeter os dados.

 {% block content %}

 <form method="post">
     {% csrf_token %}
   {{ form.as_p }}
   <button type="submit" class="btn btn-primary">
	   Salvar
    </button>
 </form>

 {% endblock content %}


1 - Definimos o token gerado para o formulário

2 - Obtemos o formulário vindo através da nossa view e renderizamos utilizando o ‘.as_p’ 
do Django


Para editar um livro, precisamos recuperar, através da chave primária enviada através da URL,
determinado livro cadastrado no banco de dados. Após isso, renderizamos um formulário com
a instância do livro encontrado e, caso o formulário for válido, salvamos as alterações
no banco de dados, caso o formulário não for válido, retornamos, novamente, para o
formulário de edição

'''

def livro_edit(request, pk, template_name='livro_form.html'):
  livro = get_object_or_404(Livro, pk=pk)
  if request.method == "POST":
     form = LivroForm(request.POST, instance=livro)
     if form.is_valid():
        livro = form.save()
        return redirect('listar_livros')
     else:
      form = LivroForm(instance=livro)
  return render(request, template_name, {'form': form})

'''
1 - Consulta para obter um livro através da sua chave primária

2- Verificamos se o formulário é do tipo “post’, caso positivo,
criamos um formulário com a instância do livro obtida do nosso banco
de dados e salvamos as alterações.

3 - Caso o formulário não seja do tipo ‘post’, renderizamos, novamente,
o formulário de edição dos livros


Para que um livro seja removido do nosso banco de dados,
precisamos enviar a chave primária como parâmetro da nossa URL, como pode ser visto a seguir:


08 url(r'^livro_remove/(?P<pk>[0-9]+)', livro_remove, name='livro_remove')


'''