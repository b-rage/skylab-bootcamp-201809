function slice(arr, begin, end) {
    var array = [];
    var e = 0;
    
    if (end == undefined){
        end = arr.length;  
    }

    for (var i=begin; i<end; i++){
        array[e]=arr[i];
        e++;
    }

    return array;
}  
