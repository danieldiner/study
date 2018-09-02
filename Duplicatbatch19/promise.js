//Promesas Ayudan a tener variables que dependen de otras y son más legibles que los callbacks

//Se crea una variable promise1
// const promise1 = new Promise((resolve, reject)=>{
// 		const number = 4

// 	setTimeout(
// 		() => { number > 5
				
// 				//Validación del if positiva
// 				? resolve(number)
// 				//Validación else
// 				: reject(new Error("Menor a 5"))
			

// 		}, 300); 

// });



//Resolve siempre se asocia con then
//reject siempre se asocia con catch

//Se manda llamar promise1
// promise1
// 	.then(x => console.log(x))
// 	.catch(err => console.log(err))


//La manera de pedir parámetros en una promesa es encerrarlo en una función
//Mismo ejemplo pero con todo lo anterior


function random(number =10){

	return new Promise((resolve, reject)=>{

	setTimeout(
		() => { number > 5
				
				//Validación del if positiva
				? resolve(number)
				//Validación else
				: reject(new Error("Menor a 5"))
			

		}, 300); 

});

}


random(3)
				.then(number => console.log(number))
				.catch(err => console.log(err))



