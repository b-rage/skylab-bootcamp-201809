// unshift.js

function unshift(arr, elems) {
    var results=[];
    for(var i = 0; i<arguments.length - 1; i++){
        results[i] = arguments[i+1];
    }
    for(var j=0; j<arr.length; j++){
        results[i] = arr[j];
        i++;
    }
    for(i=0;i<results.length;i++){
        arr[i]=results[i];
    }
    return arr;
    
}
//the function should work as follows:

// unshift.demo.js

console.log('DEMO unshift');

var nums = [1, 2, 3];
console.log(unshift(nums, 4, 5)); // 5
console.log(nums); // [4, 5, 1, 2, 3]