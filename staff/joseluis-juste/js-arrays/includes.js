function includes(arr, toSearch){

    if(arguments.length === 0) throw Error("function must contain two arguments");
    if(arr.length === 0) throw Error("array cannot be empty");
    if(toSearch === undefined) throw Error("item to search is missing");
    if(toSearch instanceof Array) throw Error("item to search cannot be an array");
    
    for(var i = 0; i < arr.length; i++){

        if (arr[i] === toSearch ){
            return true;
        }
    }
    return false;
 }