function indexOf(arr, elem) {
    if(!arr && !elem) throw Error ('function must contain two arguments')
    if(!(arr instanceof Array)) throw Error (arr + ' is not an array');
    if(!arr.length) throw Error ('array can not be empty')
    if(!elem) throw Error ('item to search is missing');
    var index = -1;
    for(i=arr.length; i>0; i--){
        if(arr[i] === elem){
            index = i;
        }
    }
    return index;
}