function reverse(arr){
    if( !(arr instanceof Array)) throw Error('the argument is not an array');
    if(!arr.length)    throw Error('the array is empty');


    var temp=[];
    for (var i = 0; i < arr.length; i++) {
        temp[arr.length-1-i]=arr[i];
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i]=temp[i];  
    }
    return arr;
}