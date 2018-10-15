function splice(arr, start, del){
    if (!(arr instanceof Array)) throw Error('array is not valid');
    if (typeof start !== "number" && typeof start !== 'undefined') throw Error('start is not valid');
    
    var temp=[],
    deleted=[],
    count=0,
    d_c=0;
    for (var i = start; i < arr.length; i++) {
        if(del>0){
            deleted[d_c]=arr[i];
            del--;
            d_c++;
        }else{
            temp[count]=arr[i];
            count++;
        }
    }
    arr.length=start;
    for (var i = 0; i < temp.length; i++) {
        arr[arr.length]=temp[i];        
    }
    return deleted;
}