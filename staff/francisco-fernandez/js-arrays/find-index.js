function findIndex (arr,f){

    if(!(arr instanceof Array)) throw Error ('entered invalid array');
    if(!arr.length) throw Error ('entered empty array');
    if (typeof f != 'function') throw Error ('callback is not a function');

    for(var i = 0; i < arr.length; i++){
        if(f(arr[i],i,arr)===true){
            return i;
        }
    }
    return -1;
}