
//Liskov substitution principle 
//Uno de los cinco principios que usa la programacion orientada a objetos

//SOLID
//Single solo realiza una accion un método
//Open close principle


 {usar get y set}
//Liskov

//

class Largometraje{
	constructor(tiempo){
		this.tiempo= tiempo

	}

	getTiempo(){
		return this.tiempo
	}

}


class Pelicula extends Largometraje{
	constructor(tiempo, genero){
		super(tiempo)
		this.genero = genero
	}

}

class Documental extends Largometraje{
	constructor(tiempo, director){
		super(tiempo)
		this.director = director
	}
		

}


class Cine{
	constructor(largometraje){
		this.largometraje = largometraje

	}

	reproducirLargometraje(){
		return `El largometraje va a durar ${this.largometraje.getTiempo()}`
	}
}


var doc = new Documental( "90 min" , "el Perro") 
var pel = new Documental( "120 min" , "Tron") 


var cine = new Cine(pel)
var rep = cine.reproducirLargometraje()
console.log(rep)

