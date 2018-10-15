function find (array, callback) {

    if(!(callback instanceof Function)){throw Error (callback + ' is not a function')}
    var result;
    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            return array[i];
        }
    }
}