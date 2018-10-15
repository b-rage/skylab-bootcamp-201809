function every(arr, callback){
    if (!(arr instanceof Array) && !(callback instanceof Function)) throw Error ('arr is not an array and callback is not a function');
    if (!(arr instanceof Array)) throw Error('arr is not an array');
    
    if (!arr.length) return true;
    
    var e = true;
    var array=[];
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])==false){
            e=false;
            break;
        }
    }
    return e;
}