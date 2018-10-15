function map(arr, callback) {
    if (!(arr instanceof Array) || arr.length === 0) throw Error(arr + ' is not a valid array');
    if (typeof callback !== 'function') throw Error(callback + ' is not a function');
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i], i, arr);
    }
    return newArr;
}
