function reduce(arr, callback, initialvalue) {
    var accum=0 + initialvalue;
    if (initialvalue===undefined) {
        initialvalue=0;
    }
    for (var i=0; i<arr.length; i++) {
        accum = callback(accum, arr[i]);
    }
    return accum;
    
}