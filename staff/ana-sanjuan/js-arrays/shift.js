function shift(arr) {

    if (arr === undefined) throw Error ('no parameter has been introduced');
    if (!(arr instanceof Array)) throw Error ('input is not array');
    if (!(arr.length)) throw Error ('array is empty');
    
    var original = [];
    for (var i = 0; i < arr.length; i++) 
        original[i] = arr[i];
    arr.length--;
    for (var i = 1; i < original.length; i++) 
        arr[i-1] = original[i];
    return original[0];
}
