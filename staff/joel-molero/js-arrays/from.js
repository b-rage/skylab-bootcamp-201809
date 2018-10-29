function from(arr, callback){
    if(typeof arr === "string"){
        arr2=[];
    for(x=0;x<arr.length;x++){
        arr2[x] = arr[x];
    }
    return arr2;}
    else{
for(x=0;x<arr.length;x++){
        arr2[x] = callback(arr[x]);}

    }return arr2;
}