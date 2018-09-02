var beginWord = "hit"
var endWord = "cog"
var wordList = ["hot", "dot", "lot", "log", "cog"]
var i = 0;
var j = 0 ; 
var cBegin = " ";
var cEnd = " ";
var actualWord = " ";
var cActualWord= " ";
var long = 0;
var w = 0;


while (beginWord != endWord) {

	for(w=0; w<=wordList.lenght; w++){

		actualWord = wordList[w];
		console.log(`Este es el for que recorre el string ${actualWord} el valor de w  ${w}`)


		for(j=0; j<=beginWord.lenght; j++){
			console.log(`Este es el for que recorre las beginWord el valor de j ${j}`)

		  cActualWord = actualWord.charAt(j); 	
		  cBegin = beginWord.charAt(j); 
		  cEnd = endWord.charAt(j); 

		  if(cBegin === cEnd){
		  	return; 

		  }if(cActualWord===cEnd){
			  	beginWord.charAt(j) = endWord.charAt(j); 
			  	console.log(`Aquí se actuslizó beginWord ${j}`)
			  	console.log(beginWord);
			  	return long++; 
				}
	  	

		}
	}	
}



console.log(`Este es el  ultimo valor de ${beginWord} y fueron ${long} cambios`)