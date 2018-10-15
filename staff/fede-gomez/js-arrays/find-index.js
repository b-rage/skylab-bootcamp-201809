function findIndex (array, callback) {

// var isArray = (typeof array === 'object') ? true : false;
if(array === undefined || array === null){throw Error ('entered invalid array');}
if(!array.length){throw Error ('entered empty array');}
var hasBeenFound;
    for(i=0; i<array.length; i++){
        hasBeenFound = callback(array[i], i, array);
        if(hasBeenFound){return i;} 
    }
    if(!hasBeenFound){return -1;}
}