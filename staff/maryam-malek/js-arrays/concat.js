function concat (arr, arr2) {
    // debugger;
    var newArr = arr;
    // var maxLength = arr.length+arr2.length;
    // for(var i=arr.length; i<maxLength; i++){
    //     for(var y = 0; y<arr2.length; y++)
    //     newArr[i] = arr2[y];   
    // }
    for(var i=0; i<arr2.length; i++){
        newArr[newArr.length] = arr2[i];
    }
        return newArr
}