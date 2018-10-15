function fill(arr, value, start, end){
    if(!(arr instanceof Array)) throw Error(arr+' is not valid');
    if(end==undefined){
        end=arr.length;
    }
    if(start==undefined){
        start=0;
    }
    for (var i = start; i < end; i++) {
        arr[i]=value;
    }
    return arr;
}