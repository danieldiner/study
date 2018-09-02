
//JS es asíncrono
/// Pila de ejecución y cola de ejecución
//JS lee los archivos de arriba hacia abajo
//La pila lo hace FIFO
//Las cosas que tardan las pasa a la cola de ejecución
//Regresa a la pila por medio de los callbacks
//La pila de ejecución debe siempre estar vacía 

/*
console.log(1)

//retorna por medio de un callback pide dos parámetros (callback{},tiempo )
setTimeout(function callback1(){
	console.log(2)
}, 3000)

console.log(3)
Cuello de botella
*/



//// Super importante los callbacks
//cuello de botella
console.log(1)

setTimeout(function callback1(){
	console.log(2)
}, 3000)

for(i=0; i< 9999999; i++);

console.log(3)


//Espera el callback una respuesta de error o de resolve
setTimeout((error, resolve =>{
	if(error){


	}

	console.log(2)
}, 3000)




