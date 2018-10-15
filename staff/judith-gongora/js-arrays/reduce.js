function reduce(arr, callback, e){
    var total;
    if (e!=undefined){
        total = e;    
    }else{
        total=0;
    }
    for(i=0; i<arr.length; i++){
        total= callback(total,arr[i]);
    }
    return total; 
}