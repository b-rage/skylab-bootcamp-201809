function reduce (arr,f,num){
        var accumulator=0
    if (arguments.length ===3){
        accumulator=num;
    }
    for(var i = 0; i<arr.length; i++){
        accumulator+=arr[i];
    }
    return accumulator;
}