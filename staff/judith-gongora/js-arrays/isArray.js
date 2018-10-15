function isArray(arr){
    // if (!(arr instanceof Array)) throw Error('array is not valid');
    // if (arr.length <= 0) throw Error('array is empty');
    if (arr === undefined) throw Error('argument empty');
    
    return arr instanceof Array; 
}

//arr instaceOf Array