<?php

class Produto {

   private $codigo;
   private $nome;
   private $preco;

   public function getCodigo()
   {
       return $this->codigo;
   }
   public function setCodigo($codigo)
   {
       $this->codigo = $codigo;
   }
   public function getNome()
   {
       return $this->nome;
   }
   public function setNome($nome)
   {
       $this->nome = $nome;
   }
   public function getPreco()
   {
       return $this->preco;
   }
   public function setPreco($preco)
   {
       $this->preco = $preco;
   }
} 

/*Herança
Herança é um tipo de relacionamento muito comum na orientação a objetos e ocorre 
quando uma classe descende da outra e herda suas características e comportamentos, 
além de implementar os seus próprios. Por exemplo, considere o diagrama de classes 
da Figura 2 em que Assinatura herda de Produto. */


class Assinatura extends Produto {

    private $dataExpiracao;

    public function getDataExpiracao()
    {
        return $this->dataExpiracao;
    }
    public function setDataExpiracao($dataExpiracao)
    {
        $this->dataExpiracao = new DateTime($dataExpiracao);
    }
    public function getTempoRestante()
    {
        return $this->dataExpiracao->diff(new DateTime());
    }
 } 

/*Interfaces
Na Orientação a Objetos as interfaces funcionam como contratos, ou seja, 
elas definem comportamentos que devem ser cumpridos pelas classes. Quando uma 
classe atende a uma interface, dizemos que ela implementa essa interface. 
Na Figura 3 temos um diagrama que mostra uma nova configuração para as classes 
que representamos anteriormente:
*/


interface Expiravel
{
   public function getTempoRestante();
} 

class Assinatura extends Produto implements Expiravel {

    private $dataExpiracao;

    public function getDataExpiracao()
    {
        return $this->dataExpiracao;
    }
    public function setDataExpiracao($dataExpiracao)
    {
        $this->dataExpiracao = new DateTime($dataExpiracao);
    }
    public function getTempoRestante()
    {
        return $this->dataExpiracao->diff(new DateTime());
    }
 }
 

 




?>