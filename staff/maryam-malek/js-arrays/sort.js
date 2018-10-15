function sort(arr) {

    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');
    var index;
    for(i=0; i<arr.length; i++){
        index = i;
        for(var x=i; x<arr.length; x++){
            if(''+arr[x] < ''+arr[index]){
                index = x;
            }
        }
        var moment = arr[i];
        arr[i] = arr[index];
        arr[index] = moment;        
    }
    return arr;
     
}

