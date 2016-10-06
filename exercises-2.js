// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){

	if (x > y) {
		return (x);
	}
    else {
    	return (y);
    }
};






//What about Ternary Conditionals?
var ternaryMax (x, y) {
	return x > y ? x : y;
};



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    var max = Math.max(x,y,z);
    return max;

    }
---------------

function maxOfThree(x,y,z){
	if (x >= y && x >= z) {return x; }  
	if (y >= x && y >= z) {return y; }
	return z;
};






// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
		if (char === "a" || char === "A") {
		return true;
	}
		else if ( char ==="e" || char === "E"){
			return true;
		}
		else if ( char === "i" || char === "I") {
			return true; 
		}
		else if ( char === "o" || char === "O") {
			return true;
		}
		else if ( char === "u" || char === "U"){
			return true;
		}
		else {
			return false;
		}
	};

	-------------
function isVowel(char){
	char = char.toLowerCase();
		if (char === "a") {
		return true;
	}
		else if ( char ==="e"){
			return true;
		}
		else if ( char === "i") {
			return true; 
		}
		else if ( char === "o") {
			return true;
		}
		else if ( char === "u"){
			return true;
		}
		else {
			return false;
		}
	};


	-------------

	// cleaner version
	function cleanerIsVowel (char) {
		var vowels = ['a', 'e', 'i', 'o', 'u'];
		return vowels.includes (char);
	};

    //...


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //...
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}