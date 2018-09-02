// //Arrow Functions

// //Funcion anonima

// function

// //myFunction guarda una función 
// var myFunction = function(a, b){
// 	return a+b

// }

// //Arrow Function 
// //         te ahorras la palabra function  
// var sum = (a,b) => { return a + b}
// //         te ahorras tambien el return  
// var sum = (a,b) => a + b
// //
// var printSaludo = saludo => { return `Hola ${saludo}`}
// // retorna un Objeto
// var foo = params => ({foo: bar})

// //
// var foo = (param1, param2, ...rest) => {sentencias}


// /////////////// Ejemplos de Arrow function
// function suma(a,b){
// 	return a +b
// }
// var sum = suma(3,5)
// console.log(sum)


// var suma1 = function(a,b){
// 	return a+b

// }

// var sum = suma1(3,5)
// console.log(sum)



// var suma2= (a,b) =>{
// 	return a+b

// }

// var suma2 = suma1(3,5)
// console.log(suma2)

// var suma3 = (a,b) => a+b
// var suma3 = suma1(3,5)
// console.log(suma3)


/////
///1.- Hacer una funcion centigrados a farenheit

// var celciousToFarenheit = (celDegr) => (celDegr*1.8)+ 32
// console.log(celciousToFarenheit(21))

//2.- Funcion que muestre la tabla de multiplicar de un num

var tablaMult = (num) => {
var lista
for(i=5; i<=10; i++){
		lista[i]= (num*i)

					}
}

console.log(lista)





