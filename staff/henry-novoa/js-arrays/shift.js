// shift.js

function shift(arr) {
    var result;
    result = arr[0];
    for(i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.length = arr.length -1;
    return result;
}



