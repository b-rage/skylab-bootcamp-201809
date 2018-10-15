function unshift (arr){
    var newArray = [];
    var j=0;
    if(arguments.length>1){
    for(var i=1;i<arguments.length;i++){
        newArray[i-1]=arguments[i];
        j++;
    }
    }
    for(var i = 0;i<arr.length;i++){
        newArray[j]=arr[i];
        j++;
    }
    for(var j=0; j<newArray.length; j++){
        arr[j]=newArray[j];
    }
    return newArray.length;
}