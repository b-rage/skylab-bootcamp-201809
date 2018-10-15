function map(arr, callback){
    if (!(arr instanceof Array)) throw Error("array is not valid");
    if(!arr.length) throw Error("array is not valid");
    var result = [];
    for(var i = 0 ; i<arr.length;i++){
        result[i] = callback(arr[i],i);
    }
   
    return result;
}


