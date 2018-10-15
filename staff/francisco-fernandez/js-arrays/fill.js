function fill (arr,arg1,arg2,arg3){

    if(!(arr instanceof Array))throw Error (arr+' is not valid');

    if(arguments.length===4){
    for(var i = arg2; i < arg3; i++){
        arr[i]=arg1;
    }
    return arr;
    }
    if(arguments.length===3){
        for(var i = arg2; i < arr.length; i++){
            arr[i]=arg1;
        }
        return arr;
    }
    if(arguments.length===2){
        for(var i = 0; i < arr.length; i++){
            arr[i]=arg1;
        }
        return arr;
    }
}