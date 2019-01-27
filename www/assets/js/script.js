//	TIEMPO
var tiempo = 5;
var indiceCartaElegida = 0;
var cartaElegida = jugadores[1][indiceCartaElegida]; // El segundo valor es el índice del array, la posición que tengo que eliminar del array y pintarla posteriormente en la mesa. Por defecto, que se elija la primera del mazo en el caso de no tocarlo.
var cartasTurno = [];



function cuenta(){
	if (tiempo <= 0) {

		clearInterval(contador);
		alert("Has elegido la carta = "+cartaElegida);
		
		
				/*	1er MÉTODO:	la oculto	*/
		
		//$("#miCarta"+indiceCartaElegida).css("display", "none");
		


				/*	2º MÉTODO:	Elimino la carta elegida de mi mazo	*/
		
		pintarCartasMano();

		turnoCartas();


		indiceCartaElegida = 0;
		cartaElegida = jugadores[1][indiceCartaElegida];

		tiempo = 0;
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


var contador = setInterval(function(){
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

	//	SE COLOCAN LAS CARTAS ENCIMA DE LA MESA

	colocarCartasEnMesa();

	


	// Al final del turno, volvemos a dejar las cartas anteriormente elegidas y colocadas en la mesa, vacío, a la espera del nuevo turno.

	//alert(cartasTurno);
	//cartasTurno = [];
}



function colocarCartasEnMesa(){
	//	Guardo en variables las cartas de arriba de cada mazo de la mesa
	var mesa0 = "";
	var mesa1 = "";
	var mesa2 = "";
	var mesa3 = "";

	cartasMesa[0].forEach(function(valor, indice, array){
		mesa0 = valor;
	});
	cartasMesa[1].forEach(function(valor, indice, array){
		mesa1 = valor;
	});
	cartasMesa[2].forEach(function(valor, indice, array){
		mesa2 = valor;
	});
	cartasMesa[3].forEach(function(valor, indice, array){
		mesa3 = valor;
	});

		

	function pintarCartasUnaAUna(){
		var cartita = cartasTurno[0];
		auxiliar = [mesa0, mesa1, mesa2, mesa3, cartita];
		function comparar (a, b){ return a - b; }
		auxiliar.sort( comparar );
		console.log(cartasTurno);
		console.log(auxiliar);

		if (auxiliar.indexOf(cartita, 0) == 1) {
			if (auxiliar[0] == mesa0) {
				cartasMesa[0].push(cartita);
				//alert(cartita+' va en el mazo 0');
				actualizarMesa0();
			}else if (auxiliar[0] == mesa1) {
				cartasMesa[1].push(cartita);
				//alert(cartita+' va en el mazo 1');
				actualizarMesa1();
			}else if (auxiliar[0] == mesa2) {
				cartasMesa[2].push(cartita);
				//alert(cartita+' va en el mazo 2');
				actualizarMesa2();
			}else if (auxiliar[0] == mesa3) {
				cartasMesa[3].push(cartita);
				//alert(cartita+' va en el mazo 3');
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(cartita, 0) == 2) {
			if (auxiliar[1] == mesa0) {
				cartasMesa[0].push(cartita);
				//alert(cartita+' va en el mazo 0');
				actualizarMesa0();
			}else if (auxiliar[1] == mesa1) {
				cartasMesa[1].push(cartita);
				//alert(cartita+' va en el mazo 1');
				actualizarMesa1();
			}else if (auxiliar[1] == mesa2) {
				cartasMesa[2].push(cartita);
				//alert(cartita+' va en el mazo 2');
				actualizarMesa2();
			}else if (auxiliar[1] == mesa3) {
				cartasMesa[3].push(cartita);
				//alert(cartita+' va en el mazo 3');
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(cartita, 0) == 3) {
			if (auxiliar[2] == mesa0) {
				cartasMesa[0].push(cartita);
				//alert(cartita+' va en el mazo 0');
				actualizarMesa0();
			}else if (auxiliar[2] == mesa1) {
				cartasMesa[1].push(cartita);
				//alert(cartita+' va en el mazo 1');
				actualizarMesa1();
			}else if (auxiliar[2] == mesa2) {
				cartasMesa[2].push(cartita);
				//alert(cartita+' va en el mazo 2');
				actualizarMesa2();
			}else if (auxiliar[2] == mesa3) {
				cartasMesa[3].push(cartita);
				//alert(cartita+' va en el mazo 3');
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(cartita, 0) == 4) {
			if (auxiliar[3] == mesa0) {
				cartasMesa[0].push(cartita);
				//alert(cartita+' va en el mazo 0');
				actualizarMesa0();
			}else if (auxiliar[3] == mesa1) {
				cartasMesa[1].push(cartita);
				//alert(cartita+' va en el mazo 1');
				actualizarMesa1();
			}else if (auxiliar[3] == mesa2) {
				cartasMesa[2].push(cartita);
				//alert(cartita+' va en el mazo 2');
				actualizarMesa2();
			}else if (auxiliar[3] == mesa3) {
				cartasMesa[3].push(cartita);
				//alert(cartita+' va en el mazo 3');
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(cartita, 0) == 0) {
			alert('Tienes que elegir un mazo de la mesa');
		}

		function actualizarMesa0(){
			document.getElementById('cartasMesa0').innerHTML = "";
			cartasMesa[0].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa0').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}
		function actualizarMesa1(){
			document.getElementById('cartasMesa1').innerHTML = "";
			cartasMesa[1].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa1').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}
		function actualizarMesa2(){
			document.getElementById('cartasMesa2').innerHTML = "";
			cartasMesa[2].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa2').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}
		function actualizarMesa3(){
			document.getElementById('cartasMesa3').innerHTML = "";
			cartasMesa[3].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa3').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}

		
	}

	var cartitasUnaUna = setInterval(function(){
		if (cartasTurno.length != 0) {
			pintarCartasUnaAUna();
			//	Elimino la primera carta del mazo de 
			cartasTurno.splice(0, 1);
		}else{
			clearInterval(cartitasUnaUna);
			cartasTurno = [];
			tiempo = 5;
			contador = setInterval(function(){
				cuenta();
			}, 1000);
		}
	}, 500);


		

	
		


/*
	cartasTurno.forEach(function(valor, indice, array){
		auxiliar = [mesa0, mesa1, mesa2, mesa3, valor];
		function comparar (a, b){ return a - b; }
		auxiliar.sort( comparar );
		//console.log(auxiliar);

		//	Controlo a qué mazo pertenece la carta del índice anterior al 'valor'.
		if (auxiliar.indexOf(valor, 0) == 1) {
			if (auxiliar[0] == mesa0) {
				cartasMesa[0].push(valor);	//meter el push en las funciones 'actu..'
				actualizarMesa0();
			}else if (auxiliar[0] == mesa1) {
				cartasMesa[1].push(valor);
				actualizarMesa1();
			}else if (auxiliar[0] == mesa2) {
				cartasMesa[2].push(valor);
				actualizarMesa2();
			}else if (auxiliar[0] == mesa3) {
				cartasMesa[3].push(valor);
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(valor, 0) == 2) {
			if (auxiliar[1] == mesa0) {
				cartasMesa[0].push(valor);
				actualizarMesa0();
			}else if (auxiliar[1] == mesa1) {
				cartasMesa[1].push(valor);
				actualizarMesa1();
			}else if (auxiliar[1] == mesa2) {
				cartasMesa[2].push(valor);
				actualizarMesa2();
			}else if (auxiliar[1] == mesa3) {
				cartasMesa[3].push(valor);
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(valor, 0) == 3) {
			if (auxiliar[2] == mesa0) {
				cartasMesa[0].push(valor);
				actualizarMesa0();
			}else if (auxiliar[2] == mesa1) {
				cartasMesa[1].push(valor);
				actualizarMesa1();
			}else if (auxiliar[2] == mesa2) {
				cartasMesa[2].push(valor);
				actualizarMesa2();
			}else if (auxiliar[2] == mesa3) {
				cartasMesa[3].push(valor);
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(valor, 0) == 4) {
			if (auxiliar[3] == mesa0) {
				cartasMesa[0].push(valor);
				actualizarMesa0();
			}else if (auxiliar[3] == mesa1) {
				cartasMesa[1].push(valor);
				actualizarMesa1();
			}else if (auxiliar[3] == mesa2) {
				cartasMesa[2].push(valor);
				actualizarMesa2();
			}else if (auxiliar[3] == mesa3) {
				cartasMesa[3].push(valor);
				actualizarMesa3();
			}
		}else if (auxiliar.indexOf(valor, 0) == 0) {
			alert("tienes que sustituir un mazo");
		}
		
		function actualizarMesa0(){
			document.getElementById('cartasMesa0').innerHTML = "";
			cartasMesa[0].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa0').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}
		function actualizarMesa1(){
			document.getElementById('cartasMesa1').innerHTML = "";
			cartasMesa[1].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa1').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}
		function actualizarMesa2(){
			document.getElementById('cartasMesa2').innerHTML = "";
			cartasMesa[2].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa2').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}
		function actualizarMesa3(){
			document.getElementById('cartasMesa3').innerHTML = "";
			cartasMesa[3].forEach(function(valor, indice, array){
				document.getElementById('cartasMesa3').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
			});
		}

		


		
		//for (i = 0; i <= 3; i++) {
		//	document.getElementById('cartasMesa'+i).innerHTML = "";
		//}
		//pintarCartasMesa();
		

	});
*/
	

}














