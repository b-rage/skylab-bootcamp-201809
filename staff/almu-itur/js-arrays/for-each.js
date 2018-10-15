function forEach(arr, callback) {

    var index;
    
    if (!(arr instanceof Array)) throw Error ('array is not valid');

    for (index=0; index<arr.length; index++) {
        
        callback(arr[index], index, arr);
        
    }
}