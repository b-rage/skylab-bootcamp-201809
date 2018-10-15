function filter (array, callback) {
    
    if(!(array instanceof Array)){throw Error('first element is not an array')};
    if(!(callback instanceof Function)){throw Error('second element is not an array')};
    if(array.every(function(elem){return elem === undefined})){throw Error ('the array passed as argument is empty')}
    var index = 0;
    var result = [];
    for(let i=0; i<array.length; i++){
        if(callback(array[i])){
            result[index++] = array[i];
        }
    }
    return result;
}