// fill.js

function fill(arr, value, start, end) {
    
    if (end === undefined)
        end = arr.length;
    
    if (start === undefined)
        start = 0;

    for(var i = start;i < end; i++){
        arr[i] = value;
    }
    return arr;
}