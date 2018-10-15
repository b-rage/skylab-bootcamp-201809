//implement a function that works as Array.prototype.filter
// filter.js

function filter(arr, callback) {
    result = [];
    
    if (!(arr instanceof Array)) throw Error ("first element is not an array");

    if (!arr.length) throw Error ("the array passed as argument is empty");

    if (!(callback instanceof Function)) throw Error ('second element is not an function');

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
        result.push(arr[i]) 
        }
    }
    return result
}






  