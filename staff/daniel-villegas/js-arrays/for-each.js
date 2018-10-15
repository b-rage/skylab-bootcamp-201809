function forEach(arr, callback) {
    if (!(arr instanceof Array)) throw Error (arr + ' is not an array');

    for (var i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}