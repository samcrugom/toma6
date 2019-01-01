//	REPARTIR
repartir();

function repartir(){
	var cartasUsadas = [];
	var cartasMesa = [];
	var numJugadores = 10;
	var jugadores = [];
	
	//	CREAR UN ARRAY MULTIDIMENSIONAL (JUGADORES) EN EL QUE GUARDA LAS CARTAS DE CADA UNO DE LOS JUGADORES
	for (i = 1; i <= numJugadores; i++) {
		jugadores[i] = [];
		//	REPARTO 10 CARTAS A CADA JUGADOR COMPROBANDO SI SE HA REPARTIDO ESA CARTA O NO ANTERIORMENTE.
		for (j=0; j<=9; j++) {		
			comprobacion();
			function comprobacion(){
				var carta = Math.floor((Math.random()*104)+1);
				if (cartasUsadas.indexOf(carta, 0) == -1) {
					cartasUsadas.push(carta);
					jugadores[i].push(carta);
				}else{
					comprobacion();
				}
			}
		}
	}
	//console.log(jugadores[1]);

	//	REPARTO DE LAS 4 CARTAS PARA EL INICIO
	for (i=0; i<=3; i++) {		
		cartas4();
		function cartas4(){
			var carta = Math.floor((Math.random()*104)+1);
			if (cartasUsadas.indexOf(carta, 0) == -1) {
				cartasUsadas.push(carta);
				cartasMesa.push(carta);
			}else{
				cartas4();
			}
		}
	}
	//console.log(cartasMesa);
	//console.log(cartasUsadas);

	//	PINTAR SOLO LAS CARTAS DEL JUGADOR 1
	for (i = 0; i <= 9; i++) {
		document.getElementById('baraja-el').innerHTML += "<li><img src='assets/rsc/img/cartas/"+jugadores[1][i]+".png' alt='"+jugadores[1][i]+"'/></li>";
	}

	//	PINTAR LAS CARTAS DE LA MESA
	for (i = 0; i <= 3; i++) {
		document.getElementById('cartasMesa').innerHTML += "<li><img src='assets/rsc/img/cartas/"+cartasMesa[i]+".png' alt='"+cartasMesa[i]+"'/></li>";
	}
};


/*
var cartasUsadas = [1, 2, 3, 4, 5];
var resultado = cartasUsadas.indexOf(0, 0);
console.log(resultado); //Resultado = -1
*/