function fill(arr, value, start, end) {
    
    
    for (var i = ((start)? start: 0) ; i < (end? end: arr.length); i++){
        arr[i] = value;
    }
    return arr;
    
    // var newArr = [];
    
    // if(end && start){
    //     for(i=0;i<start; i++){
    //         newArr[i] = arr[i];
    //     }
    //     for(var x=start; x<end; x++){
    //         newArr[x] = value;
    //     }
    // }else if(!end && start){
    //     for(i=0;i<start; i++){
    //         newArr[i] = arr[i];
    //     }
    //     for(var x=start; x<arr.length; x++){
    //         newArr[x] = value;
    //     } 
    // }else{
    //     for(i=0;i<arr.length; i++){
    //         newArr[i] = value;
    //     }
    // }
    // return newArr;
}