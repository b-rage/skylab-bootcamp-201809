function concat(arr1,arr2){
    var new_array=[];
    for (var i = 0; i<arr1.length+arr2.length; i++)
        if(i<arr1.length){
            new_array[i]=arr1[i];
        }
        else{
            new_array[i]=arr2[i-arr1.length];
        }
    return new_array;
}