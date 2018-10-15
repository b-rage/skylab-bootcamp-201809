// slice.js

function slice(arr, begin, end) {
    
    if (!(arr instanceof Array)) throw Error("array is not valid");
    
    if (isNaN(begin)) throw Error("start is not valid");

    if (isNaN(end)) throw Error("end is not valid");

    var output = [];
    var j = 0;
    for(var i = begin; i < end;i++){
        output[j] = arr[i];
        j++;
    }
    return output;
}