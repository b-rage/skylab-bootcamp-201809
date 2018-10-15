// find-index.js
function findIndex(arr, callback) {
   
    if(!(arr instanceof Array)) throw Error ('entered invalid array');
    if(!arr.length) throw Error ('entered empty array');

    var index = -1;
    for(var i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            index = i;
            return index;
        }
    }
    return index;
} 