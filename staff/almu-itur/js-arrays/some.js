function some(arr, callback) {
    var index = 0;
    var flag = false;

    for(index=0; index<arr.length; index++) {
        
        flag = callback(arr[index]);
        
        if (flag == true) {
            index = arr.length - 1; 
        }
    }
    return flag;
}
