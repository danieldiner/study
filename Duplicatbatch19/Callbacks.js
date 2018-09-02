//Callbacks.js
//Promesas

//Groking algorithms An illustrated guide for programmers

//Pilas, colas y promesas

//Script es el código (lo lee de arriba hacia abajo)
//Pila de ejecución es la ejecución en primer plano (FIFO, delega a la cola de ejecución)
//Cola es algo que se tarda más o depende de otra cosa, (segundo plano, requiere un callback(error, resolved))

//Si la pila no está limpia o libre, no hay manera de que el callback vuelva a la pila de ejecución

//Callback [Es una función que recibe como parámetro otra función y se ejecuta un bloque de código]


//Cuello de botella 
//// console.log(1)
//// setTimeout((error, resolve){



//},3000)

//Ventajas y desventajas

//Good 
//Fáciles
//Solucionan problemas de flujo
//Ayuda con excepciones
//Son útiles para ir a BD o servicios API

//Bad
//Puede ser confuso
//Si se usa demasiado "Callback hell" (Callbacks dentro de callbacks) Muy difícil de leer
//Uso excesivo pierde el rendimiento 



//Ejemplo común de callback =>>> Restaurante
//Un ticket es tu promesa (la hamburguesa no está, pero estará)
//Ticket por hamburguesa,  Ticket por respuesta

//La promesa resuelve callback hell promesa(resolve, reject)

const promise = new Promise((resolve, rejct) =>{
	const number = Math.floor(Math.random()* 10);


	//Funciona como if Ternarios
	setTimeout(
		//Aqui sentencia del if 
		() = number > 5
			? resolve(number)
			: reject(new Error ('Menor a 5')),
			1000

		);	
});

promise
	.then (number => console.log(number))
	.catch(error => console.error(error));














