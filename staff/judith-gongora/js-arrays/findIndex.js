function findIndex(arr, callback){
    if(!(arr instanceof Array)) throw Error ('entered invalid array');
    if(!arr.length) throw Error ('entered empty array');

    var result = -1;
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            return i;  
        }
    }
    return result;
}