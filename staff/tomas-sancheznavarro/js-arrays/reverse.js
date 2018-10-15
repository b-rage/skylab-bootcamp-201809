function reverse(arr) {
    var new_arr = [];

    if (!(arr instanceof Array)) throw Error('the argument is not an array');

    if (arr instanceof Function) throw Error('the argument passed is a function should be array');

    if (!arr.length) throw Error('the array is empty');

    if (typeof arr === 'string') throw Error('the argument passed is a string should be array'); // redundante en reverse.test de Paco

    for (var i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        new_arr[j] = arr[i];
    }
    for (var k = 0; k < new_arr.length; k++) {
        arr[k] = new_arr[k];
    }
    return arr;
}