function join(arr, separator) {
    var index1=0;
    var index2=0;
    var result=[];

    for (index1=0; index1<arr.length; index1++) {
        result[index2]=arr[index1];

        if(index1!=arr.length-1) {
            index2++;
            result[index2]=separator;
            index2++;
        }
    }
    return result;
}