

// for-each.js


function forEach(arr, callback){
    if (!(arr instanceof Array)) throw Error('array is not valid');

    if (typeof callback !== 'function') throw Error( 'callback is not a function');

   
    for(var i = 0 ; i<arr.length;i++) callback(arr[i] , i, arr);
}





