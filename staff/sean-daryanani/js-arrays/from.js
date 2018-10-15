function from(arr, f) {
    if (!(arr instanceof Array)) throw Error('object is not iterable');
    if (typeof f != 'function') throw Error('callback is not a function');
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (f === undefined) {
            temp[i] = arr[i];
        } else {
            temp[i] = f(arr[i], i);
        }
    }

    return temp;
}