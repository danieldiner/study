
//Clase2 

//Hacemos un objeto con la palabra reservada
//Perro
//Un objeto es la abstracción de ese mismo objeto


//La clase es como un molde para hacer galletas. En este caso construir perros
//El constructor se inicializa para que contenga valores válidos



// class Perro{
 	
// 	constructor(color, tamano, peso){

// //This nos permite acceder a los atributos de la instancia

// 		this.color =color
// 		this.tamano =tamano
// 		this.peso =peso
// // console.log("El perro se hizo")
// // console.log("El perro es de color: " +color)
// 	}	
// 	// //Atributos
// 	// color
// 	// tamano
// 	// peso

// 	//Métodos
// 	ladrar(){
// 		return "Guauu"

// 	}
// 	correr(){


// 	}
// 	morder(){

// 	}

// 	getColor(){
// 		return this.color

// 	}

// 	setColor(newColor){
// 		this.color = newColor

// 	}

// }


// //Construye un nuevo objeto clases iniciancon mayúscila

// //Nuevas dos instancias hacia perro (crear el objeto de una clase)
// // se usa la palabra reservada new

// var ayudanteSanta = new Perro("Cafe","Grande", 40)
// //tipo de
// //console.log(typeof(ayudanteSanta))
// console.log(ayudanteSanta)
// var pug = new Perro("rosa","Grande", 70)
// console.log(pug);


// //This o self es una referencia a sí mismo
// //pug.ladrar();




// //return


// var x = pug.ladrar()
// console.log(x)



// /////////////////////////
// 1.- Crear un objeto de tipo triangulo con atrinutos base 
//     y altura y tener el metodo  area y perimetro.
// 2.- Crear un objeto tipo cuadrado y obtener el perimetro y area.
// 3.- Crear un objeto tipo rectangulo y obtener el perimetro y area.


// class Triangulo{

// 	constructor(base, altura, lado3){

// 	this.base = base
// 	this.altura = altura
// 	this.lado3 = lado3
// }

// area(){

// return ((this.base*this.altura)/2)

// }

// perimetro(){

// return (this.base + this.altura + this.lado3)

// }
// }

// var trianguloEscaleno = new Triangulo(4, 5,  6);

// x = trianguloEscaleno.perimetro()
// y = trianguloEscaleno.area()
// console.log(x)
// console.log(y)


/////////////
// 2.- Crear un objeto tipo cuadrado y obtener el perimetro y area.



// class Cuadrado{

// 	constructor(lado1){

// 	this.lado1 = lado1


// }

// area(){

// return (this.lado1*this.lado1)

// }

// perimetro(){

// return (this.lado1*4)

// }
// }

// var cuadrado1 = new Cuadrado(4, 5);

// x = cuadrado1.perimetro()
// y = cuadrado1.area()
// console.log(x)
// console.log(y)


// // 3.- Crear un objeto tipo rectangulo y obtener el perimetro y area.

// class Rectangulo{

// 	constructor(lado1, lado2){

// 	this.lado1 = lado1
// 	this.lado2 = lado2

// }

// area(){

// return (this.lado1*this.lado2)

// }

// perimetro(){

// return ((this.lado1*2) + (this.lado2*2))

// }
// }

// var rectangulo1 = new Rectangulo(4, 5);

// x = rectangulo1.perimetro()
// y = rectangulo1.area()
// console.log(x)
// console.log(y)


// //4.- Haz una clase llamada Persona que siga las siguientes condiciones:
//     Sus atributos son: nombre, edad, DNI, sexo, peso y altura.
//     calcularIMC()
//     esMayorDeEdad()
//     El constructor pide nombre, edad,sexo,peso y altura
//     Generar el DNI a partir de el nombre, edad y sexo

// class Persona{
// 	constructor(nombre, edad,sexo,peso,altura){
// 		this.nombre =nombre
// 		this.edad = edad
// 		this.sexo = sexo
// 		this.peso = peso
// 		this.ltura = altura
// 		this.DNI = this.nombre + this.edad + this.sexo
		
// 	}

// calcularIMC(){

// return (this.peso*this.altura*this.altura)

// }

// esMayorDeEdad(){

// if(this.edad>18){
// return "Es mayor de edad"

// }else
// return "Es menor de edad"
// }

// getDNI(){
// 	return this.DNI
// }

// }

// let Juan= new Persona("Juan", 19, "hombre", 70, 1.70)
// x = Juan.getDNI()
// console.log(x)


// 5.- Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
//     NOMBRETitular y cantidad
//     ingresar(cantidad)
//     retirar(cantidad)
//     Hacer las validaciones previas
//     Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta{
	constructor(titular, cantidad){
		this.titular = titular
		this.cantidad = cantidad
	}


	ingresar(deposito){

		if(900-this.cantidad<0 && this.deposito + this.cantidad < 900){
			this.cantidad = this.deposito+this.cantidad

		}else{
			console.log("No es posible tener mas de 900 en la cuenta")
		}
	}


	retirar(retiro){
		if((this.cantidad - this.retiro)< 10){
			console.log("No se puede tener menos de 10 en esta cuenta")

		}else{
			this.cantidad =this.cantidad-this.retiro

		}

	}


	getCantidad(){
		return this.cantidad

	}

}

let cuentaOro = new Cuenta("Daniel", 18)
console.log(cuentaOro.getCantidad())
cuentaOro.retirar(40)




//VALIDACIONES


// Objeto literal

// var nombreObjeto = {

// 	identificador1: valor;
// 	identificador2: valor2;


// }

//Herencia

// Clase padre hereda atributos y métodos a otra clase hija






