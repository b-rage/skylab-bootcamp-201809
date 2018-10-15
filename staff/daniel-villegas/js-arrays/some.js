//some.js
//implement a function that works as Array.prototype.some
// some.js

function some(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) if (callback(arr[i])) return true; 
    return false;
}
