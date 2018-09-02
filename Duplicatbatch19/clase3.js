//Clase 3 
//Herencia

// 1.- Crear un objeto de tipo Figura que herede de 
//     tipo triangulo y recutangulo y que compartan caracteristicas.
// 2.- Crearemos una supeclase llamada Electrodomestico con 
//     las siguientes características:
//     Sus atributos son precio, color, consumo energético y peso.
//     El constructor debe de pedir precio, color y peso.
//     2.1.-Crearemos una subclase llamada Lavadora con las siguientes 
//         características:
//     Su atributo es carga, ademas de los atributos heredados.
//     Crear el metodo precioFinal() 
//     (El precio de el electrodomestico por la carga)
// 3.- Crear la clase construcción que hereda a otras dos 
//     clases “casa” y “edificio”
//     Sus atributos son: num puertas,num ventanas ,  num piso, 
//         direccion, altura,largo y ancho del tereno
//     Cada uno tiene un metodo que regresa los metros cuadrados 
//     Un metodo que regrese su direccion 
//     Un metodo que permita modificar su direccion



//1.- Crear un objeto de tipo figura

// class Figura{

// 	constructor(base, altura){

// 		this.base = base
// 		this.altura = altura


// 	}


// }

// class Triangulo extends Figura{

// 	constructor(base, altura, lado3){
// 		super(base, altura)
// 		this.lado3=lado3
		
// 	}

// 	area() {
// 		return ((this.base*this.altura)/2)

// 	}
// }
// class Rectangulo extends Figura{

// 	constructor(base, altura){
// 		super(base, altura)

// 	}

// 	area() {
// 		return (this.base*this.altura)

// 	}
// }


// var rect1 = new Rectangulo(2,3)
// console.log(rect1.area())

// var cuad1 = new Triangulo(2,3,5)
// console.log(cuad1.area())

////
//2.- Crear electrodoméstico ... 

// class Electrodomestico {
// 	constructor(precio, color, peso){
// 		this.precio = precio
// 		this.color = color
// 		this.peso = peso
		
// 	}

// 	setConsumo(newConsumo){
// 		this.consumo = newConsumo

// 	}

// 	getConsumo(){
// 		return this.consumo

// 	}

// }

// let lavadora = new Electrodomestico(6000, "blanca", "35kg")
// console.log(lavadora.getConsumo())
// console.log(lavadora.setConsumo(3))
// console.log(lavadora.getConsumo())



// // 2.1 Subclase llamada Lavadora 

// class Lavadora extends Electrodomestico {
// 	constructor(precio, color, peso, carga){
// 		super(precio, color, peso)
// 		this.carga = carga
// 	}

// 	precioFinal(){
// 		return (this.carga*this.precio)

// 	}
// }


// let lava2 = new Lavadora(10, "azul", 45, 20)
// console.log(lava2.precioFinal())



//3.- Crear la clase construcción que hereda a otras dos 


// class Construccion{

// 	constructor(numPuertas, numVentanas, numPiso, direccion, altura, largoTerreno, anchoTerreno){
// 		this.numPuertas = numPuertas
// 		this.numVentanas = numVentanas
// 		this.numPiso = numPiso
// 		this.direccion = direccion
// 		this.altura = altura
// 		this.largoTerreno = largoTerreno
// 		this.anchoTerreno = anchoTerreno
// 	}


// 	area(){
// 		return (this.largoTerreno*this.anchoTerreno)
// 	}

// 	getDireccion(){
// 		return this.direccion

// 	}

// 	setDireccion(newDireccion){
// 		this.direccion = newDireccion

// 	}

// }

// class Casa extends Construccion{
// 	constructor(numPuertas, numVentanas, numPiso, direccion, altura, largoTerreno, anchoTerreno){
// 		super(numPuertas, numVentanas, numPiso, direccion, altura, largoTerreno, anchoTerreno)
// 	}


// }


// class Edificio extends Construccion{
// 	//El constructor siempre pide todos los atributos que existen
// 	constructor(numPuertas, numVentanas, numPiso, direccion, altura, largoTerreno, anchoTerreno){
// 		super(numPuertas, numVentanas, numPiso, direccion, altura, largoTerreno, anchoTerreno)
// 	}


// }

// var devF = new Casa(7, 18, 2, "alvaroobregon", 11, 40, 60)
// console.log(devF.area())
// console.log(devF.getDireccion())
// console.log(devF.setDireccion("Santa Rosa"))
// console.log(devF.getDireccion())
