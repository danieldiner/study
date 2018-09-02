//Herencia 

//Clase papa
class Animal{
	constructor(nombre, peso){
		this.nombre = nombre
		this.peso = peso
	}

	getNombre(){
		return this.nombre
	}

	comer(comida){

	return `${this.nombre} esta comiendo ${comida}`

	}

}



//Clase hija
class Perro extends Animal{
	constructor(raza, nombre, peso) {

		//Manda llamar el constructor de la clase de herencia
		//pide como parámetros los que pide el papa
		super(nombre, peso)
		this.raza = raza
	}


	getRaza(){
		return this.raza

	}
}

var pug = new Perro("Pug", "Fido", "10")
x = pug.comer("croquetas")
console.log(x)



//Clase hija 2

class Gato extends Animal{
	constructor(pelo, nombre, peso) {

		//Manda llamar el constructor de la clase de herencia
		//pide como parámetros los que pide el papa
		super(nombre, peso)
		this.pelo = pelo
	}


	getPelo(){
		return this.pelo

	}
}

var flaca = new Gato("mucho", "flaquis", "2")
y = pug.comer("atun")
console.log(y)

