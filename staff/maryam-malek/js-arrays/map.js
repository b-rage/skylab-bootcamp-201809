function map (arr, callback) {
    if(!(arr instanceof Array)) throw Error ('array is not valid');
    if(typeof callback !== 'function') throw Error ('callback is not a function');
    if(!arr.length) throw Error ('array is not valid')

    var newArr = [];
    for( var i=0; i<arr.length; i++){
        newArr[i] = callback(arr[i], i);
    }    
    return newArr
}