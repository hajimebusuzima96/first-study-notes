<?php 
$valorGasolina = 4.80;
$valorAlcool   = 3.80;
$valorDiesel   = 3.90;

/*O cálculo para obter o valor em reais do consumo do combustível é:

Dividimos o valor da distância pela autonomia para encontrar a quantidade gasta em litros pelo automóvel para percorrer a distância referida;
Multiplicamos o valor em litros pelo preço do combustível. */


$consumoGasolina = ($distancia / $autonomia ) * $valorGasolina;
$consumoAlcool   = ($distancia / $autonomia ) * $valorAlcool;
$consumoDiesel   = ($distancia / $autonomia ) * $valorDiesel;

/*Com o valor do consumo já definido, podemos imprimir esses dados na tela para o usuário.*/

echo "<p>O valor do consumo em R$ para Gasolina foi de: "  .$consumoGasolina."</p>";
echo "<p>O valor do consumo em R$ para Álcool foi de: "  .$consumoAlcool."</p>";
echo "<p>O valor do consumo em R$ para Diesel foi de: "  .$consumoDiesel."</p>";



?>