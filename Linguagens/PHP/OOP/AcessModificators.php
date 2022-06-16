<?php 

/*Modificadores de acesso no PHP
Com os modificadores de acesso determinamos a visibilidade de um método ou 
atributo pertencente a uma classe. Ou seja, definimos se ele pode ou não ser 
acessado fora da classe em que foi declarado.

Para modificar a visibilidade de um atributo ou método devemos preceder 
sua declaração de uma das palavras reservadas que representam o modificador, da seguinte forma:
*/

modificador $atributo;

modificador function metodo() { }

/*public
Este é o nível de acesso mais permissivo. Ele indica que o método ou atributo da classe é 
público, ou seja, pode ser acessado em qualquer outro ponto do código e por outras classes.

No código abaixo podemos ver um exemplo de uso do modificador de acesso public:*/

class Exemplo {
    public $publico = 'Public';
    public function metodoPublico() { }
}

$obj = new Exemplo();
$obj->publico = 'Teste';
$obj->metodoPublico(); 

/*private
Este modificador é o mais restrito. Com ele definimos que somente a própria 
classe em que um atributo ou método foi declarado pode acessá-lo. Ou seja, nenhuma 
outra parte do código, nem mesmo as classes filhas, pode acessar esse atributo ou método.

No código abaixo podemos ver um exemplo de uso do modificador de acesso private:*/

class Exemplo{
    private  $privado = 'Privado';
    private function metodoPrivado() {}
   }

$obj = new Exemplo();
$obj->privado = 'Teste';//Erro
$obj->metodoPrivado();//Erro 

/*protected
Esse modificador indica que somente a própria classe e as classes que herdam dela 
podem acessar o atributo ou método. Dessa forma, ao instanciar a classe os elementos 
protegidos (protected) não podem ser acessados diretamente, como ocorre com o public.

A seguir podemos ver um exemplo de uso do modificador de acesso protected*/

class Exemplo {
    protected $protegido = 'Protegido';
    protected function metodoProtegido() { }
} 

$obj = new Exemplo();
$obj->protegido = 'Teste'; //Erro
$obj->metodoProtegido(); //Erro 

/*Já nas classes filhas, para acessar os elementos protegidos da classe pai é necessário seguir 
algumas regras:

Para obter o valor de um atributo protegido da classe pai basta usar $this->atributo;
Para alterar o valor de um atributo protegido da classe pai é preciso redeclará-lo na classe filha;
Para chamar um método protegido da classe pai é necessário usar parent::metodo().
Para exemplificar esses aspectos temos no código abaixo uma classe Pai que contém um atributo 
e um método protegidos. Em seguida temos uma classe Filha, que herda de Pai e acessa os elementos 
protegidos:*/

class Pai {
    protected  $protegido = 'Protegido';
    protected function metodoProtegido() {
      echo 'Método protegido na classe pai';
  }
 }
 class Filha extends Pai {
    public function acessarAtributoProtegido(){
        echo $this->protegido;
    }
    public function chamarMetodoProtegido() {
        parent::metodoProtegido();
    }
 } 

/*Nesse exemplo a classe filha apenas leu o valor do atributo. 
Caso fosse necessário alterar seu valor, seria preciso redeclarar o atributo,
assim como foi feito na classe pai:
*/

class Filha extends Pai {
    protected $protegido;
    public function acessarAtributoProtegido(){
        $this->protegido = 'Valor alterado';
        echo $this->protegido;
    }
    public function chamarMetodoProtegido() {
        parent::metodoProtegido();
    }
 } 

/*Comparação entre os modificadores
A Tabela 1 lista e compara os níveis de acesso que os modificadores podem proporcionar aos atributos e métodos.

Modificador	Classe	Subclasses	Globalmente
public	sim	sim	sim
protected	sim	sim	não
private	sim	não	não
*/

class Funcionario{
    public $nome = 'Alex';
    protected  $salario = 200;
    private $rg ='00.000.000-0';
} 

$funcionario = new Funcionario;
echo $funcionario->nome;
echo $funcionario->salario;
echo $funcionario->rg; 





?>