function reverse(arr) {
    if (!(arr instanceof Array)) throw Error ('the argument is not an array')
    if (!arr.length) throw Error ('the array is empty')
    
    var original = [], counter = 0;
    for (var i = 0; i <arr.length; i++) original[i] = arr[i];
    for (var i = arr.length-1; i >= 0; i--){
        arr[counter] = original[i];
        counter++;
    }
    return arr;
}
