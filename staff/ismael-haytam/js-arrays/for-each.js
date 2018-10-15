function forEach(arr, callback) {

    // validation
    if (!(arr instanceof Array)) throw Error(arr + ' is not an array');
    if (typeof callback !== 'function') throw Error(callback + ' is not a function');

    // logic
    for (var i = 0; !!(arr[i]); i++) callback(arr[i], i, arr);  
}
