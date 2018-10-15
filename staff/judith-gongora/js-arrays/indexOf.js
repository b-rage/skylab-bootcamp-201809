function indexOf(arr, search){
    if (!(arr instanceof Array)) throw Error('array is not valid');
    if (!arr.length) throw Error ('array is empty');

    var result = -1;
    for(i=0; i<arr.length; i++){
        if(arr[i] === search){
            result = i;
            break;
        }
    }
    return result;
}