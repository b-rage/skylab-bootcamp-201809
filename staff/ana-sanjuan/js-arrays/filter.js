
function filter(arr, callback) {
    if (!(arr instanceof Array)) throw Error ('first element is not an array')
    if (!arr.length) throw Error ('the array passed as argument is empty')
    
    if (typeof callback !== 'function') throw Error ('second element is not an function')
   
   

    var result = [], counter = 0;
    for (var i = 0; i < arr.length; i++){
        if(callback(arr[i])){
            result[counter] = arr[i];
            counter++;
        } 
    }
    return result
}


// var result = [];
//     for (var i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             result[result.length] = arr[i];
//         } 
//     }
//     return result
