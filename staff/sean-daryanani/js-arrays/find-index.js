function findIndex(arr, elem) {       
    if(!(arr instanceof Array) && typeof elem!== 'function') throw Error ('entered invalid array');
    if (typeof elem !== 'function') throw Error('callback is not a function');
    if(!(arr instanceof Array)) throw Error ('entered invalid array');
    if(!arr.length) throw Error ('entered empty array');
    var index = 0;
    for (var i=0; i<arr.length; i++) {
        if (elem(arr[i], i, arr)) {
        index = i;
        return index;
        }
    }
    return -1;
    
}

