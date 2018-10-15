
// create a function that works as Array.prototype.join

// // join.js

function join(arr, separator) {
    var result = '';
    for (var i = 0; i < arr.length; i++) 
        result += (i === arr.length -1)?  arr[i] : arr[i] + (separator? separator: ',');
    return result
}
