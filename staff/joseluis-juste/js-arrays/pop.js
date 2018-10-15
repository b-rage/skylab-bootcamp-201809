// pop.js

function pop(arr) {

    if (!(arr instanceof Array)) throw Error("input is not an array");

    if (arr.length == 0) throw Error("array is empty");

    if (arguments.length > 1) throw Error("only one argument allowed");

    var aux = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return aux;
}