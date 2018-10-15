// fill.js

function fill(arr, value, start, end) {
    var length = arr.length;
    if (end == undefined){
        end = length;
    }
    if(start == undefined){
        start = 0;
    }
    for(var i=start;i<end;i++){
        arr[i]=value;
    }
    return arr;
}
//function should work as follows:

