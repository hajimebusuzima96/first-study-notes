from django.shortcuts import render, redirect, get_object_or_404
from django.forms import ModelForm

from agenda_devmedia.models import Pessoa


class PessoaForm(ModelForm):
    class Meta:
        model = Pessoa
        fields = ['nome', 'idade', 'sexo', 'telefone']


def pessoa_list(request, template_name='pessoa_list.html'):
    pessoa = Pessoa.objects.all()
    data = {'lista': pessoa}
    return render(request, template_name, data)


def pessoa_create(request, template_name='form_pessoa.html'):
    form = PessoaForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('pessoa_list')
    return render(request, template_name, {'form': form})