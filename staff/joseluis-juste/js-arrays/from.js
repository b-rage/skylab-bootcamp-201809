function from(arr, callback){
    var output = [];
    
    if (typeof arr[Symbol.iterator] !== 'function') throw Error('object is not iterable');

    if (!(arr instanceof Array)) throw Error('array is not valid');

    for(var i = 0; i < arr.length;i++){

        if (callback !== undefined){
            if (!callback instanceof Function) throw Error('callback is not a function');
                output[i] = callback(arr[i], i);
        }
        else

            output[i] = arr[i];
       
    }
    if (output.some(function(x,i,arr){ return !x})) throw Error('Empty value found in array');
    return output;
}