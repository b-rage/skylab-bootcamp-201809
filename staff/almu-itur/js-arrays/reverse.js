function reverse(arr) {
    
    var index=0;
    var indexResult=0;
    result=[];

    for (index = arr.length-1; index>=0; index--) {
        result[indexResult]=arr[index];
        indexResult++;
    }
    for (index=0; index<arr.length; index++) {
        arr[index] = result[index];
    }
}



/*
//OTHERS
function forEach(arr, funct) {
    var index=0
    for (index in arr) {
        funct(arr[index]);
    }
}
function push(arr, elem) {
    length = arr.length;
    arr[length]=elem;
    return arr;
}
*/