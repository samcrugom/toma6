//	TIEMPO
var tiempo = 5;
var indiceCartaElegida = 0;
var cartaElegida = jugadores[1][indiceCartaElegida]; // El segundo valor es el índice del array, la posición que tengo que eliminar del array y pintarla posteriormente en la mesa. Por defecto, que se elija la primera del mazo en el caso de no tocarlo.
var cartasTurno = [];



function cuenta(){
	if (tiempo <= 0) {
		alert("Has elegido la carta = "+cartaElegida);
		
		
				/*	1er MÉTODO:	la oculto	*/
		
		//$("#miCarta"+indiceCartaElegida).css("display", "none");
		


				/*	2º MÉTODO:	Elimino la carta elegida de mi mazo	*/
				
		pintarCartasMano();

		turnoCartas();


		indiceCartaElegida = 0;
		cartaElegida = jugadores[1][indiceCartaElegida];

		tiempo = 7;
		$("#tiempo1").css("color", "black");
	}

	//	ELECCIÓN DE CARTA DE TU MAZO

	$("#miCarta0").click(function(){
		//console.log("He elegido la Carta nº 0");
		indiceCartaElegida = 0;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta1").click(function(){
		//console.log("He elegido la Carta nº 1");
		 var indiceCartaElegida = 1;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta2").click(function(){
		//console.log("He elegido la Carta nº 2");
		indiceCartaElegida = 2;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta3").click(function(){
		//console.log("He elegido la Carta nº 3");
		indiceCartaElegida = 3;
		 cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta4").click(function(){
		//console.log("He elegido la Carta nº 4");
		indiceCartaElegida = 4;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta5").click(function(){
		//console.log("He elegido la Carta nº 5");
		indiceCartaElegida = 5;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta6").click(function(){
		//console.log("He elegido la Carta nº 6");
		indiceCartaElegida = 6;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta7").click(function(){
		//console.log("He elegido la Carta nº 7");
		indiceCartaElegida = 7;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta8").click(function(){
		//console.log("He elegido la Carta nº 8");
		indiceCartaElegida = 8;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta9").click(function(){
		//console.log("He elegido la Carta nº 9");
		indiceCartaElegida = 9;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	tiempo--;
	if (tiempo == 3) {
		$("#tiempo1").css("color", "red");
	}
	document.getElementById('tiempo1').innerHTML = tiempo;
}

setInterval(function(){
	cuenta();
}, 1000);
	



//	QUITO LA CARTA ELEGIDA DE MI MANO Y LA VUELVO A PINTAR SIN ESA CARTA

function pintarCartasMano(){
	jugadores[1].splice(indiceCartaElegida, 1);
	var miMano3 = document.getElementById('baraja-el');
	document.getElementById('miMano').removeChild(miMano3);

	var miMano2 = document.createElement('ul');
	miMano2.setAttribute('id', 'baraja-el');
	miMano2.setAttribute('class', 'baraja-container');

	document.getElementById('miMano').appendChild(miMano2);

	var i = 1009;
	jugadores[1].forEach(function(valor, indice, array){
		var carta = document.createElement('li');
		carta.setAttribute('id', 'miCarta' + indice);
		carta.setAttribute('style', 'z-index: ' + i);
		i--;

		var fotoCarta = document.createElement('img');
		fotoCarta.setAttribute('src', 'assets/rsc/img/cartas/'+valor+'.png');
		fotoCarta.setAttribute('alt', indice);

		miMano2.appendChild(carta);
		carta.appendChild(fotoCarta);
	});
	cerrar();
	function cerrar(event){
		var $el = $( '#baraja-el' ),
		baraja = $el.baraja();
	}
	
	console.log(jugadores[1]);
}


//	TODOS LOS JUGADORES ENSEÑAN LAS CARTAS QUE HAN SELECCIONADO, Y EL ORDEN DE COLOCACIÓN ES SIEMPRE ASCENDENTE, DEL MENOR, AL NÚMERO MAYOR.

function turnoCartas(){
	// AGREGO LAS CARTAS ELEGIDAS A 'CARTAS-TURNO'.
	// La carta que hemos elegido.
	cartasTurno.push(cartaElegida);

	// Una carta de la mano del resto de jugadores
	for (i = 2; i <= numJugadores; i++) {
		var numCartasMano = jugadores[i].length;
		var indiceCartaAleatoriaBots = Math.floor((Math.random()*(numCartasMano-1))+0);
		var cartaAleatoriaBots = jugadores[i][indiceCartaAleatoriaBots];

		cartasTurno.push(cartaAleatoriaBots);
		jugadores[i].splice(indiceCartaAleatoriaBots, 1);
		console.log(jugadores[i]);
	}

	//	Una vez que tenemos todas las cartas elegidas por los jugadores, las ordenamos de menor a mayor.
	//	He obtenido la información de: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort'
	//de manera que el 40 no se me ponga antes del 5.
	/*
	EJEMPLO:
		var arr = [ 40, 1, 5, 200 ];
		function comparar ( a, b ){ return a - b; }
		arr.sort( comparar );  // [ 1, 5, 40, 200 ]
	*/
	function comparar (a, b){ return a - b; }
	cartasTurno.sort( comparar );
	console.log(cartasTurno);


	


	// Al final del turno, volvemos a dejar las cartas anteriormente elegidas y colocadas en la mesa, vacío, a la espera del nuevo turno.

	//alert(cartasTurno);
	cartasTurno = [];
}



