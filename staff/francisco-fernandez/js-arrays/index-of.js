function indexOf(arr,search){

    if (arr===undefined)throw Error('undefined is not an array!');

    if(!(arr instanceof Array))throw Error('first parameter should be an array!');

    for(var i = 0; i < arr.length; i++){
        if(arr[i]===search){
            return i;
        }
    }
    return -1;

}