
//prints the reversed content of the array
function printReverse(arr){
	for (var i = arr.length -1; i > 0; i--) {
		console.log(arr[i])
	}
}

var myArray = [0, 1, 2, 3, 4, 5]

printReverse(myArray);



//where is uniform starts
var uniformArray = [1,1,1,1,1,1,1];


//takes an array and evaulates if it is the same for each item
function isUniform(arr){
	var testVar = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(testVar !== arr[i]){
			return false;
		}

	}
return true;
}



//sum array starts
//takes an array and finds the sum of all nums inside it

function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}


//max num starts

funtcion max(arr){
	for(var i - 1; i < arr.length;  i++){
		kif arr[i] > max{
			max = arr[i];
		}
	}
	return max;
}