
function find(arr, callback) {
    if (!(arr instanceof Array)) throw Error (arr + ' is not an array');

    if (typeof callback !== 'function') throw Error (callback + ' is not a function')
    
    for (var i = 0; i < arr.length; i++) if (callback(arr[i])) return arr[i];
}