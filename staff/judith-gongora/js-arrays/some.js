function some(arr, callback){
    if (!(arr instanceof Array)) throw Error('array is not valid');
    if (!arr.length) throw Error ('array is empty');
    if (typeof callback !== "function") throw Error ("callback is not a function")
    
    var e = false;
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            e=true;
            break;
        }
    }
    return e;
}