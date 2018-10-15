function includes(arr, elem) {
    
    // validation
    if (arguments.length === 0) throw Error('function must contain two arguments');
    if (!(arr instanceof Array))  throw Error('array is not valid');
    if (arr.length === 0) throw Error('array cannot be empty');
    if (elem instanceof Array) throw Error('item to search cannot be an array');

    // logic
    for (var i = 0; i < arr.length; i++) if (arr[i] === elem) return true;
    return false;
}