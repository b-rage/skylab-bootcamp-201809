function filter(arr, callback) {
    
    if (!(arr instanceof Array)) throw Error (arr + 'is not array');
    if (typeof callback !== "function") throw Error (callback + 'is not a function');
    if (!arr.length) throw Error (arr + ' is empty');

    var indexResult = 0;
    var result = [];

    for(var index = 0; index < arr.length; index++) {
        
        if (callback(arr[index])) {
            result[indexResult] = arr[index];
            indexResult++;
        }
    }
    return result;
}