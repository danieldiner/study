// 5.-Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado que más gana.
// 6.-Guardar en un array los 20 primeros números pares.
// 7.-Hacer una funcion que calcule el tiempo necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v)
// 8.-Hacer los primeros 10 dígitost de serie Fibbonacci
// 9.-Crear una funcion que reciba como parametro una oración y defina si es palindromo.

//5.- /// :D

class Empleado{
		constructor(nombre, salario, vacaciones) {
			this.nombre = nombre
			this.salario = salario
			this.vacaciones = vacaciones

		}

		getSalario(){
			return this.salario

		}


}
var empleado = []
 
 empleado[0] = new Empleado("pich", 12000, "viernes")
 empleado[1] = new Empleado("kent", 11100," lunes")
 empleado[2] = new Empleado("roger", 11100, "miercoles")
 empleado[3] = new Empleado("lore", 14000," miercoles")
 empleado[4] = new Empleado("susu", 40000, "sabado")
 empleado[5] = new Empleado("lorian", 57000," martes")
 empleado[6] = new Empleado("eddie", 19000, "jueves")
 empleado[7]= new Empleado("marian", 23000," domingo")

var lista2 = []

for(i=0; i<8; i++){
lista2[i]=empleado[i, i]


}

console.log(lista2)

var rico =[]

for(i=1; i<lista2.length; i++){

	if(lista2[i-1].salario > lista2[i].salario){
		rico =lista2[i-1]
	}
}

console.log(rico)


// console.log(Object.keys(lista2[2]))
// console.log(lista2[1].salario)
//console.log(lista2[1*4].salario)


// // 6.-Guardar en un array los 20 primeros números pares.

// var pares =[]
// for(i=0; i<40; i=i+2){
// pares[i] = [i]

// }
// console.log(pares)

// 7.-Hacer una funcion que calcule el tiempo necesario para que un automóvil que se mueva con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v)

//var function 






