function map(arr, funct) {
    var result=[];

    for (var index=0 in arr) {
        result[index]=funct(arr[index]);
    }
    return result;
}