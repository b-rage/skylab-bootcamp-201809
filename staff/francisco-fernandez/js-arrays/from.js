function from(arr, callback){
    var output = [];
    
    if (typeof arr[Symbol.iterator] !== 'function') throw Error('object is not iterable');

    if (!(arr instanceof Array)) throw Error('array is not valid');

    if (!callback instanceof Function) throw Error('callback is not a function');

    for(var i = 0; i < arr.length;i++){

        if (callback !== undefined){
            
            output[i] = callback(arr[i], i);
        }
        else

            output[i] = arr[i];
       
    }
    if (output.some(function(x,i,arr){ return !x})) throw Error('Empty value found in array');
    return output;
}


/*function from(element, f){

    if (typeof element[Symbol.iterator] !== 'function') throw Error('object is not iterable');

    if (!(element instanceof Array)) throw Error('array is not valid');

    
    newArray = [];
    if((typeof element==="string" || (typeof element ==="object" && typeof element.length==="number"))&&arguments.length===1)
    {
        for(var i = 0; i<element.length; i++){

            if (f !== undefined){
                if (!f instanceof Function) throw Error('callback is not a function');
        
            newArray[i]=element[i];
        }
        return newArray;
    }
    else if((typeof element==="string" || (typeof element ==="object" && typeof element.length==="number"))&&arguments.length===2){
        for(var i = 0; i<element.length; i++){
            newArray[i]=f(element[i]);
        }
        return newArray;
    }
    return newArray;
}*/