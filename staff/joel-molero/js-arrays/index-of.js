
function indexOf(arr, elem) {

    if(!arr && !elem) throw Error ('function must contain at least two arguments')
    if(!(arr instanceof Array)) throw Error (arr + ' is not an array');
    if(!arr.length) throw Error ('array is empty')
    if(!elem) throw Error ('item missing');

    var index = -1;
    
    for(i=arr.length; i>0; i--){
        if(arr[i] === elem){
            index = i;
        }
    }
    return index;
}