function every(arr, callback) {
    
    // validation
    if (!(arr instanceof Array) && !(callback instanceof Function)) throw Error ('arr is not an array and callback is not a function');
    if (!(arr instanceof Array)) throw Error('arr is not an array');
    if (!arr.length) return true;

    // loigc
    for(var i = 0; i < arr.length; i++) if(!(callback(arr[i], i, arr))) return false;
    return true;

}