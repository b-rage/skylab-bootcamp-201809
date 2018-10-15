function indexOf(arr, search){

    var output = -1;

    if ([].some.call(arguments, x => {return x === undefined})) throw Error("one of the arguments is undefined");

    if (!(arr instanceof Array))throw Error("first parameter should be an array!");

    for(var i = 0;i < arguments.length; i++){

        if ((!arguments[i].length)){

            throw Error("one argument is empty");
            
        }


    }


    
    for(var i = 0; i < arr.length; i++){

        if (arr[i] === search ){
            output = i;
            break;
        }
    }
    return output;
}