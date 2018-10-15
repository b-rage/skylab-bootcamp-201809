function every(arr, callback) {
    
    if(!(arr instanceof Array)) throw Error ('array is not valid');
    if(typeof callback !== 'function') throw Error ('callback is not a function');
    var result = true;
    for(i=0; i<arr.length; i++){
        if(!callback(arr[i], i, arr)){
            result = false;
        }
    }
    return result;
}