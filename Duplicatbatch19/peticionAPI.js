
// //importa librerías con la palabra reservada require("request")
// const request = require('request');

// //request.get ya esta definido por la librería request del npm de node
// //.get(URL API la peticion, como lo voy a devolver)
// //como lo voy a devolver => con un callback (método de retorno de la cola)

// request.get('http://pokeapi.co/api/v2/pokemon/1/', 
// 	(error,response,body)=>{
// 			//arrow function function(error,response,body)
// 			//console.log(error)
// 			console.log(response.statusCode)
			
// 			//Para acceder a los stats
// 			console.log(body)
// 			//console.log(response.stats)


// 			//Convertir el body (llega como string) a un JSON
// 			//var respuesta = JSON.parse(body)
// 			//console.log(respuesta.stat)



 
// 	});

const request = require('request');

request.get('http://pokeapi.co/api/v2/pokemon/2/', 
	(error,response,body)=>{
		
			//console.log(response.statusCode)
			
			console.log(body)
			//console.log(response.stats)


			//Convertir el body (llega como string) a un JSON
			//var respuesta = JSON.parse(body)
			//console.log(respuesta.stat)


	});