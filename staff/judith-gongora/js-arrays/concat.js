function concat(arr1, arr2){
    var array=[];
    for(i=0; i<arr1.length; i++){
        array[i]=arr1[i];
    }
    var i=0;
    for(e=array.length; e<arr1.length+arr2.length; e++){
        array[e]=arr2[i];
        i++;
    }
    return array;
}