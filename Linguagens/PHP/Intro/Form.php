/*FORMULARIO DECLARADO EM index.php*/ 

<form action="calculo.php" method="POST">
 <label for="distancia">Distância em quilômetros a ser percorrida</label>
 <input type="text" name="distancia" />

 <label for="autonomia">Consumo de combustível do veículo (Km/l)</label>
 <input type="text" name="autonomia" />

 <button class="botao" type="submit">Calcular</button>
</form> 

/*ENVIANDO DADOS DO FORMULARIO*/ 

<?php
echo $_POST['distancia'];
echo "<br>";
echo $_POST['autonomia'];
?> 

