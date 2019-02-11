<?php
/*
	if ($_GET) {
		echo $_GET['correo']." ".$_GET['clave'];
	}
*/

	//	CABECERAS CORS - (Permiten usar AJAX)
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Allow: GET, POST, OPTIONS, PUT, DELETE");
	$method = $_SERVER['REQUEST_METHOD'];
	if($method == "OPTIONS") {
		die();
	}

	//	DA EL FORMATO A LA WEB
	header('Content-type: application/json');

	//	CONEXIÓN CON LA BASE DE DATOS
	$servidorBD = "bbdd.samcrugom.com";
	$usuarioBD = "ddb124868";
	$claveBD = "Guitarra90";
	$nombreBD = "ddb124868";

	$conectar = mysqli_connect($servidorBD, $usuarioBD, $claveBD, $nombreBD);

	mysqli_set_charset($conectar, "utf8");

	//	SACA LOS DATOS DE LOS USUARIOS
	$sqlJugadores = "
		SELECT *
			FROM `jugador`
		    ORDER BY puntos_jugador ASC;
	";
	$queryJugadores = mysqli_query($conectar, $sqlJugadores);
	while ($rowJugadores = mysqli_fetch_assoc($queryJugadores)) {
		$jugadores[] = $rowJugadores;
	}

	//	PINTA EL JSON CON LOS RESULTADOS
	echo json_encode($jugadores);
?>