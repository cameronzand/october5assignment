// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



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


// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------