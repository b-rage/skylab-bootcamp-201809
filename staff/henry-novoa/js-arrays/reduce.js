// reduce.js

function reduce(arr, callback, initialValue) {
    if (initialValue == undefined){
        initialValue = 0;
    }
    var sum = initialValue;
    for(i=0;i<arr.length;i++){
        sum = callback(sum,arr[i]);
    }
    return sum;
}

