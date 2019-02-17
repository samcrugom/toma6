//	REPARTIR
var cartasUsadas = [];
var cartasMesa = [];
var numJugadores = 10;
var jugadores = [];

//repartir();	//	Llamamos a la funcion desde el archivo partida.html.

function repartir(){
	
	document.getElementById('repartir').play();

	
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

	//	VOLVEMOS A CREAR UN ARRAY MULTIDIMENSIONAL PARA LAS CARTAS DE LA MESA.
	for (i = 0; i <= 3; i++) {
		cartasMesa[i] = [];
		//	REPARTO DE LAS 4 CARTAS PARA EL INICIO
		for (j=0; j<1; j++) {		
			cartas4();
			function cartas4(){
				var carta = Math.floor((Math.random()*104)+1);
				if (cartasUsadas.indexOf(carta, 0) == -1) {
					cartasUsadas.push(carta);
					cartasMesa[i].push(carta);
				}else{
					cartas4();
				}
			}
		}
	}
	//console.log(cartasMesa[0][0]);
	//console.log(cartasUsadas);

	//	PINTAR SOLO LAS CARTAS DEL JUGADOR 1
	pintarJugador1();
	
	//	PINTAR LAS CARTAS DE LA MESA
	pintarCartasMesa();
	//console.log(cartasMesa);
}

//	PINTAR CARTAS DE MI MANO

function pintarJugador1(){
	//	Ordeno las cartas de mi mano de menor a mayor
	function comparar (a, b){ return a - b; }
	jugadores[1].sort( comparar );

	var miMano1 = document.createElement('div');
	miMano1.setAttribute('id', 'miMano');
	miMano1.setAttribute('class', 'baraja-demo');

	var miMano2 = document.createElement('ul');
	miMano2.setAttribute('id', 'baraja-el');
	miMano2.setAttribute('class', 'baraja-container');

	document.getElementById('container').appendChild(miMano1);
	miMano1.appendChild(miMano2);
	

	jugadores[1].forEach(function(valor, indice, array){

		// DOM

		var carta = document.createElement('li');
		carta.setAttribute('id', 'miCarta' + indice);

		var fotoCarta = document.createElement('img');
		fotoCarta.setAttribute('src', 'assets/rsc/img/cartas/'+valor+'.png');
		fotoCarta.setAttribute('alt', indice);

		miMano2.appendChild(carta);
		carta.appendChild(fotoCarta);

	});
	console.log(jugadores[1]);
}

//	PINTAR CARTAS DE LA MESA

function pintarCartasMesa(){
	for (i = 0; i <= 3; i++) {
		cartasMesa[i].forEach(function(valor, indice, array){
			document.getElementById('cartasMesa'+[i]).innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
		});
	}
}


