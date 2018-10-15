function forEach(arr, f){

    if (!(arr instanceof Array)) throw Error('array is not valid');

    for(var i=0; i<arr.length; i++){
        f(arr[i], i, arr);
    }
}

