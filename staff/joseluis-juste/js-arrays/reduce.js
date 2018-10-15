// reduce.js

function reduce(arr, callback, initialValue) {
    
    if (initialValue === undefined)
         initialValue = 0;

    var acum = initialValue;
    for(var i = 0;i < arr.length;i++){
        acum = callback(acum, arr[i]);
    }
    return acum;
}