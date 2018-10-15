function every(arr, callback) {
    var index = 0;
    var flag = true;

    for(index=0; index<arr.length; index++) {
        flag = callback(arr[index]);
        
        if (flag == false) {
            index = arr.length - 1;
        }
    }
    return flag;
}