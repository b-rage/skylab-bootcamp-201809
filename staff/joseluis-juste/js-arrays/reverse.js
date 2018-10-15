function reverse(arr){

    var aux;
    var j = 0;

    if ((typeof arr === "string")) throw Error("the argument passed is a string should be array");
    if (( arr instanceof Function)) throw Error("the argument passed is a function should be array");
    if (( typeof arr === "boolean")) throw Error("the argument passed is a boolean should be an array");
    if (typeof arr === "symbol") throw Error("the argument passed is a symbol should be an array");
    if (!(arr instanceof Array)) throw Error("the argument is not an array");
    if ((arr.length == 0)) throw Error("the array is empty");
    
    

    for(var i = arr.length-1;i >= 0;i--){

        aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
        j++;
        if ((arr.length % 2) == 0)
        {
            if(j == arr.length/2) 
                break;
        }
        else 
        {
            if(j == (arr.length % 2) + 1) 
                break;
        }
    }
    return arr;
}