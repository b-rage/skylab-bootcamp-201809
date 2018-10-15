function map (arr, callback) {
    if( !(arr instanceof Array)) throw Error('array is not valid');
    if(!arr.length)    throw Error('array is not valid');


    var temp=[];
    for (var i=0; i<arr.length; i++){
        temp[i]=callback(arr[i],i);
    }
    return temp;
}