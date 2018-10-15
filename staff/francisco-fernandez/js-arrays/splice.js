function splice(arr,ind,len){
    var newArray=[];
    var j=0;
    for(var i = ind; i < ind+len; i++){
        newArray[j]=arr[i];
        j++;
    }
    j=0;
    for(var i = 0; i < arr.length; i++){
        if(i<ind || i>(ind+len-1)){
            arr[j]=arr[i];
            j++;
        }
    }
    arr.length=arr.length-len;
    return newArray;
}