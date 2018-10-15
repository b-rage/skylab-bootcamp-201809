function findIndex(arr, elem) {



    if(!(arr instanceof Array)) throw Error ('entered invalid array');
    if(!arr.length) throw Error ('entered empty array');

    for (var i=0; i<arr.length; i++){
        if(elem(arr[i])){
            break;
        }   
    }
    return i;
}
