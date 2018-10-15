function includes (array, elem) {
    

    if(elem instanceof Function){throw Error ('element is a function, must be a string or number or object or boolean');}
    if(!(array instanceof Array)){throw Error ('first parameter is not an array');}
    if(elem === undefined){throw Error ('element is not defined');}
    if(elem.trim() === ''){throw Error ('element is blank');}
    if(array.length === 0){throw Error ('array is empty');}
    var isIncluded = false;

    for(i=0; i<array.length; i++) {
        // isIncluded = ((array[i] === elem) ? true : false);
        // if(isIncluded){break;}
        if(isIncluded = ((array[i] === elem) ? true : false)){break;}
    }
    return isIncluded;
}