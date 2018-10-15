function map(arr, callback){

    var output = [];
    
    if (!(arr instanceof Array)) throw Error("array is not valid");

    if ((arr.length === 0)) throw Error("array is not valid");
    
    for(var i = 0;i < arr.length;i++){
        output[i] = callback(arr[i],i);

    }
    return output;

}