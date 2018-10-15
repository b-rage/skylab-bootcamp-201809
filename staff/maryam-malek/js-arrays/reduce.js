function reduce(arr, callback, initialValue) {
    var sum = 0;
    var lastCall = 0;
    if(initialValue){
       sum = initialValue; 
    }
    for(i=0; i< arr.length; i++){
        lastCall = sum - lastCall;
        sum = lastCall + callback(lastCall, arr[i]);
    }
    return (sum-lastCall)
}