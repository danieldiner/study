var reverseWords = function(sentence){

//Divide y guarda en un arreglo las palabras al revés
	var words = sentence.split(" ").reverse(); 
	var string = "";

//Recorre y concatena las palabras
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; 
	return console.log(string);

	
}

//Llama la funcion
reverseWords("the sky is blue");