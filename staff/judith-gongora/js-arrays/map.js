function map(arr, callback) {
    if (!(arr instanceof Array)) throw Error('array is not valid');
    if (typeof callback !== "function") throw Error ("callback is not a function")

    var array=[];
    for(i=0; i<arr.length; i++){
            array[i]= callback(arr[i]);
    }
    return array;
}