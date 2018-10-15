//shift.js
//implement a function that works as Array.prototype.shift
// shift.js

function shift(arr) {
    word = [arr[0]];
    delete arr[0];
    //falta un paso de pasar a la izquiera los items.
    arr.length--;
    return word;
    
}