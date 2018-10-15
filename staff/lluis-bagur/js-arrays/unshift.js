function unshift(arr, elems) {
    var array = [];
    var e = 0;

    array.length = arr.length+arguments.length-1;
    for (var i=0;i<arguments.length-1; i++){
        array[i]=arguments[i+1];
    }
    for (var i=arguments.length-1;i<array.length; i++){
        array[i]=arr[e];
        e++;
    }

    for (var i=0;i<array.length; i++){
        arr[i]=array[i];
    }

    return arr.length;

}