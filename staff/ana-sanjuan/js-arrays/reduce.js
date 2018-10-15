function reduce(arr, callback, initialValue = 0) {
    var accum = initialValue;
    for (var i = 0; i < arr.length; i++) 
        accum = callback(accum, arr[i]);
    return accum;
}
