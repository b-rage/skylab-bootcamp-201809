function every(arr, callback) {
    if (!(arr instanceof Array) && !(callback instanceof Function)) throw Error ('arr is not an array and callback is not a function');
    if (!(arr instanceof Array)) throw Error('arr is not an array');
    
    if (!arr.length) return true;

    for(var i = 0; i < arr.length; i++) 
        if(!(callback(arr[i], i, arr))) return false
    return true

}


// old version without refactoring
    // var result = []; counter = 0;
    // for(var i = 0; i < arr.length; i++) {
    //     if(callback(arr[i], i, arr)){
    //         result[counter] = callback(arr[i], i , arr);
    //         counter++;
    //     }
    // }
    // return (result.length === arr.length)? true: false;





