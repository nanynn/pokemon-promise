/*var llamarAjax = function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {'limit': '15'},

	success:function(response){
		console.log(response);
		return response;
		},

	error:function(error){
		console.log(error);
		return error;
		}
	})
}

console.log('Esta es una prueba');
var respuesta = llamarAjax();
	respuesta.results.forEach(function(element){
		console.log(element.name);
	});
console.log("Este es el mensaje después de la llamada del ajax");*/

/*$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '15'},
})
.done(function(respuesta) {
	respuesta.results.forEach(function(e){
		document.write(e.name);
		 	$.ajax({
			url: e.url,
			type: 'GET',
			dataType: 'json',
			data: {'limit': '15'},
		})
		.done(function(res) {
			console.log(res);
			Array.from(res.abilities).forEach(function(el){
				document.write(el.ability.name + '<br>');
			})
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	})
})
.done(function(){
	document.write('Este es el mensaje después de la llamada del ajax' + '<br>');
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});*/




//imprimir pokemon + habilidad(solo una habiliad) 10 pts
//imprimir pokemon + todas las habilidades 15 pts
//imprimir pokemon habilidades + cualquier otra cosa 20 pts
//No hacerlo con document.write 30 pts
//jquery 35 pts
//agregar css 45 pts
//hasta mañana se puede entregar



//promises
$(document).ready(function() {

 var pokeHabilidades = function(url){
 	$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
		})
		.done(function(res) {
			console.log(res);
			Array.from(res.abilities).forEach(function(el, i){
				console.log(el.ability.name);
				$('.poke-espacio p').html(el.ability.name);
			})
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
 	
 }

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {'limit': '15'}, //por algún motivo que no entiendo, me muestra el pokemon que esta en esta posición
	})
	.done(function(respuesta) {
		respuesta.results.forEach(function(e){
			console.log(e.name);
			$('.poke-espacio h2').html(e.name);
			pokeHabilidades(e.url);
		})
	})
	.done(function(){
		console.log('Este es el mensaje después de la llamada del ajax' + '<br>');
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});


