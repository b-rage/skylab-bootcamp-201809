function indexOf(arr, item) {
    if (!(arr instanceof Array)) throw Error(arr + ' is not an array!');

    if (!arguments[0].length) throw Error('first parameter is an empty array');

    if (arguments[1] === "") throw Error('second parameter is empty');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
}