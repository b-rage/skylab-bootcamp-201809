function map(arr, callback) {
    result = [];
    for (var i = 0; i < arr.length; i++){
           var d = callback(arr[i]) 
           result.push(callback(arr[i]));
        
    };
    return result;

}

