//JS en funcional

//map sustituye un for sirve para iterar

const data = [1,5,3,9,10,5]
var list2 = []
//se le pasa un callback que puede recibir 1o 2 o 3 parámetros
//x la variable del arreglo
//y la posicion
//z imprime el array las veces que itera
data.map((x,y,z)=>{
	console.log(y)
	list2[y] = x
});
console.log(list2)
//funciona como un forEach


const obj = [
	{data: "hola", nombre: "juana"}
	{data: "oli", nombre: "panchito"}
	{data: "ola", nombre: "pedro"}
]

var listanueva = obj.map((x,y,z)=>{
	return x.nombre
});

////Filter tiene 3 parámetros también (x, y, z)

//pero filter hace return true o false
var listafilter = tasks.filter((x,y,z)=>{
	return x.duration>90

})