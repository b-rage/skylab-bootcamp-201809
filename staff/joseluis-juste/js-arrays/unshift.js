// unshift.js

function unshift(arr, elems) {

    /*var j = arr.length;
    arr.length = arr.length + arguments.length-1;*/
    var aux = [];
    aux.length = arr.length + arguments.length-1;
    var j = 0;
    for(var i = 1; i < arguments.length; i++){
        aux[j] = arguments[i];
        j++;
    }
    for(var i = 0; i < arr.length; i++){
        aux[j] = arr[i];
        j++;
    }
    for(var i = 0; i < aux.length; i++){
        arr[i] = aux[i];
        
    }
    return arr.length;
    
}