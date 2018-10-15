function filter(arr, callback) {

    if(!(arr instanceof Array)){throw Error('first element is not an array')};
    if(!(callback instanceof Function)){throw Error('second element is not an array')};
    if(arr.every(function(elem){return elem === undefined})){throw Error ('the array passed as argument is empty')}
    var array = [];
    var cont = 0;
    for (var i=0; i<arr.length; i++){
        if(callback(arr[i])){
            array[cont] = arr[i];
            cont++;
        }   
    }

    return array;
}