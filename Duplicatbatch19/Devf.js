

//Este es el inicio del codigo que desarrollamos en Dev.F

//IF

// 1.- Escriba un programa que pida dos números enteros
//      y que calcule su división, escribiendo si la división es exacta o no.
// 2.- Escriba un programa que pida dos números y que conteste
//      cuál es el menor y cuál el mayor o que escriba que son iguales.
// 3- Escriba un programa que pida el año actual y un año cualquiera 
//     y que escriba cuántos años han pasado desde ese año o 
//     cuántos años faltan para llegar a ese año.
// 4.- Escriba un programa que pida tres números y que escriba 
//     si son los tres iguales, si hay dos iguales o si son los tres distintos.
// 5.- Pedir tres números y obtener el mayor de ellos.

//Ej 1
var x = 7 
var y = 3

if((x/y) %0){
console.log("La division es exacta")

}else{
	console.log("La division no es exacta")
}

//Ej 2


// function mayormenor(n1, n2){

// if(n1<n2){
// console.log("El numero " + n1 "es menor")

// }else if(n2<n1){
// if(n2==n1){console.log("Los numeros" + n1 + n2 "son iguales")

// }
// console.log("El numero " + n2 "es menor")
// }

// mayormenor( 3, 8);


function mayormenor(n1, n2){

if(n1<n2){
console.log("El numero"+n1+" es menor")



}else if(n2<n1){
console.log("El numero"+n2+" es menor")
}



else{
	console.log("Los numeros son iguales")

}
}

mayormenor( 3, 8)


//Ej 3

function mayormenor(fechaactual, fechadistinto){
tiempoFaltante = fechadistinto - fechaactual 

if( tiempoFaltante >= 0 ){
console.log("faltan " + tiempoFaltante + "años para este año")

}else {
negativo = -(tiempoFaltante)
console.log("hace " + negativo + "años de este año")

}
}


mayormenor(2017, 2018) 


//Ej 4 

// 4.- Escriba un programa que pida tres números y que escriba 
//     si son los tres iguales, si hay dos iguales o si son los tres distintos.


function equals(num1, num2, num3){
if(num1 == num2 && num2 == num3 && num1 == num3){
	console.log("Los tres numeros son iguales")
}



else if(num1 == num2 || num2 == num3 || num1 == num3){

console.log("Dos numeros son iguales")

}



if(num1 !== num2 && num2 !== num3 && num1 !== num3){

console.log("Los tres numeros son diferentes")

}}

equals(12, 12, 12)


// 5.- Pedir tres números y obtener el mayor de ellos.


function mayor(num1, num2, num3){
if(num1 > num2 && num1 > num3){
	console.log("El número " + num1 + "Es el mayor")
}



else if(num2 > num1 && num2 > num3){



console.log("El número " + num2 + "Es el mayor")

}


else if(num3 > num1 && num3 > num1){



console.log("El número " + num3 + "Es el mayor")



}
else if(num1 == num2 || num2 == num3 || num1 == num3){

console.log("Dos numeros o más son iguales")

}

}

mayor(13, 13, 4)



// FOR
// Imprimir del 1 al 10000

// Imprimir los números pares del 1 al 10000

// Crea la suma de todos los números pares del 1 al 3000


// Crea una serie Fibonacci
// ?? Determine el descuento de un artículo por medio de la cantidad, si compras mas de 5 artículos tiene un 5% de descuento, en caso contrario no tiene descuento


// ARRAYS
// Ingresa 100 valores en una lista y después imprímelo


// Pide un numero y guarda en una lista su tabla de multiplicar hasta el 10
// Suma los elementos de las siguientes dos listas  [4,76,3,12,65,3] ,[234,222,523,65]
//Hacer!!//////  Acomoda el siguiente refrán “que duerme lleva se lo corriente la se camarón”  


// FUNCTIONS
// Crea una función con parámetros para realizar una suma de dos elementos.
//Hacer!!!//  Todos las ejercicios anteriores convertirlos en función en un archivo problems.js y exportarlos a main.js

///////////
for(i=1; i<=10000; i++)
{
console.log("El siguiente numero es" +i+".")
}

///////////////

x=0;
for(i=2; i<=10000; i=i+2)
{
console.log("El siguiente numero es" +i+".")
}
//////////////////////
x=0;
for(i=2; i<=30000; i=i+2)
{
	x=x+i;
console.log("El siguiente numero es" +i+".")
if(i==30000){
console.log("La suma es igual a "+x+"")

}

}


/////////////
// Crea una serie Fibonacci
x=0;
y=1;
for(i=0; i<=10; i++)
{

console.log("El numero" +i+" de la serie es" +x+" .")
z=x;
x=y;
y=x+z;

}

////////////////
// Determine el descuento de un artículo por medio de la cantidad, si compras mas de 5 artículos tiene un 5% de descuento, en caso contrario no tiene descuento


//???


/////



// ARRAYS
// Ingresa 100 valores en una lista y después imprímelo

var x = 0; 
var arreglo_1 = []; 
for(i=0; i<=100; i++)
{
 x = Math.floor((Math.random() * 10) + 1);
arreglo_1[i] = x;

console.log("El numero" +i+" de la serie es" + arreglo_1[i] +" .")

}



// Pide un numero y guarda en una lista su tabla de multiplicar hasta el 10
// Suma los elementos de las siguientes dos listas  [4,76,3,12,65,3] ,[234,222,523,65]
//  Acomoda el siguiente refrán “que duerme lleva se lo corriente la se camarón”  


// FUNCTIONS
// Crea una función con parámetros para realizar una suma de dos elementos.
//  Todos las ejercicios anteriores convertirlos en función en un archivo problems.js y exportarlos a main.js




