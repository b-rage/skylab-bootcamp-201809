function map(arr, callback) {
    var new_arr = [];

    if (!(arr instanceof Array)) throw Error('array is not valid')

    if (!(callback instanceof Function)) throw Error('callback is not a function');

    if (arr.length === 0) throw Error('array is not valid');

    for (var i = 0; i < arr.length; i++) {
        new_arr[i] = callback(arr[i], i);
    }
    return new_arr;
}