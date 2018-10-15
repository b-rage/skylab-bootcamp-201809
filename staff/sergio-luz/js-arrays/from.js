function from(arr, callback) {

    if (typeof arr[Symbol.iterator] !== 'function') throw Error('object is not iterable');
    
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback !== undefined) {
            temp[i] = callback(arr[i], i);
        } else {
            temp[i] = arr[i];
        }
    }
    if (temp.some(function(x,i,arr){ return !x})) throw Error('Empty value found in array');
    return temp;
}
