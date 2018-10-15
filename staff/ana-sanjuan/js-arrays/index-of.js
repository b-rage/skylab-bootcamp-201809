
function indexOf(arr, elem) {
    if (!(arr instanceof Array)) throw Error(arr + ' is not an array!')
    if (!arr.length) throw Error('first parameter is an empty array')
    
    if (typeof elem === 'undefined') throw Error('second parameter is empty')
    if (elem === '') throw Error('second parameter is empty')

    for (var i = 0; i < arr.length; i++){
        if (arr[i] === elem) return i;
    }
}


