//5) push.js
//create a function that works as Array.prototype.push

// push.js

function push(arr, elem) {
    if (!(arr instanceof Array)) throw Error("array is not valid");
    arr[arr.length] = elem;
    return arr;
}

