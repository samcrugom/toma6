//	TIEMPO
var tiempo = 5;
var indiceCartaElegida = 0;
var cartaElegida = jugadores[1][indiceCartaElegida]; // El segundo valor es el índice del array, la posición que tengo que eliminar del array y pintarla posteriormente en la mesa. Por defecto, que se elija la primera del mazo en el caso de no tocarlo.
var cartasTurno = [];
var cartaElegida2 = "";
var puntosTotales = 0;
var puntosTotalesJugador2 = 0;
var puntosTotalesJugador3 = 0;
var puntosTotalesJugador4 = 0;
var puntosTotalesJugador5 = 0;
var puntosTotalesJugador6 = 0;
var puntosTotalesJugador7 = 0;
var puntosTotalesJugador8 = 0;
var puntosTotalesJugador9 = 0;
var puntosTotalesJugador10 = 0;
var cartaJugador2;
var cartaJugador3;
var cartaJugador4;
var cartaJugador5;
var cartaJugador6;
var cartaJugador7;
var cartaJugador8;
var cartaJugador9;
var cartaJugador10;
var elijoMazo = null;
var eligeMaquinaMazo = "";
var numCartasMesa0 = 1;
var numCartasMesa1 = 1;
var numCartasMesa2 = 1;
var numCartasMesa3 = 1;
var jugadorComeCartas = "";
var puntosMaquina = "";
var mesita = "";





