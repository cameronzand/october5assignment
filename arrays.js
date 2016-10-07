// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : ['Ruby', 'JavaScript']},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

instructors[instructors.length-1].teaches
// above will give you James and teaches Ruby.

//to get Brit out of the array of objects...
console.log(instructors[2].firstname)
//above will print out the firstname, in this case is Brit)
//instructors is they array which is [2], first name is the objeect which you use a '.' for. 


var firstlanguage = instructors[2].teaches[0];
//will get you the language Brit taught, Ruby. 

// ---------------------------
// 1. Find largest number
// ---------------------------

var largest = function (nums){

	var max = 0;

	for (var count = 0; count < nums.length; count++) {
		 var currentNum = nums[count];
		 if (currentNum > max) {
		 max = currentNum;
		 } 
} return max;

}


----------------

function findMax (nums) {
	var biggest = 0;
	for (var index = 0; index < nums.length; index++) {
		var currentNum = nums[index];
		if (currentNum > biggest) {
			biggest = currentNum;
		}
	} 
	return biggest;
}

findMax (numbers);

// ---------------------------
// 2. Find longest string
// ---------------------------

var longest = function (strings) {

	var max = strings[0];

for (var count = 0; count < strings.length; count++) {
	if (strings[count].length > max.length) {
    max = strings[count];
  	} return max; 
}
}


// ---------------------------
// 3. Find even numbers
// ---------------------------

var findEvens = function (nums){
	var result = [];

	for (var i = 0; i < nums.length; i++){
		var currentNum = nums[i];
		if (currentNum % 2 === 0){
			result.push(currentNum);
		}
	}


	return result;
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------
var findOdds = function (nums){
	var result = [];

	for (var i = 0; i < nums.length; i++){
		var currentNum = nums[i];
		if (currentNum % 2 != 0){
			result.push(currentNum);
		}
	}


	return result;
}

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------

var concat = function (items1, items2){

	var result = [];

	for (var i = 0; i < items1.length; i++) {
		result.push(items1[i]);
	}

	for (var i = 0; i < items2.length; i++){
		result.push(items2[2]);
	}

	return results;

};



// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------











