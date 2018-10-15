function every(arr, callback){
    if(!(callback instanceof Function) && !(arr instanceof Array)) throw Error ('arr is not an array and callback is not a function');
    if( !(arr instanceof Array)) throw Error('arr is not an array');
    if(!(callback instanceof Function)) throw Error ('callback is not a function');
    
    var x, temp=[], count=0;
    for (var i = 0; i < arr.length; i++) {
        x = callback(arr[i], i, arr);
        if (x == false) {
            return false;
        }
    }
    return true;
}