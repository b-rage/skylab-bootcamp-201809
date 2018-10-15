function some(arr, callback) {
    var confirm = false
    for (var i=0; i<arr.length; i++){
        if(callback(arr[i])){
            confirm = true;
        }   
    }

    return confirm;

   
}