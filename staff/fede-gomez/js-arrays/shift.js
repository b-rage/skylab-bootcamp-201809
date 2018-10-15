function shift (array) {
    
    if(!array){throw Error ('no parameter has been introduced');}
    if(!(array instanceof Array)){throw Error ('input is not array');}
    if(!array.length){throw Error ('array is empty');}
    if(array[0]===''){throw Error ('first element of array is empty');}
    var removed = array[0];
    for(let i=1; i<array.length; i++){
        array[i-1] = array[i];
    }
    array.length--;
    return removed;
}