function cuenta(){
	if (tiempo <= 0) {

		clearInterval(contador);
		alert("Has elegido la carta = "+cartaElegida);
		cartaElegida2 = cartaElegida;
		
		
				/*	1er MÉTODO:	la oculto	*/
		
		//$("#miCarta"+indiceCartaElegida).css("display", "none");
		


				/*	2º MÉTODO:	Elimino la carta elegida de mi mazo	*/
		
		pintarCartasMano();
		turnoCartas();
		


		indiceCartaElegida = 0;
		cartaElegida = jugadores[1][indiceCartaElegida];

		tiempo = 0;
		$("#tiempo1").css("color", "white");
		$("#tiempo1").css("text-shadow", "none");
	}

	//	ELECCIÓN DE CARTA DE TU MAZO

	$("#miCarta0").click(function(){
		//console.log("He elegido la Carta nº 0");
		indiceCartaElegida = 0;
		cartaElegida = jugadores[1][indiceCartaElegida];
	});

	$("#miCarta1").click(function(){
		//console.log("He elegido la Carta nº 1");
		indiceCartaElegida = 1;
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
		$("#tiempo1").css("text-shadow", "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white, 1px 1px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white");
	}
	if (tiempo <= 0) {
		tiempo = 0;
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
	if (jugadores[1].length == 0) {
		acabaPartida();
	}
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
	
	//console.log('cartasCadaJugador: '+cartasCadaJugador);
	cartaJugador2  = cartasTurno[1];
	cartaJugador3  = cartasTurno[2];
	cartaJugador4  = cartasTurno[3];
	cartaJugador5  = cartasTurno[4];
	cartaJugador6  = cartasTurno[5];
	cartaJugador7  = cartasTurno[6];
	cartaJugador8  = cartasTurno[7];
	cartaJugador9  = cartasTurno[8];
	cartaJugador10  = cartasTurno[9];
	console.log('antes de ordenar: '+cartasTurno);


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
	//console.log('cartasCadaJugador: '+cartasCadaJugador);

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

		var soniditoCarta = Math.floor((Math.random()*2)+1);
		if (soniditoCarta == 1) {
			document.getElementById('colocarCarta').play();
		}else if (soniditoCarta ==2) {
			document.getElementById('colocarCarta2').play();
		}

		//Controlamos la posición en la que está la carta a colocar
		if (auxiliar.indexOf(cartita, 0) == 1) {
			//	controlamos a qué mazo pertenece la carta anterior, ya que se ha ordenado en modo ascendente el array Auxiliar(carta últimas de cada mazo de la mesa + la carta a colocar)
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
			//diferenciar si es una carta de la máquina o mi carta
			console.log(cartaElegida2);
			console.log(cartita);
			if (cartita == cartaElegida2) {
				//Obligo a que sea un mazo entre el 1 y el 4.
				elegirMazo();
				
				function elegirMazo(){
					elijoMazo = prompt('Elija uno de los montones de la mesa. Ejemplo: 1', '');
					if (elijoMazo <=0 || elijoMazo >=5) {
						elegirMazo();
					}
				}
				var mazoSustituir = (elijoMazo-1);

				//controlar los puntos que te comes
				var puntos = 0;
				cartasMesa[mazoSustituir].forEach(function(valor, indice, array){
					if (valor == 5 || valor == 15 || valor == 25 || valor == 35 || valor == 45 || valor == 65 || valor == 75 || valor == 85 || valor == 95) {
						puntos += 2;
					}else if (valor == 10 || valor == 20 || valor == 30 || valor == 40 || valor == 50 || valor == 60 || valor == 70 || valor == 80 || valor == 90 || valor == 100) {
						puntos += 3;
					}else if (valor == 11 || valor == 22 || valor == 33 || valor == 44 || valor == 66 || valor == 77 || valor == 88 || valor == 99) {
						puntos += 5;
					}else if (valor == 55) {
						puntos += 7;
					}else{
						puntos += 1;
					}
					//alert('Carta '+valor+': '+puntos+' pnts');
				});
				puntosTotales += puntos;

				alert('Te has comido '+puntos+' puntos');
				alert('tienes '+puntosTotales+' puntos negativos en total')

				// sustituir el 'monton' por 'cartita'

				cartasMesa[mazoSustituir] = [cartita];
				if (mazoSustituir == 0) {
					actualizarMesa0();
					cartasMesa[0].forEach(function(valor, indice, array){
						mesa0 = valor;
					});
				}else if (mazoSustituir == 1) {
					actualizarMesa1();
					cartasMesa[1].forEach(function(valor, indice, array){
						mesa1 = valor;
					});
				}else if (mazoSustituir == 2) {
					actualizarMesa2();
					cartasMesa[2].forEach(function(valor, indice, array){
						mesa2 = valor;
					});
				}else if (mazoSustituir == 3) {
					actualizarMesa3();
					cartasMesa[3].forEach(function(valor, indice, array){
						mesa3 = valor;
					});
				}
				





			}else{

				//cuando es la máquina quien elige mazo de la mesa.
				alert('la máquina elige un mazo de la mesa');
				eligeMaquinaMazo = Math.floor((Math.random()*4)+1);
				var mazoASustituir = eligeMaquinaMazo-1;
				//controlar los puntos que se come la máquina
				puntosMaquina = 0;
				cartasMesa[mazoASustituir].forEach(function(valor, indice, array){
					if (valor == 5 || valor == 15 || valor == 25 || valor == 35 || valor == 45 || valor == 65 || valor == 75 || valor == 85 || valor == 95) {
						puntosMaquina += 2;
						//alert(valor);
					}else if (valor == 10 || valor == 20 || valor == 30 || valor == 40 || valor == 50 || valor == 60 || valor == 70 || valor == 80 || valor == 90 || valor == 100) {
						puntosMaquina += 3;
						//alert(valor);
					}else if (valor == 11 || valor == 22 || valor == 33 || valor == 44 || valor == 66 || valor == 77 || valor == 88 || valor == 99) {
						puntosMaquina += 5;
						//alert(valor);
					}else if (valor == 55) {
						puntosMaquina += 7;
						//alert(valor);
					}else{
						puntosMaquina += 1;
						//alert(valor);
					}
					//alert('Carta '+valor+': '+puntos+' pnts');
				});

				//	Saber a qué jugador es quien se come las cartas
				

				if (cartasTurno[0] == cartaJugador2) {
					jugadorComeCartas = 2;
					puntosTotalesJugador2 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador3) {
					jugadorComeCartas = 3;
					puntosTotalesJugador3 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador4) {
					jugadorComeCartas = 4;
					puntosTotalesJugador4 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador5) {
					jugadorComeCartas = 5;
					puntosTotalesJugador5 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador6) {
					jugadorComeCartas = 6;
					puntosTotalesJugador6 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador7) {
					jugadorComeCartas = 7;
					puntosTotalesJugador7 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador8) {
					jugadorComeCartas = 8;
					puntosTotalesJugador8 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador9) {
					jugadorComeCartas = 9;
					puntosTotalesJugador9 += puntosMaquina;
				}else if (cartasTurno[0] == cartaJugador10) {
					jugadorComeCartas = 10;
					puntosTotalesJugador10 += puntosMaquina;
				}
				
				alert('ha elegido el mazo'+eligeMaquinaMazo+'. Se ha comido las cartas el jugador'+jugadorComeCartas+', '+puntosMaquina+' pts, y tiene en total puntos negativos');
				
				// sustituir el 'monton' por 'la primera carta'

				cartasMesa[eligeMaquinaMazo] = [cartasTurno[0]];
				if (eligeMaquinaMazo == 0) {
					actualizarMesa0();
					cartasMesa[0].forEach(function(valor, indice, array){
						mesa0 = valor;
					});
				}else if (eligeMaquinaMazo == 1) {
					actualizarMesa1();
					cartasMesa[1].forEach(function(valor, indice, array){
						mesa1 = valor;
					});
				}else if (eligeMaquinaMazo == 2) {
					actualizarMesa2();
					cartasMesa[2].forEach(function(valor, indice, array){
						mesa2 = valor;
					});
				}else if (eligeMaquinaMazo == 3) {
					actualizarMesa3();
					cartasMesa[3].forEach(function(valor, indice, array){
						mesa3 = valor;
					});
				}


			}
		}

		function puntosDelMazo(){
			cartasMesa[mesita].pop();
			var puntosMaquinita = 0;
			cartasMesa[mesita].forEach(function(valor, indice, array){
				if (valor == 5 || valor == 15 || valor == 25 || valor == 35 || valor == 45 || valor == 65 || valor == 75 || valor == 85 || valor == 95) {
					puntosMaquinita += 2;
					//alert(valor);
				}else if (valor == 10 || valor == 20 || valor == 30 || valor == 40 || valor == 50 || valor == 60 || valor == 70 || valor == 80 || valor == 90 || valor == 100) {
					puntosMaquinita += 3;
					//alert(valor);
				}else if (valor == 11 || valor == 22 || valor == 33 || valor == 44 || valor == 66 || valor == 77 || valor == 88 || valor == 99) {
					puntosMaquinita += 5;
					//alert(valor);
				}else if (valor == 55) {
					puntosMaquinita += 7;
					//alert(valor);
				}else{
					puntosMaquinita += 1;
					//alert(valor);
				}
				//alert('Carta '+valor+': '+puntos+' pnts');
			});

			//	Saber a qué jugador es quien se come las cartas
			

			if (cartita == cartaElegida2) {
				jugadorComeCartas = 1;
				puntosTotales += puntosMaquinita;
			}else if (cartita == cartaJugador2) {
				jugadorComeCartas = 2;
				puntosTotalesJugador2 += puntosMaquinita;
			}else if (cartita == cartaJugador3) {
				jugadorComeCartas = 3;
				puntosTotalesJugador3 += puntosMaquinita;
			}else if (cartita == cartaJugador4) {
				jugadorComeCartas = 4;
				puntosTotalesJugador4 += puntosMaquinita;
			}else if (cartita == cartaJugador5) {
				jugadorComeCartas = 5;
				puntosTotalesJugador5 += puntosMaquinita;
			}else if (cartita == cartaJugador6) {
				jugadorComeCartas = 6;
				puntosTotalesJugador6 += puntosMaquinita;
			}else if (cartita == cartaJugador7) {
				jugadorComeCartas = 7;
				puntosTotalesJugador7 += puntosMaquinita;
			}else if (cartita == cartaJugador8) {
				jugadorComeCartas = 8;
				puntosTotalesJugador8 += puntosMaquinita;
			}else if (cartita == cartaJugador9) {
				jugadorComeCartas = 9;
				puntosTotalesJugador9 += puntosMaquinita;
			}else if (cartita == cartaJugador10) {
				jugadorComeCartas = 10;
				puntosTotalesJugador10 += puntosMaquinita;
			}
			alert('Se las ha comido las cartas el jugador'+jugadorComeCartas+' las cartas del mazo '+mesita+' un total de puntos '+puntosMaquinita+' pts');
		}

		function actualizarMesa0(){
			numCartasMesa0++;
			if (numCartasMesa0 == 6) {
				mesita = 0;
				puntosDelMazo();
				alert('Se sustituye la mesa0 por '+cartita);
				cartasMesa[0] = [cartita]
				document.getElementById('cartasMesa0').innerHTML = "";
				cartasMesa[0].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa0').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
				mesa0 = cartita;
				numCartasMesa0 = 1;

			}else{
				document.getElementById('cartasMesa0').innerHTML = "";
				cartasMesa[0].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa0').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
			}
		}
		function actualizarMesa1(){
			numCartasMesa1++;
			if (numCartasMesa1 == 6) {
				mesita = 1;
				puntosDelMazo();
				alert('Se sustituye la mesa1 por '+cartita);
				cartasMesa[1] = [cartita]
				document.getElementById('cartasMesa1').innerHTML = "";
				cartasMesa[1].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa1').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
				mesa1 = cartita;
				numCartasMesa1 = 1;

			}else{
				document.getElementById('cartasMesa1').innerHTML = "";
				cartasMesa[1].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa1').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
			}
		}
		function actualizarMesa2(){
			numCartasMesa2++;
			if (numCartasMesa2 == 6) {
				mesita = 2;
				puntosDelMazo();
				alert('Se sustituye la mesa2 por '+cartita);
				cartasMesa[2] = [cartita]
				document.getElementById('cartasMesa2').innerHTML = "";
				cartasMesa[2].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa2').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
				mesa2 = cartita;
				numCartasMesa2 = 1;

			}else{
				document.getElementById('cartasMesa2').innerHTML = "";
				cartasMesa[2].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa2').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
			}
				
		}
		function actualizarMesa3(){
			numCartasMesa3++;
			if (numCartasMesa3 == 6) {
				mesita = 3;
				puntosDelMazo();
				alert('Se sustituye la mesa3 por '+cartita);
				cartasMesa[3] = [cartita]
				document.getElementById('cartasMesa3').innerHTML = "";
				cartasMesa[3].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa3').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
				mesa3 = cartita;
				numCartasMesa3 = 1;

			}else{
				document.getElementById('cartasMesa3').innerHTML = "";
				cartasMesa[3].forEach(function(valor, indice, array){
					document.getElementById('cartasMesa3').innerHTML += "<li><img src='assets/rsc/img/cartas/"+valor+".png' alt='"+indice+"'/></li>";
				});
			}	
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
	}, 1000);
}

function acabaPartida(){
	alert("Se ACABÓ!!!");
	window.location = "main.html";
	/*
	console.log(puntosTotales);
	console.log(puntosTotalesJugador2);
	console.log(puntosTotalesJugador3);
	console.log(puntosTotalesJugador4);
	console.log(puntosTotalesJugador5);
	console.log(puntosTotalesJugador6);
	console.log(puntosTotalesJugador7);
	console.log(puntosTotalesJugador8);
	console.log(puntosTotalesJugador9);
	console.log(puntosTotalesJugador10);
	*/
}














