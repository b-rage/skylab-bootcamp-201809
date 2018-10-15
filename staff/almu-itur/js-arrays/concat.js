function concat(arr, arr2) {
    var res = [];
    var index=0;
    var index2=arr.length;

    for(index=0; index<arr.length; index++) {
        res[index] = arr[index];
    }

    for(index=0; index<arr2.length; index++) {
        res[index2] = arr2[index];
        index2++;
    }
   return res;
}