function includes(arr, elem) {
    result = false;
    var index = 0;

    for(index=0; index<arr.length; index++) {

        if (arr[index]==elem) {
            result = true;
        }
    }   
    return result;
}