function some(arr, callback) {
    var result = false;
    for(i=0; i<arr.length; i++){
        if(callback(arr[i])){
            result = true;
        }
    }
    return result;
}