///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
var sum = function (x,y) {

	return(x+y);
}
sum(2,2)


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
var avg = function (x,y,z) {
	var stuff = (x + y + z) / (3);
	
	return stuff;
}
avg(2,3,4)


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
var getLength = function (hello) {
	for (var = i, i < 10, i--);
		return i;
}



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
var greaterThan = function (x,y) {
	if (y > x) {
		return true;
	}else {
			return false;

		}
	}

greaterThan(2,4)



// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
var greet = function (name) {
	return("Hello" + " " + name);
	 
}
greet(Cameron)



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

var madLib = function (quick, fox, fence, jumps) {

	var sentence = ("The" + quick + "Brown" + fox + fence + jumps ) ;
	return sentence;

}


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////