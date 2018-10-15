
function includes(arr, elem) {
    if (!arr.length) throw Error('array is empty')
    
    if (elem === undefined) throw Error('element is not defined')
    
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] === elem) return true;
    }
    return false;
}


