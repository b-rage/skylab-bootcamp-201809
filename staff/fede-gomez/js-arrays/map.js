function map (array, callback){

    if(!(array instanceof Array) || !(array.length)){throw Error ('array is not valid');}
    if(!(callback instanceof Function)){throw Error (callback + ' is not a function');}
    var newArray = [];
    for(var i=0; i<array.length; i++){
        newArray[i] = callback(array[i],i);
    }
    return newArray;
}