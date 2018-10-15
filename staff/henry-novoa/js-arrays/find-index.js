//6) find-index.js
//create a function that works as Array.prototype.findIndex

// find-index.js

function findIndex(arr, elem) {

    if(!(arr instanceof Array)) throw Error ('entered invalid array');
    if(!arr.length) throw Error ('entered empty array');
    if(!(typeof elem === "function")) throw Error('callback is not a function')

    index= -1;
    for(var i=0; i < arr.length; i++){
        if(elem(arr[i],i,arr) === true){
            index = i;
            return index;

        }
    }
    
        return index;


}

