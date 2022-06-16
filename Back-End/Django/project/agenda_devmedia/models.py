from django.db import models


# Create your models here.

class Pessoa(models.Model):
    nome = models.CharField(max_length=50)
    idade = models.IntegerField()
    sexo = models.CharField(max_length=10)
    telefone = models.CharField(max_length=20)
