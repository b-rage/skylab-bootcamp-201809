//create a function that works as Array.prototype.includes

// includes.js

function includes(arr, elem) {
   

    if (!(arr instanceof Array)) throw Error('array is not valid');

    if ( elem === undefined) throw Error('element is not defined');

    if (!elem.trim()) throw Error('element is blank');

    if(arr.length == 0) throw Error('array is empty');
    for(var i=0; i < arr.length; i++){
        if(elem  === arr[i]){
            return true;

        }
    }
    
        return false;


}

