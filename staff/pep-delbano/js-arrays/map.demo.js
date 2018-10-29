var arr = [1, 2, 3];

var res = map(arr, function(num) { return num * 2; })

<<<<<<< HEAD
console.log(res); // [2, 4, 6] */


function map (arr, num) {
	var array = [];
    for(var i= 0; i<arr.length; i++) {
   		array[array.length] = arr[i]*num;
    }
	console.log(array);
}

map([1,2,3], 2);
=======
console.log(res); // [2, 4, 6] 
>>>>>>> develop

