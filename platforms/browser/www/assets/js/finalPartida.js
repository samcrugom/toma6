function acabaPartida(){
	clearInterval(contador);
	
	nombre = prompt('Introduce tu nombre', 'Player 1');
	console.log(nombre);
	if (nombre == "" || nombre == null) {
		rankingFinal();
		//window.location = "main.html";
	}else{
		$.get("http://www.samcrugom.com/toma6/registroNombre.app.php", {
		    nombrecito: nombre,
		    puntuacioncita: puntosTotales
		}, function(registro, status){  //  Te pinta en consola el resultado del PHP7
		    console.log(registro);
		    //window.location = "index.html";
		});
		rankingFinal();
	}
	
		
	
	function rankingFinal(){
		//	SACA LOS DATOS DE LAS DEMÁS PUNTUACIONES QUE HAYAN JUGADO.
	
			pintarRanking();
			$("#rankingTabla").css('z-index', '9999999999999');
			$("#rankingTabla").css('display', 'block');
			$("#rankingTabla").attr('class', 'animated bounceInDown');
		

		$("#salirRanking").click(function(){
			window.location = "main.html";
		});

		function pintarRanking() {
			//	SACA LOS DATOS DE LAS DEMÁS PUNTUACIONES QUE HAYAN JUGADO.
			$("#rankingTabla3").html('');
			$.ajax({                                                    
		        url:"http://www.samcrugom.com/toma6/ranking.app.php",
		        type: "GET",                                            
		        async: true,                                            
		        success: function(){                                   
		            $.getJSON("http://www.samcrugom.com/toma6/ranking.app.php", function(jugadores){
		                $.each(jugadores, function(i, jugador){
		                    $("#rankingTabla3").append("<div class='cajon'><span class='nombreJugador'>"+jugador.nombre_jugador+" .............</span><span class='puntosJugador'>"+jugador.puntos_jugador+"</span></div>");
		                });
		            });
		        },
		        error: function(){
		            console.log("Error al cargar el archivo");
		        }
		    });
		}

	}

		
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